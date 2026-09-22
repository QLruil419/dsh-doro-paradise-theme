# Image generation prompts

These assets were generated with the built-in OpenAI image generation tool. The text below records the production prompts so the theme can be extended consistently.

## Doro mascot overlay

```text
Use case: stylized-concept
Asset type: transparent sidebar mascot overlay for a DeepSeek Harness coding UI theme
Primary request: create an original chibi mascot inspired by the broad visual idea of Doro/Dororong from NIKKE: a tiny white blob-like four-legged creature with a comically serene face, huge lavender eyes, pastel pink bobbed hair, a rose-like side bun, and a small violet ribbon. It should evoke the meme's mischievous-cute energy without copying any existing pose or artwork.
Subject: one full-body mascot, standing in a playful prowling pose, looking slightly upward; simple rounded anatomy; clean silhouette
Style/medium: polished 2D anime game UI sticker art, soft cel shading, pearl highlights, subtle lavender rim light
Composition/framing: vertical portrait, full body fully inside canvas, generous transparent margin, centered
Color palette: pearl white, blush pink, lavender, tiny mint accents
Constraints: genuinely transparent background with preserved alpha; no scenery; no text; no logo; no watermark; no cropped limbs; suitable for display at 300 px wide
```

## Light wallpaper

```text
Use case: stylized-concept
Asset type: light-mode 16:9 desktop wallpaper for a DeepSeek Harness coding UI theme
Input images: use the previously generated chibi mascot as the character reference and keep its pink hair, rose bun, violet bow, lavender eyes, white blob body, and mischievous-cute personality consistent
Primary request: an elegant, airy "Paradise terminal" environment combining pearl-white futuristic architecture, translucent glass petals, soft holographic code glyphs, rose motifs, and a playful Doro-like mascot peeking from the far-right edge
Scene/backdrop: luminous white-and-blush sci-fi garden with distant arches and subtle UI-grid geometry
Style/medium: polished 2D anime game key art with restrained detail, premium UI wallpaper, soft cel-painted finish
Composition/framing: 16:9 landscape, broad quiet negative space across the center and left for readable UI; mascot only on the far right and no more than 22% of canvas; no important detail at bottom-center where the composer sits
Lighting/mood: bright diffuse morning light, whimsical yet calm
Color palette: pearl white #fff8fb, blush #f2bfd7, lavender #a995d9, mint #87c7bd, pale gold accents
Constraints: no text, no logo, no watermark, no borders, no dark high-contrast shapes behind the central reading area
```

## Dark wallpaper

```text
Use case: stylized-concept
Asset type: dark-mode 16:9 desktop wallpaper for a DeepSeek Harness coding UI theme
Input images: keep the same mascot identity and the same elegant Paradise-terminal architecture from the two reference images, but create a distinct night composition
Primary request: a midnight "Paradise terminal" coding garden under a violet sky, with the same chibi mascot peeking mischievously from the far-right edge; pearl arches, glowing rose-window motifs, translucent lavender crystals, and very subtle holographic code panels
Style/medium: polished 2D anime game key art, premium restrained UI wallpaper, soft cel-painted finish
Composition/framing: 16:9 landscape, broad quiet low-detail negative space across center and left for readable UI; mascot only on far right and no more than 22% of canvas; bottom-center subdued and uncluttered
Lighting/mood: moonlit, dreamy, slightly uncanny but cute; low luminance in the reading area
Color palette: blackberry #130f20, deep plum #21142e, dusty rose #e99ab8, lavender #a995d9, mint glow #87c7bd, pearl highlights
Constraints: no text, no logo, no watermark, no border; avoid pure black, avoid saturated neon, avoid busy detail behind the central reading area
```

## Dorothy + Doro overlay

```text
Use case: stylized-concept
Asset type: transparent character overlay for a DeepSeek Harness sidebar and bottom-right corner
Input images: preserve the same polished anime-game rendering, pearl/blush/lavender palette, Paradise architecture motifs, and the exact chibi mascot identity from the recent theme assets
Primary request: depict Dorothy herself together with the small Doro-like mascot, as an elegant full-body duo. Dorothy is the dominant subject: a poised adult anime woman with very long flowing pastel-pink hair, violet eyes, rose-shaped twin hair ornaments, an intricate white ruffled Victorian-inspired dress fused with subtle pearl-and-gold futuristic armor, lace stockings, ribboned boots, and delicate wing-like mechanical ornaments. She wears a calm, gracious smile with a faintly uncanny confidence. The tiny white blob mascot with pink hair and lavender eyes sits beside one boot, looking comically pleased.
Composition/framing: tall vertical full-body character cutout; Dorothy standing in a graceful three-quarter pose, one hand lightly extended; mascot near her feet; all hair, dress, mechanical ornaments, and limbs fully inside canvas; generous transparent margin; balanced silhouette that still reads at 300 px wide
Style/medium: premium 2D anime game character illustration, clean cel shading, fine costume detail, soft pearl highlights
Color palette: white, pearl, blush pink, lavender, pale gold, tiny mint accents
Constraints: genuinely transparent background with preserved alpha; no scenery; no text; no logo; no watermark; no weapon; no cropped elements; tasteful non-sexual presentation
```

## Transparency cleanup

