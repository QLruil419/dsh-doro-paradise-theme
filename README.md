# Doro Paradise for DeepSeek Harness

[English](README.en.md) · [更新日志](CHANGELOG.md) · [素材说明](ASSET_NOTICE.md) · [贡献指南](CONTRIBUTING.md)

一个以《胜利女神：妮姬》桃乐丝与 Doro 梗形象为灵感的 DeepSeek Harness Web 主题。桃乐丝本体负责“伊甸园、珍珠白、玫瑰与机械天使”的优雅视觉，Doro 则负责一点不安定的可爱。

> 非官方粉丝项目，与 SHIFT UP、Level Infinite、DeepSeek 无关联。代码以 MIT 许可证开源；角色、名称及原作相关权利归各自权利人所有。详情见 [ASSET_NOTICE.md](ASSET_NOTICE.md)。

![Doro Paradise 桃乐丝与 Doro 伊甸园壁纸](assets/readme-wallpaper-dorothy.png)

## 功能

- 完整的亮色与暗色主题，跟随 Harness 的 `Light`、`Dark`、`System` 外观选项。
- 桃乐丝与 Doro 壁纸、侧栏立绘、品牌字标、新会话图标、输入框玫瑰边框与花瓣动画。
- 用户消息、代码块、工具调用、弹窗和侧栏采用统一的玫瑰/莓紫视觉语言。
- 设置弹窗左侧提供独立的 `Doro Paradise` 一级页面，与“通用设置”“模型”等并列。
- 侧边栏遮罩可以独立调节，让底部桃乐丝立绘按需显现。
- 壁纸中央加入独立桃乐丝本体，右下角 Doro 可单独缩放，不再与背景图烘焙在一起。
- 设置保存在当前浏览器的 `localStorage` 中，无需重启 Harness。
- 不修改 DeepSeek Harness 源码，可随时卸载。

## 版本

| 版本 | 内容 | 推荐用途 |
| --- | --- | --- |
| `v1.2.1` | 当前版。设置已独立为与“通用设置”“模型”等并列的 `Doro Paradise` 页面。 | 推荐 |
| `v1.2.0` | 加入侧边栏透明度、中央桃乐丝图层以及可缩放右侧 Doro。 | 旧版 |
| `v1.1.0` | 玻璃花园版。加入可调壁纸、毛玻璃、液态玻璃、高光、饱和度与花瓣开关。 | 旧版 |
| `v1.0.2` | 经典版。固定透明度与毛玻璃，没有设置面板。 | 喜欢简洁或用于兼容性排查 |

Git 标签和 GitHub Releases 会保留各个正式版本。

## 环境要求

- Windows PowerShell 5.1 或 PowerShell 7。
- 已安装 Node.js，并可使用 `npm` 与 `npx`。
- 可正常启动 DeepSeek Harness Web profile。

可先检查：

```powershell
node --version
npm --version
npx --yes '@deepseek-ai/dsh@latest' --version
```

## 安装当前版

### 方法一：一键脚本

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
.\install.ps1
npx --yes '@deepseek-ai/dsh@latest' web
```

如果 PowerShell 阻止运行本地脚本，只对当前窗口临时放行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

### 方法二：手动安装

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
npx --yes '@deepseek-ai/dsh@latest' web
```

`-w` 会把当前目录作为工作区插件挂载；修改主题源码后，重新启动 `dsh web` 即可看到变化。

## 安装经典版 `v1.0.2`

```powershell
git clone https://github.com/QLruil419/dsh-doro-paradise-theme.git
Set-Location .\dsh-doro-paradise-theme
git switch --detach v1.0.2
.\install.ps1
npx --yes '@deepseek-ai/dsh@latest' web
```

也可以直接在 GitHub Releases 下载 `dsh-doro-paradise-theme-v1.0.2.zip`，解压后运行 `install.ps1`。

## 从旧版升级

在仓库目录中执行：

```powershell
git switch main
git pull --ff-only
npm install
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
```

随后停止并重新启动正在运行的 Harness Web 服务。

## 玻璃外观设置

打开 `Settings → Doro Paradise`：

| 控件 | 范围 | 作用 |
| --- | ---: | --- |
| 壁纸强度 | 0–100% | 控制背景图可见程度。 |
| 壁纸模糊 | 0–32px | 只模糊壁纸，不影响文字和控件。 |
| 侧边栏不透明度 | 18–100% | 数值越低，侧边栏里的桃乐丝越明显。 |
| 面板不透明度 | 28–100% | 数值越低，玻璃越通透。 |
| 毛玻璃模糊 | 0–40px | 控制面板后的背景模糊。 |
| 玻璃饱和度 | 80–150% | 调整透过玻璃的色彩浓度。 |
| 中央桃乐丝强度 | 0–100% | 控制主壁纸中桃乐丝本体的可见程度。 |
| 中央桃乐丝大小 | 42–110vh | 按窗口高度缩放桃乐丝。 |
| 右侧 Doro 大小 | 96–480px | 单独缩放右下角 Doro。 |
| 液态玻璃高光 | 开/关 | 增加镜面边缘、内高光与悬停折射感。 |
| 漂浮花瓣 | 开/关 | 控制背景动画；系统“减少动态效果”设置也会被遵守。 |

