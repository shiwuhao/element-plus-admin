var f=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(s,e,a)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,n=(s,e)=>{for(var a in e||(e={}))h.call(e,a)&&i(s,a,e[a]);if(d)for(var a of d(e))y.call(e,a)&&i(s,a,e[a]);return s},l=(s,e)=>v(s,B(e));import{B as _}from"./BasicForm.be9b3795.js";import{E as u,al as P,s as j,r as b,o as g,j as A,z as x}from"./vendor.a913ed64.js";import"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.a4c68572.js";import{_ as F}from"./index.59caaf27.js";const O={name:"BasicQuery",components:{BasicForm:_},props:{modelValue:{type:Object,default:()=>({})},schemas:{type:Array,default:()=>[]},colProps:{type:Object,default:()=>({span:8})},isAdvanced:{type:Boolean,default:!1},advanced:{type:Boolean,default:!1},advancedLength:{type:[Number,String],default:3}},setup(s){const{schemas:e,colProps:a,isAdvanced:o,advanced:c,advancedLength:r}=u(s),t=P({actionProps:{isAdvanced:o,showAdvancedButton:c,showAdvancedLength:r,colProps:a,actionPosition:"left",resetButtonText:"\u91CD\u7F6E",submitButtonText:"\u641C\u7D22",position:"left"}}),p=j([]);return e.value.forEach(m=>{p.value.push(n({colProps:a.value},m))}),l(n({},u(t)),{schemaOptions:p})}};function $(s,e,a,o,c,r){const t=b("BasicForm");return g(),A(t,x(s.$props,{schemas:o.schemaOptions,"action-props":s.actionProps}),null,16,["schemas","action-props"])}var T=F(O,[["render",$],["__scopeId","data-v-635dd480"]]);export{T as B};
