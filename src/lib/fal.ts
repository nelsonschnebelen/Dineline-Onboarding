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

/** Model endpoints, grouped by output type. */
export const FAL_MODELS = {
    // Images (raster)
    fluxSchnell: "fal-ai/flux/schnell", // fast/cheap
    fluxDev: "fal-ai/flux/dev", // higher quality
    fluxPro: "fal-ai/flux-pro/v1.1",
    // Vector / illustration (Recraft can emit SVG with vector styles)
    recraft: "fal-ai/recraft-v3",
    // Video
    ltxVideo: "fal-ai/ltx-video", // fast/cheap text-to-video
    klingVideo: "fal-ai/kling-video/v1/standard/text-to-video", // higher quality
} as const;

function assertKey() {
    if (!process.env.FAL_KEY) {
        throw new Error("FAL_KEY is not set. Add it to .env.local before calling fal.ai.");
    }
}

// ---- Images -----------------------------------------------------------------

export interface GenerateImageOptions {
    /** Model endpoint. Defaults to FLUX schnell (cheapest/fastest). */
    model?: string;
    /** e.g. "landscape_16_9", "square_hd", "portrait_4_3". */
    imageSize?: string;
    /** Number of images to generate. */
    numImages?: number;
    /** Extra model-specific input merged into the request (e.g. { style: "vector_illustration" }). */
    input?: Record<string, unknown>;
}

export interface GeneratedImage {
    url: string;
    width?: number;
    height?: number;
    contentType?: string;
}

/**
 * Generate image(s) from a text prompt. Returns the fal-hosted image URLs —
 * pass a URL to uploadImage() (src/lib/cloudinary.ts) to store + optimize it.
 */
export async function generateImage(
    prompt: string,
    { model = FAL_MODELS.fluxSchnell, imageSize = "landscape_16_9", numImages = 1, input = {} }: GenerateImageOptions = {},
): Promise<GeneratedImage[]> {
    assertKey();
    const result = await fal.subscribe(model, {
        input: { prompt, image_size: imageSize, num_images: numImages, ...input },
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

/**
 * Generate on-brand vector illustrations / icons via Recraft. Output is served
 * as a URL (SVG when the model emits vectors). Good for the custom-icon "last
 * 10%" that normally needs a designer.
 */
export function generateVector(prompt: string, options: Omit<GenerateImageOptions, "model"> = {}) {
    return generateImage(prompt, {
        model: FAL_MODELS.recraft,
        ...options,
        input: { style: "vector_illustration", ...(options.input ?? {}) },
    });
}

// ---- Video ------------------------------------------------------------------

export interface GenerateVideoOptions {
    /** Model endpoint. Defaults to LTX (fast/cheap). */
    model?: string;
    /** Extra model-specific input merged into the request. */
    input?: Record<string, unknown>;
}

export interface GeneratedVideo {
    url: string;
    contentType?: string;
}

/**
 * Generate a short video loop from a text prompt — e.g. a cinematic hero
 * background. Video jobs are slower and cost more than images.
 */
export async function generateVideo(
    prompt: string,
    { model = FAL_MODELS.ltxVideo, input = {} }: GenerateVideoOptions = {},
): Promise<GeneratedVideo> {
    assertKey();
    const result = await fal.subscribe(model, { input: { prompt, ...input } });
    const video = (result.data?.video ?? {}) as { url?: string; content_type?: string };
    if (!video.url) throw new Error("fal video generation returned no video URL");
    return { url: video.url, contentType: video.content_type };
}

export { fal };
