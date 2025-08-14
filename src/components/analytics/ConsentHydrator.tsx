'use client';

import { useEffect } from 'react';
import { gtagSafe } from '@/lib/gtag';

/**
 * Se all'avvio esiste già un consenso "accepted",
 * aggiorniamo subito il Consent Mode per GTM/GA4
 */
export default function ConsentHydrator() {
  useEffect(() => {
    try {
      const fromLS = typeof window !== 'undefined' ? localStorage.getItem('consent-v1') : null;
      const fromCookie = typeof document !== 'undefined'
        ? document.cookie.match(/(?:^|; )consent-v1=([^;]+)/)?.[1]
        : null;

      const val = fromLS || fromCookie;

      if (val === 'accepted') {
        gtagSafe('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
    } catch {
      // no-op
    }
  }, []);

  return null;
}
