import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export function setupElementPlus(app) {
  app.use(ElementPlus, { zIndex: 3000})
}
