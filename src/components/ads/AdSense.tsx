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
    const checkConsent = () => {
      const val =
        typeof window !== "undefined"
          ? localStorage.getItem(KEY) || getCookie(KEY)
          : null;
      setCanShow(!!client && !!slot && val === "accepted");
    };

    const getCookie = (name: string) => {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + "="))
        ?.split("=")[1];
    };

    checkConsent();
    window.addEventListener("consent-changed", checkConsent);
    return () => window.removeEventListener("consent-changed", checkConsent);
  }, [client, slot]);

  useEffect(() => {
    if (!canShow) return;
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (err) {
      console.error("Errore caricamento adsbygoogle:", err);
    }
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
