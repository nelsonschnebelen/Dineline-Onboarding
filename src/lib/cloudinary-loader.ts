/**
 * Cloudinary loader for next/image.
 *
 * Client-safe: uses only the (non-secret) cloud name. Given a Cloudinary
 * public ID as `src` (e.g. "onboarding/e1fyn9jepnqetnuawxla"), it builds an
 * optimized delivery URL with automatic format + quality and width-aware
 * resizing, so Next's responsive `sizes`/srcset machinery drives Cloudinary.
 */

export const CLOUDINARY_CLOUD_NAME =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dpjkoevbm";

interface LoaderArgs {
    src: string;
    width: number;
    quality?: number;
}

export function cloudinaryLoader({ src, width, quality }: LoaderArgs): string {
    // Already a full URL? Pass it through untouched.
    if (/^https?:\/\//.test(src)) return src;

    const transforms = [
        "f_auto", // automatic best format (AVIF/WebP/…)
        `q_${quality || "auto"}`, // automatic (or pinned) quality
        "c_limit", // never upscale past the source
        `w_${width}`, // match the rendered width for this srcset entry
    ].join(",");

    const id = src.replace(/^\/+/, "");
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${id}`;
}
