# `assetlinks.json` — Android App Links verification

This file grants `com.troismousquetaires.subsettle` permission to handle
`https://troismousquetaires.com/...` links as Android App Links (so tapping
an invite link opens the app directly instead of the browser).

It currently lists one fingerprint: the SHA-256 of the app's **upload key**.
That's enough to verify links from a locally-signed / CI build, but **Google
Play re-signs the app with its own key** before it reaches users
(Play App Signing). Until Play's signing-key fingerprint is added here,
App Links verification will fail for anyone who installed the app from the
Play Store — they'll still land on the `/invite/:token` fallback page, just
never get the direct-open behavior.

## To add Play's signing key (do this after production release)

1. In Play Console → your app → **Setup → App integrity → App signing**,
   copy the **SHA-256 certificate fingerprint** under "App signing key
   certificate".
2. Add it as a **second string** in the `sha256_cert_fingerprints` array in
   `assetlinks.json` (keep the existing upload-key entry — both need to be
   present; do not replace it):

   ```json
   "sha256_cert_fingerprints": [
     "B4:AC:A0:99:9D:CF:0E:2B:04:A9:E2:B6:72:60:B2:DD:C6:53:6C:11:F9:0D:46:75:11:2E:76:7F:F7:52:7F:DB",
     "<PLAY_SIGNING_KEY_SHA256_HERE>"
   ]
   ```
3. Redeploy the site, then confirm with Google's Statement List tool:
   `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://troismousquetaires.com&relation=delegate_permission/common.handle_all_urls`
   (look for the package name and both fingerprints in the response).

**Never add the debug keystore's fingerprint.** The React Native template
debug key is shared by countless apps industry-wide, so listing it here
would let any of them claim these links too.
