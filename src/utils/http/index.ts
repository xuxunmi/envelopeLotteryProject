import Axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig
} from "axios";
import qs from "qs";
import { ContentTypeEnum, ResultEnum } from "@/enums/requestEnum";
import { statusCodeErrorMessage } from "./httpErrorCodeFun";
import { getToken } from "../cache/localStorage";
import { showFailToast } from "vant";
import "vant/es/toast/style";

const env = import.meta.env; // 环境变量
// 接口白名单
const whiteApiList = ["/servlet/rest/KbomRest/exportBomCompareInfo"];

// 错误提示白名单
const whiteErrorApiList = [];

// 默认 axios 实例请求配置
const configDefault = {
  baseURL: env.VITE_BASE_API,
  withCredentials: true, // 跨域请求时是否需要使用凭证
  headers: {
    "Content-Type": ContentTypeEnum.JSON
  },
  timeout: 5000,
  data: {}
};

class Http {
  // 当前实例
  private static axiosInstance: AxiosInstance;
  // 请求配置
  private static axiosConfigDefault: AxiosRequestConfig;

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      config => {
        const token = getToken(); // 获取 token
        if (token) {
          config.headers["Authorization"] = token;
        }
        //只针对get方式数组参数进行序列化
        if (config.method === "get") {
          // 适用于 1.x版本以上
          config.paramsSerializer = {
            serialize: params => qs.stringify(params, { arrayFormat: "repeat" })
          };
        }
        return config;
      },
      (error: AxiosError) => {
        showFailToast(error.message);
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.data;
        console.log("response", response);
        let flag = false;
        whiteApiList.forEach(ele => {
          if (response.config.url?.indexOf(ele) != -1) flag = true;
        });
        if (flag) return res;
        if (res.resultCode != ResultEnum.SUCCESS) {
          let errFlag = false;
          whiteErrorApiList.forEach(ele => {
            if (response.config.url?.indexOf(ele) != -1) errFlag = true;
          });
          if (!errFlag) {
            showFailToast(res.message);
          }
          return Promise.reject(res);
        } else {
          return res;
        }
      },
      (error: AxiosError) => {
        // 处理响应错误
        let message = "";
        if (error && error.response) {
          const { status } = error.response;
          message = statusCodeErrorMessage(status, error);
        }
        showFailToast(message);
        return Promise.reject(error);
      }
    );
  }

  constructor(config: AxiosRequestConfig) {
    Http.axiosConfigDefault = config;
    Http.axiosInstance = Axios.create(config);
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 通用请求函数
  public request<T>(paramConfig: AxiosRequestConfig): Promise<T> {
    const config = { ...Http.axiosConfigDefault, ...paramConfig };
    return new Promise((resolve, reject) => {
      Http.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export const http = new Http(configDefault);
