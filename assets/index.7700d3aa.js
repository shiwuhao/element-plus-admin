var j=Object.defineProperty,D=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var I=(e,o,i)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,b=(e,o)=>{for(var i in o||(o={}))R.call(o,i)&&I(e,i,o[i]);if(v)for(var i of v(o))U.call(o,i)&&I(e,i,o[i]);return e},A=(e,o)=>D(e,z(o));import{P as q}from"./PageWrapper.657356fd.js";import{B as L}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.c9c419c8.js";import{B as Q}from"./BasicQuery.33a98a39.js";import{B as W,u as E,a as K}from"./useResourceApi.b82e986c.js";import{_ as T,i as f}from"./index.9f0666ad.js";import{$ as P,a0 as N,m as S,s as V,b as n,G as x,o as w,x as B,w as l,H as F,e as a,B as G,j as p,t as H,d as J,a1 as M}from"./vendor.e9e2b289.js";import"./Form.5248ede4.js";const O={name:"editTemplate",components:{BasicDrawer:W},setup(){const e=P({defaultCheckedKeys:[],rules:{name:[{required:!0,pattern:/^(\w|:){3,50}$/,message:"\u6807\u8BC6\u4E3A\u5FC5\u586B\u9879\uFF0C3-50\u4E2A\u82F1\u6587\u5B57\u7B26",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0",trigger:"blur"}],status:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001",trigger:"blur"}],permission_ids:[{required:!0,message:"\u8BF7\u9009\u62E9\u6743\u9650\u8282\u70B9",type:"array",trigger:"change"}]}}),{getTreePermissions:o}=E(),{formRef:i,item:t,dialog:h,itemLoading:k,confirmLoading:m,cancelItem:r,confirmItem:c}=N("resourceApi"),_=(g,{checkedKeys:u})=>t.value.permission_ids=u;return S(t,()=>e.defaultCheckedKeys=t.value.permission_ids),A(b({},V(e)),{getTreePermissions:o,formRef:i,item:t,dialog:h,itemLoading:k,confirmLoading:m,cancelItem:r,confirmItem:c,handlePermissionCheck:_})}},X=p("\u542F\u7528"),Y=p("\u7981\u7528"),Z=p("\u53D6 \u6D88");function $(e,o,i,t,h,k){const m=n("el-input"),r=n("el-form-item"),c=n("el-radio-button"),_=n("el-radio-group"),g=n("el-tree"),u=n("el-button"),y=n("el-form"),C=n("BasicDrawer"),d=x("loading");return w(),B(C,{"custom-class":"drawer",title:t.item.id?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272",modelValue:t.dialog,"onUpdate:modelValue":o[4]||(o[4]=s=>t.dialog=s),onClose:t.cancelItem},{default:l(()=>[F(a(y,{ref:"formRef",model:t.item,rules:e.rules,"label-width":"80px",size:"small"},{default:l(()=>[a(r,{label:"\u82F1\u6587\u6807\u8BC6",prop:"name"},{default:l(()=>[a(m,{modelValue:t.item.name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.item.name=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u663E\u793A\u540D\u79F0",prop:"title"},{default:l(()=>[a(m,{modelValue:t.item.title,"onUpdate:modelValue":o[1]||(o[1]=s=>t.item.title=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u89D2\u8272\u5907\u6CE8",prop:"textarea"},{default:l(()=>[a(m,{modelValue:t.item.remark,"onUpdate:modelValue":o[2]||(o[2]=s=>t.item.remark=s),type:"textarea",autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u89D2\u8272\u72B6\u6001",prop:"status"},{default:l(()=>[a(_,{modelValue:t.item.status,"onUpdate:modelValue":o[3]||(o[3]=s=>t.item.status=s),size:"mini"},{default:l(()=>[a(c,{label:1},{default:l(()=>[X]),_:1}),a(c,{label:0},{default:l(()=>[Y]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u8BBF\u95EE\u6388\u6743",prop:"permission_ids"},{default:l(()=>[t.dialog?(w(),B(g,{key:0,data:t.getTreePermissions,props:{children:"children",label:"title"},"default-expanded-keys":[0],"default-checked-keys":e.defaultCheckedKeys,"node-key":"id","show-checkbox":"",style:{height:"100%"},onCheck:t.handlePermissionCheck},null,8,["data","default-checked-keys","onCheck"])):G("",!0)]),_:1}),a(r,null,{default:l(()=>[a(u,{onClick:t.cancelItem,size:"small"},{default:l(()=>[Z]),_:1},8,["onClick"]),a(u,{type:"primary",size:"small",onClick:t.confirmItem,loading:t.confirmLoading},{default:l(()=>[p(H(t.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"]),[[d,t.itemLoading]])]),_:1},8,["title","modelValue","onClose"])}var ee=T(O,[["render",$]]);const oe=(e={})=>f.get("/roles",{params:e}),te=(e={})=>f.get(`/roles/${e.id}`),ae=(e={})=>f.put(`/roles/${e.id}`,{id:e.id,name:e.name,title:e.title,remark:e.remark,status:e.status,permission_ids:e.permission_ids}),le=(e={})=>f.post("/roles",{name:e.name,title:e.title,remark:e.remark,status:e.status,permission_ids:e.permission_ids}),ne=(e={})=>f.delete(`/roles/${e.id}`),ie=J({name:"index",components:{BasicQuery:Q,BasicTable:L,EditTemplate:ee,PageWrapper:q},setup(){const e=P({columns:[{prop:"id",label:"ID",width:100},{prop:"title",label:"\u89D2\u8272\u540D\u79F0",minWidth:100},{prop:"name",label:"\u89D2\u8272\u6807\u8BC6",minWidth:100},{prop:"status_label",label:"\u72B6\u6001",minWidth:100},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:100}],schemas:[{field:"id",placeholder:"\u89D2\u8272ID",component:"Input"},{field:"title",placeholder:"\u89D2\u8272\u540D\u79F0",component:"Input"},{field:"name",placeholder:"\u89D2\u8272\u6807\u8BC6",component:"Input"}]}),o=K({listApi:oe,itemApi:te,updateApi:ae,storeApi:le,deleteApi:ne});return M("resourceApi",o),b(b({},V(e)),V(o))}}),se=p("\u65B0\u589E"),re=p("\u7F16\u8F91 "),de=p("\u5220\u9664");function me(e,o,i,t,h,k){const m=n("el-button"),r=n("BasicQuery"),c=n("el-card"),_=n("el-popconfirm"),g=n("el-table-column"),u=n("BasicTable"),y=n("EditTemplate"),C=n("page-wrapper");return w(),B(C,{title:e.$route.meta.title},{extra:l(()=>[a(m,{type:"primary",size:"mini",onClick:e.addItem},{default:l(()=>[se]),_:1},8,["onClick"])]),default:l(()=>[a(c,{shadow:"none"},{default:l(()=>[a(r,{modelValue:e.query,"onUpdate:modelValue":o[0]||(o[0]=d=>e.query=d),schemas:e.schemas,onSubmit:e.getQuery},null,8,["modelValue","schemas","onSubmit"])]),_:1}),a(c,{shadow:"none",class:"mt-2"},{default:l(()=>[a(u,{columns:e.columns,data:e.lists,paginate:e.paginate,loading:e.listLoading,onChangePage:e.changePage},{default:l(()=>[a(g,{label:"\u64CD\u4F5C",width:"120"},{default:l(d=>[a(m,{type:"text",size:"small",disabled:d.row.name==="Administrator",onClick:s=>e.editItem(d.row)},{default:l(()=>[re]),_:2},1032,["disabled","onClick"]),a(_,{title:"\u5220\u9664\u4F60\u662F\u8BA4\u771F\u7684\u5417\uFF1F",iconColor:"red",onConfirm:s=>e.deleteItem(d.row)},{reference:l(()=>[a(m,{type:"text",size:"small",disabled:d.row.name==="Administrator"},{default:l(()=>[de]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["columns","data","paginate","loading","onChangePage"]),a(y,{ref:"editTemplateRef",modelValue:e.dialog,"onUpdate:modelValue":o[1]||(o[1]=d=>e.dialog=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["title"])}var ke=T(ie,[["render",me]]);export{ke as default};
