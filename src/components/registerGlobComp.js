import {IconSvg} from '@/components/Icon'


const compList = [IconSvg];

export function registerGlobComp(app) {
  compList.forEach(item => {
    app.component(item.name, item)
  })
}