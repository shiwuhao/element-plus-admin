var N=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var T=(t,e,r)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))H.call(e,r)&&T(t,r,e[r]);if(U)for(var r of U(e))J.call(e,r)&&T(t,r,e[r]);return t},G=(t,e)=>M(t,O(e));import{_ as q}from"./PageWrapper.66af3ba5.js";import{at as K,au as X,b as A,a7 as Y,o as u,f,w as a,a0 as Z,h as l,c as w,G as E,F as C,a$ as $,x as y,t as L,g as I,Q as ee,av as oe,aq as te,ay as x,az as ae,P as le,d as ne,y as re,aA as se,U as j,aB as R,aC as ie,aD as me,r as B,A as de,a as P,i as pe,j as ue,aw as ce,ax as _e}from"./vendor.55f737cb.js";/* empty css                       *//* empty css                        */import{_ as z}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.e72b7a76.js";/* empty css                          *//* empty css                      *//* empty css                */import{_ as S}from"./BasicQuery.f1bf1e6f.js";import{_ as F,u as D,a as W}from"./useResourceApi.c484f319.js";/* empty css                     */import{_ as k,e as fe,f as ge,g as be,h as ve,j as ye,k as Ve,m as he,u as we}from"./index.2338912f.js";import{B as Q}from"./Form.83f0ddb3.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";/* empty css                 *//* empty css               */const Ce={name:"editTemplate",components:{BasicDrawer:F},setup(){const t=K({rules:{group:[{required:!0,message:"\u8BF7\u9009\u62E9\u914D\u7F6E\u5206\u7EC4",trigger:"change"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u914D\u7F6E\u7C7B\u578B",trigger:"change"}],component:[{required:!0,message:"\u8BF7\u9009\u62E9\u6E32\u67D3\u7EC4\u4EF6",trigger:"change"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u6807\u8BC6",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u6807\u9898",trigger:"blur"}],extra:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u9879",trigger:"blur"}],value:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u503C",trigger:"blur"}]}}),{getGroups:e,getTypes:r,getComponents:o}=D(),{formRef:b,item:g,dialog:d,itemLoading:i,confirmLoading:m,cancelItem:c,confirmItem:p}=X("resourceApi");return G(h({},A(t)),{getGroups:e,getTypes:r,getComponents:o,formRef:b,item:g,dialog:d,itemLoading:i,confirmLoading:m,cancelItem:c,confirmItem:p})}},je=y("\u53D6 \u6D88");function ke(t,e,r,o,b,g){const d=le,i=ee,m=oe,c=te,p=x,s=ae,_=F,v=Y;return u(),f(_,{title:o.item.id?"\u7F16\u8F91\u914D\u7F6E":"\u65B0\u589E\u914D\u7F6E",modelValue:o.dialog,"onUpdate:modelValue":e[7]||(e[7]=n=>o.dialog=n),onClose:o.cancelItem},{default:a(()=>[Z(l(s,{ref:"formRef",model:o.item,rules:t.rules,"label-width":"80px",size:"small"},{default:a(()=>[l(m,{label:"\u914D\u7F6E\u5206\u7EC4",prop:"group"},{default:a(()=>[l(i,{modelValue:o.item.group,"onUpdate:modelValue":e[0]||(e[0]=n=>o.item.group=n),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u914D\u7F6E\u5206\u7EC4",style:{width:"100%"}},{default:a(()=>[(u(!0),w(C,null,E(o.getGroups,(n,V)=>(u(),f(d,{label:n.label,value:n.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u914D\u7F6E\u7C7B\u578B",prop:"type"},{default:a(()=>[l(i,{modelValue:o.item.type,"onUpdate:modelValue":e[1]||(e[1]=n=>o.item.type=n),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u914D\u7F6E\u7C7B\u578B",style:{width:"100%"}},{default:a(()=>[(u(!0),w(C,null,E(o.getTypes,(n,V)=>(u(),f(d,{label:n.label,value:n.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u6E32\u67D3\u7EC4\u4EF6",prop:"component"},{default:a(()=>[l(i,{modelValue:o.item.component,"onUpdate:modelValue":e[2]||(e[2]=n=>o.item.component=n),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6E32\u67D3\u7EC4\u4EF6",style:{width:"100%"}},{default:a(()=>[(u(!0),w(C,null,E(o.getComponents,(n,V)=>(u(),f(d,{label:n.label,value:n.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u914D\u7F6E\u6807\u8BC6",prop:"name"},{default:a(()=>[l(c,{modelValue:o.item.name,"onUpdate:modelValue":e[3]||(e[3]=n=>o.item.name=n),autocomplete:"off"},$({_:2},[o.item.group?{name:"prepend",fn:a(()=>[y(L(o.item.group),1)])}:void 0]),1032,["modelValue"])]),_:1}),l(m,{label:"\u914D\u7F6E\u540D\u79F0",prop:"title"},{default:a(()=>[l(c,{modelValue:o.item.title,"onUpdate:modelValue":e[4]||(e[4]=n=>o.item.title=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o.item.type==="enum"?(u(),f(m,{key:0,label:"\u914D\u7F6E\u9879",prop:"extra"},{default:a(()=>[l(c,{modelValue:o.item.extra,"onUpdate:modelValue":e[5]||(e[5]=n=>o.item.extra=n),type:"textarea",rows:"3",autocomplete:"off"},null,8,["modelValue"])]),_:1})):I("",!0),l(m,{label:"\u914D\u7F6E\u503C",prop:"value"},{default:a(()=>[l(c,{modelValue:o.item.value,"onUpdate:modelValue":e[6]||(e[6]=n=>o.item.value=n),type:"textarea",rows:"3",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(m,null,{default:a(()=>[l(p,{onClick:o.cancelItem,size:"small"},{default:a(()=>[je]),_:1},8,["onClick"]),l(p,{type:"primary",size:"small",onClick:o.confirmItem,loading:o.confirmLoading},{default:a(()=>[y(L(o.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"]),[[v,o.itemLoading]])]),_:1},8,["title","modelValue","onClose"])}var Ee=k(Ce,[["render",ke]]);const Le=ne({name:"TableList",components:{BasicQuery:S,BasicTable:z,EditTemplate:Ee},setup(){const t=re({columns:[{prop:"id",label:"ID",width:100},{prop:"title",label:"\u6807\u9898",minWidth:100},{prop:"name",label:"\u6807\u8BC6",minWidth:100},{prop:"group_label",label:"\u5206\u7EC4",minWidth:100},{prop:"type_label",label:"\u7C7B\u578B",minWidth:100},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:100}],schemas:[{field:"title",placeholder:"\u6807\u9898",component:"Input"},{field:"name",placeholder:"\u6807\u8BC6",component:"Input"}]}),e=W({listApi:fe,itemApi:ge,updateApi:be,storeApi:ve,deleteApi:ye});return se("resourceApi",e),h(h({},A(t)),A(e))}}),Be=y("\u7F16\u8F91"),Ae=y("\u5220\u9664");function Ie(t,e,r,o,b,g){const d=S,i=R,m=x,c=ie,p=me,s=z,_=j("EditTemplate");return u(),w(C,null,[l(i,{shadow:"none"},{default:a(()=>[l(d,{modelValue:t.query,"onUpdate:modelValue":e[0]||(e[0]=v=>t.query=v),schemas:t.schemas,onSubmit:t.getQuery},null,8,["modelValue","schemas","onSubmit"])]),_:1}),l(i,{shadow:"none",class:"mt-2"},{default:a(()=>[l(s,{columns:t.columns,data:t.lists,paginate:t.paginate,loading:t.listLoading,onChangePage:t.changePage},{default:a(()=>[l(p,{label:"\u64CD\u4F5C",width:"120"},{default:a(v=>[l(m,{type:"text",size:"small",onClick:n=>t.editItem(v.row)},{default:a(()=>[Be]),_:2},1032,["onClick"]),l(c,{title:"\u5220\u9664\u4F60\u662F\u8BA4\u771F\u7684\u5417\uFF1F",iconColor:"red",onConfirm:n=>t.deleteItem(v.row)},{reference:a(()=>[l(m,{type:"text",size:"small"},{default:a(()=>[Ae]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["columns","data","paginate","loading","onChangePage"]),l(_,{ref:"editTemplateRef",modelValue:t.dialog,"onUpdate:modelValue":e[1]||(e[1]=v=>t.dialog=v)},null,8,["modelValue"])]),_:1})],64)}var xe=k(Le,[["render",Ie]]);const Ue={name:"GroupList",components:{BasicForm:Q},props:["group"],setup(t){const{listLoading:e,confirmLoading:r,query:o,formRef:b,item:g,lists:d,updateItem:i,getList:m}=W({listApi:Ve,updateApi:he,query:{group:t.group}}),c=s=>Object.keys(s).map(_=>({value:_,label:s[_]})),p=B([]);return de(d,()=>{g.value={},d.value.forEach(s=>{let _={style:{width:"100%"}};switch(s.component){case"Select":_={options:c(s.parse_extra)};break;case"Upload":_={fileList:[{url:s.parse_value,name:s.parse_value}],limit:1};break}g.value[s.name]=s.value,p.value.push({field:s.name,labelProps:{title:s.title,name:s.name},component:s.component,formProps:{required:!0},componentProps:h({style:{width:"100%"}},_)})})}),{listLoading:e,confirmLoading:r,query:o,formRef:b,form:g,lists:d,schemas:p,updateItem:i,getList:m}}},Te={class:"label"},Ge={class:"sub-label"};function qe(t,e,r,o,b,g){const d=j("BasicForm");return u(),f(d,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=i=>o.form=i),"label-position":"top","action-props":{position:"left",submitButtonProps:{loading:o.confirmLoading}},schemas:o.schemas,onSubmit:o.updateItem},{label:a(({labelProps:i})=>[P("span",Te,L(i.title),1),P("span",Ge,L(i.name),1)]),_:1},8,["modelValue","action-props","schemas","onSubmit"])}var Re=k(Ue,[["render",qe],["__scopeId","data-v-07da385a"]]);const Pe={name:"GroupList",components:{BasicForm:Q,EditGroup:Re},setup(){const{getGroups:t}=D(),{getIsMobile:e}=we(),r=B("basic");return{getGroups:t,getIsMobile:e,group:r}}};function ze(t,e,r,o,b,g){const d=j("EditGroup"),i=pe,m=ue,c=R;return u(),f(c,{shadow:"none"},{default:a(()=>[l(m,{modelValue:o.group,"onUpdate:modelValue":e[0]||(e[0]=p=>o.group=p),"tab-position":o.getIsMobile?"top":"left"},{default:a(()=>[(u(!0),w(C,null,E(o.getGroups,(p,s)=>(u(),f(i,{key:s,label:p.label,name:p.value,lazy:o.group!==p.value},{default:a(()=>[l(d,{group:p.value},null,8,["group"])]),_:2},1032,["label","name","lazy"]))),128))]),_:1},8,["modelValue","tab-position"])]),_:1})}var Se=k(Pe,[["render",ze],["__scopeId","data-v-506637f6"]]);const Fe={name:"index",components:{PageWrapper:q,TableList:xe,GroupList:Se},setup(){const t=B("config"),e=B(null);return{mode:t,tableListRef:e,handleAdd:()=>e.value.addItem()}}},De=y("\u914D\u7F6E\u6A21\u5F0F"),We=y("\u7BA1\u7406\u6A21\u5F0F"),Qe=y("\u65B0\u589E");function Ne(t,e,r,o,b,g){const d=ce,i=_e,m=x,c=j("table-list"),p=j("group-list"),s=q;return u(),f(s,null,{title:a(()=>[l(i,{modelValue:o.mode,"onUpdate:modelValue":e[0]||(e[0]=_=>o.mode=_),size:"mini"},{default:a(()=>[l(d,{label:"config"},{default:a(()=>[De]),_:1}),l(d,{label:"manage"},{default:a(()=>[We]),_:1})]),_:1},8,["modelValue"])]),extra:a(()=>[l(m,{type:"primary",size:"mini",disabled:o.mode==="config",onClick:o.handleAdd},{default:a(()=>[Qe]),_:1},8,["disabled","onClick"])]),default:a(()=>[o.mode==="manage"?(u(),f(c,{key:0,ref:"tableListRef"},null,512)):I("",!0),o.mode==="config"?(u(),f(p,{key:1})):I("",!0)]),_:1})}var po=k(Fe,[["render",Ne]]);export{po as default};
