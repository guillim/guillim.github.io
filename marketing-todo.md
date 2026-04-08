# Paul — Marketing TODO

Based on how Postico gained its first 100 paying users. Steps in order of priority.

---

## 1. Build a free open-source companion tool that feeds Paul

Postico's #1 growth engine is **Postgres.app** — a free, open-source tool to run PostgreSQL on Mac (10K downloads/month). It's linked from the official postgresql.org download page. Every developer who installs Postgres.app discovers Postico naturally.

**For Paul**: build or sponsor a small open-source utility (a pg connection string parser, a schema visualizer, a CLI query tool) that developers install first, and that points them to Paul.

- [ ] Brainstorm 3 candidate companion tools
- [ ] Pick one and ship an MVP
- [ ] Add a subtle "works great with Paul" mention

---

## 2. Get listed on official PostgreSQL ecosystem pages

Jakob announced Postico on the PostgreSQL mailing list and got it listed on the PostgreSQL wiki's client tools page. This is a permanent, high-trust distribution channel with zero cost.

- [ ] Submit Paul to the PostgreSQL wiki tools page
- [ ] Post an introduction on pgsql-general mailing list
- [ ] Get listed on postgresql.org/download or related ecosystem pages

---

## 3. Launch on Hacker News with a genuine, technical story

Postico's beta launch on HN (Feb 2015) got 178 points, 59 comments. Postico 2 got 287 points, 127 comments. Jakob engaged authentically in comments, honestly acknowledging limitations.

- [ ] Write a "Show HN" post focused on the technical story (AI-first PostgreSQL client, <20MB, 2-second startup)
- [ ] Be honest, respond to every comment
- [ ] Prepare a concise landing page optimized for HN traffic

---

## 4. Ship a generous free trial with no time limit -> SKIP

Postico has an unlimited free trial — some features are restricted, but there's no 14-day wall. This removes all friction and lets word-of-mouth compound.

Paul is already free with no account and no tracking. This is an even stronger position.

- [ ] Keep "no account, no tracking, completely free" as long as possible
- [ ] Decide on future monetization model (freemium? paid pro tier?) but don't rush it
- [ ] Make sure the free experience is complete enough that people recommend it

---

## 5. Deliberately narrow scope — one tool, one job -> SKIP

Jakob's mantra: "I'm a single dev; I can't compete with Navicat on features. But I can make an app that does a limited set of things really well." Postico is Mac-only, PostgreSQL-only, no DBA features.

- [ ] Don't add MySQL support
- [ ] Don't go cross-platform
- [ ] Don't add migration/DBA tools
- [ ] Own "the fastest, simplest way to query Postgres on Mac"

---

## 6. Define 2-3 specific user personas and build for them -> SKIP

Jakob publicly documents his personas: "Kyle" (backend dev who barely knows SQL) and "Karen" (data analyst who loves SQL). This clarity drives every feature decision.

- [ ] Write up Paul's personas with names and stories
- [ ] Reference them in every feature decision
- [ ] Candidates: on-call engineer, support team member, startup founder

---

## 7. Become the default recommendation in community threads

Postico became the go-to answer in every "best PostgreSQL GUI for Mac?" thread — not through astroturfing, but because real users loved it. The goal: every time someone asks "best PostgreSQL GUI?", Paul shows up.

### 7a. Platforms & places to monitor

**Reddit**
- [ ] r/PostgreSQL — main Postgres community, frequent "what client do you use?" threads
- [ ] r/database — broader DB discussions, tool recommendations
- [ ] r/macapps — macOS app recommendations, very receptive to lightweight native apps
- [ ] r/selfhosted — self-hosters running their own Postgres, need GUI tools
- [ ] r/devtools — developer tool discussions
- [ ] r/node / r/django / r/rails — backend devs who use Postgres daily
- [ ] r/dataengineering — data teams querying Postgres

**Hacker News**
- [ ] "Ask HN" threads about database tools / Postgres clients
- [ ] Comments on any PostgreSQL-related Show HN posts
- [ ] Monthly "What tools are you using?" threads

**Stack Overflow**
- [ ] Tag: `postgresql` + `gui`
- [ ] Tag: `postgresql-client`
- [ ] Tag: `database-tool`
- [ ] Questions like "best postgresql gui for mac"

