import "server-only";
import { fal } from "@fal-ai/client";

/**
 * Server-only fal.ai client. The FAL_KEY is read from the environment and never
 * shipped to the browser ("server-only" makes a client import a build error).
 *
 * Get a key at https://fal.ai/dashboard/keys and put it in .env.local:
 *   FAL_KEY=...
 */
fal.config({ credentials: process.env.FAL_KEY });

/** Sensible default models. schnell = fast/cheap, dev = higher quality. */
export const FAL_MODELS = {
    fluxSchnell: "fal-ai/flux/schnell",
    fluxDev: "fal-ai/flux/dev",
    fluxPro: "fal-ai/flux-pro/v1.1",
} as const;

export interface GenerateImageOptions {
    /** Model endpoint to call. Defaults to FLUX schnell (cheapest/fastest). */
    model?: string;
    /** e.g. "landscape_16_9", "square_hd", "portrait_4_3". */
    imageSize?: string;
    /** Number of images to generate. */
    numImages?: number;
}

export interface GeneratedImage {
    url: string;
    width?: number;
    height?: number;
    contentType?: string;
}

/**
 * Generate image(s) from a text prompt. Returns the fal-hosted image URLs —
 * pass a URL straight to uploadImage() (src/lib/cloudinary.ts) if you want it
 * stored + optimized for delivery.
 */
export async function generateImage(
    prompt: string,
    { model = FAL_MODELS.fluxSchnell, imageSize = "landscape_16_9", numImages = 1 }: GenerateImageOptions = {},
): Promise<GeneratedImage[]> {
    if (!process.env.FAL_KEY) {
        throw new Error("FAL_KEY is not set. Add it to .env.local before generating images.");
    }

    const result = await fal.subscribe(model, {
        input: {
            prompt,
            image_size: imageSize,
            num_images: numImages,
        },
    });

    const images = (result.data?.images ?? []) as Array<{
        url: string;
        width?: number;
        height?: number;
        content_type?: string;
    }>;

    return images.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        contentType: img.content_type,
    }));
}

export { fal };
