# ECharts Vue Playground

[English](./README.md) | 中文

一个用于试验 [Apache ECharts](https://echarts.apache.org/) 的 Vue 3 演练场。本项目允许您可视化不同的图表配置并实时修改它们。

## 特性

- **Vue 3 + Vite + TypeScript**: 现代、快速且类型安全的开发环境。
- **交互式演练场**:
    - 选择各种图表示例（柱状图、折线图、饼图）。
    - 编辑图表配置项 (JSON) 并立即查看更新。
    - 响应式设计。
- **可复用组件**:
    - `ECharts.vue`: 用于轻松集成 ECharts 的包装组件。
    - `useECharts.ts`: 用于管理图表实例和调整大小的组合式函数。

## 快速开始

### 前置要求

- Node.js (推荐 v14+)
- npm 或 yarn

### 安装

1.  克隆仓库（如果适用）或导航到项目目录。
2.  安装依赖：

    ```bash
    npm install
    ```

### 运行演练场

启动开发服务器：

```bash
npm run dev
```

打开浏览器并导航到终端中显示的 URL（通常是 `http://localhost:5173`）。

### 构建生产版本

要构建用于生产的项目：

```bash
npm run build
```

## 项目结构

- `src/components/ECharts.vue`: 主要的图表组件。
- `src/composables/useECharts.ts`: ECharts 初始化和生命周期管理的逻辑。
- `src/examples/`: 包含示例图表配置。
- `src/App.vue`: 主要的应用程序布局和演练场逻辑。

## 许可证

MIT
