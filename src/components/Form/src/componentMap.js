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
import Select from "./components/Select";
import Textarea from "./components/Textarea";
import TimePicker from "./components/TimePicker";
import DatePicker from "./components/DatePicker";
import DateTimePicker from "./components/DateTimePicker";
import RadioGroup from "./components/RadioGroup";
import RadioButtonGroup from "./components/RadioButtonGroup";
import CheckboxGroup from "./components/CheckboxGroup";
import CheckboxButtonGroup from "./components/CheckboxButtonGroup";
import Upload from './components/Upload'

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