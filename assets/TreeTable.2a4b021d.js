var b=Object.defineProperty;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))f.call(e,o)&&c(t,o,e[o]);if(n)for(var o of n(e))j.call(e,o)&&c(t,o,e[o]);return t};import{_ as l}from"./PageWrapper.66af3ba5.js";import{y as g,b as h,o as y,f as x,w as a,h as s,x as i,ay as B,aB as T}from"./vendor.55f737cb.js";/* empty css                */import{_ as m}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.e72b7a76.js";import"./Form.83f0ddb3.js";import{_ as k}from"./index.2338912f.js";import{g as v,b as w}from"./tableData.27c2579b.js";/* empty css                          *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                       *//* empty css                        */import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const $={name:"TreeTable",components:{BasicTable:m,PageWrapper:l},setup(){const t=g({tableColumns:v(),tableData:w()});return p({},h(t))}},C=i("\u7F16\u8F91"),D=i("\u5220\u9664");function E(t,e,o,N,P,V){const r=B,_=m,d=T,u=l;return y(),x(u,{title:t.$route.meta.title,"sub-title":t.$route.meta.title,"content-background":""},{default:a(()=>[s(d,{shadow:"none"},{default:a(()=>[s(_,{data:t.tableData,columns:t.tableColumns,"row-key":"id"},{action:a(()=>[s(r,{type:"text"},{default:a(()=>[C]),_:1}),s(r,{type:"text",style:{color:"red"}},{default:a(()=>[D]),_:1})]),_:1},8,["data","columns"])]),_:1})]),_:1},8,["title","sub-title"])}var X=k($,[["render",E]]);export{X as default};
