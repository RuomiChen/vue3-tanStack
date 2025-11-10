<template>
  <a-modal
    v-model:open="visible"
    :title="title"
    :width="width"
    :footer="footer === false ? null : undefined"
    @cancel="handleCancel"
  >
    <slot />
  </a-modal>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch } from 'vue';

const props = defineProps<{
  modelValue?: boolean;      // 可 v-model 控制显示
  title?: string;            // Modal 标题
  width?: number | string;   // 宽度
  footer?: boolean;          // 是否显示默认底部按钮，false 隐藏
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'cancel'): void;
}>();

const visible = ref(props.modelValue ?? false);

// 监听外部 v-model
watch(
  () => props.modelValue,
  (val) => {
    visible.value = val ?? false;
  }
);

const handleCancel = () => {
  visible.value = false;
  emit('update:modelValue', false);
  emit('cancel');
};
</script>
