"use client";
import { useEffect } from "react";

const COOKIE_NAME = "consent-v1";

export default function ConsentHydrator() {
  useEffect(() => {
    const val =
      typeof localStorage !== "undefined"
        ? localStorage.getItem(COOKIE_NAME)
        : null;
    const granted =
      val === "accepted" ? "granted" : "denied";

    const gtag = (window as any).gtag || (() => {});
    gtag("consent", "update", {
      ad_storage: granted,
      analytics_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
  }, []);

  return null;
}
