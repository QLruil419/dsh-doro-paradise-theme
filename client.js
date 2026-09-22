window.__ModuleLoader__.load({
  id: 'dsh-doro-paradise-theme',
  factory: (require) => {
    const module = { exports: {} }
    const SCOPE = 'data-doro-paradise'
    const MANIFEST = '/doro-paradise-theme/manifest'
    const STORAGE_KEY = 'doro-paradise:appearance:v1'
    const DEFAULT_APPEARANCE = Object.freeze({
      wallpaperOpacity: 42,
      wallpaperBlur: 0,
      sidebarOpacity: 62,
      panelOpacity: 78,
      glassBlur: 16,
      saturation: 112,
      dorothyOpacity: 38,
      dorothySize: 82,
      doroSize: 230,
      liquidGlass: true,
      petals: true,
    })

    const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value)))

    function normalizeAppearance(value = {}) {
      return {
        wallpaperOpacity: clamp(value.wallpaperOpacity ?? DEFAULT_APPEARANCE.wallpaperOpacity, 0, 100),
        wallpaperBlur: clamp(value.wallpaperBlur ?? DEFAULT_APPEARANCE.wallpaperBlur, 0, 32),
        sidebarOpacity: clamp(value.sidebarOpacity ?? DEFAULT_APPEARANCE.sidebarOpacity, 18, 100),
        panelOpacity: clamp(value.panelOpacity ?? DEFAULT_APPEARANCE.panelOpacity, 28, 100),
        glassBlur: clamp(value.glassBlur ?? DEFAULT_APPEARANCE.glassBlur, 0, 40),
        saturation: clamp(value.saturation ?? DEFAULT_APPEARANCE.saturation, 80, 150),
        dorothyOpacity: clamp(value.dorothyOpacity ?? DEFAULT_APPEARANCE.dorothyOpacity, 0, 100),
        dorothySize: clamp(value.dorothySize ?? DEFAULT_APPEARANCE.dorothySize, 42, 110),
        doroSize: clamp(value.doroSize ?? DEFAULT_APPEARANCE.doroSize, 96, 480),
        liquidGlass: value.liquidGlass ?? DEFAULT_APPEARANCE.liquidGlass,
        petals: value.petals ?? DEFAULT_APPEARANCE.petals,
      }
    }

    function readAppearance() {
      try {
        return normalizeAppearance(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}'))
      } catch {
        return { ...DEFAULT_APPEARANCE }
      }
    }

    function writeAppearance(value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeAppearance(value)))
    }

    function applyAppearance(value) {
      const appearance = normalizeAppearance(value)
      const body = document.body
      body.style.setProperty('--doro-wallpaper-opacity', (appearance.wallpaperOpacity / 100).toFixed(2))
      body.style.setProperty('--doro-wallpaper-blur', `${appearance.wallpaperBlur}px`)
      body.style.setProperty('--doro-sidebar-top', `${clamp(appearance.sidebarOpacity + 22, 18, 100)}%`)
      body.style.setProperty('--doro-sidebar-mid', `${clamp(appearance.sidebarOpacity + 12, 18, 100)}%`)
      body.style.setProperty('--doro-sidebar-low', `${clamp(appearance.sidebarOpacity - 12, 8, 100)}%`)
      body.style.setProperty('--doro-sidebar-bottom', `${clamp(appearance.sidebarOpacity - 32, 0, 100)}%`)
      body.style.setProperty('--doro-panel-fill', `${appearance.panelOpacity}%`)
      body.style.setProperty('--doro-glass-blur', `${appearance.glassBlur}px`)
      body.style.setProperty('--doro-glass-saturation', (appearance.saturation / 100).toFixed(2))
      body.style.setProperty('--doro-dorothy-opacity', (appearance.dorothyOpacity / 100).toFixed(2))
      body.style.setProperty('--doro-dorothy-size', `${appearance.dorothySize}vh`)
      body.style.setProperty('--doro-mascot-size', `${appearance.doroSize}px`)
      body.setAttribute('data-doro-glass', appearance.liquidGlass ? 'liquid' : 'frosted')
      body.setAttribute('data-doro-motion', appearance.petals ? 'on' : 'off')
    }

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
  --doro-wallpaper-opacity: .42;
  --doro-wallpaper-blur: 0px;
  --doro-sidebar-top: 84%;
  --doro-sidebar-mid: 74%;
  --doro-sidebar-low: 50%;
  --doro-sidebar-bottom: 30%;
  --doro-panel-fill: 78%;
  --doro-glass-blur: 16px;
  --doro-glass-saturation: 1.12;
  --doro-dorothy-opacity: .38;
  --doro-dorothy-size: 82vh;
  --doro-mascot-size: 230px;
  --doro-panel: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  --dsw-alias-bg-layer-2: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), rgba(255,255,255,.05));
  --dsw-alias-bg-layer-3: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), rgba(255,255,255,.09));
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
  background-image: none !important;
  isolation: isolate;
}

