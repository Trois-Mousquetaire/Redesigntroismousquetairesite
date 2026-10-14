import { useEffect, useState } from "react";
import { getConsent, onConsentChange } from "./CookieConsent";

const GA_MEASUREMENT_ID = "G-HDW6J2QNN1";

/**
 * Injects the Google tag (gtag.js) — but only after the visitor has accepted
 * analytics cookies in the consent banner.
 *
 * Analytics cookies are not strictly necessary, so under ePrivacy Article 5(3)
 * they require prior consent. Nothing is loaded until getConsent() is
 * "granted"; if the visitor declines, or has not answered, no Google script is
 * fetched and no analytics cookie is set.
 */
export function Analytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(getConsent() === "granted");
    return onConsentChange((v) => setGranted(v === "granted"));
  }, []);

  useEffect(() => {
    if (!granted) return;
    if (document.getElementById("ga-gtag")) return;

    const script = document.createElement("script");
    script.id = "ga-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.id = "ga-gtag-init";
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(inline);
  }, [granted]);

  return null;
}
