var u=Object.defineProperty;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&l(e,a,t[a]);if(c)for(var a of c(t))b.call(t,a)&&l(e,a,t[a]);return e};import{B}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.49b4a020.js";import"./BasicForm.af22afdc.js";import{_ as y}from"./index.b91482d8.js";import{P as g}from"./PageWrapper.df54460f.js";import{g as h,a as j}from"./tableData.27c2579b.js";import{am as $,W as v,r as i,o as x,k as T,w as o,b as s,i as r}from"./vendor.43fc48c7.js";import"./BasicUpload.023550e9.js";const z={name:"Basic",components:{BasicTable:B,PageWrapper:g},setup(){const e=$({tableColumns:h(),tableData:j()});return p({},v(e))}},C=r(" el-table\u7684\u6240\u6709\u5C5E\u6027\u90FD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 "),P=r("\u64CD\u4F5C1"),W=r("\u64CD\u4F5C2"),k=r("\u7F16\u8F91"),D=r("\u5220\u9664");function w(e,t,a,N,V,F){const n=i("el-button"),m=i("BasicTable",!0),d=i("el-card"),_=i("PageWrapper");return x(),T(_,{title:e.$route.meta.title,"sub-title":e.$route.meta.title,"content-background":""},{content:o(()=>[C]),extra:o(()=>[s(n,{type:"primary",size:"mini"},{default:o(()=>[P]),_:1}),s(n,{type:"primary",size:"mini"},{default:o(()=>[W]),_:1})]),default:o(()=>[s(d,{shadow:"none"},{default:o(()=>[s(m,{data:e.tableData,columns:e.tableColumns,border:"",size:"small"},{action:o(()=>[s(n,{type:"text",size:"mini"},{default:o(()=>[k]),_:1}),s(n,{type:"text",size:"mini",style:{color:"red"}},{default:o(()=>[D]),_:1})]),_:1},8,["data","columns"])]),_:1})]),_:1},8,["title","sub-title"])}var I=y(z,[["render",w]]);export{I as default};
