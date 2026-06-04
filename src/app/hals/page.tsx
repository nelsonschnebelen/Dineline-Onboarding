import type { Metadata } from "next";
import { CloudImage } from "@/components/ui/cloud-image";
import { Reveal } from "@/components/ui/reveal";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

export const metadata: Metadata = {
    title: "Hal's The Steakhouse — Buckhead, Atlanta",
    description:
        "Prime steaks, a New Orleans–inspired menu, and nightly live music. An Atlanta institution in Buckhead since 1989.",
    openGraph: {
        images: ["/api/og?title=Hal%27s%20The%20Steakhouse&subtitle=An%20Atlanta%20institution%20since%201989"],
    },
};

const GOLD = "#c5a572";

const press = ["Food Network", "Atlanta Journal-Constitution", "Eater Atlanta", "AtlantaNow", "StyleBlueprint"];

export default function HalsHome() {
    return (
        <SmoothScroll>
            <main className="relative min-h-screen bg-[#0a0807] text-white selection:bg-[#c5a572]/30">
                {/* ---- Hero ---- */}
                <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                    <CloudImage
                        src="hals/hero"
                        alt="Prime dry-aged ribeye at Hal's The Steakhouse"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* cinematic darkening */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0807]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent" />

                    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                        <Reveal variant="down">
                            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c5a572]">
                                Buckhead, Atlanta · Since 1989
                            </p>
                        </Reveal>
                        <Reveal variant="up" delay={0.1}>
                            <h1 className="font-elite-serif text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
                                Hal&apos;s
                                <span className="block text-[#c5a572]">The Steakhouse</span>
                            </h1>
                        </Reveal>
                        <Reveal variant="up" delay={0.2}>
                            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/75">
                                Prime steaks, a New Orleans–inspired kitchen, and nightly live music —
                                served with refined hospitality in the heart of Buckhead.
                            </p>
                        </Reveal>
                        <Reveal variant="up" delay={0.3}>
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href="#reserve"
                                    className="rounded-full bg-[#c5a572] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
                                >
                                    Reserve a Table
                                </a>
                                <a
                                    href="#menu"
                                    className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#c5a572] hover:text-[#c5a572]"
                                >
                                    Explore the Menu
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
                        Scroll
                    </div>
                </section>

                {/* ---- Story ---- */}
                <section className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
                    <Reveal>
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c5a572]">Our Story</p>
                        <h2 className="font-elite-serif text-4xl leading-tight md:text-5xl">
                            An Atlanta institution, three decades in the making.
                        </h2>
                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                            Since 1989, Hal&apos;s has been a centerpiece of Atlanta&apos;s Buckhead — a place of
                            relaxed charm, refined hospitality, and a loyal local clientele. Our professional staff
                            has worked side by side for over twenty years, delivering award-winning steaks, sumptuous
                            fish and shellfish, and a sincere passion for guest satisfaction.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
                            {[
                                { n: "1989", l: "Established" },
                                { n: "20+ yrs", l: "Staff together" },
                                { n: "2", l: "Cities" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="font-elite-serif text-3xl text-[#c5a572] md:text-4xl">{s.n}</div>
                                    <div className="mt-2 text-xs uppercase tracking-widest text-white/50">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ---- Atmosphere ---- */}
                <section className="grid items-center gap-0 md:grid-cols-2">
                    <Reveal variant="left" className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[34rem]">
                        <CloudImage
                            src="hals/atmosphere"
                            alt="The dining room at Hal's, with candlelight and live music"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </Reveal>
                    <Reveal variant="right" className="px-6 py-20 md:px-16">
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c5a572]">The Atmosphere</p>
                        <h2 className="font-elite-serif text-4xl leading-tight md:text-5xl">
                            Warm, inviting, and unmistakably Buckhead.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-white/70">
                            Nightly live music. An open kitchen. City lights from the upper patio. Hal&apos;s blends
                            relaxed sophistication with a social atmosphere at the bar and a genuine sense of
                            camaraderie — the epicenter of Atlanta&apos;s most memorable gatherings.
                        </p>
                    </Reveal>
                </section>

                {/* ---- Menu ---- */}
                <section id="menu" className="grid items-center gap-0 md:grid-cols-2">
                    <Reveal variant="left" className="order-2 px-6 py-20 md:order-1 md:px-16">
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c5a572]">The Menu</p>
                        <h2 className="font-elite-serif text-4xl leading-tight md:text-5xl">
                            Prime cuts, with New Orleans soul.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-white/70">
                            Award-winning steaks alongside sumptuous fish and shellfish, delectable pastas, and a
                            New Orleans–inspired menu — paired with an extensive wine selection and served by a
                            knowledgeable, career waitstaff.
                        </p>
                        <a
                            href="#reserve"
                            className="mt-8 inline-block border-b border-[#c5a572] pb-1 text-sm uppercase tracking-wider text-[#c5a572] transition-opacity hover:opacity-70"
                        >
                            View full menu
                        </a>
                    </Reveal>
                    <Reveal variant="right" className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto md:h-full md:min-h-[34rem]">
                        <CloudImage
                            src="hals/menu"
                            alt="A New Orleans–inspired plated course at Hal's"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </Reveal>
                </section>

                {/* ---- Press ---- */}
                <section className="border-y border-white/10 px-6 py-16">
                    <Reveal>
                        <p className="mb-8 text-center text-xs uppercase tracking-[0.35em] text-white/40">
                            As featured in
                        </p>
                        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
                            {press.map((p) => (
                                <span key={p} className="font-elite-serif text-lg text-white/55 md:text-xl">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ---- Reservations ---- */}
                <section id="reserve" className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
                    <Reveal>
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c5a572]">Reservations</p>
                        <h2 className="font-elite-serif text-4xl leading-tight md:text-6xl">Join us this evening.</h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
                            Reserve your table in Buckhead, or call us directly — we&apos;d love to host you.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            {/* TODO: drop in Hal's exact OpenTable URL */}
                            <a
                                href="https://www.opentable.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#c5a572] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
                            >
                                Book on OpenTable
                            </a>
                            <a
                                href="tel:+14042610025"
                                className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#c5a572] hover:text-[#c5a572]"
                            >
                                (404) 261-0025
                            </a>
                        </div>
                    </Reveal>
                </section>

                {/* ---- Footer ---- */}
                <footer className="border-t border-white/10 px-6 py-14">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-sm text-white/50 md:flex-row">
                        <span className="font-elite-serif text-xl text-white" style={{ color: GOLD }}>
                            Hal&apos;s The Steakhouse
                        </span>
                        <div className="flex gap-8">
                            <span>Atlanta · Buckhead</span>
                            <span>Nashville</span>
                            <a href="mailto:Eventcoordinator@Hals.Net" className="hover:text-[#c5a572]">
                                Private Events
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </SmoothScroll>
    );
}
