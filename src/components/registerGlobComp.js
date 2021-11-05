import Icon from '@/components/Icon'


const compList = [Icon];

export function registerGlobComp(app) {
  compList.forEach(item => {
    app.component(item.name, item)
  })
}