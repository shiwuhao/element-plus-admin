var f=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(a,e,s)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,n=(a,e)=>{for(var s in e||(e={}))h.call(e,s)&&i(a,s,e[s]);if(d)for(var s of d(e))y.call(e,s)&&i(a,s,e[s]);return a},l=(a,e)=>v(a,B(e));import{B as _}from"./BasicForm.632dcaac.js";import"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.4d009668.js";import{_ as P}from"./index.d7ea869a.js";import{E as u,al as j,s as g,r as A,o as b,j as x,z as F}from"./vendor.b8da4354.js";const O={name:"BasicQuery",components:{BasicForm:_},props:{modelValue:{type:Object,default:()=>({})},schemas:{type:Array,default:()=>[]},colProps:{type:Object,default:()=>({span:8})},isAdvanced:{type:Boolean,default:!1},advanced:{type:Boolean,default:!1},advancedLength:{type:[Number,String],default:3}},setup(a){const{schemas:e,colProps:s,isAdvanced:o,advanced:c,advancedLength:r}=u(a),t=j({actionProps:{isAdvanced:o,showAdvancedButton:c,showAdvancedLength:r,colProps:s,actionPosition:"left",resetButtonText:"\u91CD\u7F6E",submitButtonText:"\u641C\u7D22",position:"left"}}),p=g([]);return e.value.forEach(m=>{p.value.push(n({colProps:s.value},m))}),l(n({},u(t)),{schemaOptions:p})}};function $(a,e,s,o,c,r){const t=A("BasicForm");return b(),x(t,F(a.$props,{schemas:o.schemaOptions,"action-props":a.actionProps}),null,16,["schemas","action-props"])}var T=P(O,[["render",$],["__scopeId","data-v-635dd480"]]);export{T as B};
