# 瓶中沧海 · Ocean in a Bottle (Photoreal)

照片级"瓶中沧海"微缩场景：一艘帆船与珊瑚岛航行/静置于横卧玻璃瓶内的海洋上，瓶外是木桌、托架、旧书与黄铜望远镜。

## 运行
直接打开 `index.html`（或任意静态服务器）。首次加载需要联网（Three.js 已打包进 dist，无需 CDN）。

## 交互
- **拖动** 环视 · **滚轮** 缩放
- **风暴** 按钮：狂浪 + 暴雨 + 闪电 + 乌云
- **夜色** 按钮：星空 + 月光 + 船窗暖光
- **切换机位** 按钮：在几个固定视角间切换

## 技术
- 渲染底座：Tideline (MIT, Rino Lovreglio) —— Gerstner 波海面、真实反射折射、物理天空散射、体积云、雨与闪电、galleon 帆船、棕榈/礁石。感谢原作者开源。
- 集成层：CSS `clip-path` 将高画质场景精确裁进横卧玻璃瓶轮廓（保证一切元素严格封闭在瓶内），并叠加玻璃光学边缘、软木塞+红蜡+吊牌、木托架、桌面陈设、中文 UI 与交互。
- 构建：`pnpm install && pnpm run build`（esbuild 打包 Three.js + tideline + 集成层到 dist/app.js）。

## 许可
本项目集成层 MIT；Tideline 底座 MIT（见 LICENSE-tideline）。
