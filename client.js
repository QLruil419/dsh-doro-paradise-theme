window.__ModuleLoader__.load({
  id: 'dsh-doro-paradise-theme',
  factory: () => {
    const module = { exports: {} }
    const SCOPE = 'data-doro-paradise'
    const MANIFEST = '/doro-paradise-theme/manifest'

    function stylesheet(asset) {
      return `
/* Doro Paradise: pearl daylight, blackberry night, and one suspicious mascot. */
body[${SCOPE}] {
  --doro-accent: #e99ab8;
  --doro-accent-strong: #f2b4cd;
  --doro-highlight: #b95b8f;
  --doro-mint: #87c7bd;
  --doro-ground: #130f20;
  --doro-label: #eadce8;
  --doro-panel: color-mix(in srgb, var(--doro-ground) 78%, transparent);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: color-mix(in srgb, var(--doro-ground) 82%, transparent);
  --dsw-alias-bg-layer-2: color-mix(in srgb, var(--doro-ground) 90%, transparent);
  --dsw-alias-bg-layer-3: color-mix(in srgb, var(--doro-ground) 95%, transparent);
  --dsw-alias-label-primary: #fff6fb;
  --dsw-alias-label-secondary: var(--doro-label);
  --dsw-alias-label-tertiary: #cdb9ca;
  --dsw-alias-label-caption: #b9a5b6;
  --dsw-alias-brand-primary: var(--doro-accent-strong);
  --dsw-alias-button-primary-fill: var(--doro-highlight);
  --dsw-alias-state-business-primary: var(--doro-accent-strong);
  --dsw-alias-state-success-primary: var(--doro-mint);
  --dsw-alias-border-l: color-mix(in srgb, var(--doro-accent) 35%, transparent);
  --dsw-alias-border-l2: color-mix(in srgb, var(--doro-accent) 22%, transparent);
  --dsw-alias-interactive-bg-hover: color-mix(in srgb, var(--doro-accent) 13%, transparent);
  --dsw-alias-markdown-code-block: rgba(17, 12, 28, 0.92);
  --dsw-alias-markdown-code-block-banner: rgba(39, 26, 52, 0.94);
  --dsw-alias-markdown-inline-code: rgba(233, 154, 184, 0.14);
  --dsw-alias-scrollbar-bg-l1: color-mix(in srgb, var(--doro-accent) 32%, transparent);
  --dsw-alias-scrollbar-hover-l1: color-mix(in srgb, var(--doro-accent) 58%, transparent);
  background-color: var(--doro-ground) !important;
  background-image:
    radial-gradient(circle at 20% 14%, rgba(233,154,184,.12), transparent 30%),
    linear-gradient(rgba(19,15,32,.62), rgba(19,15,32,.62)),
    url("${asset.backgroundDark}") !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

body[${SCOPE}]:not([data-ds-dark-theme]) {
  --doro-accent: #9b4d73;
  --doro-accent-strong: #833e67;
  --doro-highlight: #d96e9a;
  --doro-ground: #fff8fb;
  --doro-label: #62485b;
  --doro-panel: rgba(255,248,251,.84);
  --dsw-alias-bg-layer-1: rgba(255,248,251,.82);
  --dsw-alias-bg-layer-2: rgba(255,248,251,.90);
  --dsw-alias-bg-layer-3: rgba(255,248,251,.94);
  --dsw-alias-label-primary: #352331;
  --dsw-alias-label-secondary: #62485b;
  --dsw-alias-label-tertiary: #765e70;
  --dsw-alias-label-caption: #806b7b;
  --dsw-alias-brand-primary: #8f416c;
  --dsw-alias-state-success-primary: #397f75;
  --dsw-alias-markdown-code-block: rgba(255, 250, 252, 0.94);
  --dsw-alias-markdown-code-block-banner: rgba(243, 226, 237, 0.94);
  --dsw-alias-markdown-inline-code: rgba(155, 77, 115, 0.12);
  background-image:
    radial-gradient(circle at 20% 14%, rgba(217,110,154,.10), transparent 30%),
    linear-gradient(rgba(255,248,251,.58), rgba(255,248,251,.58)),
    url("${asset.backgroundLight}") !important;
}

body[${SCOPE}] ::selection { background: color-mix(in srgb, var(--doro-highlight) 48%, transparent); }
body[${SCOPE}] :focus-visible { outline: 2px solid var(--doro-accent-strong); outline-offset: 2px; }
body[${SCOPE}] textarea { caret-color: var(--doro-accent-strong); }

body[${SCOPE}] [data-slot="sidebar"] > div:first-child {
  background-image:
    linear-gradient(180deg,
      color-mix(in srgb, var(--doro-ground) 98%, transparent) 0%,
      color-mix(in srgb, var(--doro-ground) 96%, transparent) 52%,
      color-mix(in srgb, var(--doro-ground) 58%, transparent) 76%,
      color-mix(in srgb, var(--doro-ground) 30%, transparent) 100%),
    url("${asset.overlay}");
  background-size: auto, 94% auto;
  background-position: center, bottom 48px center;
  background-repeat: no-repeat;
}
body[${SCOPE}] [data-slot="sidebar"] > div[class*="collapsed"] { background-image: none; }
body[${SCOPE}] [data-slot="sidebar"] [class*="sessionItem"][class*="active"],
body[${SCOPE}] [data-slot="sidebar"] [aria-current="true"] {
  box-shadow: inset 3px 0 0 var(--doro-accent-strong);
}

body[${SCOPE}] [data-slot="sidebar"] [class*="brand"] > svg,
body[${SCOPE}] [data-slot="sidebar"] [class*="brand"] > * { visibility: hidden; }
body[${SCOPE}] [data-slot="sidebar"] [class*="brand"] {
  background: left center / contain no-repeat url("${asset.wordmark}");
}
body[${SCOPE}] button[class*="newSession"] > svg { visibility: hidden; }
body[${SCOPE}] button[class*="newSession"] {
  background-image: url("${asset.icon}");
  background-size: 28px 28px;
  background-position: 10px center;
  background-repeat: no-repeat;
}

body[${SCOPE}] [class*="headline"] > span:has(> svg[viewBox="0 0 23.16 17.04"]) { display: none; }
body[${SCOPE}] [class*="headlineText"] {
  visibility: hidden;
  position: relative;
  display: inline-block;
  width: 360px;
  max-width: 70vw;
  height: 120px;
}
body[${SCOPE}] [class*="headlineText"]::after {
  content: '';
  position: absolute;
  inset: 0;
  visibility: visible;
  background: center / contain no-repeat url("${asset.heroLogo}");
}

body[${SCOPE}] [data-composer-card] {
  position: relative;
  border: 1px solid color-mix(in srgb, var(--doro-accent) 42%, transparent);
  background: color-mix(in srgb, var(--doro-ground) 84%, transparent);
  box-shadow: 0 8px 30px rgba(23, 11, 29, .24), 0 0 24px color-mix(in srgb, var(--doro-accent) 10%, transparent);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  backdrop-filter: blur(14px) saturate(1.08);
}
body[${SCOPE}] [data-composer-card]:focus-within {
  border-color: var(--doro-accent-strong);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--doro-accent) 24%, transparent), 0 10px 36px rgba(23, 11, 29, .3);
}
body[${SCOPE}] [data-composer-card]::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 50%;
  width: 34px;
  height: 34px;
  transform: translateX(-50%);
  pointer-events: none;
  background: center / contain no-repeat url("${asset.icon}");
  filter: drop-shadow(0 2px 6px rgba(60, 31, 72, .25));
}
body[${SCOPE}] [data-composer-card]::after {
  content: '';
  position: absolute;
  inset: -8px;
  pointer-events: none;
  border: 20px solid transparent;
  border-image: url("${asset.frame}") 40 / 20px / 0 stretch;
  opacity: .86;
  -webkit-mask-image:
    radial-gradient(circle 44px at left top, #000 54%, transparent 100%),
    radial-gradient(circle 44px at right top, #000 54%, transparent 100%),
    radial-gradient(circle 44px at left bottom, #000 54%, transparent 100%),
    radial-gradient(circle 44px at right bottom, #000 54%, transparent 100%);
  mask-image:
    radial-gradient(circle 44px at left top, #000 54%, transparent 100%),
    radial-gradient(circle 44px at right top, #000 54%, transparent 100%),
    radial-gradient(circle 44px at left bottom, #000 54%, transparent 100%),
    radial-gradient(circle 44px at right bottom, #000 54%, transparent 100%);
}

body[${SCOPE}] [class*="bubble"] {
  border: 1px solid color-mix(in srgb, var(--doro-accent) 22%, transparent);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
body[${SCOPE}] [class*="userRow"] [class*="bubble"] {
  border-color: color-mix(in srgb, var(--doro-highlight) 52%, transparent);
  background: color-mix(in srgb, var(--doro-highlight) 48%, var(--doro-ground));
}
body[${SCOPE}]:not([data-ds-dark-theme]) [class*="userRow"] [class*="bubble"] {
  background: color-mix(in srgb, #f7cedf 88%, transparent);
}

body[${SCOPE}] [data-conversation-scroll] [class*="column"] {
  background: linear-gradient(90deg, transparent, var(--doro-panel) 10%, var(--doro-panel) 90%, transparent);
  padding-inline: 18px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
body[${SCOPE}] [data-conversation-scroll] pre,
body[${SCOPE}] [data-conversation-scroll] code { text-shadow: none; }
body[${SCOPE}] [class*="callRow"] {
  background: color-mix(in srgb, var(--doro-ground) 58%, transparent);
  border-radius: 9px;
  padding-inline: 8px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
body[${SCOPE}] [class*="codeBody"],
body[${SCOPE}] [class*="code"] { border-left-color: var(--doro-accent); }
body[${SCOPE}] [role="dialog"],
body[${SCOPE}] [data-shell-overlay] > * {
  border: 1px solid color-mix(in srgb, var(--doro-accent) 34%, transparent);
  box-shadow: 0 18px 64px rgba(17, 8, 24, .48);
}

body[${SCOPE}] h1,
body[${SCOPE}] h2,
body[${SCOPE}] [class*="headline"] {
  font-family: 'STKaiti', 'KaiTi', 'Kaiti SC', 'Noto Serif SC', Georgia, serif;
  letter-spacing: .025em;
}

body[${SCOPE}] .doro-petals {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}
body[${SCOPE}] .doro-petals > i {
  position: absolute;
  top: -20px;
  width: 7px;
  height: 11px;
  border-radius: 70% 20% 70% 20%;
  background: var(--doro-accent);
  opacity: 0;
  animation: doro-petal-drift linear infinite;
}
@keyframes doro-petal-drift {
  0% { transform: translate3d(0,-4vh,0) rotate(0deg); opacity: 0; }
  10% { opacity: .46; }
  100% { transform: translate3d(70px,104vh,0) rotate(560deg); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  body[${SCOPE}] .doro-petals { display: none; }
}
`
    }

    function apply(ctx) {
      ctx.effect(() => {
        const style = document.createElement('style')
        style.setAttribute('data-plugin', 'doro-paradise-theme')
        const petals = document.createElement('div')
        petals.className = 'doro-petals'
        petals.setAttribute('aria-hidden', 'true')
        for (let i = 0; i < 18; i++) {
          const petal = document.createElement('i')
          petal.style.left = `${(i * 5.83 + (i % 4) * 2.1).toFixed(2)}%`
          petal.style.animationDuration = `${15 + (i % 7) * 3}s`
          petal.style.animationDelay = `${-(i % 9) * 3.1}s`
          petals.append(petal)
        }

        const iconLink = document.querySelector('link[rel~="icon"]')
        const originalIcon = iconLink?.getAttribute('href') ?? null
        let cancelled = false

        fetch(MANIFEST)
          .then(response => {
            if (!response.ok) throw new Error(`theme manifest: ${response.status}`)
            return response.json()
          })
          .then(asset => {
            if (cancelled) return
            style.textContent = stylesheet(asset)
            document.head.append(style)
            document.body.setAttribute(SCOPE, '')
            document.body.append(petals)
            if (iconLink !== null) iconLink.setAttribute('href', asset.favicon)
          })
          .catch(error => console.warn('[Doro Paradise] theme not applied:', error))

        return () => {
          cancelled = true
          style.remove()
          petals.remove()
          document.body.removeAttribute(SCOPE)
          if (iconLink !== null && originalIcon !== null) iconLink.setAttribute('href', originalIcon)
        }
      }, 'doro-paradise: skin')
    }

    module.exports.apply = apply
    module.exports.inject = []
    return module.exports
  },
})
