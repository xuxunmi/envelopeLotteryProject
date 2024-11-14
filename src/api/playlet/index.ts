import { http } from "@/utils/http";
const env = import.meta.env;

/**
 * @description: 短剧登录
 */
export function login(data?: object) {
  return http.request({
    url: env.VITE_BASE_API + "/index/index/login",
    method: "post",
    data
  });
}

/**
 * @description: 唤起支付
 */
export function pay(data?: object) {
  return http.request({
    url: env.VITE_BASE_PAY + "/index/index/pay",
    method: "post",
    data
  });
}
