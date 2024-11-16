import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   redirect: { path: "/loading" }
  // },
  {
    path: '/loading',
    component: () => import('@/views/loading/index.vue'),
    name: 'loading',
    meta: {
      title: '加载中',
      noCache: true
    }
  },
  {
    path: '/smokeRedEnvelope',
    component: () => import('@/views/smokeRedEnvelope/index.vue'),
    name: 'highestSmokeRedEnvelope',
    meta: {
      title: '最高抽888元红包',
      noCache: true
    }
  },
  {
    path: '/watchdramaSmokeRedEnvelope',
    component: () => import('@/views/watchdramaSmokeRedEnvelope/index.vue'),
    name: 'watchdramaSmokeRedEnvelope',
    meta: {
      title: '继续看剧抽红包',
      noCache: true
    }
  },
  {
    path: '/smokeRedEnvelope_res',
    component: () => import('@/views/watchShortDramas/index.vue'),
    name: 'watchShortDramas',
    meta: {
      title: '看短剧领红包',
      noCache: true
    }
  },
  {
    path: '/shortDramasDrawredenvelopes',
    component: () => import('@/views/shortDramasDrawredenvelopes/index.vue'),
    name: 'shortDramasDrawredenvelopes',
    meta: {
      title: '短剧抽红包',
      noCache: true
    }
  }
]

export default routes
