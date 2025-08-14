"use client";

import { useEffect, useState } from "react";

const KEY = "consent-v1";

export function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-4718945941038682"; // fallback
  if (!client) return null;
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}

export function InArticleAd() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-4718945941038682";
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || ""; // opzionale se usi auto ads
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const val = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      setCanShow(!!client && val === "accepted");
    };
    check();
    const onChange = () => check();
    window.addEventListener("consent-changed", onChange);
    return () => window.removeEventListener("consent-changed", onChange);
  }, [client]);

  useEffect(() => {
    if (!canShow) return;
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({
        google_ad_client: client,
        enable_page_level_ads: true,
      });
    } catch {}
  }, [canShow]);

  if (!canShow) return null;

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
