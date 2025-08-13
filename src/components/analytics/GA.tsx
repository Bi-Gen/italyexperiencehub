"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GA() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  if (!GA_ID) return null;

  // opzionale: riallinea il consent subito se l'utente aveva già scelto
  useEffect(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("consent-v1") : null;
    const granted = saved === "accepted" ? "granted" : "denied";
    // @ts-ignore
    window.gtag?.("consent", "update", {
      ad_storage: granted,
      analytics_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
  }, []);

  return (
    <>
      {/* Libreria GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Inizializzazione + Consent Mode default denied */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Consent Mode v2: default negato
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });

          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
