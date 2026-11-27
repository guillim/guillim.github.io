/**
 * Standalone repro for Google: Gemini on Vertex AI repeats one character to the output limit
 * after a number, under responseSchema without propertyOrdering. Needs only @google/genai,
 * application-default credentials and GOOGLE_CLOUD_PROJECT.
 *
 *   tsx google-repro.ts request.json --tries 5              the bug
 *   tsx google-repro.ts request.json --tries 5 --ordered    control: declared order as propertyOrdering
 *   tsx google-repro.ts request.json --print-request        the exact request, no call
 */
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

type Json = Record<string, unknown>;
type Req = {
  system: string;
  user: string;
  schema: Json;
  thinking?: string;
  temperature?: number;
  maxTokens?: number;
};
const arg = (name: string) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
};
const has = (name: string) => process.argv.includes(`--${name}`);

/** Control: every object lists its properties in declared order. */
function withOrder(o: unknown): unknown {
  if (o === null || typeof o !== "object") return o;
  if (Array.isArray(o)) return o.map(withOrder);
  const r: Json = {};
  for (const [k, v] of Object.entries(o as Json)) r[k] = withOrder(v);
  if (r.type === "object" && r.properties)
    r.propertyOrdering = Object.keys(r.properties as Json);
  return r;
}

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error("usage: google-repro.ts <request.json> [--tries n] [--ordered]");
  const req = JSON.parse(readFileSync(file, "utf8")) as Req;
  const model = arg("model") ?? "gemini-3.1-pro-preview";
  const thinking = (arg("thinking") ?? req.thinking ?? "medium").toUpperCase() as keyof typeof ThinkingLevel;
  const request = {
    model,
    contents: req.user,
    config: {
      systemInstruction: req.system,
      responseMimeType: "application/json",
      responseSchema: has("ordered") ? withOrder(req.schema) : req.schema,
      temperature: req.temperature ?? 0.1,
      maxOutputTokens: Number(arg("max-tokens") ?? req.maxTokens ?? 4000),
      thinkingConfig: {
        thinkingLevel: ThinkingLevel[thinking],
        ...(has("thoughts") ? { includeThoughts: true } : {}),
      },
    },
  };
  if (has("print-request")) {
    console.log(JSON.stringify(request, null, 2));
    return;
  }
  const project =
    process.env.GOOGLE_CLOUD_PROJECT ??
    process.env.VERTEX_PROJECT_ID ??
    process.env.NEXT_PUBLIC_GCP_PROJECT_ID;
  if (!project) throw new Error("set GOOGLE_CLOUD_PROJECT");
  const ai = new GoogleGenAI({ vertexai: true, project, location: arg("location") ?? "global" });
  const tries = Number(arg("tries") ?? 5);
  console.log(`model=${model} location=${arg("location") ?? "global"} ordered=${has("ordered")} tries=${tries}`);

  let looped = 0;
  let complete = 0;
  for (let i = 1; i <= tries; i++) {
    // One at a time: parallel tries hit the per-minute token quota.
    let response;
    let text = "";
    if (has("stream")) {
      // Live view: the reply is printed as it is written, so the repeated character piles up on screen.
      console.log(`\n=== try ${i} ===`);
      for await (const chunk of await ai.models.generateContentStream(request)) {
        response = chunk;
        for (const p of chunk.candidates?.[0]?.content?.parts ?? []) {
          if (p.thought || !p.text) continue;
          text += p.text;
          process.stdout.write(p.text);
        }
      }
      process.stdout.write("\n");
    } else {
      response = await ai.models.generateContent(request);
      text = (response.candidates?.[0]?.content?.parts ?? [])
        .filter((p) => !p.thought)
        .map((p) => p.text ?? "")
        .join("");
    }
    if (!response) throw new Error("no response");
    const cand = response.candidates?.[0];
    let run = 0;
    let best = 0;
    let bestChar = "";
    let bestEnd = 0;
    let prev = "";
    [...text].forEach((ch, at) => {
      run = ch === prev ? run + 1 : 1;
      prev = ch;
      if (run > best) [best, bestChar, bestEnd] = [run, ch, at];
    });
    const isLoop = best >= 200;
    if (isLoop) looped++;
    const u = response.usageMetadata;
    console.log(
      JSON.stringify({
        try: i,
        looped: isLoop,
        finishReason: cand?.finishReason,
        responseId: response.responseId,
        promptTokens: u?.promptTokenCount,
        outputTokens: u?.candidatesTokenCount,
        thoughtTokens: u?.thoughtsTokenCount,
        chars: text.length,
        longestRun: `${best} x ${JSON.stringify(bestChar)}`,
      }),
    );
    if (has("thoughts"))
      console.log(
        "--- thought summary ---\n" +
          (cand?.content?.parts ?? []).filter((p) => p.thought).map((p) => p.text ?? "").join("\n") +
          "\n--- end ---",
      );
    // What was written just before the run started (or the end of a healthy reply).
    const start = isLoop ? bestEnd - best + 1 : text.length;
    // Structure only: which keys each row carries, in the order written, and whether maxPct 35 is there.
    let keys = "unparsable";
    let max35 = false;
    try {
      const rows = ((JSON.parse(text) as Json).constituents ?? []) as Json[];
      keys = rows.map((r) => Object.keys(r).filter((k) => !["name", "cas", "sources"].includes(k)).join(",")).join(" | ");
      max35 = rows.some((r) => r.maxPct === 35);
      if (max35) complete++;
    } catch {
      /* cut or empty reply */
    }
    console.log(`    rows: ${keys}   maxPct35=${max35}`);
    if (arg("save")) {
      mkdirSync(arg("save")!, { recursive: true });
      writeFileSync(
        `${arg("save")}/${model}-${has("ordered") ? "ordered-" : ""}${i}-${response.responseId ?? Date.now()}.json`,
        JSON.stringify({ model, finishReason: cand?.finishReason, usage: u, text }, null, 1),
      );
    }
    if (!has("stream"))
      console.log("    …" + text.slice(Math.max(0, start - 160), start + (isLoop ? 12 : 0)).replace(/\s+/g, " "));
    if (isLoop && has("stop-on-loop")) {
      console.log(`looped on try ${i}`);
      return;
    }
  }
  console.log(`${model}: looped ${looped} of ${tries}, maxPct 35 written in ${complete} of ${tries}`);
}

main().catch((e) => {
  console.error("FAILED:", e instanceof Error ? e.message.slice(0, 800) : e);
  process.exit(1);
});
