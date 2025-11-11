<template>
  <div class="flex min-h-screen">
    <!-- 左侧品牌区 -->
    <div
      class="relative flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden"
    >
      <div class="z-10 text-center px-10">
        <h1 class="text-6xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          MistMirror ERP
        </h1>
        <p class="text-2xl leading-relaxed opacity-90 font-light">
          Makes cross-border business<br />
          more efficient and transparent
        </p>
      </div>
      <img
        src="../../public/account_bg.svg"
        class="absolute bottom-0 left-0 w-full opacity-30"
        alt="background illustration"
      />
    </div>

    <!-- 右侧登录区 -->
        <AuthForm />
  </div>
</template>
<script lang="ts" setup>
import AuthForm from '../components/form/AuthForm.vue';
</script>
