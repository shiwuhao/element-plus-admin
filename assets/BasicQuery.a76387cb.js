var f=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(s,e,o)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,n=(s,e)=>{for(var o in e||(e={}))h.call(e,o)&&i(s,o,e[o]);if(d)for(var o of d(e))y.call(e,o)&&i(s,o,e[o]);return s},l=(s,e)=>v(s,B(e));import{B as _}from"./BasicForm.7080940e.js";import"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.6a187551.js";import{_ as P}from"./index.f7fbf591.js";import{X as u,an as j,s as b,r as g,o as A,j as x,z as F}from"./vendor.03f63306.js";const O={name:"BasicQuery",components:{BasicForm:_},props:{modelValue:{type:Object,default:()=>({})},schemas:{type:Array,default:()=>[]},colProps:{type:Object,default:()=>({span:8})},isAdvanced:{type:Boolean,default:!1},advanced:{type:Boolean,default:!1},advancedLength:{type:[Number,String],default:3}},setup(s){const{schemas:e,colProps:o,isAdvanced:a,advanced:r,advancedLength:c}=u(s),t=j({actionProps:{isAdvanced:a,showAdvancedButton:r,showAdvancedLength:c,colProps:o,actionPosition:"left",resetButtonText:"\u91CD\u7F6E",submitButtonText:"\u641C\u7D22",position:"left"}}),p=b([]);return e.value.forEach(m=>{p.value.push(n({colProps:o.value},m))}),l(n({},u(t)),{schemaOptions:p})}};function $(s,e,o,a,r,c){const t=g("BasicForm");return A(),x(t,F({class:"query-form"},s.$props,{schemas:a.schemaOptions,"action-props":s.actionProps}),null,16,["schemas","action-props"])}var q=P(O,[["render",$],["__scopeId","data-v-296cbfa0"]]);export{q as B};
