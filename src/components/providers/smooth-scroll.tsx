"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * App-wide smooth scrolling. Wrap your layout (or a page) in this to get the
 * "premium feel" inertia scroll. Lenis is imported and attached lazily inside a
 * client effect, so it never enters the server render / prerender path —
 * children are fully server-rendered (good for SEO). Disabled under
 * prefers-reduced-motion.
 *
 *   <SmoothScroll>{children}</SmoothScroll>
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion) return;

        let rafId = 0;
        let destroy: (() => void) | undefined;
        let cancelled = false;

        import("lenis").then(({ default: Lenis }) => {
            if (cancelled) return;
            const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
            const raf = (time: number) => {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            };
            rafId = requestAnimationFrame(raf);
            destroy = () => lenis.destroy();
        });

        return () => {
            cancelled = true;
            cancelAnimationFrame(rafId);
            destroy?.();
        };
    }, [reduceMotion]);

    return <>{children}</>;
}
