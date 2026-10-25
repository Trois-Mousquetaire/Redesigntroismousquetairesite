---
name: ai-testing-live
description: Live-post AI browser-testing rounds (screenshots + short recordings + round record) to a dedicated Discord channel so a human tester can audit the round BEFORE the release ships. Use during every browser testing round.
---

# AI testing — live Discord audit trail (web)

**Why this exists:** AI testing verifies the site against the spec it was given.
Humans catch what lives outside the spec — feel, motion, "this looks off",
unknown unknowns. This flow shows the human tester exactly what the AI tested,
*while* it is tested, so gaps are caught before the release — not after.

This project is a **website** (troismousquetaires.com): evidence comes from a
real browser, not adb.

## One-time setup (per project, done by the project owner)

1. Create a **Forum channel** named `ai-testing` in the project's Discord server
   (forum type matters: webhooks can open one thread per round there).
2. Channel settings → Integrations → Webhooks → **New Webhook** → copy the URL.
3. Put it in the repo-root `.env` as `DISCORD_TESTING_WEBHOOK=...` — **this repo
   is PUBLIC, so `.env` is GITIGNORED; never commit it** (see `.env.example`).

## The flow (every testing round)

Rounds are sequential per project (`round-1`, `round-2`, ...) and each round
gets a record file committed under `ai-testing/` in the repo (e.g.
`ai-testing/round-3.md` — the record is the source of truth; the thread is its
live mirror).

### 1. Open the round thread

First post creates the thread (forum channels take `thread_name`). **The thread
name ALWAYS starts with the app name** — the tester follows several projects in
one place:

```bash
source .env
curl -sf -F 'payload_json={"thread_name":"Trois Mousquetaires Site · Round <N> — <feature> (v<version> candidate)","content":"**Trois Mousquetaires Site — Round <N> starting.** Browser: <browser + viewport(s)>. Build: <branch / preview URL or localhost>. Plan: <one line of what will be verified>."};type=application/json' \
  "$DISCORD_TESTING_WEBHOOK?wait=true"
```

**Capture the thread id** from the response JSON (`channel_id` of the created
message). Every later post targets it with `?thread_id=<id>`.

Tip: Cloudflare Pages builds a **preview URL for every branch** — test against
the preview deployment of the branch under test when possible (it's the real
hosting stack), and name it in the opening post.

### 2. Post each case as it is tested — one message per case

Screenshot attached, one line of caption, **and say which viewport the capture
is** (e.g. "desktop 1440×900" / "mobile 390×844"). Test at minimum one desktop
and one mobile viewport per round. Post PASS and FAIL alike.

```bash
curl -sf -F 'payload_json={"content":"**Case 4** — contact form success toast, mobile 390x844 ✅"};type=application/json' \
  -F "files[0]=@r3-04-contact-toast-mobile.png" \
  "$DISCORD_TESTING_WEBHOOK?thread_id=<id>&wait=true"
```

Capture sources: Playwright screenshots/video, OS screen recording, or DevTools
device-mode captures — whatever produces honest evidence fastest.

### 3. Record motion, don't just screenshot it

Anything with animation, scrolling, transitions, carousels, toasts, or form
flows gets a short clip/GIF — this is precisely the class of issue screenshots
hide. Post it like a screenshot (`files[0]=@r3-05-....mp4`). Keep clips under
~25 MB.

### 4. Anything odd gets posted even if it "passes"

If something looks slightly off but is technically per spec — post it with a
caption saying so ("passes vs design, but flagging the spacing — designer eyes
wanted"). The misses this flow exists to catch are exactly the ones the AI would
otherwise rationalise away.

### 5. Close the round with the summary

Final post in the thread: the case table (PASS/FAIL per case + viewport),
incidental findings, and the path of the committed round record. Then commit the
round record to `ai-testing/` as usual.

### 6. THE GATE — do not release yet

**Default: hard gate.** After the summary post, STOP. The release (ship-release
skill) runs only after the project owner or tester gives a go-ahead (a reply in
the thread relayed by the owner, or the owner saying "ship it" in the session).
Post this as the last line of the summary: *"Holding release until a human ✅ on
this round."*

The owner can explicitly downgrade to a soft gate for a given round ("post and
proceed") — their call per round, never the default.

## Rules

- **All testing traffic goes to the round thread. Nothing anywhere else.** The
  release channel stays release-only.
- Never post secrets, tokens, or API internals beyond what the site itself shows
  on screen; crop or retake if personal content (other tabs, bookmarks, desktop)
  leaked into a frame.
- Screenshots are evidence, not decoration: caption every file with what it
  proves and the viewport it was taken at.
- A FAILED case is posted the moment it fails, not saved for the summary.
- The contact form has a real backend (tm-worker → email): when testing it
  end-to-end, say so in the caption — the owner will receive an actual email.
- If `DISCORD_TESTING_WEBHOOK` is missing, say so and run the round without
  posting (record file still gets written) — do not block testing on the
  webhook, do not ask for the URL in chat.

## What this flow does NOT change

- The round record file in `ai-testing/` stays the source of truth.
- Release announcement still goes through ship-release afterwards, unchanged.
- Human bug reports keep working exactly as before — this flow shortens that
  loop, it does not replace it.
