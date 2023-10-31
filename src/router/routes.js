const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'history',
        name: 'HistoryPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/HistoryPage.vue'),
        props: route => ({
          currentPage: parseInt(route.query.currentPage) || 1,
          limit: parseInt(route.query.limit) || 10
        })
      },
      {
        path: 'planning',
        name: 'PlanningPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/PlanningPage.vue')
      },
      {
        path: 'new-records',
        name: 'NewRecordPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/NewRecordPage.vue')
      },
      {
        path: 'categories',
        name: 'CategoriesPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/CategoriesPage.vue')
      },
      {
        path: 'detail-records',
        name: 'DetailRecordPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/DetailRecordPage.vue')
      },
      {
        path: 'profile',
        name: 'ProfilePage',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import('pages/RegisterPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]


export default routes
