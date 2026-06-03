# Replicate API — Image Generation for Restaurant Landing Pages

Use for: hero food photography, brand-consistent visuals, custom illustrations. Budget: $20–50/mo at restaurant client volume.

## One-time setup

1. Sign up at https://replicate.com (free tier gives ~$5 credit to test)
2. Get API token: https://replicate.com/account/api-tokens → create new
3. Save the token as an environment variable (don't commit it):
   - **Windows (PowerShell):** `[Environment]::SetEnvironmentVariable("REPLICATE_API_TOKEN", "r8_xxx", "User")`
   - Open a new PowerShell window so it loads
4. Install the CLI (optional but useful): `npm install -g replicate`

## Models to use

| Model | Cost/image | When |
|---|---|---|
| `black-forest-labs/flux-1.1-pro` | ~$0.04 | Hero shots, final deliverables — best photographic realism |
| `black-forest-labs/flux-schnell` | ~$0.003 | Iteration, A/B variants — 10x cheaper, 90% of the quality |
| `google/nano-banana` | ~$0.04 | Character/style consistency across multiple images on one page |
| `recraft-ai/recraft-v3` | ~$0.04 | Brand-aligned illustrations, vector-style art |
| `bytedance/sdxl-lightning-4step` | ~$0.001 | Bulk variations, mood-board exploration |

## Prompt templates

### Hero food photography
```
{dish name}, overhead 45° angle, restaurant lighting, shallow depth of field, 
steam rising, fresh garnish, on {surface — slate / butcher block / linen},
{lighting — warm tungsten / cool daylight / golden hour}, editorial food magazine style, 
ultra-detailed, 8k, no people, no text
```

### Lifestyle / scene
```
{moment — friends dinner / family Father's Day / late-night crew}, 
warm authentic restaurant ambiance, hands reaching for shared plates, 
candid documentary photography, motion blur on background, 
35mm film grain, depth, no text overlay
```

### Brand pattern / texture
```
abstract {brand color palette} pattern, organic shapes inspired by {brand element}, 
seamless tileable, premium editorial design system, vector-friendly
```

### Logo cleanup (use img-to-img with original logo)
```
{original logo description}, high-contrast vector style, 
white background, ready for transparent PNG export, no rasterization artifacts
```

## Usage from a script (Node)

```js
import Replicate from "replicate";
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const output = await replicate.run(
  "black-forest-labs/flux-1.1-pro",
  { input: { prompt: "...", aspect_ratio: "16:9", output_format: "png" } }
);
// output[0] is a URL — download with fetch or curl
```

## Background removal (built-in)

For transparent food photos (the "feast bowl on cream" treatment):
```
replicate run lucataco/remove-bg --input image=@food.jpg
```

Then post-process with ImageMagick if any spillover remains:
```
magick output.png -fuzz 12% -fill none -draw "matte 0,0 floodfill" trimmed.png
```

## Budget control

- Set spending limit at https://replicate.com/account/billing → cap at $50/mo
- Use `flux-schnell` for exploration, `flux-1.1-pro` only for finals
- Cache successful prompts in this folder as `prompts/{restaurant}-{section}.txt`
