<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">Product List</h2>
    <a-button type="primary" class="mb-4" @click="addProduct">Add Product</a-button>
    <a-table :columns="columns" :dataSource="products" rowKey="id" bordered />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  { title: 'Product ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Stock', dataIndex: 'stock', key: 'stock' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
]

const products = ref([
  { id: 'P001', name: 'T-Shirt', stock: 320, price: 79 },
  { id: 'P002', name: 'Shoes', stock: 88, price: 299 },
])

function addProduct() {
  console.log('Adding new product...')
}
</script>