推荐预设：

- 清爽：壁纸 35%、面板 86%、模糊 12px、关闭液态高光。
- 平衡：壁纸 42%、面板 78%、模糊 16px、开启液态高光（默认）。
- 通透：壁纸 58%、面板 58%、模糊 24px、饱和度 120%。

“液态玻璃”是面向 Chromium 的 CSS 近似效果；不支持相应 CSS 的浏览器会自然回退为普通半透明面板。

## 与其他皮肤的兼容性

不要同时启用会重写背景、面板透明度或主题变量的全局皮肤，例如 `dsh-dream-skin`。它们可能互相覆盖，造成壁纸不显示、透明度异常或插件加载顺序问题。Doro Paradise `v1.2.1` 已内置常用的透明度、毛玻璃、液态玻璃和角色图层控制，通常不再需要额外皮肤插件。

## 卸载

```powershell
.\uninstall.ps1
```

或手动执行：

```powershell
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web remove -w dsh-doro-paradise-theme
```

## 故障排查

### `Failed to load plugins` / `loaded without registering`

确认使用 `v1.0.2` 或更高版本。早期构建曾使用不一致的模块 ID；当前模块会以 `dsh-doro-paradise-theme` 正确注册。

```powershell
git describe --tags --always
Select-String -Path .\client.js -Pattern "id: 'dsh-doro-paradise-theme'"
```

同时关闭 `dsh-dream-skin` 等全局皮肤，重新启动 Harness。

### `ERR_PNPM_BROKEN_LOCKFILE`

先退出正在运行的 Harness。将下面的 profile 路径改成你的实际位置，然后只备份锁文件：

```powershell
$profileDir = 'D:\dsh\.dsh\profiles\web'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
Move-Item -LiteralPath "$profileDir\pnpm-lock.yaml" -Destination "$profileDir\pnpm-lock.yaml.bak-$stamp"
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
```

不要删除整个 `.dsh` 目录，也不要在 profile 目录中执行 `npm install`。

### `ERR_PNPM_VIRTUAL_STORE_DIR_MAX_LENGTH_DIFF`

旧版 pnpm 创建的 profile `node_modules` 与当前配置不兼容。先退出 Harness，再将它移动为备份后重建：

```powershell
$profileDir = 'D:\dsh\.dsh\profiles\web'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
Move-Item -LiteralPath "$profileDir\node_modules" -Destination "$profileDir\node_modules.bak-$stamp"
if (Test-Path -LiteralPath "$profileDir\pnpm-lock.yaml") {
  Move-Item -LiteralPath "$profileDir\pnpm-lock.yaml" -Destination "$profileDir\pnpm-lock.yaml.bak-$stamp"
}
$pluginDir = (Resolve-Path .).Path
npx --yes '@deepseek-ai/dsh@latest' plugin --profile web add -w $pluginDir
```

确认新版本正常后，再手动删除带时间戳的备份目录。

### `ERR_PNPM_IGNORED_BUILDS`

在 Harness 的 Web profile 目录中运行构建批准命令，选择错误信息点名的依赖（常见为 `cloudflared` 和 `node-pty`），然后重新添加插件：

```powershell
Set-Location 'D:\dsh\.dsh\profiles\web'
npx --yes pnpm@latest approve-builds
npx --yes pnpm@latest install
```

仅批准你确认来自 Harness 依赖树的包。

### 壁纸没有出现

1. 确认 Doro Paradise 已加载，浏览器控制台没有 manifest 或 asset 404。
2. 关闭其他会重写 `body` 背景的主题插件。
3. 在玻璃外观设置中确认“壁纸强度”不为 0。
4. 强制刷新页面并重启 `dsh web`。

## 自定义与开发

- 主题 CSS、设置面板和客户端注册：`client.js`
- 静态资源服务与 manifest：`theme-route.js`
- 服务端插件入口：`index.js`
- DSH bundle 声明：`cordis.patch.yml`
- 图片与 SVG：`assets/`
- 生成素材时使用的提示词：`PROMPTS.md`

替换 `assets/background-light.png`、`assets/background-dark.png` 或 `assets/dorothy-doro-overlay.png` 后，重启 `dsh web` 即可。保持文件名不变时无需修改代码。

本地检查：

```powershell
npm install
node --check .\client.js
node --check .\index.js
node --check .\theme-route.js
npm pack --dry-run
```

本项目使用 DeepSeek Harness 的 Web client plugin 与 `webServer` 扩展点，不修改 Harness 源码。部分装饰通过语义属性和 CSS module 名称片段定位；Harness 将来若重命名组件类，可能需要同步调整选择器。

## 开源许可

- JavaScript、PowerShell、Markdown 与项目自有 SVG：MIT License。
- 桃乐丝、Doro、《胜利女神：妮姬》相关角色和标识：不包含在 MIT 授权中。
- AI 生成的粉丝插画随仓库提供，用于本项目展示与个人非商业使用；详见 [ASSET_NOTICE.md](ASSET_NOTICE.md)。

欢迎提交 Issue 和 Pull Request。提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
