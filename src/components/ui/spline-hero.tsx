"use client";

import { Suspense, lazy } from "react";
import { useReducedMotion } from "framer-motion";

// Spline's runtime is heavy (WebGL). Lazy-load it so it never blocks first paint
// and is only fetched when this component actually renders.
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineHeroProps {
    /**
     * Public scene URL from the Spline editor — Export → "Public URL", ends in
     * `.splinecode` (e.g. https://prod.spline.design/XXXX/scene.splinecode).
     */
    scene: string;
    className?: string;
    /**
     * Static image shown instead of the live 3D scene when the user prefers
     * reduced motion (and as part of the loading fallback). Optional but
     * recommended for accessibility + perceived performance.
     */
    posterSrc?: string;
}

function Poster({ src, className }: { src?: string; className?: string }) {
    return (
        <div className={className} aria-hidden>
            {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" className="h-full w-full object-cover" />
            ) : (
                <div className="h-full w-full animate-pulse bg-white/5" />
            )}
        </div>
    );
}

/**
 * Renders an interactive Spline 3D scene as a hero visual. Falls back to a
 * static poster (or a subtle skeleton) while loading, and skips the live scene
 * entirely for users who prefer reduced motion.
 */
export function SplineHero({ scene, className, posterSrc }: SplineHeroProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <Poster src={posterSrc} className={className} />;
    }

    return (
        <Suspense fallback={<Poster src={posterSrc} className={className} />}>
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}