body[${SCOPE}]:not([data-ds-dark-theme]) {
  --doro-accent: #9b4d73;
  --doro-accent-strong: #833e67;
  --doro-highlight: #d96e9a;
  --doro-ground: #fff8fb;
  --doro-label: #62485b;
  --doro-panel: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  --dsw-alias-bg-layer-1: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  --dsw-alias-bg-layer-2: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), rgba(155,77,115,.06));
  --dsw-alias-bg-layer-3: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), rgba(155,77,115,.10));
  --dsw-alias-label-primary: #352331;
  --dsw-alias-label-secondary: #62485b;
  --dsw-alias-label-tertiary: #765e70;
  --dsw-alias-label-caption: #806b7b;
  --dsw-alias-brand-primary: #8f416c;
  --dsw-alias-state-success-primary: #397f75;
  --dsw-alias-markdown-code-block: rgba(255, 250, 252, 0.94);
  --dsw-alias-markdown-code-block-banner: rgba(243, 226, 237, 0.94);
  --dsw-alias-markdown-inline-code: rgba(155, 77, 115, 0.12);
}

body[${SCOPE}] .doro-wallpaper {
  position: fixed;
  inset: -48px;
  z-index: -2;
  pointer-events: none;
  background: center / cover no-repeat url("${asset.backgroundDark}");
  opacity: var(--doro-wallpaper-opacity);
  filter: blur(var(--doro-wallpaper-blur)) saturate(var(--doro-glass-saturation));
  transform: translateZ(0) scale(1.025);
  transform-origin: center;
  transition: opacity .18s ease, filter .18s ease;
}
body[${SCOPE}]:not([data-ds-dark-theme]) .doro-wallpaper {
  background-image: url("${asset.backgroundLight}");
}

body[${SCOPE}] .doro-wallpaper-dorothy,
body[${SCOPE}] .doro-wallpaper-doro {
  position: fixed;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  transform: translateZ(0);
  transition: opacity .18s ease, width .18s ease, height .18s ease;
}
body[${SCOPE}] .doro-wallpaper-dorothy {
  left: calc(50% + clamp(0px, 8vw, 150px));
  bottom: -7vh;
  z-index: -2;
  width: min(54vw, 680px);
  height: var(--doro-dorothy-size);
  opacity: var(--doro-dorothy-opacity);
  background-image: url("${asset.dorothy}");
  filter: drop-shadow(0 18px 36px rgba(32, 14, 40, .24));
  transform: translateX(-50%) translateZ(0);
}
body[${SCOPE}] .doro-wallpaper-doro {
  right: clamp(10px, 2vw, 36px);
  bottom: clamp(8px, 2vh, 24px);
  z-index: -1;
  width: var(--doro-mascot-size);
  height: var(--doro-mascot-size);
  opacity: .92;
  background-image: url("${asset.doro}");
  filter: drop-shadow(0 12px 26px rgba(46, 20, 55, .28));
}
@media (max-width: 900px) {
  body[${SCOPE}] .doro-wallpaper-dorothy {
    left: 52%;
    width: 72vw;
  }
  body[${SCOPE}] .doro-wallpaper-doro { right: 6px; }
}

body[${SCOPE}] ::selection { background: color-mix(in srgb, var(--doro-highlight) 48%, transparent); }
body[${SCOPE}] :focus-visible { outline: 2px solid var(--doro-accent-strong); outline-offset: 2px; }
body[${SCOPE}] textarea { caret-color: var(--doro-accent-strong); }

