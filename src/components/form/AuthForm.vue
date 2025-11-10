<template>
    <div class="mt-30 max-w-md w-full h-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <!-- Tabs -->
        <h1 class="text-4xl font-bold text-gray-800 text-center mb-6 tracking-wide">MistMirror ERP</h1>
        <div class="flex mb-6 border-b border-gray-200">
            <button class=" cursor-pointer flex-1 py-2 text-center font-medium"
                :class="activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
                @click="activeTab = 'login'">
                Login
            </button>
            <button class=" cursor-pointer flex-1 py-2 text-center font-medium"
                :class="activeTab === 'register' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
                @click="activeTab = 'register'">
                Register
            </button>
        </div>

        <!-- Form -->
        <div>
            <LoginForm v-if="activeTab === 'login'" @submit="handleLogin" />
            <RegisterForm v-else @submit="handleRegister" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '../../router';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

const activeTab = ref<'login' | 'register'>('login');

const handleLogin = (values: any) => {
    localStorage.setItem('token','true')
    router.push({name:'Dashboard'})
    console.log('Login values:', values);
};

const handleRegister = (values: any) => {
    console.log('Register values:', values);
};
</script>
