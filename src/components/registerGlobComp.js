import {IconSvg} from '@/components/Icon'
import '//at.alicdn.com/t/font_1804572_lpxi1wzsac.js';

const compList = [IconSvg];

export function registerGlobComp(app) {
  compList.forEach(item => {
    app.component(item.name, item)
  })
}