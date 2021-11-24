var O=Object.defineProperty,M=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var B=(e,t,i)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))J.call(t,i)&&B(e,i,t[i]);if(z)for(var i of z(t))K.call(t,i)&&B(e,i,t[i]);return e},j=(e,t)=>M(e,H(t));import{_ as P}from"./PageWrapper.66af3ba5.js";import{_ as U}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.e72b7a76.js";import{at as T,au as R,b as L,a7 as X,o as f,f as b,w as a,a0 as Y,h as l,g as I,c as Z,G as $,F as ee,x as g,t as E,aw as te,ax as oe,av as le,aW as ae,aq as ne,Q as ie,ay as q,az as se,a as A,P as re,d as de,aA as D,aB as me,aC as pe,aD as ce,U as ue}from"./vendor.55f737cb.js";/* empty css                          *//* empty css                      */import{i as V,_ as W,c as N,d as _e}from"./index.2338912f.js";/* empty css                */import{_ as Q}from"./BasicQuery.f1bf1e6f.js";import{_ as S,u as fe,a as ge}from"./useResourceApi.c484f319.js";/* empty css                     *//* empty css                       *//* empty css                        */import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";import"./Form.83f0ddb3.js";/* empty css                 *//* empty css               */const be=(e={})=>V.get("/permissions",{params:e}),F=(e={})=>V.get("/permissions",{params:{pid:e}}),ye=(e={})=>V.get(`/permissions/${e.id}`),he=(e={})=>V.put(`/permissions/${e.id}`,{pid:e.pid,type:e.type,name:e.name,title:e.title,url:e.url,icon:e.icon,status:e.status}),Ve=(e={})=>V.post("/permissions",{pid:e.pid,type:e.type,name:e.name,title:e.title,url:e.url,icon:e.icon,status:e.status}),Ce=(e={})=>V.delete(`/permissions/${e.id}`),we=(e={})=>V.post("/permissions/auto"),ke={name:"editTemplate",components:{BasicDrawer:S,IconPicker:N},setup(){const e=T({rules:{pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u8282\u70B9",trigger:"change"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B",trigger:"change"}],name:[{required:!0,pattern:/^(\w|:){3,50}$/,message:"\u6807\u8BC6\u4E3A\u5FC5\u586B\u9879\uFF0C3-50\u4E2A\u82F1\u6587\u5B57\u7B26",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0",trigger:"blur"}],method:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BF7\u6C42\u65B9\u5F0F",trigger:"change"}],url:[{required:!0,message:"\u8BF7\u8F93\u5165\u540E\u7AEFurl\u5730\u5740",trigger:"blur"}]}}),{getPermissionRoutes:t}=fe(),i=R("childrenListApi"),{formRef:o,item:k,dialog:C,itemLoading:r,confirmLoading:u,cancelItem:d,confirmItem:y}=R("resourceApi"),s=async({level:m,data:p},_)=>{if(m===0)_([{id:0,pid:0,title:"\u6839\u8282\u70B9",children:[]}]);else{const{data:{data:w}}=await i(p.id);_(w)}};return j(h({},L(e)),{formRef:o,item:k,dialog:C,itemLoading:r,confirmLoading:u,cancelItem:d,confirmItem:y,getPermissionRoutes:t,lazyLoad:s})}},ve=g("\u83DC\u5355"),Ie=g("\u52A8\u4F5C"),je=g("ALL"),Ee={style:{float:"left"}},Ae={style:{float:"right"}},Le=g("\u53D6 \u6D88");function ze(e,t,i,o,k,C){const r=te,u=oe,d=le,y=ae,s=ne,m=re,p=ie,_=N,w=q,c=se,v=S,G=X;return f(),b(v,{title:o.item.id?"\u7F16\u8F91\u6743\u9650":"\u65B0\u589E\u6743\u9650",modelValue:o.dialog,"onUpdate:modelValue":t[8]||(t[8]=n=>o.dialog=n),onClose:o.cancelItem},{default:a(()=>[Y(l(c,{ref:"formRef",model:o.item,rules:e.rules,"label-width":"80px",size:"small"},{default:a(()=>[l(d,{label:"\u8282\u70B9\u7C7B\u578B",prop:"type"},{default:a(()=>[l(u,{modelValue:o.item.type,"onUpdate:modelValue":t[0]||(t[0]=n=>o.item.type=n),size:"mini"},{default:a(()=>[l(r,{label:"menu"},{default:a(()=>[ve]),_:1}),l(r,{label:"action"},{default:a(()=>[Ie]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"\u7236\u7EA7\u8282\u70B9",prop:"pid"},{default:a(()=>[l(y,{modelValue:o.item.pid,"onUpdate:modelValue":t[1]||(t[1]=n=>o.item.pid=n),"show-all-levels":!1,props:{checkStrictly:!0,value:"id",label:"title",emitPath:!1,lazy:!0,lazyLoad:o.lazyLoad},clearable:"",style:{width:"100%"}},null,8,["modelValue","props"])]),_:1}),l(d,{label:"\u82F1\u6587\u6807\u8BC6",prop:"name"},{default:a(()=>[l(s,{modelValue:o.item.name,"onUpdate:modelValue":t[2]||(t[2]=n=>o.item.name=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u663E\u793A\u540D\u79F0",prop:"title"},{default:a(()=>[l(s,{modelValue:o.item.title,"onUpdate:modelValue":t[3]||(t[3]=n=>o.item.title=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o.item.type==="action"?(f(),b(d,{key:0,label:"\u8BF7\u6C42\u65B9\u5F0F",prop:"method"},{default:a(()=>[l(u,{modelValue:o.item.method,"onUpdate:modelValue":t[4]||(t[4]=n=>o.item.method=n),size:"small"},{default:a(()=>[l(r,{label:"GET"}),l(r,{label:"POST"}),l(r,{label:"PUT"}),l(r,{label:"DELETE"}),l(r,{label:"*"},{default:a(()=>[je]),_:1})]),_:1},8,["modelValue"])]),_:1})):I("",!0),o.item.type==="action"?(f(),b(d,{key:1,label:"\u540E\u7AEFURL",prop:"url"},{default:a(()=>[l(s,{modelValue:o.item.url,"onUpdate:modelValue":t[5]||(t[5]=n=>o.item.url=n)},null,8,["modelValue"])]),_:1})):I("",!0),o.item.type==="menu"?(f(),b(d,{key:2,label:"\u524D\u7AEF\u8DEF\u7531",prop:"url"},{default:a(()=>[l(p,{modelValue:o.item.url,"onUpdate:modelValue":t[6]||(t[6]=n=>o.item.url=n),placeholder:"\u8BF7\u6C42\u65B9\u5F0F",style:{width:"100%"},filterable:""},{default:a(()=>[(f(!0),Z(ee,null,$(o.getPermissionRoutes,(n,x)=>(f(),b(m,{key:x,value:n.path},{default:a(()=>[A("span",Ee,E(n.path),1),A("span",Ae,E(n.meta.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})):I("",!0),o.item.type==="menu"?(f(),b(d,{key:3,label:"\u83DC\u5355\u56FE\u6807"},{default:a(()=>[l(_,{modelValue:o.item.icon,"onUpdate:modelValue":t[7]||(t[7]=n=>o.item.icon=n)},null,8,["modelValue"])]),_:1})):I("",!0),l(d,null,{default:a(()=>[l(w,{onClick:o.cancelItem,size:"small"},{default:a(()=>[Le]),_:1},8,["onClick"]),l(w,{type:"primary",size:"small",onClick:o.confirmItem,loading:o.confirmLoading},{default:a(()=>[g(E(o.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"]),[[G,o.itemLoading]])]),_:1},8,["title","modelValue","onClose"])}var Be=W(ke,[["render",ze]]);const Pe=de({name:"index",components:{BasicQuery:Q,BasicTable:U,EditTemplate:Be,PageWrapper:P},setup(){const e=T({columns:[{prop:"id",label:"ID",width:100},{prop:"title",label:"\u663E\u793A\u540D\u79F0",minWidth:180,slot:"title"},{prop:"name",label:"\u82F1\u6587\u6807\u8BC6",minWidth:140},{prop:"type_label",label:"\u7C7B\u578B",minWidth:60},{prop:"method",label:"\u8BF7\u6C42\u65B9\u5F0F",minWidth:80},{prop:"url",label:"\u8DEF\u7531",minWidth:150},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:135}],schemas:[{field:"id",placeholder:"\u6743\u9650ID",component:"Input"},{field:"title",placeholder:"\u6743\u9650\u540D\u79F0",component:"Input"},{field:"name",placeholder:"\u6743\u9650\u6807\u8BC6",component:"Input"}]});let t=ge({listApi:be,itemApi:ye,updateApi:he,storeApi:Ve,deleteApi:Ce,item:{type:"menu"},refreshAfterConfirm:!1});const i=new Map,{confirmItem:o,deleteItem:k,getList:C,item:r}=t,u=async(s,m,p)=>{i.set(s.id,{tree:s,treeNode:m,resolve:p});const{data:{data:_}}=await F(s.id);p(_)},d=async()=>{const{tree:s,treeNode:m,resolve:p}=h({},i.get(r.value.pid));await o(),s?await u(s,m,p):await C()},y=async s=>{const{tree:m,treeNode:p,resolve:_}=h({},i.get(s.pid));await k(s),m?await u(m,p,_):await C()};return t=j(h({},t),{confirmItem:d,deleteItem:y}),D("resourceApi",t),D("childrenListApi",F),j(h(h({},L(e)),L(t)),{autoGenerateApi:we,loadChildren:u})}}),Ue=g("\u81EA\u52A8\u751F\u6210\u6743\u9650\u8282\u70B9"),Te=g("\u65B0\u589E"),Re={class:"flex-row align-center"},qe={style:{"margin-left":"5px"}},De=g("\u7F16\u8F91"),We=g("\u5220\u9664");function Ne(e,t,i,o,k,C){const r=q,u=Q,d=me,y=_e,s=pe,m=ce,p=U,_=ue("EditTemplate"),w=P;return f(),b(w,{title:e.$route.meta.title},{extra:a(()=>[l(r,{type:"primary",size:"mini",onClick:e.autoGenerateApi},{default:a(()=>[Ue]),_:1},8,["onClick"]),l(r,{type:"primary",size:"mini",onClick:e.addItem},{default:a(()=>[Te]),_:1},8,["onClick"])]),default:a(()=>[l(d,{shadow:"none"},{default:a(()=>[l(u,{modelValue:e.query,"onUpdate:modelValue":t[0]||(t[0]=c=>e.query=c),schemas:e.schemas,onSubmit:e.getQuery},null,8,["modelValue","schemas","onSubmit"])]),_:1}),l(d,{shadow:"none",class:"mt-2"},{default:a(()=>[l(p,{"row-key":"id",lazy:"",columns:e.columns,data:e.lists,paginate:e.paginate,loading:e.listLoading,load:e.loadChildren,"tree-props":{children:"children",hasChildren:"children_count"},onChangePage:e.changePage},{title:a(({row:{icon:c,title:v}})=>[A("div",Re,[c?(f(),b(y,{key:0,name:c,size:14},null,8,["name"])):I("",!0),A("span",qe,E(v),1)])]),default:a(()=>[l(m,{label:"\u64CD\u4F5C",width:"120"},{default:a(({row:c})=>[l(r,{type:"text",size:"small",onClick:v=>e.editItem(c)},{default:a(()=>[De]),_:2},1032,["onClick"]),l(s,{title:"\u5220\u9664\u4F60\u662F\u8BA4\u771F\u7684\u5417\uFF1F",iconColor:"red",onConfirm:v=>e.deleteItem(c)},{reference:a(()=>[l(r,{type:"text",size:"small",disabled:c.name==="Administrator"},{default:a(()=>[We]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["columns","data","paginate","loading","load","onChangePage"]),l(_,{ref:"editTemplateRef",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=c=>e.dialog=c)},null,8,["modelValue"])]),_:1})]),_:1},8,["title"])}var nt=W(Pe,[["render",Ne]]);export{nt as default};