<template>
    <a-form :model="formState" name="login" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"
        class="space-y-4">
        <a-form-item label="Username" name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]" class="flex flex-col">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password" name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]" class="flex flex-col">
            <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <div class="flex justify-end gap-2">
            <a-button type="primary" html-type="submit">Login</a-button>
        </div>
    </a-form>
</template>

<script lang="ts" setup>
import { defineEmits, reactive } from 'vue';

interface LoginFormState {
    username: string;
    password: string;
}

const emit = defineEmits<{
    (e: 'submit', values: LoginFormState): void;
}>();

const formState = reactive<LoginFormState>({
    username: '',
    password: '',
});

const onFinish = (values: any) => {
    emit('submit', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Login Failed:', errorInfo);
};
</script>
