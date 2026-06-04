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
        ],
    },
};

export default nextConfig;
