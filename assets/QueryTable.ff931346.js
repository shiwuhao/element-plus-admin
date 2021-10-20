var v=Object.defineProperty,D=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&h(e,a,t[a]);if(_)for(var a of _(t))x.call(t,a)&&h(e,a,t[a]);return e},m=(e,t)=>D(e,T(t));import{P}from"./PageWrapper.df54460f.js";import{B as S}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.49b4a020.js";import{B as w}from"./BasicQuery.7a70fd69.js";import{g as Q,a as W}from"./tableData.27c2579b.js";import{s as $,c as E}from"./formData.aeb521f1.js";import{_ as I}from"./index.b91482d8.js";import{am as z,W as F,r as c,o as M,k as N,w as o,b as s,aq as O,P as b,i as B}from"./vendor.43fc48c7.js";import"./BasicForm.af22afdc.js";import"./BasicUpload.023550e9.js";const R={name:"QueryTable",components:{BasicTable:S,PageWrapper:P,BasicQuery:w},setup(){const e=z({tableColumns:Q(),tableData:W(),schemas:[{field:"id",placeholder:"\u7528\u6237ID",component:"Input"},{field:"username",placeholder:"\u7528\u6237\u540D",component:"Input"},{field:"nickname",placeholder:"\u6635\u79F0",component:"Input"},{field:"select",placeholder:"\u6635\u79F0",component:"Select",componentProps:{options:$}},{field:"cascader",placeholder:"\u6635\u79F0",component:"Cascader",componentProps:{collapseTags:!0,options:E}}],searchForm:{},form:{},customSlot:""}),t=(n,r)=>console.log(n,r),a=(n,r)=>{O.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{e.tableData.splice(n,1),b.success("\u5220\u9664\u6210\u529F!")}).catch(()=>{b.info("\u5DF2\u53D6\u6D88\u5220\u9664!")})},l=n=>{e.form=m(i({},n),{customSlot:this.customSlot})},p=()=>{console.log("reset")};return m(i({},F(e)),{handleEdit:t,handleDelete:a,handleSearch:l,handleReset:p})}},V=B("\u7F16\u8F91"),q=B("\u5220\u9664");function U(e,t,a,l,p,n){const r=c("BasicQuery"),d=c("el-card"),u=c("el-button"),g=c("el-table-column"),y=c("BasicTable"),C=c("PageWrapper");return M(),N(C,{title:e.$route.meta.title,"sub-title":e.$route.meta.title},{default:o(()=>[s(d,{shadow:"none"},{default:o(()=>[s(r,{schemas:e.schemas,"col-props":{span:6},advanced:"",onSubmit:l.handleSearch},null,8,["schemas","onSubmit"])]),_:1}),s(d,{shadow:"none",class:"mt10"},{default:o(()=>[s(y,{data:e.tableData,columns:e.tableColumns,border:"",size:"small"},{default:o(()=>[s(g,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:o(f=>[s(u,{type:"text",size:"mini",onClick:j=>l.handleEdit(f)},{default:o(()=>[V]),_:2},1032,["onClick"]),s(u,{type:"text",size:"mini",style:{color:"red"},onClick:j=>l.handleDelete(f)},{default:o(()=>[q]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","columns"])]),_:1})]),_:1},8,["title","sub-title"])}var te=I(R,[["render",U]]);export{te as default};
