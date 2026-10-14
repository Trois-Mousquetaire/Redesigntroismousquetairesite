import { useEffect, useState } from "react";
import { Link } from "react-router";

/**
 * Cookie consent banner.
 *
 * Analytics cookies may not be set before the visitor agrees (ePrivacy
 * Article 5(3) plus GDPR). This component owns that decision: it stores the
 * answer, and <Analytics /> only injects gtag.js once the answer is "granted".
 *
 * Declining is as easy as accepting — a banner with no visible reject control
 * does not collect valid consent.
 */

const STORAGE_KEY = "tm-cookie-consent";
const CONSENT_EVENT = "tm-cookie-consent-change";

export type ConsentValue = "granted" | "denied";

/** Read the stored choice. Returns null when the visitor has not chosen yet. */
export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Private mode, blocked storage, SSR — treat as "not chosen", which means
    // no analytics. Failing closed is the correct direction here.
    return null;
  }
}

function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Non-fatal: the choice simply will not persist across reloads.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Subscribe to consent changes. Returns an unsubscribe function. */
export function onConsentChange(fn: (v: ConsentValue) => void): () => void {
  const handler = (e: Event) => fn((e as CustomEvent<ConsentValue>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

/** Reopen the banner so a visitor can change their mind. */
export function reopenCookieBanner() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "denied" }));
  window.dispatchEvent(new CustomEvent(`${CONSENT_EVENT}-reopen`));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const onReopen = () => setVisible(true);
    window.addEventListener(`${CONSENT_EVENT}-reopen`, onReopen);
    return () => window.removeEventListener(`${CONSENT_EVENT}-reopen`, onReopen);
  }, []);

  if (!visible) return null;

  const choose = (v: ConsentValue) => {
    setConsent(v);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0d0c12]/95 backdrop-blur px-4 py-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/80">
          We use Google Analytics to understand how this site is used. These cookies are
          only set if you accept. Declining changes nothing about how the site works.{" "}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-md border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#08070b] transition hover:bg-white/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
