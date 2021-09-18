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