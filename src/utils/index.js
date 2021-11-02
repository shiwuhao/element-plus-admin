/**
 * listToTree
 * @param oldArr
 * @param pid
 * @param children
 * @returns {*}
 */
export function listToTree(oldArr, pid = 'pid', children = 'children') {
  oldArr.forEach(element => {
    let parentId = element[pid];
    if (parentId !== 0) {
      oldArr.forEach(ele => {
        if (parseInt(ele.id) === parseInt(parentId)) {
          if (!ele[children]) {
            ele[children] = [];
          }
          ele[children].push(element);
        }
      });
    }
  });
  oldArr = oldArr.filter(ele => ele[pid] === 0);
  return oldArr;
}
//转换时间
export function transformTime(time){
  let getTime = new Date(time).getTime();
  const date = new Date(getTime);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + '  ';
  const h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes()) ;
  const newTime = Y + M + D + h + m;
  return newTime;
}
export const getAssetsSrc = (path) => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
}

export function openWindow(url,opt) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {};
  const feature = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}