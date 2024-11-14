/**
 * 获取url上的参数
 * @param {*} name: 参数名
 */
export function getQueryString(name) {
  let requestString = location.search;
  let reg = new RegExp("(?:\\?|&)" + name + "=(.*?)(?:&|$)");
  if (reg.test(requestString)) {
    return decodeURIComponent(RegExp.$1);
  }
  return undefined;
}
