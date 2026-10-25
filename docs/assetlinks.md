# `public/.well-known/assetlinks.json` — Android App Links verification

This file grants `com.troismousquetaires.subsettle` (the NoGrudge Android app)
permission to handle `https://troismousquetaires.com/invite/...` links as
Android App Links, so tapping an invite link opens the app directly instead of
the browser. Everyone else lands on the `/invite/:token` fallback page.

It lists two SHA-256 fingerprints, and both must stay:

- `DC:48:3D:...:32:F9` — the **Play app-signing key** (Play Console → Setup →
  App integrity → App signing). Play re-signs every build it delivers with this
  key, so this is the one that verifies for Play installs.
- `B4:AC:A0:...:7F:DB` — the **upload key**, which signs locally built and CI
  builds that are sideloaded.

After a deploy, confirm with Google's Statement List tool:
`https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://troismousquetaires.com&relation=delegate_permission/common.handle_all_urls`
(look for the package name and both fingerprints).

The file must be served as `application/json` (pinned in `public/_headers`).
There is no `_redirects`: Cloudflare Pages serves a real static file before its
built-in SPA fallback, so the file only has to exist in the build output.

**Never add the debug keystore's fingerprint.** The React Native template
debug key is shared by countless apps, so listing it would let any of them
claim these links too.
