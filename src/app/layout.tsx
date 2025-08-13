import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import GA from "@/components/analytics/GA";
import CookieBanner from "@/components/analytics/CookieBanner";
import ConsentHydrator from "@/components/analytics/ConsentHydrator";
import RouteTracker from "@/components/analytics/RouteTracker";
import { AdSenseScript } from "@/components/ads/AdSense";

export const metadata: Metadata = {
  title: {
    default: "Il Tuo Spazio Web – Pronto a Crescere",
    template: "%s | Il Tuo Spazio Web",
  },
  description:
    "Spazio web ottimizzato SEO, veloce e flessibile. Pronto per diventare blog, vetrina, e-commerce o SaaS.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Il Tuo Spazio Web",
    title: "Il Tuo Spazio Web – Pronto a Crescere",
    description:
      "Spazio web neutro e ottimizzato, pronto a trasformarsi nel progetto che desideri.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Lettura server-side del cookie di consenso
  const hasConsent = cookies().get("consent-v1")?.value === "accepted";

  return (
    <html lang="it">
     <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* GA sempre (Consent Mode default denied) */}
        <GA />
        {/* Annunci: carica lo script solo se l'utente ha accettato */}
        {hasConsent && <AdSenseScript />}
        {/* Tracciamento delle pageview (funziona solo se GA è presente) */}
        <RouteTracker />
        {/* Banner per raccogliere/aggiornare consenso */}
        <CookieBanner />

        {/* Contenuto */}
        {children}

        {/* Footer */}
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
