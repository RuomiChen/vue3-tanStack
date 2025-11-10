<template>
  <a-layout class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      class="shadow-md"
      theme="dark"
      width="220"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center h-16 bg-[#001529] text-white text-xl font-semibold tracking-wide">
        <img
          v-if="!collapsed"
          class="h-8 mr-2"
          src="../../public/logo.png"
        />
        <span v-if="!collapsed">MistMirror ERP</span>
      </div>

      <!-- Menu -->
      <SidebarMenu :items="items" :defaultCollapsed="false" />
    </a-layout-sider>

    <!-- Main layout -->
    <a-layout>
      <!-- Header -->
      <a-layout-header
        class="!bg-white flex items-center justify-between !px-8 border-b border-gray-200 shadow-sm"
        style="height: 64px;"
      >
        <!-- 左侧菜单按钮 + 标题 -->
        <div class="flex items-center gap-3">
          <menu-unfold-outlined
            v-if="collapsed"
            class="text-gray-600 hover:text-blue-500 text-[18px] cursor-pointer transition"
            @click="collapsed = !collapsed"
          />
          <menu-fold-outlined
            v-else
            class="text-gray-600 hover:text-blue-500 text-[18px] cursor-pointer transition"
            @click="collapsed = !collapsed"
          />
        </div>

        <!-- 右侧操作区 -->
        <div class="flex items-center gap-4">
          <a-button type="primary" size="small" @click="router.push({ name: 'Account' })">
            登录
          </a-button>

          <a-dropdown>
            <a-avatar size="large" class="cursor-pointer bg-blue-600">
              U
            </a-avatar>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">个人中心</a-menu-item>
                <a-menu-item key="1">系统设置</a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>

      <!-- Content -->
      <a-layout-content
        class="m-6 p-6 bg-white rounded-lg shadow-sm"
        :style="{ minHeight: 'calc(100vh - 112px)' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {
    AppstoreAddOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
} from '@ant-design/icons-vue';
import { h, ref } from 'vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import { router } from '../router';

const collapsed = ref(false);

const items = [
  { key: '1', icon: () => h(PieChartOutlined), label: '控制面板', path: '/dashboard' },
  { key: '2', icon: () => h(DesktopOutlined), label: '用户管理', path: '/users' },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: '订单管理',
    children: [
      { key: '5', label: '全部订单', path: '/orders/all' },
      { key: '6', label: '待发货订单', path: '/orders/pending' },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreAddOutlined),
    label: '库存管理',
    children: [
      { key: '9', label: '商品列表', path: '/inventory/products' },
      { key: '10', label: '出入库记录', path: '/inventory/records' },
    ],
  },
];
</script>
