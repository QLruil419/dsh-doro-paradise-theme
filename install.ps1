$ErrorActionPreference = 'Stop'
$pluginDir = $PSScriptRoot

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  throw '未找到 npm。请先安装 Node.js。'
}

Push-Location $pluginDir
try {
  npm install
  if (Get-Command dsh -ErrorAction SilentlyContinue) {
    dsh plugin --profile web add -w $pluginDir
  } else {
    npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
  }
} finally {
  Pop-Location
}

Write-Host ''
Write-Host 'Doro Paradise 已添加到 web profile。' -ForegroundColor Magenta
Write-Host '运行 dsh web 后，在明暗外观间切换即可看到两套壁纸。'
