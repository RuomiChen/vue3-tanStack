import { createRouter, createWebHashHistory } from 'vue-router'

// 布局与页面
import Main from '../layout/Main.vue'
import Account from '../pages/Account.vue'
import Dashboard from '../pages/Dashboard/Index.vue'
import { toast } from '../utils/toast'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/dashboard', // 默认重定向到仪表盘
    meta:{requiresAuth:true},
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
      }, {
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局前置守卫
router.beforeEach((to, _from, next) => {
  // const tokenStore = useTokenStore()
  const token = localStorage.getItem('token')
  // if (to.meta.requiresAuth && !tokenStore.token) {
  if (to.meta.requiresAuth && !token) {
    // 未登录，跳到登录页
    toast.error('please login first', { duration: 5 })
    next({ path: "/account", query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

// router.afterEach((to, from) => {
//   logPageView({
//     from: from,
//     to: to,
//   })
// })

export default router

