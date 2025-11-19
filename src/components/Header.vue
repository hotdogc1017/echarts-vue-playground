<script setup lang="ts">
import { useDark } from '@vueuse/core';

defineEmits<{
  refresh: [];
}>();

const dark = useDark();
const toggleDark = () => {
  dark.value = !dark.value;
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h1 class="title">ECharts Vue Playground</h1>
      <div class="actions">
        <button @click="toggleDark" class="icon-btn" title="Toggle theme">
          <span v-if="dark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <button @click="$emit('refresh')" class="icon-btn" title="Refresh preview">
          🔄
        </button>
        <a
          href="https://github.com/hotdogc1017/echarts-vue-playground"
          target="_blank"
          class="icon-btn"
          title="View on GitHub"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  position: relative;
  z-index: 10;
}

.dark .header {
  background-color: #1a1a1a;
  border-bottom-color: #333;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.dark .title {
  color: #fff;
}

.actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
  text-decoration: none;
}

.icon-btn:hover {
  background-color: #f3f4f6;
  color: #333;
}

.dark .icon-btn {
  color: #aaa;
}

.dark .icon-btn:hover {
  background-color: #2a2a2a;
  color: #fff;
}
</style>
