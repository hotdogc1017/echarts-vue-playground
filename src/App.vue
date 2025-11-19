<script setup lang="ts">
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { Repl, type ReplProps } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';
import { Header } from './components';
import { useStore } from './composables';

const loading = ref(false);
const replRef = ref<InstanceType<typeof Repl>>();

const store = useStore();

const previewOptions: ReplProps['previewOptions'] = {
  headHTML: `
    <style>
      body {
        margin: 0;
        padding: 20px;
      }
    </style>
  `,
};

const dark = useDark();

const handleKeydown = (evt: KeyboardEvent) => {
  if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyS') {
    evt.preventDefault();
    return;
  }
};

const refreshPreview = () => {
  replRef.value?.reload();
};
</script>

<template>
  <div v-if="!loading" antialiased>
    <Header @refresh="refreshPreview" />
    <Repl
      ref="replRef"
      :theme="dark ? 'dark' : 'light'"
      :editor="Monaco"
      :preview-options="previewOptions"
      :clear-console="false"
      :store="store"
      @keydown="handleKeydown"
    />
  </div>
  <template v-else>
    <div class="h-100vh">Loading...</div>
  </template>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.vue-repl {
  height: calc(100vh - 50px) !important;
}
</style>

