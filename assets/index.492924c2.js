var N=Object.defineProperty,Q=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var T=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&T(e,r,t[r]);if(U)for(var r of U(t))G.call(t,r)&&T(e,r,t[r]);return e},A=(e,t)=>Q(e,S(t));import{P as M}from"./PageWrapper.5303ec3c.js";import{B as O}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.a4c68572.js";import{B as H}from"./BasicQuery.87f8c812.js";import{B as J,u as K,a as X}from"./useResourceApi.074b0960.js";import{a0 as P,ah as j,E as v,r as i,o as y,j as V,w as a,b as l,v as I,c as Y,i as Z,a as L,t as z,F as x,h as g,d as $,ak as R,n as ee}from"./vendor.a913ed64.js";import{c as w,_ as E}from"./index.59caaf27.js";import"./BasicForm.be9b3795.js";import"./BasicUpload.d83a2343.js";const te=(e={})=>w.get("/permissions",{params:e}),q=(e={})=>w.get("/permissions",{params:{pid:e}}),oe=(e={})=>w.get(`/permissions/${e.id}`),le=(e={})=>w.put(`/permissions/${e.id}`,{pid:e.pid,type:e.type,name:e.name,title:e.title,url:e.url,icon:e.icon,status:e.status}),ae=(e={})=>w.post("/permissions",{pid:e.pid,type:e.type,name:e.name,title:e.title,url:e.url,icon:e.icon,status:e.status}),ne=(e={})=>w.delete(`/permissions/${e.id}`),ie=(e={})=>w.post("/permissions/auto"),re={name:"editTemplate",components:{BasicDrawer:J},setup(){const e=P({rules:{pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u8282\u70B9",trigger:"change"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B",trigger:"change"}],name:[{required:!0,pattern:/^(\w|:){3,50}$/,message:"\u6807\u8BC6\u4E3A\u5FC5\u586B\u9879\uFF0C3-50\u4E2A\u82F1\u6587\u5B57\u7B26",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0",trigger:"blur"}],method:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BF7\u6C42\u65B9\u5F0F",trigger:"change"}],url:[{required:!0,message:"\u8BF7\u8F93\u5165\u540E\u7AEFurl\u5730\u5740",trigger:"blur"}]}}),{getPermissionRoutes:t}=K(),r=j("childrenListApi"),{formRef:o,item:k,dialog:C,itemLoading:d,confirmLoading:f,cancelItem:m,confirmItem:b}=j("resourceApi"),s=async({level:c,data:u},_)=>{if(c===0)_([{id:0,pid:0,title:"\u6839\u8282\u70B9",children:[]}]);else{const{data:{data:p}}=await r(u.id);_(p)}};return A(h({},v(e)),{formRef:o,item:k,dialog:C,itemLoading:d,confirmLoading:f,cancelItem:m,confirmItem:b,getPermissionRoutes:t,lazyLoad:s})}},se=g("\u83DC\u5355"),de=g("\u52A8\u4F5C"),me=g("ALL"),pe={style:{float:"left"}},ce={style:{float:"right"}},ue=g("\u53D6 \u6D88");function fe(e,t,r,o,k,C){const d=i("el-radio-button"),f=i("el-radio-group"),m=i("el-form-item"),b=i("el-cascader"),s=i("el-input"),c=i("el-option"),u=i("el-select"),_=i("e-icon-picker"),p=i("el-form"),B=i("el-button"),W=i("BasicDrawer");return y(),V(W,{title:o.item.id?"\u7F16\u8F91\u6743\u9650":"\u65B0\u589E\u6743\u9650",direction:"rtl",size:"50%",loading:o.itemLoading,modelValue:o.dialog,"onUpdate:modelValue":t[8]||(t[8]=n=>o.dialog=n),onClose:o.cancelItem},{default:a(()=>[l(p,{ref:"formRef",model:o.item,rules:e.rules,"label-width":"80px",size:"small"},{default:a(()=>[l(m,{label:"\u8282\u70B9\u7C7B\u578B",prop:"type"},{default:a(()=>[l(f,{modelValue:o.item.type,"onUpdate:modelValue":t[0]||(t[0]=n=>o.item.type=n),size:"mini"},{default:a(()=>[l(d,{label:"menu"},{default:a(()=>[se]),_:1}),l(d,{label:"action"},{default:a(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u7236\u7EA7\u8282\u70B9",prop:"pid"},{default:a(()=>[l(b,{modelValue:o.item.pid,"onUpdate:modelValue":t[1]||(t[1]=n=>o.item.pid=n),"show-all-levels":!1,props:{checkStrictly:!0,value:"id",label:"title",emitPath:!1,lazy:!0,lazyLoad:o.lazyLoad},clearable:"",style:{width:"100%"}},null,8,["modelValue","props"])]),_:1}),l(m,{label:"\u82F1\u6587\u6807\u8BC6",prop:"name"},{default:a(()=>[l(s,{modelValue:o.item.name,"onUpdate:modelValue":t[2]||(t[2]=n=>o.item.name=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u663E\u793A\u540D\u79F0",prop:"title"},{default:a(()=>[l(s,{modelValue:o.item.title,"onUpdate:modelValue":t[3]||(t[3]=n=>o.item.title=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o.item.type==="action"?(y(),V(m,{key:0,label:"\u8BF7\u6C42\u65B9\u5F0F",prop:"method"},{default:a(()=>[l(f,{modelValue:o.item.method,"onUpdate:modelValue":t[4]||(t[4]=n=>o.item.method=n),size:"small"},{default:a(()=>[l(d,{label:"GET"}),l(d,{label:"POST"}),l(d,{label:"PUT"}),l(d,{label:"DELETE"}),l(d,{label:"*"},{default:a(()=>[me]),_:1})]),_:1},8,["modelValue"])]),_:1})):I("",!0),o.item.type==="action"?(y(),V(m,{key:1,label:"\u540E\u7AEFURL",prop:"url"},{default:a(()=>[l(s,{modelValue:o.item.url,"onUpdate:modelValue":t[5]||(t[5]=n=>o.item.url=n)},null,8,["modelValue"])]),_:1})):I("",!0),o.item.type==="menu"?(y(),V(m,{key:2,label:"\u524D\u7AEF\u8DEF\u7531",prop:"url"},{default:a(()=>[l(u,{modelValue:o.item.url,"onUpdate:modelValue":t[6]||(t[6]=n=>o.item.url=n),placeholder:"\u8BF7\u6C42\u65B9\u5F0F",style:{width:"100%"},filterable:""},{default:a(()=>[(y(!0),Y(x,null,Z(o.getPermissionRoutes,(n,D)=>(y(),V(c,{key:D,value:n.path},{default:a(()=>[L("span",pe,z(n.path),1),L("span",ce,z(n.meta.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})):I("",!0),o.item.type==="menu"?(y(),V(m,{key:3,label:"\u83DC\u5355\u56FE\u6807"},{default:a(()=>[l(_,{modelValue:o.item.icon,"onUpdate:modelValue":t[7]||(t[7]=n=>o.item.icon=n),size:"small"},null,8,["modelValue"])]),_:1})):I("",!0)]),_:1},8,["model","rules"])]),footer:a(()=>[l(B,{onClick:o.cancelItem,size:"small"},{default:a(()=>[ue]),_:1},8,["onClick"]),l(B,{type:"primary",size:"small",onClick:o.confirmItem,loading:o.confirmLoading},{default:a(()=>[g(z(o.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"])]),_:1},8,["title","loading","modelValue","onClose"])}var _e=E(re,[["render",fe]]);const ge=$({name:"index",components:{BasicQuery:H,BasicTable:O,EditTemplate:_e,PageWrapper:M},setup(){const e=P({columns:[{prop:"id",label:"ID",width:100},{prop:"title",label:"\u663E\u793A\u540D\u79F0",minWidth:180,slot:"title"},{prop:"name",label:"\u82F1\u6587\u6807\u8BC6",minWidth:140},{prop:"type_label",label:"\u7C7B\u578B",minWidth:60},{prop:"method",label:"\u8BF7\u6C42\u65B9\u5F0F",minWidth:80},{prop:"url",label:"\u8DEF\u7531",minWidth:150},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:135}],schemas:[{field:"id",placeholder:"\u6743\u9650ID",component:"Input"},{field:"title",placeholder:"\u6743\u9650\u540D\u79F0",component:"Input"},{field:"name",placeholder:"\u6743\u9650\u6807\u8BC6",component:"Input"}]});let t=X({listApi:te,itemApi:oe,updateApi:le,storeApi:ae,deleteApi:ne,item:{type:"menu"},refreshAfterConfirm:!1});const r=new Map,{confirmItem:o,deleteItem:k,getList:C,item:d}=t,f=async(s,c,u)=>{r.set(s.id,{tree:s,treeNode:c,resolve:u});const{data:{data:_}}=await q(s.id);u(_)},m=async()=>{const{tree:s,treeNode:c,resolve:u}=h({},r.get(d.value.pid));await o(),s?await f(s,c,u):await C()},b=async s=>{const{tree:c,treeNode:u,resolve:_}=h({},r.get(s.pid));await k(s),c?await f(c,u,_):await C()};return t=A(h({},t),{confirmItem:m,deleteItem:b}),R("resourceApi",t),R("childrenListApi",q),A(h(h({},v(e)),v(t)),{autoGenerateApi:ie,loadChildren:f})}}),ye=g("\u81EA\u52A8\u751F\u6210\u6743\u9650\u8282\u70B9"),be=g("\u65B0\u589E"),he={style:{"margin-left":"5px"}},Ve=g("\u7F16\u8F91"),we=g("\u5220\u9664");function Ce(e,t,r,o,k,C){const d=i("el-button"),f=i("BasicQuery"),m=i("el-card"),b=i("el-popconfirm"),s=i("el-table-column"),c=i("BasicTable"),u=i("EditTemplate"),_=i("page-wrapper");return y(),V(_,{title:e.$route.meta.title},{extra:a(()=>[l(d,{type:"primary",size:"mini",onClick:e.autoGenerateApi},{default:a(()=>[ye]),_:1},8,["onClick"]),l(d,{type:"primary",size:"mini",onClick:e.addItem},{default:a(()=>[be]),_:1},8,["onClick"])]),default:a(()=>[l(m,{shadow:"none"},{default:a(()=>[l(f,{modelValue:e.query,"onUpdate:modelValue":t[0]||(t[0]=p=>e.query=p),schemas:e.schemas,"col-props":{span:6},onSubmit:e.getQuery},null,8,["modelValue","schemas","onSubmit"])]),_:1}),l(m,{shadow:"none",class:"mt10"},{default:a(()=>[l(c,{"row-key":"id",lazy:"",columns:e.columns,data:e.lists,paginate:e.paginate,loading:e.listLoading,load:e.loadChildren,"tree-props":{children:"children",hasChildren:"children_count"},onChangePage:e.changePage},{title:a(p=>[L("span",{class:ee(p.row.icon)},null,2),L("span",he,z(p.row.title),1)]),default:a(()=>[l(s,{label:"\u64CD\u4F5C",width:"120"},{default:a(p=>[l(d,{type:"text",size:"small",onClick:B=>e.editItem(p.row)},{default:a(()=>[Ve]),_:2},1032,["onClick"]),l(b,{title:"\u5220\u9664\u4F60\u662F\u8BA4\u771F\u7684\u5417\uFF1F",iconColor:"red",onConfirm:B=>e.deleteItem(p.row)},{reference:a(()=>[l(d,{type:"text",size:"small",disabled:p.row.name==="Administrator"},{default:a(()=>[we]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["columns","data","paginate","loading","load","onChangePage"]),l(u,{ref:"editTemplateRef",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=p=>e.dialog=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["title"])}var Pe=E(ge,[["render",Ce]]);export{Pe as default};
