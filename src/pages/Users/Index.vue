<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">User Management</h2>
    <a-table
      :columns="columns"
      :dataSource="data"
      rowKey="id"
      bordered
    />
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Username', dataIndex: 'name', key: 'name' },
  { title: 'Role', dataIndex: 'role', key: 'role' },
]

const data = [
  { id: 1, name: 'Admin', role: 'Administrator' },
  { id: 2, name: 'User01', role: 'Regular User' },
]
</script>
