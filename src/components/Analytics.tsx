"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ymHit } from "@/lib/ym";

export function Analytics() {
  const counterId = process.env.NEXT_PUBLIC_YM_ID;
  if (!counterId) return null;

  const ymInit = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      k=e.createElement(t),a=e.getElementsByTagName(t)[0];
      k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(${counterId}, "init", {
      ssr:true,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true,
      trackHash:true,
      ecommerce:"dataLayer"
    });
  `;

  // SPA pageview: route change hit
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    ymHit(pathname);
  }, [pathname]);

  // Outbound link tracking + global error tracking + basic session params
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest && target.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      try {
        const url = new URL(link.href, window.location.href);
        if (url.hostname && url.hostname !== window.location.hostname) {
          // generic outbound goal
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).ym?.(Number(counterId), "reachGoal", "outbound", { href: url.href });
        }
      } catch {}
    };

    const onError = (event: ErrorEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ym?.(Number(counterId), "reachGoal", "js_error", {
        message: event.message?.slice(0, 180),
        source: event.filename,
        line: event.lineno,
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ym?.(Number(counterId), "reachGoal", "promise_rejection", {
        reason: String(event.reason ?? "unknown").slice(0, 180),
      });
    };

    window.addEventListener("click", onClick, { capture: true });
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    // basic session params
    try {
      const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const lang = navigator.language;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ym?.(Number(counterId), "params", { theme, lang });
    } catch {}

    return () => {
      window.removeEventListener("click", onClick, { capture: true } as unknown as EventListenerOptions);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, [counterId]);

  return (
    <>
      <Script id="ym-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: ymInit }} />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://mc.yandex.ru/watch/${counterId}`} style={{ position: "absolute", left: -9999 }} alt="" />
        </div>
      </noscript>
    </>
  );
}


