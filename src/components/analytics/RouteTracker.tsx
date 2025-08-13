"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const gtag = (window as any)?.gtag;
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (!gtag || !GA_ID) return;

    const q = searchParams.toString();
    const page_path = q ? `${pathname}?${q}` : pathname;

    gtag("config", GA_ID, {
      page_path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, searchParams]);

  return null;
}
