System.register(["./.pnpm-legacy-CD_dC7Ph.js"],(function(e,t){"use strict";var r,s,n;return{setters:[e=>{r=e.K,s=e.H,n=e.L}],execute:function(){e({a:function(e){return d.request({url:l.VITE_BASE_PAY+"/index/Alipay/prePay",method:"post",data:e})},b:function(e){return d.request({url:l.VITE_BASE_API+"/index/index/reward",method:"post",data:e})},c:function(e){return d.request({url:l.VITE_BASE_PAY+"/index/Alipay/checkAlipay",method:"post",data:e})},g:function(e){return d.request({url:l.VITE_BASE_API+"/index/index/videoList",method:"post",data:e})},l:function(e){return d.request({url:l.VITE_BASE_API+"/index/index/login",method:"post",data:e})},p:function(e){return d.request({url:l.VITE_BASE_PAY+"/index/index/pay2",method:"post",data:e})},r:function(e){return d.request({url:l.VITE_BASE_API+"/index/index/record",method:"post",data:e})}});var t=(e=>(e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e.JSON="application/json;charset=UTF-8",e))(t||{}),o=(e=>(e[e.SUCCESS=1]="SUCCESS",e[e.ERROR=-1]="ERROR",e))(o||{});class a{static TOKEN="playlet-token"}const i=["/servlet/rest/KbomRest/exportBomCompareInfo"],c=[],u={baseURL:"/",withCredentials:!0,headers:{"Content-Type":t.JSON},timeout:5e3,data:{}};class p{static axiosInstance;static axiosConfigDefault;httpInterceptorsRequest(){p.axiosInstance.interceptors.request.use((e=>{const t=localStorage.getItem(a.TOKEN);return t&&(e.headers.Authorization=t),"get"===e.method&&(e.paramsSerializer={serialize:e=>r.stringify(e,{arrayFormat:"repeat"})}),e}),(e=>(s(e.message),Promise.reject(e))))}httpInterceptorsResponse(){p.axiosInstance.interceptors.response.use((e=>{const t=e.data;let r=!1;if(i.forEach((t=>{-1!=e.config.url?.indexOf(t)&&(r=!0)})),r)return t;if(t.code!=o.SUCCESS){let r=!1;return c.forEach((t=>{-1!=e.config.url?.indexOf(t)&&(r=!0)})),r||s(t.msg),Promise.reject(t)}return t}),(e=>{let t="";if(e&&e.response){const{status:r}=e.response;t=((e,t)=>{const r={400:"错误请求",401:"未授权，请登录",403:"拒绝访问",404:`请求地址出错: ${t.response?.config?.url}`,405:"请求方法未允许",408:"请求超时",500:"服务器内部错误",501:"网络未实现",502:"网关错误",503:"服务不可用",504:"网络超时",505:"http版本不支持该请求"};return r[e]?r[e]:"网络连接故障"})(r,e)}return s(t),Promise.reject(e)}))}constructor(e){p.axiosConfigDefault=e,p.axiosInstance=n.create(e),this.httpInterceptorsRequest(),this.httpInterceptorsResponse()}request(e){const t={...p.axiosConfigDefault,...e};return new Promise(((e,r)=>{p.axiosInstance.request(t).then((t=>{e(t)})).catch((e=>{r(e)}))}))}}const d=new p(u),l={LEGACY:!0,VITE_BASE_API:"/api",VITE_BASE_PAY:"/pay"}}}}));
