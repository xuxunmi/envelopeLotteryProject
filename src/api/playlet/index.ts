import { http } from "@/utils/http";

/**
 * @description: 短剧登录
 */
export function login(data?: object) {
  return http.request({
    url: "/api/index/index/login",
    method: "post",
    data
  });
}

/**
 * @description: 唤起支付
 */
export function pay(data?: object) {
  return http.request({
    url: "/pay/index/index/pay",
    method: "post",
    data
  });
}
