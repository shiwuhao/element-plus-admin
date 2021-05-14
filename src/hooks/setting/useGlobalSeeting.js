/**
 * 全局设置
 * @returns {{logo, title}}
 */
export function useGlobalSetting() {

  const logo = process.env.VUE_APP_LOGO;
  const title = process.env.VUE_APP_TITLE;
  const apiUrl = process.env.VUE_APP_API_URL;
  const uploadUrl = process.env.VUE_APP_UPLOAD_URL;

  return {
    logo,
    title,
    apiUrl,
    uploadUrl,
  };
}