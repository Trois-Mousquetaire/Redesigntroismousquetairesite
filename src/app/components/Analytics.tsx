import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-HDW6J2QNN1";

/**
 * Injects the Google tag (gtag.js) into the document head once on mount.
 * Equivalent to placing the standard gtag snippet in <head>.
 */
export function Analytics() {
  useEffect(() => {
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
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}