body[${SCOPE}] [data-slot="sidebar"] > div:first-child {
  background-image:
    linear-gradient(180deg,
      color-mix(in srgb, var(--doro-ground) var(--doro-sidebar-top), transparent) 0%,
      color-mix(in srgb, var(--doro-ground) var(--doro-sidebar-mid), transparent) 52%,
      color-mix(in srgb, var(--doro-ground) var(--doro-sidebar-low), transparent) 76%,
      color-mix(in srgb, var(--doro-ground) var(--doro-sidebar-bottom), transparent) 100%),
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
  background: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  box-shadow: 0 8px 30px rgba(23, 11, 29, .24), 0 0 24px color-mix(in srgb, var(--doro-accent) 10%, transparent);
  -webkit-backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
  backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
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
  -webkit-backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
  backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
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
  -webkit-backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
  backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
}
body[${SCOPE}] [data-conversation-scroll] pre,
body[${SCOPE}] [data-conversation-scroll] code { text-shadow: none; }
body[${SCOPE}] [class*="callRow"] {
  background: color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent);
  border-radius: 9px;
  padding-inline: 8px;
  -webkit-backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
  backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
}
body[${SCOPE}] [class*="codeBody"],
body[${SCOPE}] [class*="code"] { border-left-color: var(--doro-accent); }
body[${SCOPE}] [role="dialog"],
body[${SCOPE}] [data-shell-overlay] > * {
  border: 1px solid color-mix(in srgb, var(--doro-accent) 34%, transparent);
  box-shadow: 0 18px 64px rgba(17, 8, 24, .48);
  -webkit-backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
  backdrop-filter: blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation));
}

/* Liquid mode adds a bright refractive rim and soft internal caustic sheen.
   It remains an enhancement over the same readable frosted surfaces. */
