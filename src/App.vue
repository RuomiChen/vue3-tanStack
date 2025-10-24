<script setup lang="ts">
import { useApiQuery } from './composables/useApi';

const { data, isLoading, error } = useApiQuery('todo', '/api/home/all')
</script>
<template>
  <div class="content">
   {{ data }}
  </div>
</template>

<style scoped>
</style>
