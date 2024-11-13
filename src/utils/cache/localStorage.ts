import CacheKey from "./cacheKey";

//#region token 处理
export const getToken = () => {
  return localStorage.getItem(CacheKey.TOKEN);
};
export const setToken = (token: string) => {
  localStorage.setItem(CacheKey.TOKEN, token);
};
export const removeToken = () => {
  localStorage.removeItem(CacheKey.TOKEN);
};
//#endregion
