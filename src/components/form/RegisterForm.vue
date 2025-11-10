<template>
  <a-form
    :model="formState"
    name="register"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    class="space-y-4"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
      class="flex flex-col"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
      class="flex flex-col"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item
      label="Confirm"
      name="confirm"
      :rules="[
        { required: true, message: 'Please confirm your password!' },
        { validator: validateConfirm }
      ]"
      class="flex flex-col"
    >
      <a-input-password v-model:value="formState.confirm" />
    </a-form-item>

    <div class="flex justify-end">
      <a-button type="primary" html-type="submit">Register</a-button>
    </div>
  </a-form>
</template>

<script lang="ts" setup>
import { defineEmits, reactive } from 'vue';

interface RegisterFormState {
  username: string;
  password: string;
  confirm: string;
}

const emit = defineEmits<{
  (e: 'submit', values: RegisterFormState): void;
}>();

const formState = reactive<RegisterFormState>({
  username: '',
  password: '',
  confirm: '',
});

const validateConfirm = (_: any, value: string) => {
  if (value !== formState.password) {
    return Promise.reject('Passwords do not match!');
  }
  return Promise.resolve();
};

const onFinish = (values: any) => {
  emit('submit', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Register Failed:', errorInfo);
};
</script>
