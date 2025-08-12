"use client";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const ymId = process.env.NEXT_PUBLIC_YM_ID;

export function ymGoal(goal: string, params?: Record<string, unknown>) {
  if (!ymId || typeof window === "undefined" || typeof window.ym !== "function") return;
  try {
    window.ym(Number(ymId), "reachGoal", goal, params || {});
  } catch {}
}

export function ymHit(url: string, options?: { title?: string; referer?: string; params?: Record<string, unknown> }) {
  if (!ymId || typeof window === "undefined" || typeof window.ym !== "function") return;
  try {
    window.ym(Number(ymId), "hit", url, options || {});
  } catch {}
}

export function ymParams(params: Record<string, unknown>) {
  if (!ymId || typeof window === "undefined" || typeof window.ym !== "function") return;
  try {
    window.ym(Number(ymId), "params", params);
  } catch {}
}


