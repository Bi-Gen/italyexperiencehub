// src/lib/gtag.ts

// Evita errori in SSR
const isBrowser = typeof window !== "undefined";

// Tipi essenziali per Consent Mode v2
type ConsentValue = "granted" | "denied";
type ConsentFields = {
  ad_storage: ConsentValue;
  analytics_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

// Dichiariamo dataLayer/gtag per TS
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/** Garantisce l'esistenza di window.dataLayer e window.gtag (idempotente). */
export function ensureDataLayer() {
  if (!isBrowser) return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = (...args: any[]) => {
      window.dataLayer.push(args);
    };
  }
}

/** Wrapper sicuro per gtag (no-op in SSR). */
export function gtagSafe(...args: any[]) {
  if (!isBrowser) return;
  ensureDataLayer();
  window.gtag(...args);
}

/** Push generico nel dataLayer (utile per GTM). */
export function pushDL(payload: Record<string, any>) {
  if (!isBrowser) return;
  ensureDataLayer();
  window.dataLayer.push(payload);
}

/** Imposta il default del Consent Mode (se vuoi forzarlo in qualche punto). */
export function setConsentDefault(values: Partial<ConsentFields>) {
  gtagSafe("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    ...values,
    // wait_for_update opzionale: GTM attende prima di sparare tag
    wait_for_update: 500,
  });
}

/** Aggiorna il consenso in blocco (es. tutto granted/denied). */
export function updateConsentAll(value: ConsentValue) {
  updateConsent({
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

/** Aggiorna il consenso con mappa specifica. */
export function updateConsent(values: Partial<ConsentFields>) {
  gtagSafe("consent", "update", values);
}

/** Traccia una page_view per SPA via dataLayer (GTM → GA4). */
export function trackPageView(params?: {
  page_location?: string;
  page_path?: string;
  page_title?: string;
}) {
  pushDL({
    event: "page_view",
    page_location: isBrowser ? window.location.href : params?.page_location,
    page_path:
      params?.page_path ??
      (isBrowser ? window.location.pathname + window.location.search : undefined),
    page_title: params?.page_title ?? (isBrowser ? document.title : undefined),
  });
}

/** Traccia un evento generico (GTM lo prende da dataLayer). */
export function trackEvent(name: string, params?: Record<string, any>) {
  pushDL({ event: name, ...(params || {}) });
}
