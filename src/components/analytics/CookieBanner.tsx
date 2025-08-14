'use client';

import { useEffect, useState } from 'react';
import { gtagSafe } from '@/lib/gtag';

const COOKIE_NAME = 'consent-v1';

function setCookie(name: string, value: string, days = 180) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; Expires=${expires}; Path=/; SameSite=Lax`;
}

function getCookie(name: string) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const existing = getCookie(COOKIE_NAME) || localStorage.getItem(COOKIE_NAME);
    setOpen(existing !== 'accepted' && existing !== 'rejected');
  }, []);

  function accept() {
    setCookie(COOKIE_NAME, 'accepted');
    localStorage.setItem(COOKIE_NAME, 'accepted');

    // ✅ Aggiorna Consent Mode (GA4/Ads)
    gtagSafe('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });

    setOpen(false);
  }

  function reject() {
    setCookie(COOKIE_NAME, 'rejected');
    localStorage.setItem(COOKIE_NAME, 'rejected');

    // ✅ Mantieni "denied" (è già il default del GTM component)
    gtagSafe('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 9999,
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: 16,
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        maxWidth: 800,
        margin: '0 auto',
      }}
      role="dialog"
      aria-live="polite"
    >
      <p style={{ marginBottom: 12 }}>
        Usiamo cookie per analitiche e (opz.) annunci personalizzati. Puoi accettare o rifiutare.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <button
          onClick={reject}
          style={{ padding: '8px 14px', border: '1px solid #e5e7eb', borderRadius: 6 }}
        >
          Rifiuta
        </button>
        <button
          onClick={accept}
          style={{
            padding: '8px 14px',
            borderRadius: 6,
            background: '#16a34a',
            color: 'white',
            border: 'none',
          }}
        >
          Accetta
        </button>
      </div>
    </div>
  );
}
