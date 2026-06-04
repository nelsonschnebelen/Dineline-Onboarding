import { NextResponse } from "next/server";
import { generateImage, type GenerateImageOptions } from "@/lib/fal";

/**
 * POST /api/generate-image
 * Body: { prompt: string, model?, imageSize?, numImages? }
 * Returns: { images: { url, width, height, contentType }[] }
 *
 * Runs on the server so FAL_KEY never reaches the client.
 */
export async function POST(request: Request) {
    let body: { prompt?: string } & GenerateImageOptions;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { prompt, ...options } = body;
    if (!prompt || typeof prompt !== "string") {
        return NextResponse.json({ error: "`prompt` is required" }, { status: 400 });
    }

    try {
        const images = await generateImage(prompt, options);
        return NextResponse.json({ images });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Image generation failed";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