body[${SCOPE}][data-doro-glass="liquid"] [data-composer-card],
body[${SCOPE}][data-doro-glass="liquid"] [class*="bubble"],
body[${SCOPE}][data-doro-glass="liquid"] [class*="callRow"],
body[${SCOPE}][data-doro-glass="liquid"] [role="dialog"],
body[${SCOPE}][data-doro-glass="liquid"] [data-shell-overlay] > * {
  border-color: color-mix(in srgb, white 34%, var(--doro-accent));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.42),
    inset 1px 0 0 rgba(255,255,255,.16),
    inset 0 -1px 0 color-mix(in srgb, var(--doro-accent) 25%, transparent),
    0 12px 36px rgba(22,10,30,.20),
    0 0 26px color-mix(in srgb, var(--doro-accent) 9%, transparent);
}
body[${SCOPE}][data-doro-glass="liquid"] [data-composer-card]:hover,
body[${SCOPE}][data-doro-glass="liquid"] [class*="bubble"]:hover {
  border-color: color-mix(in srgb, white 48%, var(--doro-accent));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.55),
    inset 0 -1px 0 color-mix(in srgb, var(--doro-accent) 30%, transparent),
    0 14px 42px rgba(22,10,30,.24);
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
body[${SCOPE}][data-doro-motion="off"] .doro-petals { display: none; }
`
    }

    function createAppearanceSettings(React) {
      const labelStyle = { fontSize: 14, fontWeight: 500, color: 'var(--dsw-alias-label-primary)' }
      const hintStyle = { fontSize: 12, lineHeight: 1.45, color: 'var(--dsw-alias-label-secondary)', marginTop: 2 }
      const rowStyle = { display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(190px, 1.25fr)', alignItems: 'center', gap: 16, padding: '10px 0' }

      function RangeRow({ label, hint, value, min, max, step, unit, onChange }) {
        return React.createElement('div', { style: rowStyle },
          React.createElement('div', null,
            React.createElement('div', { style: labelStyle }, label),
            React.createElement('div', { style: hintStyle }, hint)),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
            React.createElement('input', {
              type: 'range', min, max, step, value,
              onChange: event => onChange(Number(event.target.value)),
              style: { width: '100%', accentColor: 'var(--doro-accent, #d96e9a)', cursor: 'pointer' },
            }),
            React.createElement('span', {
              style: { width: 54, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--dsw-alias-label-secondary)', fontSize: 13 },
            }, `${value}${unit}`)))
      }

      function ToggleRow({ label, hint, checked, onChange }) {
        return React.createElement('div', { style: rowStyle },
          React.createElement('div', null,
            React.createElement('div', { style: labelStyle }, label),
            React.createElement('div', { style: hintStyle }, hint)),
          React.createElement('button', {
            type: 'button',
            role: 'switch',
            'aria-checked': checked,
            onClick: () => onChange(!checked),
            style: {
              justifySelf: 'end', width: 50, height: 28, padding: 3, borderRadius: 999, cursor: 'pointer',
              border: '1px solid var(--dsw-alias-border-l)',
              background: checked ? 'var(--doro-highlight, #b95b8f)' : 'var(--dsw-alias-bg-layer-3)',
              transition: 'background .16s ease',
            },
          }, React.createElement('span', {
            style: {
              display: 'block', width: 20, height: 20, borderRadius: '50%', background: '#fff',
              transform: checked ? 'translateX(22px)' : 'translateX(0)', transition: 'transform .16s ease',
              boxShadow: '0 2px 7px rgba(0,0,0,.22)',
            },
          })))
      }

      return function DoroAppearanceSettings() {
        const [appearance, setAppearance] = React.useState(readAppearance)
        React.useEffect(() => { applyAppearance(appearance) }, [])

        const change = (key, nextValue) => {
          setAppearance(previous => {
            const next = normalizeAppearance({ ...previous, [key]: nextValue })
            writeAppearance(next)
            applyAppearance(next)
            return next
          })
        }
        const reset = () => {
          const next = { ...DEFAULT_APPEARANCE }
          writeAppearance(next)
          applyAppearance(next)
          setAppearance(next)
        }

        return React.createElement('section', {
          style: { padding: '16px 0 6px', borderTop: '1px solid var(--dsw-alias-border-l2)', marginTop: 4 },
        },
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12, marginBottom: 8 } },
            React.createElement('div', null,
              React.createElement('div', { style: { ...labelStyle, fontSize: 15 } }, 'Doro Paradise 玻璃外观'),
              React.createElement('div', { style: hintStyle }, '设置保存在当前浏览器，拖动时实时预览。')),
            React.createElement('button', {
              type: 'button', onClick: reset,
              style: { border: '1px solid var(--dsw-alias-border-l)', background: 'var(--dsw-alias-bg-layer-2)', color: 'var(--dsw-alias-label-primary)', borderRadius: 999, padding: '6px 11px', cursor: 'pointer' },
            }, '恢复默认')),
          React.createElement('div', {
            style: {
              height: 58, borderRadius: 14, margin: '12px 0 5px', padding: '0 16px', display: 'flex', alignItems: 'center',
              color: 'var(--dsw-alias-label-primary)', border: '1px solid color-mix(in srgb, white 36%, var(--doro-accent))',
              background: 'color-mix(in srgb, var(--doro-ground) var(--doro-panel-fill), transparent)',
              backdropFilter: 'blur(var(--doro-glass-blur)) saturate(var(--doro-glass-saturation))',
              boxShadow: appearance.liquidGlass ? 'inset 0 1px 0 rgba(255,255,255,.5), 0 10px 28px rgba(25,10,31,.16)' : '0 8px 22px rgba(25,10,31,.12)',
            },
          }, appearance.liquidGlass ? 'Liquid Glass · 桃乐丝的玻璃花园' : 'Frosted Glass · 柔和毛玻璃'),
          React.createElement(RangeRow, { label: '壁纸强度', hint: '控制背景图可见程度。', value: appearance.wallpaperOpacity, min: 0, max: 100, step: 1, unit: '%', onChange: value => change('wallpaperOpacity', value) }),
          React.createElement(RangeRow, { label: '壁纸模糊', hint: '只模糊背景，不影响文字和控件。', value: appearance.wallpaperBlur, min: 0, max: 32, step: 1, unit: 'px', onChange: value => change('wallpaperBlur', value) }),
          React.createElement(RangeRow, { label: '侧边栏不透明度', hint: '数值越低，侧边栏中的桃乐丝越清晰。', value: appearance.sidebarOpacity, min: 18, max: 100, step: 1, unit: '%', onChange: value => change('sidebarOpacity', value) }),
          React.createElement(RangeRow, { label: '面板不透明度', hint: '数值越低，玻璃越通透。', value: appearance.panelOpacity, min: 28, max: 100, step: 1, unit: '%', onChange: value => change('panelOpacity', value) }),
          React.createElement(RangeRow, { label: '毛玻璃模糊', hint: '控制浮层后的折射模糊。', value: appearance.glassBlur, min: 0, max: 40, step: 1, unit: 'px', onChange: value => change('glassBlur', value) }),
          React.createElement(RangeRow, { label: '玻璃饱和度', hint: '提高壁纸透过玻璃后的色彩浓度。', value: appearance.saturation, min: 80, max: 150, step: 1, unit: '%', onChange: value => change('saturation', value) }),
          React.createElement(RangeRow, { label: '中央桃乐丝强度', hint: '控制壁纸中央桃乐丝本体的可见程度。', value: appearance.dorothyOpacity, min: 0, max: 100, step: 1, unit: '%', onChange: value => change('dorothyOpacity', value) }),
          React.createElement(RangeRow, { label: '中央桃乐丝大小', hint: '按窗口高度缩放桃乐丝本体。', value: appearance.dorothySize, min: 42, max: 110, step: 1, unit: 'vh', onChange: value => change('dorothySize', value) }),
          React.createElement(RangeRow, { label: '右侧 Doro 大小', hint: '单独调整右下角 Doro，不影响壁纸。', value: appearance.doroSize, min: 96, max: 480, step: 4, unit: 'px', onChange: value => change('doroSize', value) }),
          React.createElement(ToggleRow, { label: '液态玻璃高光', hint: '加入镜面边缘、内高光和悬停折射感。', checked: appearance.liquidGlass, onChange: value => change('liquidGlass', value) }),
          React.createElement(ToggleRow, { label: '漂浮花瓣', hint: '关闭后保留静态主题，减少动画。', checked: appearance.petals, onChange: value => change('petals', value) }))
      }
    }

    function apply(ctx) {
      const React = require('react')
      const DoroAppearanceSettings = createAppearanceSettings(React)
      ctx.effect(() => ctx.slots.inject('settings.general.item', () => ctx.slots.register({
        name: 'settings.general.item',
        id: 'doro-paradise-appearance',
        order: 18,
      }, DoroAppearanceSettings)), 'doro-paradise: appearance settings')

      ctx.effect(() => {
        const style = document.createElement('style')
        style.setAttribute('data-plugin', 'doro-paradise-theme')
        const wallpaper = document.createElement('div')
        wallpaper.className = 'doro-wallpaper'
        wallpaper.setAttribute('aria-hidden', 'true')
        const wallpaperDorothy = document.createElement('div')
        wallpaperDorothy.className = 'doro-wallpaper-dorothy'
        wallpaperDorothy.setAttribute('aria-hidden', 'true')
        const wallpaperDoro = document.createElement('div')
        wallpaperDoro.className = 'doro-wallpaper-doro'
        wallpaperDoro.setAttribute('aria-hidden', 'true')
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
            applyAppearance(readAppearance())
            document.body.prepend(wallpaper, wallpaperDorothy, wallpaperDoro)
            document.body.append(petals)
            if (iconLink !== null) iconLink.setAttribute('href', asset.favicon)
          })
          .catch(error => console.warn('[Doro Paradise] theme not applied:', error))

        return () => {
          cancelled = true
          style.remove()
          wallpaper.remove()
          wallpaperDorothy.remove()
          wallpaperDoro.remove()
          petals.remove()
          document.body.removeAttribute(SCOPE)
          document.body.removeAttribute('data-doro-glass')
          document.body.removeAttribute('data-doro-motion')
          for (const property of [
            '--doro-wallpaper-opacity', '--doro-wallpaper-blur',
            '--doro-sidebar-top', '--doro-sidebar-mid', '--doro-sidebar-low', '--doro-sidebar-bottom',
            '--doro-panel-fill', '--doro-glass-blur', '--doro-glass-saturation',
            '--doro-dorothy-opacity', '--doro-dorothy-size', '--doro-mascot-size',
          ]) {
            document.body.style.removeProperty(property)
          }
          if (iconLink !== null && originalIcon !== null) iconLink.setAttribute('href', originalIcon)
        }
      }, 'doro-paradise: skin')
    }

    module.exports.apply = apply
    module.exports.inject = ['slots']
    return module.exports
  },
})
