// src/components/analytics/FundingChoices.tsx
"use client";
import Script from "next/script";

/**
 * Carica esplicitamente la CMP di Google (Funding Choices).
 * - Usa il tuo publisher id (ca-pub-…)
 * - Mostra il banner quando serve (prima visita / consenso non presente / cambi di normativa)
 */
export default function FundingChoices() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT; // es: ca-pub-4718945941038682
  if (!client) return null;

  return (
    <>
      {/* Script ufficiale Funding Choices */}
      <Script
        id="fc-loader"
        strategy="afterInteractive"
        src={`https://fundingchoicesmessages.google.com/i/${client}?ers=1`}
        async
      />

      {/* Iframe locator TCF (snippet consigliato da Google) */}
      <Script id="fc-locator" strategy="afterInteractive">
        {`
          (function() {
            function signalGooglefcPresent() {
              if (!window.frames['__tcfapiLocator']) {
                if (document.body) {
                  const iframe = document.createElement('iframe');
                  iframe.style.cssText = 'display:none';
                  iframe.name = '__tcfapiLocator';
                  document.body.appendChild(iframe);
                } else {
                  setTimeout(signalGooglefcPresent, 5);
                }
              }
            }
            signalGooglefcPresent();
          })();
        `}
      </Script>
    </>
  );
}
