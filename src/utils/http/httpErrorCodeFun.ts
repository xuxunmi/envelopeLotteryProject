import type { AxiosError } from "axios";

export const statusCodeErrorMessage = (
  status: number,
  error: AxiosError
): string => {
  const statusMap: { [key: number]: string } = {
    400: "错误请求",
    401: "未授权，请登录",
    403: "拒绝访问",
    404: `请求地址出错: ${error.response?.config?.url}`,
    405: "请求方法未允许",
    408: "请求超时",
    500: "服务器内部错误",
    501: "网络未实现",
    502: "网关错误",
    503: "服务不可用",
    504: "网络超时",
    505: "http版本不支持该请求"
  };
  if (statusMap[status]) {
    return statusMap[status];
  } else {
    return "网络连接故障";
  }
};
