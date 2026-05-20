# Dineline Landing Page SOP

**Standard Operating Procedure for building campaign-matched restaurant landing pages with Claude Code.**

---

## 0. Why this exists

Most restaurant ads send the click to a generic reservations page or a homepage that says nothing about the ad the guest just tapped. The energy of the ad — the World Cup watch party, the rooftop happy hour, the new themed menu — evaporates the moment the page loads. The guest has to re-orient, re-decide, and most of them bounce.

**Dineline does it differently.** We build a dedicated landing page for *every* campaign so the page the guest lands on is a continuation of the ad that got them to click. Same hook, same imagery, same offer, one obvious next action. We carry the momentum from the scroll to the seat.

This is the creative, forward-thinking work that no other agency is delivering at our scale. This SOP is how we do it repeatably.

**Live reference examples** (built and shipped on free hosts):

- Clubs / wine club — https://finca-wine-club.netlify.app *(Netlify)*
- World Cup events — https://uob-world-cup.netlify.app *(Netlify)*
- Happy hour — https://rebellion-happy-hour.vercel.app *(Vercel)*

Pull these up alongside the relevant section below as the visual benchmark for what "good" looks like.

**Guiding principles**

1. **Message match.** The headline, imagery, and offer on the page mirror the ad creative. If the ad said "World Cup Final, big screens, $5 drafts," the page hero says exactly that.
2. **One job per page.** Each landing page has a single primary call to action (CTA). Reserve. Claim. RSVP. Book. Never make the guest choose between five things.
3. **Speed of context.** Within two seconds the guest should know: *this is the place from the ad, here's the offer, here's the button.*
4. **Mobile first.** The vast majority of ad clicks are on phones. Design and test for the phone before the desktop.
5. **Fast load.** Compressed images, minimal scripts. A slow page kills a warm click.

---

## 1. How to use this SOP

This document is a playbook for building landing pages **inside Claude Code** — all of it on free tools.

The repeatable loop is the same every time:

1. **Brief** — gather the campaign inputs (Section 2).
2. **Build** — give Claude Code the campaign prompt (Sections 3–7).
3. **Review** — check it against the QA checklist (Section 8).
4. **Deploy** — push to GitHub and connect Vercel or Netlify for auto-deploy (Section 9).
5. **Hand off** — give the client the live URL for their ad's destination.

> **Stack note.** This repo is a Next.js 14 + Tailwind app. Landing pages live as routes under `src/app/landing/<campaign-slug>/page.tsx`. You can also build a page as a single static `index.html` if the client just needs a standalone page — both deploy the same way (Section 9).

---

## 2. The campaign brief (gather this first)

Before building **any** page, collect these inputs from the client / ad. Paste them into the build prompt.

| Field | Example |
|---|---|
| Restaurant name | The Italian Place |
| Location / neighborhood | Wicker Park, Chicago |
| Campaign type | Happy Hour |
| The ad hook (exact words) | "Half-off oysters, every weekday 4–6pm" |
| The offer | $1 oysters, $7 spritzes, 4–6pm Mon–Fri |
| Primary CTA | "Reserve a table" |
| CTA destination | OpenTable / Resy / phone / form |
| Brand colors | #C8102E red, #1A1A1A charcoal |
| Logo | `/public/logo.png` |
| Hero image / video | provided asset or stock |
| Key dates / deadline | runs through Aug 31 |
| Legal / fine print | "21+. Dine-in only." |
| Tracking | Meta Pixel ID, GA4 ID (if any) |

If a field is missing, ask the client rather than inventing it.

---

## 3. SOP — Reservations landing page

**Use when:** the ad drives general bookings (dinner, weekend, date night). This is the workhorse page.

**Goal:** get the guest to book a table with the fewest possible clicks.

**Page structure**

1. **Hero** — restaurant name + logo, one-line value prop that matches the ad, a big "Reserve a Table" button, and a hero food/room shot.
2. **Why book** — 3 short proof points (signature dish, the vibe, the accolade). No paragraphs.
3. **The experience** — 3–4 appetizing photos with short captions.
4. **Reserve block** — embedded booking widget (OpenTable / Resy) *or* a date/time/party-size form that deep-links to the booking provider. Keep it above the fold on mobile too via a sticky CTA bar.
5. **Practical info** — address with a map link, hours, phone (click-to-call), parking note.
6. **Footer** — social links, fine print.

**Claude Code build prompt**

