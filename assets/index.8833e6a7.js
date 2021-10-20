var E=Object.defineProperty;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var C=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))W.call(t,s)&&C(e,s,t[s]);if(L)for(var s of L(t))H.call(t,s)&&C(e,s,t[s]);return e};import{B as O}from"./BasicUpload.023550e9.js";import{b as F,_ as y}from"./index.b91482d8.js";import{d as $,s as g,am as z,$ as G,W as M,P as J,r as l,o as u,c,b as o,w as a,i as V,t as b,n as q,p as R,e as T,a as S,k as v,ak as K,a1 as I,a7 as Q,a8 as X,F as B,j as N,H as Y}from"./vendor.43fc48c7.js";const Z=$({components:{BasicUpload:O},setup(){const{getIsMobile:e}=F(),t=g("top"),s=g(null),m=g(!1),_=z({}),f=z({src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",size:140}),i=G({rules:{email:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u9009\u62E9\u6635\u79F0",trigger:"blur"}],introduce:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}],area:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}],phone:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",trigger:"blur"}],address:[{required:!0,message:"\u8BF7\u8F93\u5165\u8857\u9053\u5730\u5740",trigger:"blur"}]}}),n=z({options:[]});return h(h({labelPosition:t,form:_,formRef:s,submitForm:()=>{s.value.validate(async k=>{k&&J.success("\u63D0\u4EA4\u6210\u529F")})},resetForm:()=>{s.value.resetFields()},confirmLoading:m,area:n,getIsMobile:e},M(f)),M(i))}}),x=e=>(R("data-v-652dd424"),e=e(),T(),e),ee=V("\u91CD\u7F6E"),te=x(()=>S("h3",null,"\u5934\u50CF",-1));function oe(e,t,s,m,_,f){const i=l("el-input"),n=l("el-form-item"),d=l("el-option"),r=l("el-select"),k=l("el-cascader"),U=l("el-button"),j=l("el-form"),w=l("el-col"),P=l("el-avatar"),A=l("BasicUpload"),D=l("el-row");return u(),c("div",{class:q(e.getIsMobile?"mobile-base-setting":"base-setting")},[o(D,{gutter:30},{default:a(()=>[o(w,{span:16,class:"mobile-form"},{default:a(()=>[o(j,{model:e.form,"label-position":"top",rules:e.rules,ref:"formRef"},{default:a(()=>[o(n,{label:"\u90AE\u7BB1",prop:"email"},{default:a(()=>[o(i,{modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=p=>e.form.email=p),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"\u6635\u79F0",prop:"name"},{default:a(()=>[o(i,{modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=p=>e.form.name=p),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"\u4E2A\u4EBA\u7B80\u4ECB",prop:"introduce"},{default:a(()=>[o(i,{type:"textarea",modelValue:e.form.introduce,"onUpdate:modelValue":t[2]||(t[2]=p=>e.form.introduce=p),placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB",autosize:""},null,8,["modelValue"])]),_:1}),o(n,{label:"\u56FD\u5BB6/\u5730\u533A",prop:"region"},{default:a(()=>[o(r,{modelValue:e.form.region,"onUpdate:modelValue":t[3]||(t[3]=p=>e.form.region=p),placeholder:"\u8BF7\u9009\u62E9\u5730\u533A",style:{width:"100%"}},{default:a(()=>[o(d,{label:"\u4E2D\u56FD",value:"zhongguo"}),o(d,{label:"\u6CD5\u56FD",value:"faguo"})]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"\u6240\u5728\u7701\u5E02",prop:"area"},{default:a(()=>[o(k,{options:e.area.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u7701\u5E02",filterable:"",modelValue:e.form.area,"onUpdate:modelValue":t[4]||(t[4]=p=>e.form.area=p),style:{width:"100%"}},null,8,["options","modelValue"])]),_:1}),o(n,{label:"\u8857\u9053\u5730\u5740",prop:"address"},{default:a(()=>[o(i,{modelValue:e.form.address,"onUpdate:modelValue":t[5]||(t[5]=p=>e.form.address=p),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8857\u9053\u5730\u5740"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u8054\u7CFB\u7535\u6D3B",prop:"phone"},{default:a(()=>[o(i,{modelValue:e.form.phone,"onUpdate:modelValue":t[6]||(t[6]=p=>e.form.phone=p),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u6D3B"},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[o(U,{type:"primary",onClick:e.submitForm,loading:e.confirmLoading},{default:a(()=>[V(b(e.confirmLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["onClick","loading"]),o(U,{onClick:e.resetForm},{default:a(()=>[ee]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),o(w,{span:8,class:"base-setting-image"},{default:a(()=>[te,o(P,{src:e.src,size:e.size},null,8,["src","size"]),o(A,{icon:"el-icon-upload",size:"medium",type:"primary"})]),_:1})]),_:1})],2)}var ae=y(Z,[["render",oe],["__scopeId","data-v-652dd424"]]);const le=$({props:{title:{type:String,default:""},content:{type:String,default:""},accordion:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String||Number,default:""},customTitle:{type:Boolean,default:!1}},setup(){return{activeName:g("1")}}}),se={class:"setting-wrap-custom"};function ne(e,t,s,m,_,f){const i=l("el-collapse-item"),n=l("el-collapse");return u(),v(n,{modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=d=>e.activeName=d)},{default:a(()=>[o(i,Q(X(h(h({},e.$props),e.$attrs))),K({default:a(()=>[S("div",null,b(e.content),1)]),_:2},[e.customTitle?{name:"title",fn:a(()=>[S("div",se,[I(e.$slots,"icon",{},void 0,!0),I(e.$slots,"leftTitle",{},void 0,!0),I(e.$slots,"rightOperation",{},void 0,!0)])])}:void 0]),1040)]),_:3},8,["modelValue"])}var re=y(le,[["render",ne],["__scopeId","data-v-1bd8a75b"]]);const ie=[{key:"1",name:"\u57FA\u672C\u8BBE\u7F6E",component:"BaseSetting"},{key:"2",name:"\u5B89\u5168\u8BBE\u7F6E",component:"SafeSetting"},{key:"3",name:"\u8D26\u53F7\u7ED1\u5B9A",component:"AccountBind"},{key:"4",name:"\u65B0\u6D88\u606F\u901A\u77E5",component:"MsgNotify"}],de=[{key:"1",title:"\u8D26\u6237\u5BC6\u7801",label:"\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6",value:"\u5F3A",extra:"\u4FEE\u6539"},{key:"2",title:"\u5BC6\u4FDD\u624B\u673A",label:"\u5DF2\u7ED1\u5B9A\u624B\u673A",value:"138****8293",extra:"\u4FEE\u6539"},{key:"3",title:"\u5BC6\u4FDD\u95EE\u9898",label:"\u5BC6\u4FDD\u95EE\u9898",value:"\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",extra:"\u4FEE\u6539"},{key:"4",title:"\u5907\u7528\u90AE\u7BB1",label:"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1",value:"ant***sign.com",extra:"\u4FEE\u6539"}],ue=[{key:"1",title:"\u7ED1\u5B9A\u6DD8\u5B9D",label:"\u5F53\u524D\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u53F7",extra:"\u7ED1\u5B9A",avatar:"zhifubao",color:"#ff4000"},{key:"2",title:"\u7ED1\u5B9A\u652F\u4ED8\u5B9D",label:"\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u8D26\u53F7",extra:"\u7ED1\u5B9A",avatar:"zhifubao",color:"#2eabff"},{key:"3",title:"\u7ED1\u5B9A\u9489\u9489",label:"\u5F53\u524D\u672A\u7ED1\u5B9A\u9489\u9489\u8D26\u53F7",extra:"\u7ED1\u5B9A",avatar:"zhifubao",color:"#2eabff"}],pe=[{key:"1",title:"\u8D26\u6237\u5BC6\u7801",label:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",status:!0},{key:"2",title:"\u7CFB\u7EDF\u6D88\u606F",label:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",status:!1},{key:"3",title:"\u5F85\u529E\u4EFB\u52A1",label:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",status:!0}];const ce=$({components:{SettingWrapper:re},setup(){return{customTitle:g(!0),safeSettingList:de}}}),me={class:"setting-page"},_e={class:"el-descriptions-title"};function fe(e,t,s,m,_,f){const i=l("el-descriptions-item"),n=l("el-descriptions");return u(),c("div",me,[(u(!0),c(B,null,N(e.safeSettingList,d=>(u(),v(n,{title:d.title,key:d.key},{extra:a(()=>[S("span",_e,b(d.extra),1)]),default:a(()=>[o(i,{label:d.label},{default:a(()=>[V("\uFF1A"+b(d.value),1)]),_:2},1032,["label"])]),_:2},1032,["title"]))),128))])}var ge=y(ce,[["render",fe],["__scopeId","data-v-7f478936"]]);const be=$({setup(){return{accountBindList:ue}}}),ve=e=>(R("data-v-01ba9a40"),e=e(),T(),e),ye={class:"setting-page"},$e=ve(()=>S("span",{class:"el-descriptions-title"},"\u7ED1\u5B9A",-1));function Ve(e,t,s,m,_,f){const i=l("svg-icon"),n=l("el-descriptions-item"),d=l("el-descriptions");return u(),c("div",ye,[(u(!0),c(B,null,N(e.accountBindList,r=>(u(),v(d,{title:r.title,key:r.key},{extra:a(()=>[$e]),default:a(()=>[o(n,null,{label:a(()=>[o(i,{iconClass:r.avatar},null,8,["iconClass"]),V(" "+b(r.label),1)]),default:a(()=>[V(" "+b(r.value),1)]),_:2},1024)]),_:2},1032,["title"]))),128))])}var ke=y(be,[["render",Ve],["__scopeId","data-v-01ba9a40"]]);const he=$({setup(){const e=g(!0);return{msgNotifyList:pe,value:e}}}),Se={class:"setting-page"};function Be(e,t,s,m,_,f){const i=l("el-descriptions-item"),n=l("el-switch"),d=l("el-descriptions");return u(),c("div",Se,[(u(!0),c(B,null,N(e.msgNotifyList,r=>(u(),v(d,{title:r.title,key:r.key},{extra:a(()=>[o(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=k=>e.value=k)},null,8,["modelValue"])]),default:a(()=>[o(i,{label:r.label},{default:a(()=>[V(b(r.value),1)]),_:2},1032,["label"])]),_:2},1032,["title"]))),128))])}var Ne=y(he,[["render",Be]]);const ze=$({components:{BaseSetting:ae,SafeSetting:ge,AccountBind:ke,MsgNotify:Ne},setup(){const e=g("1"),{getIsMobile:t}=F();return{activeName:e,settingList:ie,getIsMobile:t}}});function Ie(e,t,s,m,_,f){const i=l("el-tab-pane"),n=l("el-tabs"),d=l("el-card");return u(),v(d,{class:"setting-card m10"},{default:a(()=>[o(n,{class:q(e.getIsMobile?"mobile-setting-tabs":"setting-tabs"),"tab-position":e.getIsMobile?"top":"left",modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=r=>e.activeName=r)},{default:a(()=>[(u(!0),c(B,null,N(e.settingList,r=>(u(),v(i,{key:r.key,label:r.name,name:r.key},{default:a(()=>[(u(),v(Y(r.component)))]),_:2},1032,["label","name"]))),128))]),_:1},8,["class","tab-position","modelValue"])]),_:1})}var Fe=y(ze,[["render",Ie],["__scopeId","data-v-53eb94b0"]]);export{Fe as default};
