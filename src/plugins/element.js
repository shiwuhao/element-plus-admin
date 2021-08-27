import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'

export function setupElementPlus(app) {
  app.use(ElementPlus, {size: 'small', zIndex: 3000, locale: locale})
}
