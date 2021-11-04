import taobaoIcon from './taobao.icon'
import alibabaIcon from './alibaba.icon'
import elCustomIcon from './el-custom.icon'

const modules = [taobaoIcon, alibabaIcon, elCustomIcon]
const groups = [];
const icons = [];

modules.map(({name, glyphs, css_prefix_text}) => {
  const group = {name, icons: []}
  glyphs.map(({font_class}) => {
    const _icon = css_prefix_text + font_class;
    group.icons.push(_icon);
    icons.push(_icon);
  })
  groups.push(group)
})

export {
  icons,
  groups,
}