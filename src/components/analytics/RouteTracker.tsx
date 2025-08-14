'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function RouteTracker() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const url = pathname + (search?.toString() ? `?${search}` : '');
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'page_view',
      page_path: url,
    });
  }, [pathname, search]);

  return null;
}