```
Build a reservations landing page at src/app/landing/reservations/page.tsx for
[RESTAURANT NAME] in [LOCATION]. Match the ad hook: "[AD HOOK]".
Primary CTA is "Reserve a Table" linking to [BOOKING URL].

Requirements:
- Mobile-first, single primary CTA, sticky "Reserve" bar on mobile.
- Hero with logo (/logo.png), headline matching the ad hook, and hero image.
- 3 proof points, a 4-photo experience gallery, reservation block, hours,
  click-to-call phone, address with a Google Maps link, social + fine print footer.
- Use Tailwind, the existing dark/glass styling, and framer-motion for subtle
  entrance animation. Brand colors: [COLORS].
- Optimize images (next/image), keep it fast, accessible alt text on all images.
```

**Done = the guest can go from click to confirmed booking in under 30 seconds on a phone.**

---

## 4. SOP — World Cup events landing page

**Use when:** the ad promotes match viewings / watch parties tied to the World Cup (or any major sporting event — adapt the same template for Super Bowl, March Madness, etc.).

**Live example:** https://uob-world-cup.netlify.app

**Goal:** RSVP or reserve a spot for a specific match, and convey the *atmosphere*.

**Page structure**

1. **Hero** — high-energy: "Watch [Match] at [Restaurant]," big screens / crowd imagery, kickoff date + time with the local time zone, a "Reserve Your Spot" CTA.
2. **Match schedule** — a clear list/table of which matches they're showing, with dates and times. Highlight the next upcoming match.
3. **The atmosphere** — what makes it special: number of screens, sound on, fan section, jerseys welcome, food & drink specials during matches.
4. **Game-day specials** — the offer that was in the ad ($5 drafts, wing buckets, etc.).
5. **RSVP / reserve block** — table reservation or a free RSVP form for big matches (capture name + email + party size + which match).
6. **Practical info + footer** — address, hours, "doors open 30 min before kickoff," fine print.

**Time-zone tip:** always show kickoff in the *restaurant's local time* and label it. Never assume the guest's zone.

**Claude Code build prompt**

```
Build a World Cup watch-party landing page at
src/app/landing/world-cup/page.tsx for [RESTAURANT NAME] in [LOCATION].
Match the ad hook: "[AD HOOK]". Primary CTA: "Reserve Your Spot" -> [URL/FORM].

Requirements:
- High-energy hero: match-up or "World Cup HQ" headline, crowd/big-screen imagery,
  next kickoff date + time in [LOCAL TIME ZONE] with a countdown if easy.
- A match schedule section (list of matches with date/time, highlight the next one).
- Atmosphere section (number of screens, sound on, fan section).
- Game-day specials section showing the offer: [OFFER].
- RSVP/reservation block capturing name, email, party size, and chosen match.
- Mobile-first, sticky CTA, Tailwind + existing styling, framer-motion accents,
  optimized images, accessible. Brand colors: [COLORS]. Fine print: [LEGAL].
```

**Done = a fan who saw the ad knows exactly which match, when, and reserves without leaving the page.**

---

## 5. SOP — Clubs / nightlife landing page

**Use when:** the ad promotes a club night, DJ set, bottle service, a wine club, or a recurring nightlife/membership event.

**Live example:** https://finca-wine-club.netlify.app (membership/wine-club take on this template)

**Goal:** drive guestlist sign-ups, table/bottle-service inquiries, or ticket purchases — and sell the *vibe*.

**Page structure**

1. **Hero** — dark, bold, immersive. Event name, date, headlining DJ/act, a "Get on the List" or "Book a Table" CTA. Looping muted background video works great here if an asset exists.
2. **Lineup / what's happening** — DJs, set times, theme of the night.
3. **The room** — gallery or short video of the space lit up, the crowd, the bar.
4. **Tables & bottle service** — packages and a "Request a Table" form (name, date, party size, budget tier, phone).
5. **Guestlist** — a simple sign-up form (name, email, party size) for free/reduced entry before a cutoff time.
6. **Know before you go** — age policy, dress code, entry time, address. **Be explicit** — nightlife pages live and die on dress code + age clarity.
7. **Footer** — social (Instagram is critical here), fine print.

**Claude Code build prompt**

