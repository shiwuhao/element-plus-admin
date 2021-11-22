import {
  ElInput,
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
import Select from "./components/Select.vue";
import Textarea from "./components/Textarea.vue";
import TimePicker from "./components/TimePicker.vue";
import DatePicker from "./components/DatePicker.vue";
import DateTimePicker from "./components/DateTimePicker.vue";
import RadioGroup from "./components/RadioGroup.vue";
import RadioButtonGroup from "./components/RadioButtonGroup.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import CheckboxButtonGroup from "./components/CheckboxButtonGroup.vue";
import Upload from './components/Upload.vue'

const componentMap = new Map;
componentMap.set('Input', ElInput);
componentMap.set('Textarea', Textarea);
componentMap.set('Select', Select);
componentMap.set('RadioGroup', RadioGroup);
componentMap.set('RadioButtonGroup', RadioButtonGroup);
componentMap.set('Radio', ElRadio);
componentMap.set('Checkbox', ElCheckbox);
componentMap.set('CheckboxGroup', CheckboxGroup);
componentMap.set('CheckboxButtonGroup', CheckboxButtonGroup);
componentMap.set('InputNumber', ElInputNumber);
componentMap.set('Switch', ElSwitch);
componentMap.set('Cascader', ElCascader);
componentMap.set('Slider', ElSlider);
componentMap.set('DatePicker', DatePicker);
componentMap.set('DateTimePicker', DateTimePicker);
componentMap.set('TimePicker', TimePicker);
componentMap.set('TimeSelect', ElTimeSelect);
componentMap.set('Upload', Upload);

export {
  componentMap
}