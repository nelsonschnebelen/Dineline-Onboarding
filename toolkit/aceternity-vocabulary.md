# Aceternity / Magic UI Component Vocabulary

These are **patterns to implement inline**, not a library to import. House style. Pick 3–5 per page max — too many = visual chaos.

## Hero patterns

### Lamp effect
Conic-gradient cone radiating from the top, with the headline backlit. Use for: bold launch announcements, premium feel.
```css
.lamp::before { content:''; position:absolute; inset:0; background:conic-gradient(from 90deg at 50% 0%, transparent 0deg, var(--accent) 60deg, transparent 120deg); filter:blur(60px); }
```

### Spotlight
A radial gradient that follows the cursor across the hero. Use for: interactive feel without breaking flatness.
```js
hero.addEventListener('mousemove', e => {
  hero.style.setProperty('--mx', e.offsetX + 'px');
  hero.style.setProperty('--my', e.offsetY + 'px');
});
// CSS: background: radial-gradient(600px at var(--mx) var(--my), rgba(255,255,255,.15), transparent 40%);
```

### Sparkles / particles
Tiny animated dots floating up. Use sparingly for celebratory hero (limited-time offers).

### Beams
Diagonal light rays from corners. Use for: high-energy product hero (drinks, fast food).

## Layout patterns

### Bento grid
Asymmetric tile layout — different sizes, glassmorphic borders, hover glow. Use for: feature grids, menu highlights.

### Marquee
Infinite horizontal scroll with brand phrases or logos. Use for: social proof, trust strip.

### Magnetic CTA
Buttons that subtly pull toward the cursor. Use for: primary action emphasis.
```js
btn.addEventListener('mousemove', e => {
  const r = btn.getBoundingClientRect();
  const x = e.clientX - r.left - r.width/2;
  const y = e.clientY - r.top - r.height/2;
  btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
});
btn.addEventListener('mouseleave', () => btn.style.transform = '');
```

### Glowing cards
Cards with a moving conic-gradient border. Use for: pricing tiers, featured items.

### Meteors
Diagonal streaks falling from top-right. Decorative; use behind dark sections.

## Scroll patterns (use GSAP ScrollTrigger)

### Text reveal up
Headlines fade and slide up when entering viewport. Default for every h2.

### Image parallax
Background images move at 0.5x scroll speed. Use for: editorial sections.

### Pin + scrub
Section pins while a sub-animation plays as you scroll. Use for: storytelling sections (how it works, the journey).

### Snap sections
Full-viewport sections that snap into place. Use for: portfolio-style storytelling — flagship pages only.

## Color/typography defaults

- **Editorial:** serif display (Fraunces, Cardo) + sans body (Inter, Geist)
- **Performance:** geometric display (Space Grotesk, Anton) + mono accents (JetBrains Mono)
- **Luxe:** thin sans (Neue Haas Grotesk, Helvetica Now) + abundant whitespace
- **Restaurant default:** Fraunces display + Inter body + 1 accent color from the brand

## What to avoid
- Generic CSS keyframe `slide-in` on every element
- Drop shadows everywhere
- Centered single-column hero with a stock photo (Squarespace tells)
- More than 2 typefaces per page
