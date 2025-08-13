"use client";
import { useEffect, useState } from "react";

const KEY = "consent-v1";

function setConsentCookie(value: "accepted" | "denied") {
  document.cookie = `${KEY}=${value}; Max-Age=${3600 * 24 * 365}; Path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) setOpen(true);
  }, []);

  const update = (accept: boolean) => {
    const val: "accepted" | "denied" = accept ? "accepted" : "denied";
    localStorage.setItem(KEY, val);
    setConsentCookie(val);
    setOpen(false);

    const granted = accept ? "granted" : "denied";
    // @ts-ignore
    const gtag = window.gtag || (() => {});
    gtag("consent", "update", {
      ad_storage: granted,
      analytics_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });

    // utile per componenti (es. AdSense) che devono reagire subito
    window.dispatchEvent(new CustomEvent("consent-changed", { detail: val }));

    if (process.env.NODE_ENV === "development") {
      console.log("[consent]", val);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-neutral-900 text-white">
      <div className="mx-auto max-w-5xl p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-sm">
          Usiamo cookie per analitiche e (opz.) annunci personalizzati. Puoi accettare o rifiutare.
        </p>
        <div className="flex gap-2">
          <button onClick={() => update(false)} className="px-3 py-2 border border-white/30 rounded">
            Rifiuta
          </button>
          <button onClick={() => update(true)} className="px-3 py-2 bg-white text-neutral-900 rounded">
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
