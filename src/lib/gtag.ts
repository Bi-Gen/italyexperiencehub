// src/lib/gtag.ts

// Dichiariamo in modo sicuro dataLayer/gtag per TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/** Garantisce l'esistenza di window.dataLayer e window.gtag */
export function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = (...args: any[]) => {
      window.dataLayer.push(args);
    };
  }
}

/** Wrapper tipizzato e “safe” per gtag */
export function gtagSafe(...args: any[]) {
  if (typeof window === "undefined") return;
  ensureDataLayer();
  window.gtag(...args);
}

/** Push generico sul dataLayer (utile per page_view SPA) */
export function pushDL(payload: Record<string, any>) {
  if (typeof window === "undefined") return;
  ensureDataLayer();
  window.dataLayer.push(payload);
}
