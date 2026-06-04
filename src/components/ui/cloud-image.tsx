import Image, { type ImageProps } from "next/image";
import { cloudinaryLoader } from "@/lib/cloudinary-loader";

/**
 * next/image with the Cloudinary loader baked in. Pass a Cloudinary public ID
 * as `src` and you get automatic f_auto/q_auto delivery + responsive srcset.
 *
 *   <CloudImage src="onboarding/e1fyn9jepnqetnuawxla" alt="Sample" width={864} height={576} />
 *
 * A full http(s) URL in `src` is passed through unchanged, so this is also a
 * safe drop-in for existing remote images.
 */
export function CloudImage(props: Omit<ImageProps, "loader">) {
    return <Image loader={cloudinaryLoader} {...props} />;
}