**Twitter / X**
- [ ] Search: `"postgresql client"`, `"postgres gui"`, `"best database tool mac"`
- [ ] Engage with Postgres community accounts, Supabase/Neon content

**Discord & Slack — join and post in #showcase channels**

Postgres-adjacent (highest priority):
- [ ] Supabase Discord (discord.supabase.com) — ~300k members. Post in `#showcase`, participate in `#postgres`
- [ ] Neon Discord (neon.tech/discord) — ~25k members. Post in `#showcase` or `#general`
- [ ] PostgreSQL Slack (postgressql.slack.com) — ~10k members. Channels: `#general`, `#tools`. Be a contributor first, promote second
- [ ] Prisma Discord (pris.ly/discord) — ~70k members. Post in `#showcase`
- [ ] Drizzle Discord — ~20k members, fast-growing. Post in `#showcase`
- [ ] Railway Discord (discord.gg/railway) — ~50k members. Post in `#showcase`. Users deploy Postgres frequently

Forums (Discourse-style):
- [ ] Fly.io community (community.fly.io) — post in "Show and Tell" or "Tools & Libraries"
- [ ] Render community (community.render.com) — post in "Show & Tell"

Maker / indie communities:
- [ ] IndieHackers (indiehackers.com) — create a product page, post in "Show IH"
- [ ] WIP.co — log your build progress, community follows along
- [ ] r/SideProject — built for sharing what you've made

### 7b. Set up alerts (30 min one-time setup)

- [ ] **F5Bot** (free) — emails you when keywords appear on Reddit & HN. Set up alerts for:
  - `postgresql client`
  - `postgres gui`
  - `database tool mac`
  - `alternative to pgadmin`
  - `alternative to dbeaver`
  - `alternative to postico`
  - `alternative to tableplus`
  - `alternative to datagrip`
- [ ] **Google Alerts** — set up for:
  - `"postgresql client" mac`
  - `"postgres gui"`
  - `"best database tool" postgresql`
- [ ] Bookmark all subreddits above and check weekly

### 7c. How to answer (template)

**Rule: answer the question first, mention Paul second, always disclose you're the maker.**

Bad: *"Try Paul! It's free and AI-powered!"*

Good: *"I've been using Paul for this — it's a lightweight Mac client that opens in 2 seconds. I built it because I got tired of waiting for DBeaver to start every time I needed to check a row. Read-only by default so I don't accidentally mess up prod. Free, no account: [link]. Full disclosure: I'm the maker."*

### 7d. Seed posts (write yourself — genuine, not spam)

- [ ] r/PostgreSQL: "What's your PostgreSQL client setup in 2026?" (share yours, invite others)
- [ ] r/macapps: "Lightweight alternatives to DBeaver/DataGrip for Postgres?"
- [ ] r/devtools: "How do you explore production databases safely?"
- [ ] Twitter/X: share a short demo video of Paul opening in 2 seconds vs DBeaver cold start

---

## 8. Use a predecessor product as a migration funnel

Before Postico, Jakob sold PG Commander on the Mac App Store. When Postico launched, he made PG Commander free and offered upgrade discounts. The old app became a funnel.

- [ ] Identify any existing tool, side project, or beta users to leverage
- [ ] Offer early access or migration path to existing contacts

---

## 9. Present at niche technical conferences

Jakob presented at PGConf, sharing his business model and philosophy openly. This built credibility in the exact community that buys his product.

- [ ] Submit talks to PGConf, local PostgreSQL meetups, indie dev conferences
- [ ] Talk idea: "Building an AI-first database client as a solo dev"
- [ ] Share real numbers and honest learnings

---

## 10. Play the long game — compound growth over viral moments

Jakob has worked on Postico for 11+ years. His philosophy: "The secret is growth — as long as new users discover the app every day, revenue compounds." No ads, no influencers, no growth hacks.

- [ ] Optimize for being 1% better every week
- [ ] Ship consistently, build trust over time
- [ ] Don't chase viral moments — compound organic discovery

---

**Core insight**: Postico's strategy is a trust flywheel — free open-source tool builds credibility → credibility earns community placement → community placement drives organic downloads → downloads create word-of-mouth → word-of-mouth compounds over years.
