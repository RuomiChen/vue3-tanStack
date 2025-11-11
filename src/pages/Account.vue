<template>
  <div class="flex min-h-screen overflow-clip">
    <!-- 左侧品牌区 -->
    <div
      class="relative flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
      <div class="z-10 text-center px-10">
        <h1 class="text-6xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          MistMirror ERP
        </h1>
        <p class="text-2xl leading-relaxed opacity-90 font-light">
          Makes cross-border business<br />
          more efficient and transparent
        </p>
      </div>
      <img src="../../public/account_bg.svg" class="absolute bottom-0 left-0 w-full opacity-30"
        alt="background illustration" />
    </div>

    <!-- 右侧登录区 -->
    <div class="flex-1 flex flex-col items-center justify-between">

      <AuthForm />
      <footer
        class="w-full text-center pt-4 text-gray-800 text-sm font-300 bg-white/50 backdrop-blur-sm">
        <p class="tracking-wide">
          © 2025 - Present Huo Xiaosheng Technology Co., LTD &nbsp;&nbsp;&nbsp;All rights reserved.
        </p>
      </footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AuthForm from '../components/form/AuthForm.vue';
</script>
