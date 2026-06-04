// Cloudinary onboarding — upload, inspect, and optimize a demo image.
//
// Run with:  node scripts/cloudinary-onboarding.mjs
//
// SECURITY NOTE:
//   Cloud name and API key are non-secret (the cloud name appears in every
//   delivery URL). The API *secret* is the only sensitive value, so it is read
//   from the CLOUDINARY_API_SECRET environment variable (see .env.local, which
//   is gitignored) instead of being hardcoded and committed to the repo.

import { v2 as cloudinary } from "cloudinary";

// 1) Configure -----------------------------------------------------------------
cloudinary.config({
    cloud_name: "dpjkoevbm",                          // non-secret
    api_key: "622749214288621",                       // non-secret
    api_secret: process.env.CLOUDINARY_API_SECRET,    // ← set in .env.local, never committed
    secure: true,
});

if (!process.env.CLOUDINARY_API_SECRET) {
    console.error(
        "Missing CLOUDINARY_API_SECRET.\n" +
        "Add it to .env.local (CLOUDINARY_API_SECRET=your_secret) and re-run with:\n" +
        "  node --env-file=.env.local scripts/cloudinary-onboarding.mjs"
    );
    process.exit(1);
}

async function main() {
    // 2) Upload an image from Cloudinary's public demo domain -------------------
    const sourceUrl = "https://res.cloudinary.com/demo/image/upload/sample.jpg";
    const uploaded = await cloudinary.uploader.upload(sourceUrl, {
        folder: "onboarding",
    });
    console.log("Upload complete:");
    console.log("  secure URL:", uploaded.secure_url);
    console.log("  public ID :", uploaded.public_id);

    // 3) Fetch image details via the Admin API ---------------------------------
    const details = await cloudinary.api.resource(uploaded.public_id);
    console.log("\nImage details:");
    console.log("  width :", details.width);
    console.log("  height:", details.height);
    console.log("  format:", details.format);
    console.log("  bytes :", details.bytes);

    // 4) Build an optimized transformation URL ---------------------------------
    //   f_auto  → automatic format: Cloudinary serves the best modern format
    //             (e.g. AVIF/WebP) the requesting browser supports.
    //   q_auto  → automatic quality: picks the smallest file size that still
    //             looks visually lossless.
    const optimizedUrl = cloudinary.url(uploaded.public_id, {
        fetch_format: "auto", // f_auto
        quality: "auto",      // q_auto
        secure: true,
    });

    console.log("\nDone! Click the link below to see the optimized version of the image.");
    console.log("Check the size and the format:");
    console.log("  " + optimizedUrl);
}

main().catch((err) => {
    console.error("Cloudinary onboarding failed:", err.message || err);
    process.exit(1);
});
