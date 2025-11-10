<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-semibold text-gray-700">控制面板</h2>

    <!-- 顶部数据卡片 -->
    <a-row gutter="16">
      <a-col :span="8">
        <a-card title="今日订单" bordered>
          <h3 class="text-2xl font-bold">120</h3>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="销售额" bordered>
          <h3 class="text-2xl font-bold">¥58,000</h3>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="待发货" bordered>
          <h3 class="text-2xl font-bold">23</h3>
        </a-card>
      </a-col>
    </a-row>

    <!-- 图表区域 -->
    <a-row gutter="16">
      <!-- 今日订单柱状图 -->
      <a-col :span="12">
        <a-card title="最近7天订单量">
          <v-chart :option="orderOption" style="height:300px;"></v-chart>
        </a-card>
      </a-col>

      <!-- 销售额折线图 -->
      <a-col :span="12">
        <a-card title="最近7天销售额">
          <v-chart :option="salesOption" style="height:300px;"></v-chart>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, LineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

const orderOption = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [10, 12, 15, 8, 20, 18, 25],
      type: 'bar',
      color: '#1890ff'
    },
  ],
}

const salesOption = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [5000, 7000, 8000, 6000, 9000, 12000, 15000],
      type: 'line',
      color: '#52c41a',
      smooth: true,
    },
  ],
}
</script>

<style scoped>
/* 可选：卡片内容居中 */
h3 {
  text-align: center;
  margin: 0;
}
</style>
