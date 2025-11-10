<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4 text-gray-700">待发货订单</h2>

        <!-- 操作按钮 -->
        <div class="mb-4 flex gap-2">
            <a-button type="primary" @click="refreshData">刷新</a-button>
            <a-button type="default" @click="batchShip">批量发货</a-button>
        </div>

        <a-table :columns="columns" :dataSource="orders" rowKey="id" bordered>
            <template #status="{ record }">
                <a-tag color="orange">{{ record.status }}</a-tag>
            </template>

            <template #action="{ record }">
                <a-button size="small" type="primary" @click="shipOrder(record.id)">
                    发货
                </a-button>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Order {
    id: string
    customer: string
    amount: number
    status: string
}

const orders = ref<Order[]>([
    { id: 'ORD101', customer: '张三', amount: 1200, status: '待发货' },
    { id: 'ORD102', customer: '李四', amount: 850, status: '待发货' },
    { id: 'ORD103', customer: '王五', amount: 300, status: '待发货' },
])

const columns = [
  { title: '订单号', dataIndex: 'id', key: 'id' },
  { title: '客户', dataIndex: 'customer', key: 'customer' },
  { title: '金额', dataIndex: 'amount', key: 'amount' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'action' },
]

// 模拟操作
function refreshData() {
    console.log('刷新数据...')
}

function batchShip() {
    console.log('批量发货...')
}

function shipOrder(id: string) {
    console.log('发货订单', id)
}
</script>

<style scoped>
/* 可根据需要自定义表格样式 */
</style>
