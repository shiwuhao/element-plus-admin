var T=Object.defineProperty,j=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(e,s,n)=>s in e?T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,i=(e,s)=>{for(var n in s||(s={}))C.call(s,n)&&b(e,n,s[n]);if(h)for(var n of h(s))B.call(s,n)&&b(e,n,s[n]);return e},k=(e,s)=>j(e,w(s));import{M as $,u as M,_ as N}from"./index.59caaf27.js";import{P as S}from"./PageWrapper.5303ec3c.js";import{d as z,al as E,x as F,f as R,E as m,r as l,o as _,j as v,w as a,b as c,c as W,i as x,a as u,t as d,F as A,h as V}from"./vendor.a913ed64.js";import{u as D}from"./useUser.252b1cdc.js";const I=z({name:"UserPermissions",components:{PageWrapper:S,Menu:$},setup(){const e=E({currentTab:"menus",changeUsers:[{id:1,username:"\u7528\u62371",token:"mockToken1"},{id:2,username:"\u7528\u62372",token:"mockToken2"}]}),s=D(),{dispatch:n}=F(),f=M(),g=async t=>{const p=e.changeUsers.find(r=>r.id===t);await n("user/setToken",p.token),await n("permission/getPermissions")},U=R(()=>e.changeUsers.find(t=>t.token===s.getToken.value).id);return k(i(i(i({},m(e)),m(f)),m(s)),{currentUser:U,changeUser:g})}}),L=V(" \u5F53\u524D\u7528\u6237\u62E5\u6709\u7684\u6743\u9650\uFF1A "),q={style:{float:"left"}},G={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},H=V(" demo\u6570\u636E\u4E2D\u5305\u542B\u4E86\u9884\u89C8\u7684\u524D\u53F0\u8DEF\u7531\u83DC\u5355,\u5177\u4F53\u53C2\u8003src/store/modules/permission.js ");function J(e,s,n,f,g,U){const t=l("el-option"),p=l("el-select"),r=l("el-tab-pane"),y=l("el-tabs"),P=l("el-card");return _(),v(P,{shadow:"none"},{header:a(()=>[L,c(p,{modelValue:e.currentUser,"onUpdate:modelValue":s[0]||(s[0]=o=>e.currentUser=o),placeholder:"Select",size:"mini",onChange:e.changeUser},{default:a(()=>[(_(!0),W(A,null,x(e.changeUsers,o=>(_(),v(t,{key:o.value,label:o.username,value:o.id},{default:a(()=>[u("span",q,d(o.username),1),u("span",G,d(o.id),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),default:a(()=>[c(y,{modelValue:e.currentTab,"onUpdate:modelValue":s[1]||(s[1]=o=>e.currentTab=o)},{default:a(()=>[c(r,{label:"\u83DC\u5355",name:"menus"},{default:a(()=>[H,u("pre",null,d(e.getMenus),1)]),_:1}),c(r,{label:"\u89D2\u8272",name:"roles"},{default:a(()=>[u("pre",null,d(e.getRoles),1)]),_:1}),c(r,{label:"\u52A8\u4F5C",name:"actions"},{default:a(()=>[u("pre",null,d(e.getActions),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Z=N(I,[["render",J],["__scopeId","data-v-198004e4"]]);export{Z as U};