```
Build a nightlife/club landing page at src/app/landing/clubs/page.tsx for
[VENUE NAME] in [LOCATION]. Match the ad hook: "[AD HOOK]".
Primary CTA: "Get on the List" -> [FORM]; secondary CTA: "Book a Table" -> [FORM].

Requirements:
- Dark, immersive, bold hero with event name, date, headlining act, and a
  looping muted background video if a video asset is provided (else a hero image).
- Lineup/set-times section, a room gallery, a bottle-service/tables section with
  packages and a request form (name, date, party size, budget tier, phone).
- Guestlist sign-up form (name, email, party size) with a cutoff time note.
- A clear "Know before you go": age policy, dress code, entry time, address.
- Mobile-first, sticky CTA, Instagram-forward footer, Tailwind + existing styling,
  framer-motion, optimized media, accessible. Brand colors: [COLORS]. Fine print: [LEGAL].
```

**Done = the guestlist form and table request are the loudest elements, and dress code / age are impossible to miss.**

---

## 6. SOP — Happy hour landing page

**Use when:** the ad promotes recurring happy-hour specials.

**Live example:** https://rebellion-happy-hour.vercel.app

**Goal:** communicate the deal + the window instantly, and convert to a walk-in or a reservation.

**Page structure**

1. **Hero** — the deal in the headline ("$1 Oysters & $7 Spritzes, 4–6pm Weekdays"), the days/times made unmissable, a "Reserve" or "Get Directions" CTA.
2. **The menu** — the actual happy-hour food & drink list with prices. This *is* the page; make it scannable and appetizing.
3. **When** — a clear days/times block. If it varies by day, show a simple grid.
4. **Photos** — the drinks and dishes, well-lit.
5. **CTA block** — reserve a table (for groups) and click-to-call + directions (for walk-ins).
6. **Footer** — fine print (e.g., "Bar & patio only").

**Claude Code build prompt**

```
Build a happy-hour landing page at src/app/landing/happy-hour/page.tsx for
[RESTAURANT NAME] in [LOCATION]. Match the ad hook: "[AD HOOK]".
Primary CTA: "Reserve a Table" -> [URL]; secondary: click-to-call + Google Maps directions.

Requirements:
- Hero headline states the deal and the window plainly: [OFFER], [DAYS/TIMES].
- A scannable happy-hour menu section (food + drinks with prices): [MENU ITEMS].
- A clear "When" days/times block (use a small grid if it varies by day).
- Appetizing photo section, reserve + directions CTA block.
- Mobile-first, sticky CTA, Tailwind + existing styling, framer-motion, optimized
  images, accessible. Brand colors: [COLORS]. Fine print: [LEGAL].
```

**Done = a guest reading on their phone knows the deal, the days, and the times before scrolling once.**

---

## 7. SOP — Themed menu landing page

