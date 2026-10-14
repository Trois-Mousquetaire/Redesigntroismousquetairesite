---
name: ship-release
description: Push the current branch, open a PR, auto-merge it, run the website release workflow (version stamp + Cloudflare Pages deploy + live verification), and post release notes to Discord. Use when the user says "ship this", "release version X", "push and release", or asks to publish a new site version end-to-end.
---

# Ship release — Trois Mousquetaires website

Fully automated push → PR → merge → release → Discord announce pipeline for the
Trois Mousquetaires website (troismousquetaires.com). Runs end-to-end without
pausing for confirmation once invoked — the user has explicitly asked for this
skill to be non-interactive. Still, narrate each step as you do it, and stop
immediately if any step fails rather than pushing forward on a broken state.

**Platform note:** this is a WEB project. There is no build artifact to download —
the "release" is the live URL serving a new version, verified via
`https://troismousquetaires.com/version.json`. Deploys happen automatically:
Cloudflare Pages builds every push to `main` (project `troismousquetaires`).

## Preconditions — check before starting

1. `git status` — the working tree must be committed. If there are uncommitted
   changes, ask the user whether to commit them first (do not silently commit on
   their behalf unless they've already asked you to commit in this conversation).
2. `git branch --show-current` — this flow is for a feature/fix branch → `main`.
   If the changes to ship are Figma design work, they arrive via the separate
   `figma` → `main` promotion flow (merge commits, figma branch kept) — run that
   first if a promotion is pending, then release from `main`.
3. **AI-testing gate:** if the changes are user-facing and an ai-testing round
   was run (see `ai-testing-live` skill), the round must have a human ✅ before
   this pipeline runs. Do not release past an open gate.
4. **Auto-determine the version** — do not ask the user unless they've already
   stated one: read `public/version.json`, take `version` (e.g. `1.2`), bump the
   minor number by 1 (`1.2` → `1.3`). If the user explicitly names a version
   ("ship 2.0"), use that instead.

## Step 1 — Push the branch

```
git push -u origin HEAD
```

If the push is rejected (diverged), stop and surface the error — do not force-push.

## Step 2 — Open the PR

This repo's convention: **single-agenda PRs**. Title is a short imperative
summary; body has an `## Agenda` section ("One thing only: ...") and ends with
the Claude Code attribution line. Write the body to a temp file and use
`--body-file` (PowerShell 5.1 mangles embedded quotes in inline args).

```
gh pr create --base main --title "<summary>" --body-file <tempfile>
```

## Step 3 — Auto-merge

Feature/fix branches into `main` are **squash-merged**:

```
gh pr merge <PR_NUMBER> --squash --delete-branch
```

(Only `figma` → `main` promotions use `--merge`; never squash those, and never
delete the `figma` branch.)

## Step 4 — Trigger the release workflow

`.github/workflows/release.yml` is **tag-triggered** (the repo's default branch
is `figma`, owned by Figma Make, so `workflow_dispatch` is not reliably
registered — do NOT use `gh workflow run`). Push a `v<version>` tag on `main`:

```
git fetch origin
git tag v<VERSION> origin/main
git push origin v<VERSION>
```

The workflow runs from the tagged commit: stamps `public/version.json`, commits
to `main` (Cloudflare Pages then builds and deploys), polls the LIVE site until
`version.json` serves the new version, and creates the GitHub Release with
generated notes.

## Step 5 — Wait for the workflow

The whole thing (Pages build included) typically takes **2–6 minutes**. Poll:

```
gh run list --workflow=release.yml --limit 1 --json databaseId,status,conclusion
gh run watch <RUN_ID> --exit-status
```

## Step 6 — Verify the release

The workflow already verified the live URL, but confirm independently:

```
gh release view v<VERSION> --json tagName,url
curl -s "https://troismousquetaires.com/version.json?cb=<random>"
```

The live `version.json` must show the new version. If the run failed, stop,
report which step failed, and do NOT post a release announcement.

## Step 7 — Post release notes to Discord

The webhook lives in the repo-root `.env` as `DISCORD_RELEASE_WEBHOOK=...`.
**This repo is PUBLIC, so `.env` is GITIGNORED — never commit it.** If `.env`
is missing or the variable is empty, stop and tell the user to fill it from
`.env.example` — don't skip the announcement silently, and don't ask them to
paste the URL in chat.

The release channel is a Discord **forum** channel — every post MUST carry a
`thread_name` (one thread per release). Thread name: `Trois Mousquetaires Site v<VERSION>`
(app name first — the server hosts multiple projects). Use bash for the curl
(single-quoted payload survives; PowerShell mangles the quotes):

```bash
source .env
curl -sf -F 'payload_json={"thread_name":"Trois Mousquetaires Site vVERSION","content":"**Trois Mousquetaires Site vVERSION released**\n\nWhat'"'"'s new:\n- <bullet 1>\n- <bullet 2>\n\nLive: https://troismousquetaires.com"};type=application/json' \
  "$DISCORD_RELEASE_WEBHOOK?wait=true"
```

Substitute the real version and bullets (derive from the PRs merged since the
last release tag: `git log v<PREV>..main --oneline --merges` plus squashed PR
titles). Being a website, no install notes — but DO note anything users must do
(hard refresh for cached assets, cleared data).

## Failure handling

- Any step fails → stop the pipeline immediately. No Discord post for a release
  that doesn't exist; no release trigger if the merge failed.
- Report which step failed with the actual command output.
- Never retry a failed push/merge/workflow-trigger in a loop.

## What this skill deliberately does NOT do

- Does not force-push, bypass branch protection, or skip CI checks.
- Does not touch the `figma` branch or the tm-worker repo (the Worker has its
  own deploy pipeline on merge to its `main`).
