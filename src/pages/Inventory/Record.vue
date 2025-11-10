<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">Stock Records</h2>

    <!-- 操作按钮 -->
    <div class="mb-4 flex gap-2">
      <a-button type="primary" @click="refreshData">Refresh</a-button>
      <a-button type="default" @click="addRecord">Add Record</a-button>
    </div>

    <!-- 表格 -->
    <a-table :columns="columns" :dataSource="records" rowKey="id" bordered>
      <template #action="{ record }">
        <a-button size="small" type="primary" @click="editRecord(record.id)">Edit</a-button>
        <a-button size="small" type="default" danger @click="deleteRecord(record.id)">Delete</a-button>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface StockRecord {
  id: string
  product: string
  category: string
  quantity: number
  date: string
}

const records = ref<StockRecord[]>([
  { id: 'SR001', product: 'Product A', category: 'Electronics', quantity: 120, date: '2025-11-10' },
  { id: 'SR002', product: 'Product B', category: 'Clothing', quantity: 80, date: '2025-11-09' },
  { id: 'SR003', product: 'Product C', category: 'Home', quantity: 50, date: '2025-11-08' },
])

const columns = [
  { title: 'Record ID', dataIndex: 'id', key: 'id' },
  { title: 'Product', dataIndex: 'product', key: 'product' },
  { title: 'Category', dataIndex: 'category', key: 'category' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Action', key: 'action' },
]

// 模拟操作
function refreshData() {
  console.log('Refreshing stock records...')
}

function addRecord() {
  console.log('Adding new stock record...')
}

function editRecord(id: string) {
  console.log('Editing record', id)
}

function deleteRecord(id: string) {
  console.log('Deleting record', id)
}
</script>

<style scoped>
/* 可自定义表格样式 */
</style>
