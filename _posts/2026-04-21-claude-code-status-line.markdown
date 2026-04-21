---
layout: blog
title: "Claude Code Status Line: What It Is and How to Customize It"
date: 2026-04-21 09:00:00 +0100
categories: ai development
comments: true
thumbnail: /assets/img/claude-status-line.png
---

If you use Claude Code in the terminal, you've probably noticed the small line at the bottom of the screen. That's the **status line**. Most people ignore it. I turned mine into a full dashboard.

<img src="/assets/img/claude-status-line.png" alt="Claude Code status line screenshot" width="720"/>

# What is the status line?

The status line is a configurable bar that sits at the bottom of the Claude Code interface. It displays real-time information about your session: the model you're using, your current directory, git branch, context window usage, and more.

By default, it shows basic info. But Claude Code lets you replace it entirely with a custom shell script.

# How it works

In your Claude Code settings (`~/.claude/settings.json`), you can define a `statusLine` field:

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  }
}
```

Claude Code pipes a JSON payload to your script via stdin. This payload contains everything about the current session:

```json
{
  "workspace": { "current_dir": "/Users/you/project" },
  "model": { "display_name": "Claude Opus 4.6" },
  "context_window": { "used_percentage": 42.5 },
  "rate_limits": {
    "five_hour": { "used_percentage": 12.3 },
    "seven_day": { "used_percentage": 5.1 }
  },
  "cost": { "total_cost_usd": 1.47 },
  "session_name": "my-feature",
  "vim": { "mode": "NORMAL" },
  "worktree": { "branch": "feature-x", "name": "wt-feature" },
  "agent": { "name": "Explore" }
}
```

Your script reads this JSON (typically with `jq`), formats it however you want, and outputs a string with ANSI color codes. That string becomes your status line.

# What I display in mine

My status line packs a lot of info into one line:

- **Hostname** (cyan) — which machine I'm on
- **Directory** (green) — shortened with `~`
- **Git branch + status** (yellow) — with symbols for dirty/ahead/behind states:
  - `*` = dirty (uncommitted changes)
  - `△` = ahead of remote
  - `▽` = behind remote
  - `▲` = dirty + ahead
  - `▼` = dirty + behind
  - `⬡` = ahead + behind (diverged)
  - `⬢` = dirty + ahead + behind
- **Git operations** (red) — shows `[merge]`, `[rebase]`, `[cherry-pick]`, `[bisect]` when active
- **Worktree** (teal) — shows the active worktree branch
- **Vim mode** (blue/green) — `[N]` for normal, `[I]` for insert
- **Context window** (color-coded) — green when plenty left, yellow when getting low, red when almost full
- **Rate limits** — 5-hour and 7-day usage percentages, turns red above 80%
- **Session cost** (green) — total USD spent in the current session
- **Model name** (magenta) — which Claude model is active
- **Agent** (orange) — shows when a subagent is running
- **Session name** (dim) — if you named your session

# How to use my status line

### 1. Download the script

Copy the script below and save it as `~/.claude/statusline-command.sh`:

```bash
#!/usr/bin/env bash
# Claude Code statusLine — full dashboard
RESET="\033[m"
CYAN="\033[1;38;5;39m"
WHITE="\033[1;37m"
GREEN="\033[1;38;5;76m"
YELLOW="\033[1;38;5;154m"
RED="\033[1;38;5;9m"
ORANGE="\033[1;38;5;214m"
MAGENTA="\033[1;38;5;177m"
DIM="\033[2m"
BLUE="\033[1;38;5;27m"
TEAL="\033[1;38;5;43m"

input=$(cat)
cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd')
model=$(echo "$input" | jq -r '.model.display_name // ""')
session_name=$(echo "$input" | jq -r '.session_name // empty')
vim_mode=$(echo "$input" | jq -r '.vim.mode // empty')
worktree_branch=$(echo "$input" | jq -r '.worktree.branch // empty')
worktree_name=$(echo "$input" | jq -r '.worktree.name // empty')
agent_name=$(echo "$input" | jq -r '.agent.name // empty')

