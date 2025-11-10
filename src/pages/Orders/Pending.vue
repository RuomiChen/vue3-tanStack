<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4 text-gray-700">Pending Orders</h2>

        <!-- Action buttons -->
        <div class="mb-4 flex gap-2">
            <a-button type="primary" @click="refreshData">Refresh</a-button>
            <a-button type="default" @click="batchShip">Batch Ship</a-button>
        </div>

        <a-table :columns="columns" :dataSource="orders" rowKey="id" bordered>
            <template #status="{ record }">
                <a-tag color="orange">{{ record.status }}</a-tag>
            </template>

            <template #action="{ record }">
                <a-button size="small" type="primary" @click="shipOrder(record.id)">
                    Ship
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
    { id: 'ORD101', customer: 'Zhang San', amount: 1200, status: 'Pending' },
    { id: 'ORD102', customer: 'Zhang San 2', amount: 850, status: 'Pending' },
    { id: 'ORD103', customer: 'Zhang San 3', amount: 300, status: 'Pending' },
])

const columns = [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Price', dataIndex: 'amount', key: 'amount' },
  { title: 'Status', key: 'status' },
  { title: 'Action', key: 'action' },
]

// Simulated actions
function refreshData() {
    console.log('Refreshing data...')
}

function batchShip() {
    console.log('Batch shipping orders...')
}

function shipOrder(id: string) {
    console.log('Shipping order', id)
}
</script>

<style scoped>
/* Customize table styles if needed */
</style>