```text
Use case: background-extraction
Asset type: transparent character overlay
Primary request: remove the entire gray-pink gradient background and make it genuinely transparent with preserved alpha
Input images: the immediately previous Dorothy-and-mascot illustration is the edit target
Constraints: change only the background; keep Dorothy, her full costume, hair, wings, facial features, pose, and the small mascot exactly unchanged; preserve fine hair and lace edges; no added glow backdrop, shadow rectangle, scenery, text, logo, or watermark; keep the full uncropped character duo inside the canvas
```

## v1.2.0 clean wallpaper edits

```text
Use case: precise-object-edit
Asset type: desktop application wallpaper, light and dark theme variants
Primary request: remove only the large pink chibi Doro character peeking in from the right edge and reconstruct the Eden architecture, crystal railing, roses, sky, waterfalls, and surrounding details naturally behind it.
Composition/framing: preserve the exact landscape composition and the quiet center space.
Constraints: keep every other part of each wallpaper unchanged; do not add any person, mascot, text, logo, watermark, or new focal object; preserve the original light/night palette; fill the removed area seamlessly.
```

## v1.2.0 Dorothy-only overlay

```text
Use case: precise-object-edit
Asset type: transparent character overlay for a desktop theme
Primary request: remove only the small chibi Doro mascot at the lower right, leaving Dorothy alone as a full-body character cutout.
Constraints: preserve Dorothy's face, pose, hair, white-and-pink dress, wings, hand, legs, shoes, proportions, linework, colors, and full silhouette exactly; reconstruct any tiny overlap; keep a genuinely transparent background with clean antialiased edges; no shadow rectangle, gradient background, text, watermark, or additional objects.
```

## README Dorothy wallpaper

```text
Use case: compositing
Asset type: wide GitHub README hero wallpaper for the Doro Paradise DeepSeek Harness theme
Primary request: create one finished widescreen wallpaper that visibly includes Dorothy within the Eden garden scene, rather than showing a standalone sidebar character image
Input images: the clean light Eden wallpaper is the edit target; the Dorothy overlay is the main character reference; the Doro overlay is the mascot reference
Scene/backdrop: preserve the luminous pearl-white, pale-pink, rose-and-crystal futuristic Eden garden
Subject: place Dorothy as an elegant full-body character around the center-left, immediately recognizable but with breathing room; place the small Doro mascot near the lower-right
Style/medium: polished anime game key art matching the supplied assets
Composition/framing: 16:9 landscape wallpaper balanced for a GitHub README banner; Dorothy must be part of the wallpaper composition, not an isolated portrait panel
Lighting/mood: soft luminous daylight and a dreamy Eden atmosphere
Color palette: pearl white, blush pink, lavender, and rose gold
Constraints: preserve Dorothy's pink hair, white layered dress, rose ornaments, mechanical angel wings, and recognizable face; preserve Doro's pink-haired white mascot form; no text, logo, UI, border, or watermark
Avoid: portrait canvas, dark background, sidebar layout, character cut off at the head, or additional characters
```

## v1.3.0 Eden-integrated wallpaper Dorothy

```text
Use case: stylized-concept
Asset type: transparent full-body character overlay placed near the center of a pastel Eden desktop wallpaper
Primary request: create a new, distinct Dorothy-inspired full-body illustration that feels naturally designed for the luminous Eden garden and does not resemble pasted-in battle splash art
Subject: long pastel-pink hair, violet eyes, rose ornaments, pearl-white layered dress, restrained pale-lavender and rose-gold mechanical-angel details; calm three-quarter standing pose, one hand gently holding a flower or ribbon and the other relaxed
Style/medium: premium 2D anime game illustration with delicate cel painting, soft edges, restrained detail, and low contrast suitable for display at 35–45% opacity
Lighting/mood: luminous diffuse morning light, soft pearl highlights, gentle atmospheric rim light
Constraints: genuinely transparent background; no mascot, scenery, text, logo, watermark, weapon, dark outfit, theatrical combat pose, or rectangular backdrop; keep the complete silhouette inside the canvas
```

## v1.3.0 sidebar tea-party Dorothy

```text
Use case: stylized-concept
Asset type: transparent vertical character vignette for the lower portion of a narrow application sidebar
Primary request: create a second Dorothy-inspired illustration that is unmistakably different from the wallpaper character: a warm rose-garden tea-party vignette with a seated three-quarter pose and a small Doro mascot beside her
Subject: seated sideways on a pearl-and-rose chair, holding a tiny teacup; high-neck pearl blouse, layered blush-and-white skirt, translucent capelet, lavender bows, rose-gold filigree, compact mechanical feather accents; Doro curled happily near her feet
Composition/framing: tall narrow composition concentrated in the lower two-thirds, complete character, chair, shoes and mascot inside the canvas, compact silhouette readable in a 380px sidebar
Constraints: genuinely transparent background; no scenic backdrop, text, logo, watermark, weapon, standing pose, oversized wings, cropped character, or rectangular gradient
```

## v1.3.0 README preview composite

```text
Use case: compositing
Asset type: 16:9 GitHub README preview matching the actual Doro Paradise theme
Primary request: compose the clean Eden wallpaper with the exact new calm standing Dorothy at center-left and the Doro mascot near the lower-right
Integration: match the background's diffuse daylight, pearl highlights, pastel saturation, and atmospheric softness so Dorothy feels native to the garden rather than pasted over it
Constraints: preserve the wide architecture and character identity; no second Dorothy, sidebar layout, text, logo, UI, border, watermark, harsh contrast, or cropped body
```
