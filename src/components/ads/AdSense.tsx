// src/components/ads/AdSense.tsx
"use client";

import { useEffect, useRef } from "react";

const ADS_SCRIPT_ATTR = 'data-adsbygoogle-script';

/** Inietta lo script AdSense una sola volta (idempotente). */
function ensureAdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return;

  if (document.querySelector(`script[${ADS_SCRIPT_ATTR}="true"]`)) return;

  const s = document.createElement("script");
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
  s.setAttribute(ADS_SCRIPT_ATTR, "true");
  document.head.appendChild(s);
}

/** Opzionale: usalo se vuoi forzare il solo caricamento dello script (auto-ads). */
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
 * Con Funding Choices la CMP gestisce il consenso: noi non filtriamo.
 * Se l’utente nega, Google applica automaticamente il comportamento consent mode.
 */
export function InArticleAd() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  const initialized = useRef(false);

  // Non renderizzare se non hai configurato lo slot
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
      // evita crash se lo script non è ancora pronto
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
