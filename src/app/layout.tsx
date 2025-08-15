// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

import GTM from "@/components/analytics/GTM";
import RouteTracker from "@/components/analytics/RouteTracker";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://italyexperiencehub.com";

export const metadata: Metadata = {
  title: {
    default: "Il Tuo Spazio Web – Pronto a Crescere",
    template: "%s | Il Tuo Spazio Web",
  },
  description:
    "Spazio web ottimizzato SEO, veloce e flessibile. Pronto per diventare blog, vetrina, e-commerce o SaaS.",
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Il Tuo Spazio Web",
    title: "Il Tuo Spazio Web – Pronto a Crescere",
    description:
      "Spazio web neutro e ottimizzato, pronto a trasformarsi nel progetto che desideri.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="it">
      <head>
        {/* AdSense (necessario per Auto ads / CMP) */}
        <Script
          id="adsense"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4718945941038682"
          crossOrigin="anonymous"
        />

        {/* Funding Choices CMP – endpoint consigliato per GDPR */}
        <Script
          id="funding-choices"
          strategy="beforeInteractive"
          src="https://fundingchoicesmessages.google.com/i/pub-4718945941038682?ers=2"
        />

        {/* Snippet ufficiale Google: segnala la presenza di FC */}
        <Script id="funding-choices-present" strategy="beforeInteractive">
          {`
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style.cssText = 'width:0;height:0;border:0;display:none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `}
        </Script>

        {/* Logger TCF minimal per debug */}
        <Script id="tcf-debug" strategy="afterInteractive">
          {`
            (function () {
              try {
                if (typeof window.__tcfapi === 'function') {
                  window.__tcfapi('addEventListener', 2, function(tcData, success) {
                    console.log('[TCF] event', success, tcData && tcData.eventStatus, tcData);
                  });
                } else {
                  console.log('[TCF] __tcfapi not ready yet');
                }
              } catch (e) {
                console.warn('[TCF] listener error', e);
              }
            })();
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Google Tag Manager */}
        <GTM />

        {/* Fallback noscript GTM */}
        {gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        {/* Pageview su SPA racchiuso in Suspense (richiede hooks client) */}
        <Suspense fallback={null}>
          <RouteTracker />
        </Suspense>

        {children}

        <footer className="mt-20 border-t bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Il Tuo Spazio Web</h3>
              <p className="text-sm text-neutral-600">
                Base SEO-first, pronta a crescere in qualunque direzione.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pagine</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/about" className="hover:underline">Chi siamo</a></li>
                <li><a href="/contatti" className="hover:underline">Contatti</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy</a></li>
                <li><a href="/terms" className="hover:underline">Termini</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Seguici</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t text-center py-4 text-xs text-neutral-500">
            © {new Date().getFullYear()} Il Tuo Spazio Web – Tutti i diritti riservati.
          </div>
        </footer>
      </body>
    </html>
  );
}
