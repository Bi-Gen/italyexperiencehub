'use client';

import { useEffect } from 'react';

const CONSENT_KEY = 'consent-v1';

export default function ConsentHydrator() {
  useEffect(() => {
    let val: 'accepted' | 'rejected' | null = null;
    try {
      const v = localStorage.getItem(CONSENT_KEY);
      if (v === 'accepted' || v === 'rejected') val = v;
    } catch {}

    if (!val) {
      const c = document.cookie.split('; ').find((x) => x.startsWith(`${CONSENT_KEY}=`));
      if (c) {
        const v = c.split('=')[1];
        if (v === 'accepted' || v === 'rejected') val = v;
      }
    }

    if (!val) return;

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(){ (window as any).dataLayer.push(arguments as any); }

    if (val === 'accepted') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    } else {
      gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }, []);

  return null;
}
