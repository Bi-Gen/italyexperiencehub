// src/app/ClientAdSenseLoader.tsx
"use client";

import { useEffect } from "react";

export default function ClientAdSenseLoader() {
  useEffect(() => {
    const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    if (!client) return;

    // Evita di inserire lo script più volte
    if (document.querySelector('script[data-adsbygoogle-script="true"]')) return;

    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    s.setAttribute("data-adsbygoogle-script", "true");
    document.head.appendChild(s);
  }, []);

  return null;
}