**Use when:** the ad promotes a limited-time or special menu (seasonal tasting menu, Valentine's prix fixe, regional pop-up, chef collab, holiday feast).

**Goal:** sell the story and exclusivity of the menu, then convert to a booking.

**Page structure**

1. **Hero** — the theme name + dates ("Truffle Season — Feb 1–28"), evocative hero shot, a "Book Your Table" CTA. Lead with scarcity: "Limited time."
2. **The story** — 2–3 sentences on the concept: the chef, the season, the inspiration. This is where themed pages earn the click.
3. **The menu** — the courses/dishes laid out beautifully. If prix fixe, show the price and what's included. If add-ons (wine pairing), show them.
4. **Gallery** — styled photography of the standout dishes.
5. **Reserve block** — booking widget/form; if seats are limited, say so and show urgency honestly.
6. **Practical info + footer** — dates, dietary accommodations note, fine print.

**Claude Code build prompt**

```
Build a themed-menu landing page at src/app/landing/themed-menu/page.tsx for
[RESTAURANT NAME] in [LOCATION]. Theme: [THEME NAME], running [DATES].
Match the ad hook: "[AD HOOK]". Primary CTA: "Book Your Table" -> [BOOKING URL].

Requirements:
- Evocative hero with the theme name, dates, a "Limited time" scarcity cue, and CTA.
- A short story section (chef/season/inspiration): [STORY].
- A beautifully laid-out menu section with courses and prices: [MENU].
  Include any add-ons like wine pairings.
- Dish photo gallery, reservation block (note limited seats if applicable),
  dietary-accommodations note.
- Mobile-first, sticky CTA, elegant typography, Tailwind + existing styling,
  framer-motion, optimized images, accessible. Brand colors: [COLORS]. Fine print: [LEGAL].
```

**Done = the menu and its story feel special and time-limited, and booking is one tap away.**

---

## 8. QA checklist (run before every deploy)

- [ ] **Message match** — the hero matches the ad hook word-for-word in spirit.
- [ ] **One primary CTA** — it's the most prominent thing on the page, and it works.
- [ ] **CTA destination tested** — booking link / form / phone actually goes where it should.
- [ ] **Mobile** — checked on a real phone width (375px). Sticky CTA visible. No horizontal scroll.
- [ ] **Speed** — images compressed / using `next/image`; page loads fast on 4G.
- [ ] **Accuracy** — dates, times, prices, address, hours all correct and from the brief.
- [ ] **Time zone** — event times labeled with the restaurant's local zone.
- [ ] **Accessibility** — alt text on images, sufficient color contrast, focus states on buttons.
- [ ] **Legal** — required fine print present (21+, dine-in only, etc.).
- [ ] **Tracking** — Meta Pixel / GA4 installed if the client uses them.
- [ ] **Links** — social, maps, and click-to-call all work.
- [ ] **No placeholders** — no lorem ipsum, no "[RESTAURANT NAME]" left in the copy.

---

## 9. Deployment SOP — from Claude Code to a live URL (free)

Everything below is **free** and works straight out of Claude Code. The recommended path is **GitHub + auto-deploy**: you push your code to GitHub once, connect it to a host, and from then on every push redeploys automatically.

### 9.1 Step 1 — Put the page on GitHub (recommended)

GitHub is recommended because it unlocks **auto-deployment**: connect the repo once, and both Vercel and Netlify rebuild the live site automatically every time you push.

From Claude Code, in the project folder:

```bash
git checkout -b landing/<campaign-slug>
git add .
git commit -m "Add <campaign> landing page for <restaurant>"
git push -u origin landing/<campaign-slug>
```

Then open a pull request (or merge to `main`) when the page passes QA.

> No GitHub repo yet? Create one free at https://github.com/new, then add it as a remote:
> `git remote add origin https://github.com/<you>/<repo>.git`

### 9.2 Step 2 — Pick a host (both free, both auto-deploy from GitHub)

#### Option A — Vercel  →  https://vercel.com

Best fit for this Next.js repo (Vercel builds Next.js with zero config).

1. Sign in to **https://vercel.com** with your GitHub account (free Hobby plan).
2. Click **Add New… → Project** and import your GitHub repo.
3. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.
4. You get a live `*.vercel.app` URL in ~1 minute. Every push to the connected branch redeploys automatically; pull requests get their own preview URL.
5. Add a custom domain under **Project → Settings → Domains** when the client is ready.

*This repo already includes a `vercel.json`, so it's ready to import.*

#### Option B — Netlify  →  https://netlify.com

A great free alternative with the same GitHub auto-deploy model.

1. Sign in to **https://netlify.com** with your GitHub account (free Starter plan).
2. Click **Add new site → Import an existing project** and choose your GitHub repo.
3. Build settings for this Next.js app: **Build command** `next build`, and install the official **Netlify Next.js plugin** (Netlify usually adds it automatically when it detects Next.js). For a plain static HTML page, set the publish directory to the folder containing `index.html` and leave the build command empty.
4. Click **Deploy**. You get a live `*.netlify.app` URL. Every push redeploys automatically; PRs get **Deploy Previews**.
5. Add a custom domain under **Site configuration → Domains** when ready.

> **Vercel vs. Netlify, quick call:** for this Next.js repo, **Vercel** is the path of least resistance (zero config). Choose **Netlify** if the client is already on Netlify or you're shipping a standalone static HTML page. Both are free for our use and both auto-deploy from GitHub.

### 9.3 Step 3 — Verify the live page

Run the Section 8 QA checklist **against the live URL**, not just locally — especially the CTA destination and mobile view.

### 9.4 Step 4 — Hand off

Give the client the live URL to use as the **destination URL** in their ad. That single swap — pointing the ad at a campaign-matched page instead of a generic homepage — is the whole point of Dineline landing pages.

---

## 10. Quick reference

| Campaign | Route | Primary CTA | Live example |
|---|---|---|---|
| Reservations | `/landing/reservations` | Reserve a Table | — |
| World Cup events | `/landing/world-cup` | Reserve Your Spot | https://uob-world-cup.netlify.app |
| Clubs / nightlife | `/landing/clubs` | Get on the List | https://finca-wine-club.netlify.app |
| Happy hour | `/landing/happy-hour` | Reserve a Table | https://rebellion-happy-hour.vercel.app |
| Themed menus | `/landing/themed-menu` | Book Your Table | — |

**Deploy:** GitHub (auto-deploy) → Vercel (https://vercel.com) or Netlify (https://netlify.com). Both free.

**The one rule that matters most:** the page must feel like the ad. Match the message, give one clear action, and carry the momentum from the click to the booking.
