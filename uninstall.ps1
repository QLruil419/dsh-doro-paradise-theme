$ErrorActionPreference = 'Stop'

if (Get-Command dsh -ErrorAction SilentlyContinue) {
  dsh plugin --profile web remove -w dsh-doro-paradise-theme
} else {
  npx --yes '@deepseek-ai/dsh@latest' plugin --profile web remove -w dsh-doro-paradise-theme
}
Write-Host 'Doro Paradise 已从 web profile 移除。'
