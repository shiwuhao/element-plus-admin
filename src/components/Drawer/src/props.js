export const props = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  beforeClose: {
    type: Function,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  customClass: {
    type: String,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'rtl',
  },
  size: {
    type: [String, Number],
    default: '50%'
  },
  title: {
    type: String,
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  modalClass: {
    type: String,
  },
  zIndex: {
    type: Number
  }
}