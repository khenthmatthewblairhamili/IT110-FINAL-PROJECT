import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Public routes (no layout wrapper)
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { requiresGuest: false }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/auth/ForgotPasswordView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('@/views/auth/ResetPasswordView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/Homepage/AboutView.vue'),
    meta: { 
      title: 'About DPWH System',
      requiresAuth: false
    }
  },

  // Home route (uses App.vue layout)
  {
    path: '/',
    component: () => import('@/views/Layouts/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Homepage/HomeView.vue')
      },
      {
        path: 'home',
        name: 'homepage',
        component: () => import('@/views/Homepage/HomeView.vue')
      }
    ]
  },

  // Dashboard route (standalone page)
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true } // Changed to true for consistency
  },

  // Redirects
  {
    path: '/home',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// Enhanced route guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

  // Set document title
  if (to.meta.title) {
    document.title = `${to.meta.title} | Your App Name`
  }

  // Auth check
  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
    return
  }

  // Guest check
  if (requiresGuest && isAuthenticated) {
    next({ name: 'home' })
    return
  }

  next()
})

export default router