# Dineline Elite Landing Page Toolkit

The standard kit for every restaurant landing page going forward. Self-contained HTML stays the constraint — these libraries get **inlined as `<script>` tags** (or base64'd when shipping a one-file deliverable), so deploys remain drag-and-drop or auto-deploy via GitHub.

## What's in here

| File | Size | Purpose |
|---|---|---|
| `gsap.min.js` | 73KB | Core animation engine — timelines, tweens, eases |
| `ScrollTrigger.min.js` | 45KB | Scroll-driven choreography (pin, scrub, snap, reveal) |
| `lenis.min.js` | 12KB | Buttery smooth scroll (60fps inertia) |
| `aceternity-vocabulary.md` | — | Component pattern library (lamp, spotlight, beams, bento, marquee, magnetic CTA) |
| `replicate-setup.md` | — | Image generation API (food photos, brand visuals) |

## Use in a landing page

Inline the three JS files at the bottom of `<body>` (above your own scripts):

```html
<script>/* paste gsap.min.js contents here */</script>
<script>/* paste ScrollTrigger.min.js contents here */</script>
<script>/* paste lenis.min.js contents here */</script>
<script>
  // Lenis smooth scroll boot
  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  // GSAP + ScrollTrigger boot
  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
</script>
```

All subsequent animations should use GSAP timelines + ScrollTrigger rather than CSS keyframes or IntersectionObserver. This is the new house style.

## Phase roadmap

- **Phase 1 (now):** Replicate API + GSAP + Lenis + Aceternity vocabulary → instant A-tier visually
- **Phase 2 (next):** GSAP-orchestrated scroll sequences + shadcn/ui as base components → cinematic
- **Phase 3 (flagship pages):** Spline 3D embed + custom shaders → Awwwards territory
