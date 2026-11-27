# 沧海 · Photoreal Ocean（全屏版）

全屏照片级海洋：Gerstner 波海面（真实反射/折射/焦散）、Rayleigh 物理天空、体积云、暴雨闪电；海上散布多艘帆船、浮标群、海鸟、鲸鱼、珊瑚岛。

## 交互
- **拖动** 环视 · **滚轮** 缩放（低机位可潜入水下）
- **风暴**（按钮或按住空格）：狂涛 + 暴雨 + 闪电 + 乌云
- **夜色**：星空月光、船窗暖光
- **切换机位**：在固定视角间切换

HUD 实时显示时刻、海况、FPS。

## 技术
基于 Tideline (MIT, Rino Lovreglio) 渲染底座 + 本项目集成层（更多船只/浮标/海鸟/鲸鱼、中文 UI、风暴增强、性能优化）。Three.js r185 + esbuild。构建：`pnpm install && pnpm run build`。

## 3D 模型来源
真实鲨鱼与鱼群 GLB 模型来自 [Animated Fish Bundle](https://github.com/Milkjuiceman/fishing-rhythm-game)（GPL-3.0），包括 Shark、Blue Tang、Cardinal Fish、Butterfly Fish、Goldfish 等。模型文件位于 assets/，由 fauna.js 通过 GLTFLoader 加载并播放原生游动动画。
写实鱼群采用 Khronos 官方 glTF-Sample-Assets 的 BarramundiFish 模型（CC0），贴图经压缩至 512px 以提升性能。
鲨鱼为本机 Blender 5.2 程序化建模导出（assets/shark_real.glb，8816 面，灰背白腹 + 镰刀背鳍/新月尾鳍）；鱼群含 Khronos CC0 Barramundi。

## 鱼类模型
真实海鱼模型来自 **Fish Kit**（CC0 1.0 公共领域，可商用免署名）——12 种海鱼、每种约 5000 三角形、照片级贴图，含游泳动画。文件位于 `assets/fishkit/`。
