<template>
  <div :style="{ width: width + 'px' }">
 
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :items="menuItems"
      @click="handleMenuClick"
    ></a-menu>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch } from 'vue';
import { router } from '../router';

const props = defineProps<{
  items: any[];           // 菜单项数据
  width?: number;         // 侧边栏宽度
  defaultCollapsed?: boolean; // 默认折叠状态
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
}>();

const emit = defineEmits<{
  (e: 'select', key: string): void;
}>();


const menuItems = props.items;

const collapsed = ref(props.defaultCollapsed ?? false);
const selectedKeys = ref(props.defaultSelectedKeys ?? ['1']);
const openKeys = ref(props.defaultOpenKeys ?? ['sub1']);
const preOpenKeys = ref([...openKeys.value]);

watch(openKeys, (_val, oldVal) => {
  preOpenKeys.value = [...oldVal];
});

const handleMenuClick = ({item}:any) => {
  router.push(item.path);
};

</script>