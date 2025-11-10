import { createRouter, createWebHashHistory } from 'vue-router'

// 布局与页面
import Main from '../layout/Main.vue'
import Account from '../pages/Account.vue'
import Dashboard from '../pages/Dashboard/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/dashboard', // 默认重定向到仪表盘
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '控制面板', icon: 'PieChartOutlined' }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../pages/Users/Index.vue'),
        meta: { title: '用户管理', icon: 'UserOutlined' }
      },
      {
        path: 'orders/all',
        name: 'OrdersAll',
        component: () => import('../pages/Orders/All.vue'),
        meta: { title: '订单管理', icon: 'ShoppingCartOutlined' }
      }, {
        path: 'orders/pending',
        name: 'OrdersPending',
        component: () => import('../pages/Orders/Pending.vue'),
        meta: { title: '订单管理', icon: 'ShoppingCartOutlined' }
      },
      {
        path: 'inventory/products',
        name: 'InventoryProduct',
        component: () => import('../pages/Inventory/Products.vue'),
        meta: { title: '库存管理', icon: 'AppstoreOutlined' }
      },{
        path: 'inventory/records',
        name: 'InventoryRecord',
        component: () => import('../pages/Inventory/Record.vue'),
        meta: { title: '库存管理', icon: 'AppstoreOutlined' }
      }
    ]
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { title: '登录' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
