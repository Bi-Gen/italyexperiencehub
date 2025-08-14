'use client';

import { useEffect, useState, useCallback } from 'react';
import { gtagSafe } from '@/lib/gtag';

const COOKIE_NAME = 'consent-v1';

function setCookie(name: string, value: 'accepted' | 'rejected', days = 180) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  // NB: niente Secure qui per evitare problemi in dev su http; aggiungilo se il sito è solo https
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

  // mostro il banner solo se non ho ancora una scelta (cookie o localStorage)
  useEffect(() => {
    const existing = getCookie(COOKIE_NAME) || localStorage.getItem(COOKIE_NAME);
    setOpen(existing !== 'accepted' && existing !== 'rejected');
  }, []);

  const dispatchConsentChanged = useCallback(() => {
    try {
      window.dispatchEvent(new Event('consent-changed'));
    } catch {
      /* no-op */
    }
  }, []);

  const accept = useCallback(() => {
    setCookie(COOKIE_NAME, 'accepted');
    localStorage.setItem(COOKIE_NAME, 'accepted');

    gtagSafe('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });

    dispatchConsentChanged();
    setOpen(false);
  }, [dispatchConsentChanged]);

  const reject = useCallback(() => {
    setCookie(COOKIE_NAME, 'rejected');
    localStorage.setItem(COOKIE_NAME, 'rejected');

    gtagSafe('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    dispatchConsentChanged();
    setOpen(false);
  }, [dispatchConsentChanged]);

  // chiudo il banner anche se arriva una decisione da un'altra tab
  useEffect(() => {
    const onCrossTab = (e: StorageEvent) => {
      if (e.key === COOKIE_NAME && (e.newValue === 'accepted' || e.newValue === 'rejected')) {
        setOpen(false);
      }
    };
    const onCustom = () => {
      const v = localStorage.getItem(COOKIE_NAME);
      if (v === 'accepted' || v === 'rejected') setOpen(false);
    };
    window.addEventListener('storage', onCrossTab);
    window.addEventListener('consent-changed', onCustom);
    return () => {
      window.removeEventListener('storage', onCrossTab);
      window.removeEventListener('consent-changed', onCustom);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Impostazioni cookie"
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
    >
      <p style={{ marginBottom: 12 }}>
        Usiamo cookie per analitiche e (opzionalmente) annunci personalizzati. Scegli una
        preferenza.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <button
          onClick={reject}
          aria-label="Rifiuta cookie non essenziali"
          style={{ padding: '8px 14px', border: '1px solid #e5e7eb', borderRadius: 6 }}
        >
          Rifiuta
        </button>
        <button
          onClick={accept}
          aria-label="Accetta cookie per analitiche e annunci"
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
