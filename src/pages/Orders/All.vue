<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">全部订单</h2>
    <a-table
      :columns="columns"
      :dataSource="orders"
      rowKey="id"
      bordered
    />
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '订单号', dataIndex: 'id', key: 'id' },
  { title: '客户', dataIndex: 'customer', key: 'customer' },
  { title: '金额', dataIndex: 'amount', key: 'amount' },
  { title: '状态', dataIndex: 'status', key: 'status' },
]
const orders = [
  { id: 'ORD001', customer: '张三', amount: 800, status: '已发货' },
  { id: 'ORD002', customer: '李四', amount: 1200, status: '待发货' },
]
</script>
