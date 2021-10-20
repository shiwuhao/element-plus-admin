var R=Object.defineProperty,E=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var j=(l,e,i)=>e in l?R(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,h=(l,e)=>{for(var i in e||(e={}))S.call(e,i)&&j(l,i,e[i]);if(T)for(var i of T(e))F.call(e,i)&&j(l,i,e[i]);return l},q=(l,e)=>E(l,W(e));import{P as Q}from"./PageWrapper.df54460f.js";import{B as D}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.49b4a020.js";import{B as N}from"./BasicQuery.7a70fd69.js";import{B as O,u as x,a as G}from"./useResourceApi.b159a6ee.js";import{_ as B,e as H,f as J,h as K,j as M,k as X,m as Y,n as Z}from"./index.b91482d8.js";import{$,ah as ee,W as U,r,o as c,k as g,w as a,b as n,c as w,j as C,F as k,ak as oe,i as v,t as L,v as I,d as le,am as ae,al as te,s as A,B as ne,a as z}from"./vendor.43fc48c7.js";import{B as P}from"./BasicForm.af22afdc.js";import"./BasicUpload.023550e9.js";const re={name:"editTemplate",components:{BasicDrawer:O},setup(){const l=$({rules:{group:[{required:!0,message:"\u8BF7\u9009\u62E9\u914D\u7F6E\u5206\u7EC4",trigger:"change"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u914D\u7F6E\u7C7B\u578B",trigger:"change"}],component:[{required:!0,message:"\u8BF7\u9009\u62E9\u6E32\u67D3\u7EC4\u4EF6",trigger:"change"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u6807\u8BC6",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u6807\u9898",trigger:"blur"}],extra:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u9879",trigger:"blur"}],value:[{required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u503C",trigger:"blur"}]}}),{getGroups:e,getTypes:i,getComponents:o}=x(),{formRef:y,item:b,dialog:m,itemLoading:d,confirmLoading:u,cancelItem:_,confirmItem:p}=ee("resourceApi");return q(h({},U(l)),{getGroups:e,getTypes:i,getComponents:o,formRef:y,item:b,dialog:m,itemLoading:d,confirmLoading:u,cancelItem:_,confirmItem:p})}},se=v("\u53D6 \u6D88");function ie(l,e,i,o,y,b){const m=r("el-option"),d=r("el-select"),u=r("el-form-item"),_=r("el-input"),p=r("el-form"),s=r("el-button"),f=r("BasicDrawer");return c(),g(f,{title:o.item.id?"\u7F16\u8F91\u914D\u7F6E":"\u65B0\u589E\u914D\u7F6E",direction:"rtl",size:"50%",loading:o.itemLoading,modelValue:o.dialog,"onUpdate:modelValue":e[7]||(e[7]=t=>o.dialog=t),onClose:o.cancelItem},{default:a(()=>[n(p,{ref:"formRef",model:o.item,rules:l.rules,"label-width":"80px",size:"small"},{default:a(()=>[n(u,{label:"\u914D\u7F6E\u5206\u7EC4",prop:"group"},{default:a(()=>[n(d,{modelValue:o.item.group,"onUpdate:modelValue":e[0]||(e[0]=t=>o.item.group=t),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u914D\u7F6E\u5206\u7EC4",style:{width:"100%"}},{default:a(()=>[(c(!0),w(k,null,C(o.getGroups,(t,V)=>(c(),g(m,{label:t.label,value:t.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(u,{label:"\u914D\u7F6E\u7C7B\u578B",prop:"type"},{default:a(()=>[n(d,{modelValue:o.item.type,"onUpdate:modelValue":e[1]||(e[1]=t=>o.item.type=t),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u914D\u7F6E\u7C7B\u578B",style:{width:"100%"}},{default:a(()=>[(c(!0),w(k,null,C(o.getTypes,(t,V)=>(c(),g(m,{label:t.label,value:t.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(u,{label:"\u6E32\u67D3\u7EC4\u4EF6",prop:"component"},{default:a(()=>[n(d,{modelValue:o.item.component,"onUpdate:modelValue":e[2]||(e[2]=t=>o.item.component=t),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6E32\u67D3\u7EC4\u4EF6",style:{width:"100%"}},{default:a(()=>[(c(!0),w(k,null,C(o.getComponents,(t,V)=>(c(),g(m,{label:t.label,value:t.value,key:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(u,{label:"\u914D\u7F6E\u6807\u8BC6",prop:"name"},{default:a(()=>[n(_,{modelValue:o.item.name,"onUpdate:modelValue":e[3]||(e[3]=t=>o.item.name=t),autocomplete:"off"},oe({_:2},[o.item.group?{name:"prepend",fn:a(()=>[v(L(o.item.group),1)])}:void 0]),1032,["modelValue"])]),_:1}),n(u,{label:"\u914D\u7F6E\u540D\u79F0",prop:"title"},{default:a(()=>[n(_,{modelValue:o.item.title,"onUpdate:modelValue":e[4]||(e[4]=t=>o.item.title=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o.item.type==="enum"?(c(),g(u,{key:0,label:"\u914D\u7F6E\u9879",prop:"extra"},{default:a(()=>[n(_,{modelValue:o.item.extra,"onUpdate:modelValue":e[5]||(e[5]=t=>o.item.extra=t),type:"textarea",rows:"3",autocomplete:"off"},null,8,["modelValue"])]),_:1})):I("",!0),n(u,{label:"\u914D\u7F6E\u503C",prop:"value"},{default:a(()=>[n(_,{modelValue:o.item.value,"onUpdate:modelValue":e[6]||(e[6]=t=>o.item.value=t),type:"textarea",rows:"3",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),footer:a(()=>[n(s,{onClick:o.cancelItem,size:"small"},{default:a(()=>[se]),_:1},8,["onClick"]),n(s,{type:"primary",size:"small",onClick:o.confirmItem,loading:o.confirmLoading},{default:a(()=>[v(L(o.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"])]),_:1},8,["title","loading","modelValue","onClose"])}var de=B(re,[["render",ie]]);const me=le({name:"TableList",components:{BasicQuery:N,BasicTable:D,EditTemplate:de},setup(){const l=ae({columns:[{prop:"id",label:"ID",width:100},{prop:"title",label:"\u6807\u9898",minWidth:100},{prop:"name",label:"\u6807\u8BC6",minWidth:100},{prop:"group_label",label:"\u5206\u7EC4",minWidth:100},{prop:"type_label",label:"\u7C7B\u578B",minWidth:100},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:100}],schemas:[{field:"title",placeholder:"\u6807\u9898",component:"Input"},{field:"name",placeholder:"\u6807\u8BC6",component:"Input"}]}),e=G({listApi:H,itemApi:J,updateApi:K,storeApi:M,deleteApi:X});return te("resourceApi",e),h(h({},U(l)),U(e))}}),ue=v("\u7F16\u8F91"),pe=v("\u5220\u9664");function ce(l,e,i,o,y,b){const m=r("BasicQuery"),d=r("el-card"),u=r("el-button"),_=r("el-popconfirm"),p=r("el-table-column"),s=r("BasicTable"),f=r("EditTemplate");return c(),w(k,null,[n(d,{shadow:"none"},{default:a(()=>[n(m,{modelValue:l.query,"onUpdate:modelValue":e[0]||(e[0]=t=>l.query=t),schemas:l.schemas,"col-props":{span:6},onSubmit:l.getQuery},null,8,["modelValue","schemas","onSubmit"])]),_:1}),n(d,{shadow:"none",class:"mt10"},{default:a(()=>[n(s,{columns:l.columns,data:l.lists,paginate:l.paginate,loading:l.listLoading,onChangePage:l.changePage},{default:a(()=>[n(p,{label:"\u64CD\u4F5C",width:"120"},{default:a(t=>[n(u,{type:"text",size:"small",onClick:V=>l.editItem(t.row)},{default:a(()=>[ue]),_:2},1032,["onClick"]),n(_,{title:"\u5220\u9664\u4F60\u662F\u8BA4\u771F\u7684\u5417\uFF1F",iconColor:"red",onConfirm:V=>l.deleteItem(t.row)},{reference:a(()=>[n(u,{type:"text",size:"small"},{default:a(()=>[pe]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["columns","data","paginate","loading","onChangePage"]),n(f,{ref:"editTemplateRef",modelValue:l.dialog,"onUpdate:modelValue":e[1]||(e[1]=t=>l.dialog=t)},null,8,["modelValue"])]),_:1})],64)}var _e=B(me,[["render",ce]]);const fe={name:"GroupList",components:{BasicForm:P},props:["group"],setup(l){const{listLoading:e,confirmLoading:i,query:o,formRef:y,item:b,lists:m,updateItem:d,getList:u}=G({listApi:Y,updateApi:Z,query:{group:l.group}}),_=s=>Object.keys(s).map(f=>({value:f,label:s[f]})),p=A([]);return ne(m,()=>{b.value={},m.value.forEach(s=>{let f={style:{width:"100%"}};switch(s.component){case"Select":f={options:_(s.parse_extra)};break;case"Upload":f={fileList:[{url:s.parse_value,name:s.parse_value}],limit:1};break}b.value[s.name]=s.value,p.value.push({field:s.name,labelProps:{title:s.title,name:s.name},component:s.component,formProps:{required:!0},componentProps:h({style:{width:"100%"}},f)})})}),{listLoading:e,confirmLoading:i,query:o,formRef:y,form:b,lists:m,schemas:p,updateItem:d,getList:u}}},ge={class:"label"},be={class:"sub-label"};function ye(l,e,i,o,y,b){const m=r("BasicForm");return c(),g(m,{modelValue:o.form,"onUpdate:modelValue":e[0]||(e[0]=d=>o.form=d),"label-position":"top","action-props":{position:"left",submitButtonProps:{loading:o.confirmLoading}},schemas:o.schemas,onSubmit:o.updateItem},{label:a(({labelProps:d})=>[z("span",ge,L(d.title),1),z("span",be,L(d.name),1)]),_:1},8,["modelValue","action-props","schemas","onSubmit"])}var ve=B(fe,[["render",ye],["__scopeId","data-v-660c10aa"]]);const Ve={name:"GroupList",components:{BasicForm:P,EditGroup:ve},setup(){const{getGroups:l}=x(),e=A("basic");return{getGroups:l,group:e}}};function he(l,e,i,o,y,b){const m=r("EditGroup"),d=r("el-tab-pane"),u=r("el-tabs"),_=r("el-card");return c(),g(_,{shadow:"none"},{default:a(()=>[n(u,{modelValue:o.group,"onUpdate:modelValue":e[0]||(e[0]=p=>o.group=p),"tab-position":"left"},{default:a(()=>[(c(!0),w(k,null,C(o.getGroups,(p,s)=>(c(),g(d,{key:s,label:p.label,name:p.value,lazy:o.group!==p.value},{default:a(()=>[n(m,{group:p.value},null,8,["group"])]),_:2},1032,["label","name","lazy"]))),128))]),_:1},8,["modelValue"])]),_:1})}var Be=B(Ve,[["render",he],["__scopeId","data-v-1840ea99"]]);const we={name:"index",components:{PageWrapper:Q,TableList:_e,GroupList:Be},setup(){const l=A("config"),e=A(null);return{mode:l,tableListRef:e,handleAdd:()=>e.value.addItem()}}},ke=v("\u914D\u7F6E\u6A21\u5F0F"),Ce=v("\u7BA1\u7406\u6A21\u5F0F"),Le=v("\u65B0\u589E");function Ae(l,e,i,o,y,b){const m=r("el-radio-button"),d=r("el-radio-group"),u=r("el-button"),_=r("table-list"),p=r("group-list"),s=r("page-wrapper");return c(),g(s,null,{title:a(()=>[n(d,{modelValue:o.mode,"onUpdate:modelValue":e[0]||(e[0]=f=>o.mode=f),size:"mini"},{default:a(()=>[n(m,{label:"config"},{default:a(()=>[ke]),_:1}),n(m,{label:"manage"},{default:a(()=>[Ce]),_:1})]),_:1},8,["modelValue"])]),extra:a(()=>[n(u,{type:"primary",size:"mini",disabled:o.mode==="config",onClick:o.handleAdd},{default:a(()=>[Le]),_:1},8,["disabled","onClick"])]),default:a(()=>[o.mode==="manage"?(c(),g(_,{key:0,ref:"tableListRef"},null,512)):I("",!0),o.mode==="config"?(c(),g(p,{key:1})):I("",!0)]),_:1})}var Re=B(we,[["render",Ae]]);export{Re as default};
