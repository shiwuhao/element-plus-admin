const e=[{label:"\u9009\u98791",value:"value1"},{label:"\u9009\u98792",value:"value2"},{label:"\u9009\u98793",value:"value3"}],l=[{label:"\u9009\u98791",value:"value1",children:[{label:"\u9009\u98793",value:"value1"},{label:"\u9009\u98794",value:"value1"}]},{label:"\u9009\u98792",value:"value2",children:[{label:"\u9009\u98794",value:"value1"},{label:"\u9009\u98795",value:"value1"}]}];function p(){return[{field:"input",label:"\u8F93\u5165\u6846",component:"Input",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInput\u8868\u5355"}},{field:"input_number",label:"\u8BA1\u6570\u5668",component:"InputNumber",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInputNumber\u8868\u5355",style:{}}},{field:"select",label:"\u9009\u62E9\u5668",component:"Select",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ASelect",options:e}},{field:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",component:"Cascader",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ACascader",collapseTags:!0,options:l,change:()=>{console.log(111)}}},{field:"slider",label:"\u6ED1\u5757",component:"Slider",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInput\u8868\u5355"}},{field:"switch",label:"\u5F00\u5173",component:"Switch",componentProps:{placeholder:"Switch"}},{field:"time_picker",label:"\u65F6\u95F4\u9009\u62E9\u5668",component:"TimePicker",componentProps:{placeholder:"TimePicker",valueFormat:"HH:mm:ss"}},{field:"time_select",label:"\u65F6\u95F4\u9009\u62E9\u5668",component:"TimeSelect",componentProps:{placeholder:"TimeSelect"}},{field:"date_picker",label:"\u65E5\u671F\u9009\u62E9\u5668",component:"DatePicker",componentProps:{placeholder:"DatePicker",type:"date",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",onChange:o=>{console.log(o)}}},{field:"date_time_picker",label:"\u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668",component:"DatePicker",componentProps:{placeholder:"DateTimePicker",valueFormat:"YYYY-MM-DD HH:mm:ss",type:"datetime"}},{field:"radio_group",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{placeholder:"RadioGroup",options:e}},{field:"radio_button_group",label:"\u5355\u9009\u6846\u6309\u94AE",component:"RadioButtonGroup",componentProps:{placeholder:"RadioButtonGroup",options:e}},{field:"checkbox_group",label:"\u591A\u9009\u6846",component:"CheckboxGroup",componentProps:{options:e}},{field:"checkbox_button_group",label:"\u591A\u9009\u6846\u6309\u94AE",component:"CheckboxButtonGroup",componentProps:{options:e}},{field:"upload",label:"\u4E0A\u4F20",component:"Upload",componentProps:{action:"https://jsonplaceholder.typicode.com/posts/",listType:"text",tips:"\u6211\u662F\u4E00\u4E2A\u6E29\u99A8\u5C0F\u63D0\u793A",fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}}]}function t(){return[{field:"input",label:"\u8F93\u5165\u6846",component:"Input",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInput\u8868\u5355"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12},formProps:{rules:[{required:!0,message:"\u8FD9\u662F\u4E2A\u5FC5\u586B\u9879",trigger:"blur"}]}},{field:"input_number",label:"\u8BA1\u6570\u5668",component:"InputNumber",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInputNumber\u8868\u5355",style:{minWidth:"300px"}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12},formProps:{rules:[{required:!0,message:"\u8FD9\u662F\u4E2A\u5FC5\u586B\u9879",trigger:"blur"}]}},{field:"select",label:"\u9009\u62E9\u5668",component:"Select",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ASelect",options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",component:"Cascader",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ACascader",collapseTags:!0,options:l,change:()=>{console.log(111)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"slider",label:"\u6ED1\u5757",component:"Slider",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInput\u8868\u5355"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"switch",label:"\u5F00\u5173",component:"Switch",componentProps:{placeholder:"Switch"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"time_picker",label:"\u65F6\u95F4\u9009\u62E9\u5668",component:"TimePicker",componentProps:{placeholder:"TimePicker",valueFormat:"HH:mm:ss"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"time_select",label:"\u65F6\u95F4\u9009\u62E9\u5668",component:"TimeSelect",componentProps:{placeholder:"TimeSelect"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"date_picker",label:"\u65E5\u671F\u9009\u62E9\u5668",component:"DatePicker",componentProps:{placeholder:"DatePicker",type:"date",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",onChange:o=>{console.log(o)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"date_time_picker",label:"\u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668",component:"DatePicker",componentProps:{placeholder:"DateTimePicker",valueFormat:"YYYY-MM-DD HH:mm:ss",type:"datetime"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"radio_group",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{placeholder:"RadioGroup",options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"radio_button_group",label:"\u5355\u9009\u6846\u6309\u94AE",component:"RadioButtonGroup",componentProps:{placeholder:"RadioButtonGroup",options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"checkbox_group",label:"\u591A\u9009\u6846",component:"CheckboxGroup",componentProps:{options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"checkbox_button_group",label:"\u591A\u9009\u6846\u6309\u94AE",component:"CheckboxButtonGroup",componentProps:{options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"upload",label:"\u4E0A\u4F20",component:"Upload",componentProps:{action:"https://jsonplaceholder.typicode.com/posts/",listType:"text",tips:"\u6211\u662F\u4E00\u4E2A\u6E29\u99A8\u5C0F\u63D0\u793A",fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}]}function n(){return[{field:"input",label:"\u8F93\u5165\u6846",component:"Input",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInput\u8868\u5355"},colProps:{xs:24,sm:24,md:12,lg:12,xl:12},formProps:{rules:[{required:!0,message:"\u8FD9\u662F\u4E2A\u5FC5\u586B\u9879",trigger:"blur"}]}},{field:"input_number",label:"\u8BA1\u6570\u5668",component:"InputNumber",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2AInputNumber\u8868\u5355",style:{minWidth:"300px"}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12},formProps:{rules:[{required:!0,message:"\u8FD9\u662F\u4E2A\u5FC5\u586B\u9879",trigger:"blur"}]}},{field:"select",label:"\u9009\u62E9\u5668",component:"Select",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ASelect",options:e},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}},{field:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",component:"Cascader",componentProps:{placeholder:"\u8FD9\u662F\u4E00\u4E2ACascader",collapseTags:!0,options:l,change:()=>{console.log(111)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}]}export{n as a,t as b,l as c,p as g,e as s};