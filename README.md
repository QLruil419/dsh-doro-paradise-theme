# Doro Paradise — DeepSeek Harness 主题

以《胜利女神：妮姬》桃乐丝与 Doro 梗形象为灵感的非官方、非商业主题。桃乐丝本体负责“伊甸园 / 珍珠白 / 玫瑰 / 机械天使”的优雅视觉，Doro 负责一点不安定的可爱。

## 视觉设计

- 暗色：莓紫黑底、尘玫瑰强调色、薰衣草高光、薄荷绿成功状态。
- 亮色：珍珠白底，使用更深的莓粉保证文字和焦点环清晰。
- 桃乐丝与 Doro 双人立绘放在展开侧栏底部；明暗壁纸右侧保留 Doro 彩蛋。
- 用户消息使用玫瑰色气泡；代码块维持低干扰的独立底色。
- 输入框有玫瑰边角与 Doro 小装饰；背景花瓣动画自动遵守 `prefers-reduced-motion`。

## 安装

在 PowerShell 中进入本目录并运行：

```powershell
.\install.ps1
```

或者手动执行：

```powershell
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
npx --yes '@deepseek-ai/dsh@latest' web
```

主题挂载后会自动生效。DeepSeek Harness 的 Appearance 选择 `Light` / `Dark` / `System` 时，会同步切换对应壁纸和配色。

## 卸载

```powershell
.\uninstall.ps1
```

## 自定义

主要色值与透明度在 `client.js` 顶部的 CSS token 区域。替换 `assets/background-light.png`、`background-dark.png` 或 `dorothy-doro-overlay.png` 后重启 `dsh web` 即可。

## 兼容性说明

本主题使用 DeepSeek Harness 的 Web client plugin 与 `webServer` 扩展点，不修改 Harness 源码。部分元素通过稳定语义属性和 CSS module 名称片段定位；若未来 Harness 重命名组件类，品牌图或新会话图标可能需要跟随调整，核心配色与壁纸不受影响。

## `ERR_PNPM_BROKEN_LOCKFILE`

如果旧版 Harness 留下的 profile 锁文件与当前内置 pnpm 不兼容，请先退出正在运行的 Harness，然后备份旧锁文件，再重新添加插件：

```powershell
$profileDir = 'D:\dsh\.dsh\profiles\web'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
Move-Item -LiteralPath "$profileDir\pnpm-lock.yaml" -Destination "$profileDir\pnpm-lock.yaml.bak-$stamp"
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
```

不要在 profile 目录中直接执行 `npm install`，也不要删除整个 `.dsh` 目录。

## 素材与声明

本包中的 PNG 插画由 OpenAI 图像生成工具为该主题生成，SVG 图标为本项目原创。角色灵感及相关权利归其权利人所有；本项目与 SHIFT UP、Level Infinite 或 DeepSeek 官方无关联，仅建议个人、非商业使用。
