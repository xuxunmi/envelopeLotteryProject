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
    path: '/smokeRedEnvelope_check',
    component: () => import('@/views/watchShortDramas/center.vue'),
    name: 'watchShortDramas2',
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
  },
  {
    path: '/video',
    component: () => import('@/views/video/index.vue'),
    name: 'video',
    meta: {
      title: '看短剧',
      noCache: true
    }
  },
  {
    path: '/chasing',
    component: () => import('@/views/video/chasing.vue'),
    name: 'chasing',
    meta: {
      title: '在追',
      noCache: true
    }
  },
  {
    path: '/monthlyCollarActivity',
    component: () => import('@/views/monthlyCollarActivity/index.vue'),
    name: 'monthlyCollarActivity',
    meta: {
      title: '话费月月领会员活动',
      noCache: true
    },
  },
  {
    path: '/monthlyCollarActivity/report',
    component: () => import('@/views/monthlyCollarActivity/report.vue'),
    name: 'monthlyCollarActivityReport',
    meta: {
      title: '投诉举报',
      noCache: true
    }
  }
]

export default routes
