'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function ConsentHydrator() {
  useEffect(() => {
    // Leggi eventuale scelta salvata in localStorage
    const val = typeof window !== 'undefined'
      ? localStorage.getItem('consent-v1')
      : null;

    if (!val) return;

    // Assicura dataLayer/gtag
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = (...args: any[]) => window.dataLayer!.push(args as any);
    }

    if (val === 'accepted') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    } else if (val === 'rejected') {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }, []);

  return null;
}
