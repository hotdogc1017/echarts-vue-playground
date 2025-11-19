# ECharts Vue Playground

English | [中文](./README.zh-CN.md)


A Vue 3 playground for experimenting with [Apache ECharts](https://echarts.apache.org/). This project allows you to visualize different chart configurations and modify them in real-time.

## Features

- **Vue 3 + Vite + TypeScript**: Modern, fast, and type-safe development environment.
- **Interactive Playground**:
    - Select from various chart examples (Bar, Line, Pie).
    - Edit chart options (JSON) and see updates instantly.
    - Responsive design.
- **Reusable Components**:
    - `ECharts.vue`: A wrapper component for easy ECharts integration.
    - `useECharts.ts`: A composable for managing chart instances and resizing.

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1.  Clone the repository (if applicable) or navigate to the project directory.
2.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Playground

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To build the project for production:

```bash
npm run build
```

## Project Structure

- `src/components/ECharts.vue`: The main chart component.
- `src/composables/useECharts.ts`: Logic for ECharts initialization and lifecycle management.
- `src/examples/`: Contains example chart configurations.
- `src/App.vue`: The main application layout and playground logic.

## License

MIT
