"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { revealVariants, type RevealVariant } from "@/lib/animations";

interface RevealProps extends HTMLMotionProps<"div"> {
    /** Which entrance variant to use. Defaults to "up". */
    variant?: RevealVariant;
    /** Delay before the animation starts, in seconds. */
    delay?: number;
    /** Animate every time it enters the viewport instead of just once. */
    repeat?: boolean;
    /** How much of the element must be visible before it fires (0–1). */
    amount?: number;
}

/**
 * Drop-in scroll reveal. Animates children in as they enter the viewport,
 * using the shared motion design system. Automatically degrades to a plain,
 * static render when the user prefers reduced motion.
 *
 * <Reveal variant="up" delay={0.1}>...</Reveal>
 */
export function Reveal({
    variant = "up",
    delay = 0,
    repeat = false,
    amount = 0.3,
    children,
    ...props
}: RevealProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children as React.ReactNode}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: !repeat, amount }}
            variants={revealVariants[variant]}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
