var u=Object.defineProperty,d=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))_.call(e,t)&&s(o,t,e[t]);if(r)for(var t of r(e))b.call(e,t)&&s(o,t,e[t]);return o},m=(o,e)=>d(o,f(e));import{_ as i}from"./PageWrapper.66af3ba5.js";import{b as h}from"./formData.ed2e40f9.js";import{_ as g,u as j}from"./index.2338912f.js";import{B as v}from"./Form.83f0ddb3.js";import{y as k,b as R,U as x,o as F,f as B,w,h as S}from"./vendor.55f737cb.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";/* empty css                     *//* empty css                 *//* empty css               *//* empty css                          *//* empty css                       *//* empty css                        */const V={name:"RuleForm",components:{BasicForm:v,PageWrapper:i},setup(){const{getIsMobile:o}=j(),e=k({schemas:h(),form:{input:"",input_number:12321,select:"value1",time_picker:"16:40:33",date_picker:"2021-06-18",cascader:["value2","value1"],slider:17,radio_group:"value2",checkbox_group:["value1","value2"],checkbox_button_group:["value1"],radio_button_group:"value2",date_time_picker:"2021-06-17 00:00:00",time_select:"11:00"}}),t=()=>{},a=()=>{};return m(n({},R(e)),{getIsMobile:o,handleReset:t,handleSubmit:a})}};function P(o,e,t,a,W,y){const l=x("BasicForm"),p=i;return F(),B(p,{title:o.$route.meta.title,"content-background":"","content-full-height":""},{default:w(()=>[S(l,{class:"p-2",ref:"formRef",modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=c=>o.form=c),schemas:o.schemas,onReset:a.handleReset,onSubmit:a.handleSubmit,"auto-width":"","label-width":"150px","label-position":a.getIsMobile?"top":"right"},null,8,["modelValue","schemas","onReset","onSubmit","label-position"])]),_:1},8,["title"])}var L=g(V,[["render",P]]);export{L as default};