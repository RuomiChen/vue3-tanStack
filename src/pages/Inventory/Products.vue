<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">商品列表</h2>
    <a-button type="primary" class="mb-4">新增商品</a-button>
    <a-table :columns="columns" :dataSource="products" rowKey="id" bordered />
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '商品ID', dataIndex: 'id' },
  { title: '名称', dataIndex: 'name' },
  { title: '库存', dataIndex: 'stock' },
  { title: '价格', dataIndex: 'price' },
]
const products = [
  { id: 'P001', name: 'T恤', stock: 320, price: 79 },
  { id: 'P002', name: '鞋子', stock: 88, price: 299 },
]
</script>
