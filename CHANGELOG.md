# Changelog

All notable changes to Doro Paradise are documented here.

## [1.3.1] - 2026-09-22

### Fixed

- Raised the default sidebar Dorothy artwork from 48 px to 190 px above the bottom edge so plugin shortcuts and separators no longer cut through Dorothy's feet or Doro.

### Added

- Added a live `侧栏立绘高度` control ranging from 48 px to 320 px for layouts with different numbers of sidebar plugins.

## [1.3.0] - 2026-09-22

### Changed

- Replaced the centered wallpaper Dorothy with a calmer, low-contrast pearl-and-rose standing illustration designed to blend into the Eden wallpaper.
- Replaced the sidebar artwork with a separate tea-party seated Dorothy and Doro composition.
- Wallpaper and sidebar now use intentionally different poses, costume details, silhouettes, and moods for greater visual variety.
- Refreshed the README hero image to preview the new wallpaper character.

## [1.2.1] - 2026-09-22

### Changed

- Moved Doro Paradise controls out of General settings into a dedicated top-level `Doro Paradise` settings section.
- The new section uses Harness's native `settings.section` slot and appears alongside General, Models, Plugin Market, and Side Card.

## [1.2.0] - 2026-09-22

### Added

- Independent sidebar transparency control so the sidebar Dorothy artwork can remain visible.
- A centered, separately layered Dorothy character with opacity and size controls.
- A separately layered right-side Doro with an independent size control.
- Clean light and dark wallpapers without an embedded mascot, preventing duplicate characters when resizing Doro.

### Changed

- The sidebar gradient now derives from the selected sidebar opacity while preserving a readability gradient.
- Character artwork is rendered independently from the wallpaper blur and opacity.

## [1.1.0] - 2026-09-22

### Added

- Built-in appearance panel under `Settings → General`.
- Live controls for wallpaper opacity and blur.
- Live controls for panel opacity, glass blur, and saturation.
- Optional liquid-glass edge highlights and hover sheen.
- Optional falling-petal animation with browser-local persistence.
- Dedicated wallpaper layer so wallpaper adjustments do not blur text or controls.

### Changed

- Glass values are now expressed through CSS custom properties and update without restarting Harness.
- Dialogs, message bubbles, call rows, and the composer share the selected glass settings.

## [1.0.2] - 2026-09-22

### Fixed

- Corrected the client module ID to `dsh-doro-paradise-theme` so the Harness module loader can register the plugin.
- Applied wallpapers directly and reliably to the page background.

### Included

- Light and dark Doro Paradise palettes.
- Dorothy/Doro wallpapers and sidebar overlay.
- Custom wordmark, favicon, new-session icon, composer frame, and falling petals.

[1.1.0]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.1.0
[1.0.2]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.0.2
[1.2.0]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.2.0
[1.2.1]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.2.1
[1.3.0]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.3.0
[1.3.1]: https://github.com/QLruil419/dsh-doro-paradise-theme/releases/tag/v1.3.1
