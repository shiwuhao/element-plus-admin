const basicProps = {
  action: {
    type: Boolean,
    required: true,
  },
  headers: {
    type: Object,
    default: ({})
  },
  data: {
    type: Object,
    default: ({})
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'file',
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: {
    type: Boolean,
    default: false,
  },
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
  },
  fileList: {
    type: Array,
    default: []
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
  },
  beforeUpload: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
  onPreview: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  onProgress: {
    type: Function,
  },
  onError: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
  httpRequest: {
    type: Function,
  },
  tips:{
    type: String,
  }
};

export {basicProps}