import {
  ElInput,
  ElSelect,
  ElRadio,
  ElCheckbox,
  ElDatePicker,
  ElTimePicker,
  ElInputNumber,
  ElSwitch,
  ElCascader,
  ElSlider,
  ElTimeSelect,
} from 'element-plus'

const componentMap = new Map;
componentMap.set('Input', ElInput);
componentMap.set('Select', ElSelect);
componentMap.set('Radio', ElRadio);
componentMap.set('Checkbox', ElCheckbox);
componentMap.set('InputNumber', ElInputNumber);
componentMap.set('Switch', ElSwitch);
componentMap.set('Cascader', ElCascader);
componentMap.set('Slider', ElSlider);
componentMap.set('DatePicker', ElDatePicker);
componentMap.set('DatePicker', ElDatePicker);
componentMap.set('TimePicker', ElTimePicker);
componentMap.set('TimeSelect', ElTimeSelect);

export {
  componentMap
}