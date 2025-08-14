'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pushDL } from '@/lib/gtag';

/**
 * Su cambio rotta (SPA) inviamo un page_view custom.
 * Se in GTM hai un GA4 Config con “Send a page view” attivo,
 * puoi anche non usarlo. Ma questo è utile/esplicito.
 */
export default function RouteTracker() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    pushDL({
      event: 'page_view',
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      page_path: pathname + (search?.toString() ? `?${search.toString()}` : ''),
      page_title: typeof document !== 'undefined' ? document.title : '',
    });
  }, [pathname, search]);

  return null;
}
