const iconPickerProps = {
  iconList: {
    type: Array,
    default: (() => []),
    required: true
  },
  width: {
    type: Number,
    default: 200
  },
  placement: {
    type: String,
    default: 'bottom'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: 'manual'
  },
  popperClass: {
    type: String,
    default: 'popper-class'
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请选择图标'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium'
  },
  readonly: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'div'
  },
  wrapClass: {
    type: String,
    default: ''
  },
  viewClass: {
    type: String,
    default: ''
  },
  maxHeight: {
    type: Number,
    default: 400
  },
  description: {
    type: String,
    default: '暂无数据'
  },
  imageSize: {
    type: Number,
    default: 60
  },
  image: {
    type: String,
    default: ''
  }
}
export {iconPickerProps}