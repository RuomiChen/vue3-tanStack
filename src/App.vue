<template>
  <!-- 使用 v-model:collapsed 双向绑定 -->
  <!-- <Main/> -->
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#ff7300',
    },
  }">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>


</script>
