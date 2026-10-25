import { useMemo } from "react";
import { useParams } from "react-router";
import { Users, Download, AlertTriangle } from "lucide-react";
import { Seo } from "../components/Seo";

/**
 * Public landing page for a group-invite link shared from the NoGrudge
 * app: `https://troismousquetaires.com/invite/<token>`.
 *
 * On a device with the app installed, Android App Links (see
 * public/.well-known/assetlinks.json) open the app directly for this URL —
 * this page never even renders. It exists as the fallback for everyone
 * else: no app installed, iOS, desktop, or App Links not yet verified. It
 * never calls the NoGrudge API — the token is only ever handed to the app
 * or to the Play Store fallback URL, never resolved here.
 */

const ANDROID_PACKAGE = "com.troismousquetaires.subsettle";
const PLAY_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

// Invitation tokens are GUIDs. Reject anything else rather than handing
// unvalidated input to the app or an intent URL.
const GUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isAndroid(): boolean {
  if (typeof navigator === "undefined") return false;
  return /android/i.test(navigator.userAgent);
}

/**
 * The intent:// form is the robust way to open an Android app with a
 * Play Store fallback baked in: if the app isn't installed, Android itself
 * routes to `browser_fallback_url` instead of the page having to guess.
 */
function buildAndroidIntentUrl(token: string): string {
  const fallback = encodeURIComponent(PLAY_URL);
  return `intent://invite/${token}#Intent;scheme=subsettle;package=${ANDROID_PACKAGE};S.browser_fallback_url=${fallback};end`;
}

function buildCustomSchemeUrl(token: string): string {
  return `subsettle://invite/${token}`;
}

export default function Invite() {
  const { token = "" } = useParams<{ token: string }>();
  const isValid = useMemo(() => GUID_RE.test(token), [token]);
  const openUrl = useMemo(
    () => (isAndroid() ? buildAndroidIntentUrl(token) : buildCustomSchemeUrl(token)),
    [token],
  );

  return (
    <>
      <Seo
        title="You're invited to NoGrudge"
        description="Open your group invite in the NoGrudge app."
        path={`/invite/${token}`}
      />
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-[560px] mx-auto px-6 py-24 text-center">
          {isValid ? (
            <>
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-[#00A82D]/10 border border-[#00A82D]/20 flex items-center justify-center">
                <Users size={28} className="text-[#00A82D]" />
              </div>
              <h1
                className="text-[28px] md:text-[36px] tracking-[-0.02em] text-white leading-[1.15] mb-4"
                style={{ fontWeight: 600 }}
              >
                You've been invited to a group on NoGrudge
              </h1>
              <p className="text-[15px] text-[#8a8f98] leading-relaxed mb-10">
                Open the invite in the NoGrudge app to join the group. If you
                don't have the app yet, install it from Google Play first.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={openUrl}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all shadow-[0_0_30px_rgba(0,168,45,0.25)] w-full sm:w-auto justify-center"
                  style={{ fontWeight: 500 }}
                >
                  Open in NoGrudge
                </a>
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[#8a8f98] text-[15px] rounded-lg border border-white/[0.08] hover:text-white hover:bg-white/[0.04] hover:border-white/[0.12] transition-all w-full sm:w-auto justify-center"
                  style={{ fontWeight: 500 }}
                >
                  <Download size={16} />
                  Get it on Google Play
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <AlertTriangle size={28} className="text-[#8a8f98]" />
              </div>
              <h1
                className="text-[28px] md:text-[36px] tracking-[-0.02em] text-white leading-[1.15] mb-4"
                style={{ fontWeight: 600 }}
              >
                This invite link isn't valid
              </h1>
              <p className="text-[15px] text-[#8a8f98] leading-relaxed mb-10">
                The link you followed doesn't look like a NoGrudge invite.
                Ask whoever invited you to resend it, or open NoGrudge
                directly from Google Play.
              </p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all shadow-[0_0_30px_rgba(0,168,45,0.25)]"
                style={{ fontWeight: 500 }}
              >
                <Download size={16} />
                Get it on Google Play
              </a>
            </>
          )}
        </div>
      </section>
    </>
  );
}
