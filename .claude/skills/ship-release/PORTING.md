# Porting the release + AI-testing workflow to a new project (app OR web)

Generic checklist — no app names, no platform assumptions. Do this once per project;
after that, every Claude session in that repo runs the same pipeline
(`/ship-release`, `/ai-testing-live`).

## 1. Discord (owner, ~5 min) — same for every platform

- Create TWO **Forum** channels in the project's server: `releases` and `ai-testing`
  (forum type is required — webhooks open one thread per release / per testing round;
  a plain text channel returns 400 on `thread_name`).
- Create a webhook for each (Channel settings → Integrations → Webhooks) and put both
  in the repo-root `.env`:

  ```
  DISCORD_RELEASE_WEBHOOK=...
  DISCORD_TESTING_WEBHOOK=...
  ```

  Committed `.env` is the convention for private repos (any collaborator/agent works
  without setup). If the repo ever goes public: rotate + move to real secrets.

- Verify each webhook with a test post (set APP and WEBHOOK first):

  ```bash
  curl -sf -F 'payload_json={"thread_name":"'"$APP"' · channel test","content":"**Channel connected** for '"$APP"'."};type=application/json' "$WEBHOOK?wait=true"
  ```

- Naming rule everywhere: **thread names start with the app name** —
  `<App Name> v<VERSION>` for releases, `<App Name> · Round <N> — <feature>` for
  testing rounds. One server can host many projects; threads must be identifiable
  from the list alone.

## 2. Skills (copy 2 folders) — same for every platform

Copy from a project that already has the flow:

- `.claude/skills/ai-testing-live/` — generic, copy as-is. Only the *evidence source*
  differs per platform (see step 4).
- `.claude/skills/ship-release/` — copy, then adapt: the app name in the post
  template, what a "release artifact" is (step 3), and any repo-specific paths.

## 3. The release mechanism — per platform

Whatever the platform, the shape is the same: **one command/workflow that takes a
version, produces the release, and leaves something verifiable** (a tag + artifact,
or a live URL). The Discord thread then announces it.

**Native app (Android example):**
- CI `workflow_dispatch` with one input `version_name` (bare number, no `v`): bumps
  versionCode, builds a SIGNED build (APK/AAB), creates a GitHub Release tagged
  `v<version>` with the artifacts attached.
- Signing is per-app — NEVER reuse another app's keystore. Keystore lives outside the
  repo; CI gets it via secrets (`..._KEYSTORE_BASE64`, `_PASSWORD`, `_KEY_ALIAS`,
  `_KEY_PASSWORD`); local builds use a gitignored `keystore.properties`; the build
  FAILS if neither exists so an unsigned/debug-signed release is impossible.
- Release thread carries the **download link** + install/upgrade notes.

**Web app:**
- Same single entry point: a deploy workflow (or `workflow_dispatch` with
  `version_name`) that builds and deploys to production hosting, and tags the repo
  `v<version>` (a GitHub Release is still worth creating — it is the changelog).
- "Verify the release" = the LIVE URL serves the new version (check a version marker:
  a `/version` endpoint, a build hash in the HTML, or a footer version string — add
  one if the project has none, otherwise verification is guesswork).
- Release thread carries the **live URL** + what changed. No install notes needed —
  but DO note anything users must do (hard refresh, re-login, cleared data).

## 4. The AI-testing round — per platform

Same flow either way (thread per round, one message per case with evidence attached,
failures posted immediately, summary, **HARD GATE: no release until a human ✅**).
Only the evidence source differs:

- **App:** real device or emulator over adb — screenshots (`screencap`) and short
  screen recordings (`screenrecord`) for anything with motion.
- **Web:** a real browser — screenshots and short recordings/GIFs (Playwright
  screenshots, OS screen recording, or DevTools device-mode captures). Test at
  minimum one desktop and one mobile viewport; say which viewport each capture is.

## 5. The pipeline, end to end (what "done" looks like)

feature branch → tests + **testing round live-posted to `ai-testing`** (thread per
round, evidence per case, summary) → **HARD GATE: human ✅ on the round** → PR →
merge → release build/deploy → verify (tag + artifact, or live URL serving the new
version) → **release thread in `releases`** (`<App Name> v<VERSION>`: what's new,
platform-appropriate link — download or live URL).

## Fastest way to execute this checklist

Open a Claude session in the NEW repo and say: *"Port the release + AI-testing
workflow from <path-to-a-repo-that-has-it> — follow its
`.claude/skills/ship-release/PORTING.md`; this project is <app|web>."* Steps 2–3 are
mechanical; only Discord (step 1) and signing-key custody (native apps, step 3) need
the owner.