home="$HOME"
short_cwd="${cwd/#$home/\~}"

# ── Git ─────────────────────────────────────────────────────────────
branch=$(git -C "$cwd" symbolic-ref HEAD 2>/dev/null | sed -e 's/refs\/heads\///')
if [ -z "$branch" ]; then
  branch=$(git -C "$cwd" rev-parse --abbrev-ref HEAD 2>/dev/null)
fi

git_info=""
if [ -n "$branch" ]; then
  dirty=$(git -C "$cwd" status --porcelain 2>/dev/null)
  remote=$(git -C "$cwd" config --get "branch.${branch}.remote" 2>/dev/null || echo "origin")
  remote_branch="$remote/$branch"

  ahead=$(git -C "$cwd" log "${remote_branch}..${branch}" --oneline 2>/dev/null | wc -l | tr -d ' ')
  behind=$(git -C "$cwd" log "${branch}..${remote_branch}" --oneline 2>/dev/null | wc -l | tr -d ' ')

  is_dirty=0; is_ahead=0; is_behind=0
  [ -n "$dirty" ] && is_dirty=1
  [ "$ahead" -gt 0 ] 2>/dev/null && is_ahead=1
  [ "$behind" -gt 0 ] 2>/dev/null && is_behind=1

  if   [ $is_dirty -eq 1 ] && [ $is_ahead -eq 1 ] && [ $is_behind -eq 1 ]; then symbol="⬢"
  elif [ $is_ahead -eq 1 ] && [ $is_behind -eq 1 ]; then symbol="⬡"
  elif [ $is_dirty -eq 1 ] && [ $is_ahead -eq 1 ];  then symbol="▲"
  elif [ $is_ahead -eq 1 ];                          then symbol="△"
  elif [ $is_dirty -eq 1 ] && [ $is_behind -eq 1 ]; then symbol="▼"
  elif [ $is_behind -eq 1 ];                         then symbol="▽"
  elif [ $is_dirty -eq 1 ];                          then symbol="*"
  else                                                    symbol=""
  fi

  git_dir=$(git -C "$cwd" rev-parse --git-dir 2>/dev/null)
  git_progress=""
  if [ -n "$git_dir" ]; then
    [ -f "$git_dir/MERGE_HEAD" ]               && git_progress=" [merge]"
    [ -f "$git_dir/rebase-apply/applying" ]    && git_progress=" [am]"
    [ -d "$git_dir/rebase-apply" ] && [ -z "$git_progress" ] && git_progress=" [rebase]"
    [ -d "$git_dir/rebase-merge" ] && [ -z "$git_progress" ] && git_progress=" [rebase]"
    [ -f "$git_dir/CHERRY_PICK_HEAD" ]         && git_progress=" [cherry-pick]"
    [ -f "$git_dir/BISECT_LOG" ]               && git_progress="${git_progress} [bisect]"
    [ -f "$git_dir/REVERT_HEAD" ]              && git_progress="${git_progress} [revert]"
  fi

  git_info=" ${WHITE}on${RESET} ${YELLOW}${branch}${symbol}${RESET}${RED}${git_progress}${RESET}"
fi

# ── Context window ──────────────────────────────────────────────────
ctx=""
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
if [ -n "$used_pct" ]; then
  remaining=$(echo "$used_pct" | awk '{printf "%d", 100 - $1}')
  if   [ "$remaining" -le 15 ]; then ctx_color="$RED"
  elif [ "$remaining" -le 40 ]; then ctx_color="$YELLOW"
  else                                ctx_color="$GREEN"
  fi
  ctx=" ${DIM}│${RESET} ${ctx_color}${remaining}%% free${RESET}"
fi

# ── Rate limits ─────────────────────────────────────────────────────
rate_parts=""
five_pct=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty')
week_pct=$(echo "$input" | jq -r '.rate_limits.seven_day.used_percentage // empty')
if [ -n "$five_pct" ]; then
  f=$(printf '%.0f' "$five_pct")
  if [ "$f" -ge 80 ]; then rate_parts="${rate_parts}${RED}5h:${f}%${RESET}"
  else rate_parts="${rate_parts}${DIM}5h:${f}%${RESET}"; fi
