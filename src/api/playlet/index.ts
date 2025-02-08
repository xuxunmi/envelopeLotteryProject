import { http } from '@/utils/http'
const env = import.meta.env

/**
 * @description: 短剧登录
 */
export function login(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + '/index/index/login',
    method: 'post',
    data
  })
}
/**
 * @description: 推啊回传
 */
export function tuia(data?: object) {
  return http.request({
    headers: { 'Content-Type': 'multipart/form-data' },
    url: env.VITE_BASE_API + '/tuia/ad/click',
    method: 'post',
    data
  })
}

/**
 * @description: 记录PV
 */
export function record(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + '/index/index/record',
    method: 'post',
    data
  })
}

/**
 * @description: 短剧
 */
export function getVideo(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + '/index/index/videoList',
    method: 'post',
    data
  })
}
/**
 * @description: 短剧ID
 */
export function getVideoDetail(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + '/index/index/videoDetail',
    method: 'post',
    data
  })
}

/**
 * @description: 抽奖
 */
export function reward(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + '/index/index/reward',
    method: 'post',
    data
  })
}

/**
 * @description: 唤起支付
 */
export function pay(data?: object) {
  return http.request({
    url: env.VITE_BASE_PAY + '/index/index/pay2',
    method: 'post',
    data
  })
}
export function alipay(data?: object) {
  return http.request({
    url: env.VITE_BASE_PAY + '/index/Alipay/prePay',
    method: 'post',
    data
  })
}
export function check_alipay(data?: object) {
  return http.request({
    url: env.VITE_BASE_PAY + '/index/Alipay/checkAlipay',
    method: 'post',
    data
  })
}
