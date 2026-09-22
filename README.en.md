# Doro Paradise for DeepSeek Harness

[简体中文](README.md) · [Changelog](CHANGELOG.md) · [Asset notice](ASSET_NOTICE.md) · [Contributing](CONTRIBUTING.md)

An unofficial DeepSeek Harness web theme inspired by Dorothy and the Doro meme from *GODDESS OF VICTORY: NIKKE*. It combines an Eden-inspired pearl-and-rose palette with a small dose of chaotic Doro energy.

> This fan project is not affiliated with SHIFT UP, Level Infinite, or DeepSeek. The source code is released under the MIT License. Character names, designs, and other original-IP rights remain with their respective owners. See [ASSET_NOTICE.md](ASSET_NOTICE.md).

![Doro Paradise Dorothy and Doro Eden wallpaper](assets/readme-wallpaper-dorothy.png)

## Highlights

- Coordinated light and dark palettes that follow Harness's `Light`, `Dark`, and `System` appearance modes.
- Dorothy/Doro wallpapers, sidebar artwork, custom wordmark, new-session icon, rose composer frame, and optional falling petals.
- Consistent styling for messages, code blocks, tool calls, dialogs, and the sidebar.
- A dedicated `Settings → Doro Paradise` top-level page alongside General, Models, and other native sections.
- Independent sidebar transparency, centered Dorothy, and a separately scalable right-side Doro layer.
- Live preview with browser-local persistence; no Harness restart is required for setting changes.
- Installs as a normal Harness plugin and does not patch Harness source files.

## Releases

| Version | Description |
| --- | --- |
| `v1.2.1` | Current release with a dedicated `Doro Paradise` settings page alongside General and Models. |
| `v1.2.0` | Adds sidebar transparency, a centered Dorothy layer, and separately scalable right-side Doro. |
| `v1.1.0` | Glass Garden release with adjustable wallpaper, frosted glass, liquid-glass highlights, saturation, and petal controls. |
| `v1.0.2` | Classic release with fixed opacity and blur, without a settings panel. |

Formal versions are preserved as Git tags and GitHub Releases.

## Requirements

- Windows PowerShell 5.1 or PowerShell 7.
- Node.js with working `npm` and `npx` commands.
- A working DeepSeek Harness Web profile.

## Install the current release

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
.\install.ps1
npx --yes '@deepseek-ai/dsh@latest' web
```

If the PowerShell execution policy blocks the local script, enable it only for the current shell:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

Manual installation:

```powershell
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
npx --yes '@deepseek-ai/dsh@latest' web
```

## Install the classic `v1.0.2` release

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
git switch --detach v1.0.2
.\install.ps1
```

You can also download `dsh-doro-paradise-theme-v1.0.2.zip` from GitHub Releases.

## Upgrade

```powershell
git switch main
git pull --ff-only
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
```

Restart the Harness web process after upgrading.

## Appearance controls

Open `Settings → Doro Paradise` to adjust:

- Wallpaper opacity and wallpaper-only blur.
- Sidebar transparency, allowing the sidebar Dorothy artwork to remain visible.
- Panel opacity, glass blur, and glass saturation.
- Center Dorothy opacity and size.
- Right-side Doro size independently from the wallpaper.
- Liquid-glass edge highlights and hover sheen.
- Falling-petal animation.

Suggested presets:

- Clean: wallpaper 35%, panels 86%, blur 12px, liquid highlights off.
- Balanced: wallpaper 42%, panels 78%, blur 16px, liquid highlights on (default).
- Transparent: wallpaper 58%, panels 58%, blur 24px, saturation 120%.

The liquid-glass look is a Chromium-oriented CSS approximation. Browsers without the relevant CSS support fall back to ordinary translucent panels.

## Compatibility

Avoid enabling another global skin that also rewrites the page background, panel opacity, or theme variables. In particular, `dsh-dream-skin` can override the same surfaces. Version `v1.2.1` includes opacity, frosted-glass, liquid-glass, and character-layer controls directly.

## Uninstall

```powershell
.\uninstall.ps1
```

## Troubleshooting

- **`Failed to load plugins` / `loaded without registering`:** use `v1.0.2` or newer and disable conflicting global skins.
- **`ERR_PNPM_BROKEN_LOCKFILE`:** stop Harness, rename the Web profile's `pnpm-lock.yaml` to a timestamped backup, and add the plugin again.
- **`ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF`:** stop Harness, rename the Web profile's `node_modules` and lockfile to timestamped backups, and reinstall the profile dependencies.
- **`ERR_PNPM_IGNORED_BUILDS`:** run `npx --yes pnpm@latest approve-builds` inside the Web profile and approve only the packages named by Harness (commonly `cloudflared` and `node-pty`).
- **Wallpaper is missing:** disable other background skins, confirm wallpaper opacity is above 0, hard-refresh the browser, and restart `dsh web`.

The Chinese [README](README.md) contains complete PowerShell recovery commands for each pnpm error.

## Development

```powershell
npm install
node --check .\client.js
node --check .\index.js
node --check .\theme-route.js
npm pack --dry-run
```

Key files:

- `client.js`: client registration, theme CSS, and appearance settings.
- `theme-route.js`: asset routes and manifest.
- `index.js`: server plugin entry.
- `assets/`: wallpapers, overlay, icons, wordmark, and frame.
- `PROMPTS.md`: prompts used to create the generated artwork.

## License

Code and original project SVGs are available under the MIT License. NIKKE-related characters, names, and original-IP elements are not licensed under MIT. Generated fan-art assets are included for this project's presentation and personal, non-commercial use; see [ASSET_NOTICE.md](ASSET_NOTICE.md).