fi
if [ -n "$week_pct" ]; then
  w=$(printf '%.0f' "$week_pct")
  [ -n "$rate_parts" ] && rate_parts="${rate_parts} "
  if [ "$w" -ge 80 ]; then rate_parts="${rate_parts}${RED}7d:${w}%${RESET}"
  else rate_parts="${rate_parts}${DIM}7d:${w}%${RESET}"; fi
fi
rate_part=""
[ -n "$rate_parts" ] && rate_part=" ${DIM}│${RESET} ${rate_parts}"

# ── Cost ────────────────────────────────────────────────────────────
cost_part=""
total_cost=$(echo "$input" | jq -r '.cost.total_cost_usd // empty')
if [ -n "$total_cost" ]; then
  cost_fmt=$(printf '$%.2f' "$total_cost")
  cost_part=" ${DIM}│${RESET} ${GREEN}${cost_fmt}${RESET}"
fi

# ── Model ───────────────────────────────────────────────────────────
model_part=""
[ -n "$model" ] && model_part=" ${DIM}│${RESET} ${MAGENTA}${model}${RESET}"

# ── Session name ────────────────────────────────────────────────────
session_part=""
[ -n "$session_name" ] && session_part=" ${DIM}│${RESET} ${DIM}\"${session_name}\"${RESET}"

# ── Vim mode ────────────────────────────────────────────────────────
vim_part=""
if [ -n "$vim_mode" ]; then
  if [ "$vim_mode" = "NORMAL" ]; then
    vim_part=" ${BLUE}[N]${RESET}"
  else
    vim_part=" ${GREEN}[I]${RESET}"
  fi
fi

# ── Worktree ────────────────────────────────────────────────────────
worktree_part=""
if [ -n "$worktree_name" ]; then
  wt_label="${worktree_name}"
  [ -n "$worktree_branch" ] && wt_label="${worktree_branch}"
  worktree_part=" ${DIM}│${RESET} ${TEAL}wt:${wt_label}${RESET}"
fi

# ── Agent ───────────────────────────────────────────────────────────
agent_part=""
[ -n "$agent_name" ] && agent_part=" ${DIM}│${RESET} ${ORANGE}agent:${agent_name}${RESET}"

printf "${CYAN}$(hostname -s)${RESET} ${WHITE}in${RESET} ${GREEN}${short_cwd}${RESET}${git_info}${worktree_part}${vim_part}${ctx}${rate_part}${cost_part}${model_part}${agent_part}${session_part}"
```

### 2. Make it executable

```bash
chmod +x ~/.claude/statusline-command.sh
```

### 3. Add it to your settings

Add this to your `~/.claude/settings.json`:

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  }
}
```

### 4. Restart Claude Code

The status line loads on startup. Just quit and reopen Claude Code, and you'll see it.

# Prerequisite

You need `jq` installed since the script parses JSON input. On macOS:

```bash
brew install jq
```

# Customizing further

The script is plain bash. Want to remove sections? Delete the block. Want to change colors? Swap the ANSI codes. Want to add something new? Parse it from the JSON input and append it to the printf.

Some ideas:
- **Battery level** — `pmset -g batt` on macOS
- **Docker status** — show running containers count
- **Node/Python version** — display the active runtime version
- **TODO count** — grep your codebase for TODO comments

The status line refreshes automatically, so any dynamic data you add will stay current.

# Why bother?

Context. When you're deep in a Claude Code session, you don't want to switch terminals to check if you're on the right branch, how much context window you have left, or how much you've spent. The status line puts all of that one glance away.

The rate limit indicator alone has saved me from hitting walls mid-task. And the context window percentage tells me when it's time to start a fresh session before Claude starts forgetting things.

### Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [ANSI Color Codes Reference](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
