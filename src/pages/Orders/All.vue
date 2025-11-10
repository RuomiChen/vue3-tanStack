<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">All Orders</h2>
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
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
]

const orders = [
  { id: 'ORD001', customer: 'Zhang San', amount: 800, status: 'Shipped' },
  { id: 'ORD002', customer: 'Li Si', amount: 1200, status: 'Pending' },
]
</script>
