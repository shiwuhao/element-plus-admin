var y=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,s,n)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,d=(e,s)=>{for(var n in s||(s={}))j.call(s,n)&&b(e,n,s[n]);if(g)for(var n of g(s))E.call(s,n)&&b(e,n,s[n]);return e},h=(e,s)=>P(e,V(s));import{d as w,y as B,m as C,e as S,b as $,o as p,f as U,w as o,h as l,c as M,G as N,a as c,t as u,F as z,x as k,P as F,Q as R,i as W,j as x,aB as A}from"./vendor.55f737cb.js";/* empty css                */import{M as D,o as G,p as I,_ as L}from"./index.3250e07d.js";import{_ as O}from"./PageWrapper.8aec7a08.js";const Q=w({name:"UserPermissions",components:{PageWrapper:O,Menu:D},setup(){const e=B({currentTab:"menus",changeUsers:[{id:1,username:"\u7528\u62371",token:"mockToken1"},{id:2,username:"\u7528\u62372",token:"mockToken2"}]}),s=G(),{dispatch:n}=C(),m=I(),_=async t=>{const i=e.changeUsers.find(r=>r.id===t);await n("user/setToken",i.token),await n("permission/getPermissions")},f=S(()=>e.changeUsers.find(t=>t.token===s.getToken.value).id);return h(d(d(d({},$(e)),m),s),{currentUser:f,changeUser:_})}}),q=k(" \u5F53\u524D\u7528\u6237\uFF1A "),H={style:{float:"left"}},J={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},K=k(" demo\u6570\u636E\u4E2D\u5305\u542B\u4E86\u9884\u89C8\u7684\u524D\u53F0\u8DEF\u7531\u83DC\u5355,\u5177\u4F53\u53C2\u8003src/store/modules/permission.js ");function X(e,s,n,m,_,f){const t=F,i=R,r=W,v=x,T=A;return p(),U(T,{shadow:"none"},{header:o(()=>[q,l(i,{modelValue:e.currentUser,"onUpdate:modelValue":s[0]||(s[0]=a=>e.currentUser=a),placeholder:"Select",size:"mini",onChange:e.changeUser},{default:o(()=>[(p(!0),M(z,null,N(e.changeUsers,a=>(p(),U(t,{key:a.value,label:a.username,value:a.id},{default:o(()=>[c("span",H,u(a.username),1),c("span",J,u(a.id),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),default:o(()=>[l(v,{modelValue:e.currentTab,"onUpdate:modelValue":s[1]||(s[1]=a=>e.currentTab=a)},{default:o(()=>[l(r,{label:"\u83DC\u5355",name:"menus"},{default:o(()=>[K,c("pre",null,u(e.getMenus),1)]),_:1}),l(r,{label:"\u89D2\u8272",name:"roles"},{default:o(()=>[c("pre",null,u(e.getRoles),1)]),_:1}),l(r,{label:"\u52A8\u4F5C",name:"actions"},{default:o(()=>[c("pre",null,u(e.getActions),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ae=L(Q,[["render",X],["__scopeId","data-v-0ba90978"]]);export{ae as U};
