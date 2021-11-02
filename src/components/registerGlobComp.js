import {IconSvg} from '@/components/Icon'
import '//at.alicdn.com/t/font_1804572_hb20buvo8j4.js';

const compList = [IconSvg];

export function registerGlobComp(app) {
  compList.forEach(item => {
    app.component(item.name, item)
  })
}