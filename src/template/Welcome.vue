<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref<HTMLElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const option = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

onMounted(() => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(option);
    
    window.addEventListener('resize', () => {
      chartInstance?.resize();
    });
  }
});

onBeforeUnmount(() => {
  chartInstance?.dispose();
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>
