import { ImageResponse } from "next/og";

export const runtime = "edge";

/**
 * GET /api/og?title=...&subtitle=...
 * Generates a 1200x630 branded social-share image on the fly. Use it as a page
 * or campaign's Open Graph image so every shared link / ad looks designed:
 *
 *   export const metadata = {
 *     openGraph: { images: ["/api/og?title=Grow your Restaurant Revenue"] },
 *   };
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title")?.slice(0, 120) || "Dineline";
    const subtitle = searchParams.get("subtitle")?.slice(0, 160) || "";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "linear-gradient(135deg, #0a0a0a 0%, #161616 100%)",
                    color: "white",
                }}
            >
                <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#f5b942", textTransform: "uppercase" }}>
                    Dineline
                </div>
                <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
                    {title}
                </div>
                {subtitle ? (
                    <div style={{ display: "flex", fontSize: 32, color: "#a1a1aa", marginTop: 24 }}>{subtitle}</div>
                ) : null}
            </div>
        ),
        { width: 1200, height: 630 },
    );
}
