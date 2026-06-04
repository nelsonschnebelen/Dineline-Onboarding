import "server-only";
import { v2 as cloudinary, type UploadApiOptions, type UploadApiResponse } from "cloudinary";

/**
 * Server-only Cloudinary client. Importing this from a Client Component throws
 * (via "server-only"), which keeps the API secret out of the browser bundle.
 *
 * Cloud name + API key are non-secret and may be inlined as fallbacks; the API
 * secret comes only from the environment (see .env.local, gitignored).
 */
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dpjkoevbm",
    api_key: process.env.CLOUDINARY_API_KEY || "622749214288621",
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const DEFAULT_FOLDER = "dineline";

/**
 * Upload an image from a local path, remote URL, or base64 data URI.
 * Returns the full Cloudinary response (use `.public_id` with <CloudImage>).
 */
export async function uploadImage(
    source: string,
    options: UploadApiOptions = {},
): Promise<UploadApiResponse> {
    if (!process.env.CLOUDINARY_API_SECRET) {
        throw new Error(
            "CLOUDINARY_API_SECRET is not set. Add it to .env.local before uploading.",
        );
    }
    return cloudinary.uploader.upload(source, { folder: DEFAULT_FOLDER, ...options });
}

export { cloudinary };
