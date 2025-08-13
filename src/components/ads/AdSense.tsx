"use client";

import { useEffect, useState } from "react";

const KEY = "consent-v1";

export function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
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
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const val = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      setCanShow(!!client && !!slot && val === "accepted");
    };
    check();
    const onChange = () => check();
    window.addEventListener("consent-changed", onChange);
    return () => window.removeEventListener("consent-changed", onChange);
  }, [client, slot]);

  useEffect(() => {
    if (!canShow) return;
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
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
