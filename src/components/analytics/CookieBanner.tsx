'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'consent-v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = getConsent();
    setVisible(saved == null); // Mostra banner se non c'è scelta
  }, []);

  function getConsent(): 'accepted' | 'rejected' | null {
    try {
      const v = localStorage.getItem(CONSENT_KEY) || '';
      if (v === 'accepted' || v === 'rejected') return v;
    } catch {}
    // fallback cookie
    const c = document.cookie.split('; ').find((x) => x.startsWith(`${CONSENT_KEY}=`));
    if (c) {
      const v = c.split('=')[1];
      if (v === 'accepted' || v === 'rejected') return v;
    }
    return null;
  }

  function setConsent(val: 'accepted' | 'rejected') {
    try { localStorage.setItem(CONSENT_KEY, val); } catch {}
    document.cookie = `${CONSENT_KEY}=${val}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  }

  function consentUpdate(values: Record<string, 'granted' | 'denied'>) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(){ (window as any).dataLayer.push(arguments as any); }
    gtag('consent', 'update', values);
  }

  function onAccept() {
    consentUpdate({
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    setConsent('accepted');
    setVisible(false);
  }

  function onReject() {
    consentUpdate({
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    setConsent('rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000] bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          Usiamo cookie per analitiche e (opz.) annunci personalizzati. Puoi accettare o rifiutare.
        </p>
        <div className="flex gap-2">
          <button
            onClick={onReject}
            className="px-3 py-2 rounded bg-neutral-700 hover:bg-neutral-600 text-sm"
          >
            Rifiuta
          </button>
          <button
            onClick={onAccept}
            className="px-3 py-2 rounded bg-green-600 hover:bg-green-700 text-sm"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
