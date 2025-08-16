// src/components/ads/AdSense.tsx
"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "adsbygoogle-init";

/** Inietta lo script AdSense una sola volta (idempotente). */
function ensureAdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return;

  // Evita duplicazioni: controlla per id o per src già presente
  if (
    document.getElementById(SCRIPT_ID) ||
    document.querySelector('script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')
  ) {
    return;
  }

  const s = document.createElement("script");
  s.id = SCRIPT_ID;
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
  document.head.appendChild(s);
}

/** Alias storico usato da ClientAdSenseLoader: carica solo lo script (auto-ads). */
export function AdSenseScript() {
  useEffect(() => {
    ensureAdSenseScript();
  }, []);
  return null;
}

/** Opzionale, equivalente ad AdSenseScript: lasciare per chiarezza. */
export function AutoAds() {
  useEffect(() => {
    ensureAdSenseScript();
  }, []);
  return null;
}

/**
 * Blocco in-article manuale.
 * Richiede:
 *  - NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXX
 *  - NEXT_PUBLIC_ADSENSE_SLOT=NNNNNNNNNN
 *
 * Con Funding Choices la CMP gestisce il consenso: se l’utente nega,
 * Google applica automaticamente il Consent Mode.
 */
export function InArticleAd() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  const initialized = useRef(false);

  if (!client || !slot) return null;

  useEffect(() => {
    ensureAdSenseScript();

    if (initialized.current) return;
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      // push può essere chiamato anche prima che lo script sia pronto; verrà processato in coda
      (window as any).adsbygoogle.push({});
      initialized.current = true;
    } catch {
      // ignora: riproverà al prossimo render/ri-mount
    }
  }, [client, slot]);

  return (
    <ins
      className="adsbygoogle block my-6"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
