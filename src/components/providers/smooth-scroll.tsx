"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * App-wide smooth scrolling. Wrap your layout (or a page) in this to get the
 * "premium feel" inertia scroll. Automatically disabled for users who prefer
 * reduced motion, so it never fights accessibility settings.
 *
 *   <SmoothScroll>{children}</SmoothScroll>
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) return <>{children}</>;

    return (
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
