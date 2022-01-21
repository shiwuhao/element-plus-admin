import Icon from '@/components/Icon/index.js'

const compList = [Icon];

export function registerGlobComp(app) {
  compList.forEach(item => {
    app.component(item.name, item)
  })
}