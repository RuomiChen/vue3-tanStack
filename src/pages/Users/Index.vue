<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-700">用户管理</h2>
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
  { title: '用户名', dataIndex: 'name', key: 'name' },
  { title: '角色', dataIndex: 'role', key: 'role' },
]
const data = [
  { id: 1, name: 'Admin', role: '管理员' },
  { id: 2, name: 'User01', role: '普通用户' },
]
</script>
