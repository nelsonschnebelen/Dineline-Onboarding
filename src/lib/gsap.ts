"use client";

import { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Pre-configured GSAP for scroll choreography (pinned sections, scrubbed
 * reveals, parallax). Import { gsap, ScrollTrigger } from here so the plugin is
 * always registered.
 *
 * Pattern inside a client component:
 *
 *   const ref = useRef<HTMLDivElement>(null);
 *   useIsomorphicLayoutEffect(() => {
 *     const ctx = gsap.context(() => {
 *       gsap.from(".item", { y: 40, opacity: 0, stagger: 0.1,
 *         scrollTrigger: { trigger: ref.current, start: "top 80%" } });
 *     }, ref);
 *     return () => ctx.revert();   // auto cleanup
 *   }, []);
 */
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/** useLayoutEffect on the client, useEffect on the server (avoids SSR warning). */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export { gsap, ScrollTrigger };
