'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pushDL } from '@/lib/gtag';

/**
 * Invia un page_view su cambio rotta (SPA) senza usare useSearchParams
 * per evitare il requisito di Suspense in fase di prerender.
 */
export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const href =
      typeof window !== 'undefined' ? window.location.href : '';
    const search =
      typeof window !== 'undefined' ? window.location.search : '';
    const title =
      typeof document !== 'undefined' ? document.title : '';

    pushDL({
      event: 'page_view',
      page_location: href,
      page_path: pathname + search,
      page_title: title,
    });
  }, [pathname]);

  return null;
}
