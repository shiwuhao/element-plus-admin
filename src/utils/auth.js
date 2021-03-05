const TokenKey = 'Admin-Token';

/**
 * 获取token
 * @returns {string}
 */
export function getToken() {
  return localStorage.getItem(TokenKey)
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

/**
 * 删除token
 */
export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
