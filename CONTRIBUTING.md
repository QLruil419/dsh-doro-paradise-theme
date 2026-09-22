# Contributing

Issues and pull requests are welcome, especially for Harness compatibility fixes, accessibility improvements, and visual polish that keeps the Doro Paradise identity intact.

## Before opening an issue

Include:

- Doro Paradise version or Git commit.
- DeepSeek Harness version/profile.
- Browser and operating-system version.
- Other enabled theme or skin plugins.
- The full error message and a screenshot when the problem is visual.

Never include API keys, access tokens, cookies, or private conversation content.

## Development setup

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
npx --yes '@deepseek-ai/dsh@latest' web
```

## Checks

Run these before submitting a pull request:

```powershell
node --check .\client.js
node --check .\index.js
node --check .\theme-route.js
npm pack --dry-run
```

Test both light and dark appearance, expanded and collapsed sidebar states, an empty session, a populated conversation, settings dialogs, code blocks, and reduced-motion mode.

## Style

- Keep the plugin dependency-light.
- Prefer Harness semantic attributes over brittle generated class names when available.
- Preserve readable contrast at every supported opacity.
- Add user-facing settings only when they can be restored to a safe default.
- Do not commit third-party game files or artwork copied from official packages.
