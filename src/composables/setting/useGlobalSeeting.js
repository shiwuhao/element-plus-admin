/**
 * 全局设置
 * @returns {{logo, title}}
 */
export function useGlobalSetting() {

  const logo = import.meta.env.VITE_LOGO;
  const title = import.meta.env.VITE_TITLE;
  const apiUrl = import.meta.env.VITE_API_URL;
  const uploadUrl = import.meta.env.VITE_UPLOAD_URL;

  return {
    logo,
    title,
    apiUrl,
    uploadUrl,
  };
}