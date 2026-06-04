/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Allow Cloudinary-delivered images (used by the Cloudinary loader and
        // any plain <Image> pointed at a full res.cloudinary.com URL).
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                // fal.ai generated image hosts (e.g. v3b.fal.media)
                protocol: "https",
                hostname: "**.fal.media",
            },
        ],
    },
};

export default nextConfig;
