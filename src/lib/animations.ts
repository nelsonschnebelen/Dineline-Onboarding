import type { Variants, Transition, Easing } from "framer-motion";

/**
 * Centralized motion design system.
 *
 * Treat these the way you'd treat color or type tokens: compose pages from
 * these named variants instead of hand-writing initial/animate/transition on
 * every element. Keeps motion consistent and easy to retune in one place.
 */

// ---- Easing & timing presets ------------------------------------------------

/** Smooth, slightly weighty ease used across reveals. */
export const easeOutExpo: Easing = [0.16, 1, 0.3, 1];

export const transitions = {
    fast: { duration: 0.4, ease: easeOutExpo } as Transition,
    base: { duration: 0.6, ease: easeOutExpo } as Transition,
    slow: { duration: 0.9, ease: easeOutExpo } as Transition,
    spring: { type: "spring", stiffness: 260, damping: 26 } as Transition,
} satisfies Record<string, Transition>;

// ---- Reveal variants --------------------------------------------------------

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: transitions.base },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -24 },
    show: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: transitions.base },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: transitions.base },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: transitions.base },
};

/**
 * Parent that staggers its children. Pair with any of the variants above on
 * each child (children should use the same "hidden"/"show" keys).
 */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
    hidden: {},
    show: {
        transition: { staggerChildren: stagger, delayChildren },
    },
});

/** Convenience map by name for the <Reveal> component. */
export const revealVariants = {
    fade: fadeIn,
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight,
    scale: scaleIn,
} as const;

export type RevealVariant = keyof typeof revealVariants;
