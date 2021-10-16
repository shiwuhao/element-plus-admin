import{U as P}from"./UserPermissions.c8e2ef1b.js";import{P as b}from"./PageWrapper.5303ec3c.js";import{d as k,r as d,G as h,o as n,j as _,w as e,b as s,H as i,v as l,h as t,p as w,e as A,a as y}from"./vendor.a913ed64.js";import{_ as T,u as j}from"./index.59caaf27.js";import"./useUser.252b1cdc.js";const R=k({name:"index",components:{PageWrapper:b,UserPermissions:P},setup(){const{hasPermission:o,hasRole:f}=j();return{hasPermission:o,hasRole:f}}}),g=o=>(w("data-v-3a70a2a7"),o=o(),A(),o),$=t(" \u6307\u4EE4\u65B9\u5F0F\uFF1Av-permission, v-role"),C=g(()=>y("br",null,null,-1)),I=t(" \u51FD\u6570\u65B9\u5F0F\uFF1AhasPermission, hasRole"),N=g(()=>y("br",null,null,-1)),V=t("\u6307\u4EE4\u65B9\u5F0F\u5224\u65AD\u6743\u9650 v-permission"),B=t(" \u6DFB\u52A0\u7528\u6237\uFF1A\u62E5\u6709\uFF08User:store\uFF09\u8282\u70B9\u53EF\u89C1 "),S=t(" \u5220\u9664\u7528\u6237\uFF1A\u62E5\u6709\uFF08User:destroy\uFF09\u8282\u70B9\u53EF\u89C1 "),D=t(" \u62E5\u6709\uFF08User:store || User:destroy\uFF09\u4EFB\u4E00\u8282\u70B9\u53EF\u89C1 "),W=t("\u51FD\u6570\u65B9\u5F0F\u5224\u65AD\u6743\u9650 hasPermission"),G=t(" \u6DFB\u52A0\u7528\u6237\uFF1A\u62E5\u6709\uFF08User:store\uFF09\u8282\u70B9\u53EF\u89C1 "),H=t(" \u5220\u9664\u7528\u6237\uFF1A\u62E5\u6709\uFF08User:destroy\uFF09\u8282\u70B9\u53EF\u89C1 "),q=t(" \u62E5\u6709\uFF08User:store || User:destroy\uFF09\u4EFB\u4E00\u8282\u70B9\u53EF\u89C1 "),z=t("\u6307\u4EE4\u65B9\u5F0F\u5224\u65AD\u6743\u9650 v-role"),E=t(" \u6DFB\u52A0\u7528\u6237\uFF1A\u62E5\u6709\uFF08Administrator\uFF09\u89D2\u8272\u53EF\u89C1 "),F=t(" \u5220\u9664\u7528\u6237\uFF1A\u62E5\u6709\uFF08test\uFF09\u89D2\u8272\u53EF\u89C1 "),J=t(" \u62E5\u6709\uFF08Administrator ||test\uFF09\u4EFB\u4E00\u89D2\u8272\u53EF\u89C1 "),K=t("\u51FD\u6570\u65B9\u5F0F\u5224\u65AD\u6743\u9650 hasRole"),L=t(" \u6DFB\u52A0\u7528\u6237\uFF1A\u62E5\u6709\uFF08Administrator\uFF09\u89D2\u8272\u53EF\u89C1 "),M=t(" \u5220\u9664\u7528\u6237\uFF1A\u62E5\u6709\uFF08Test\uFF09\u89D2\u8272\u53EF\u89C1 "),O=t(" \u62E5\u6709\uFF08Administrator || Test\uFF09\u4EFB\u4E00\u89D2\u8272\u53EF\u89C1 ");function Q(o,f,X,Y,Z,ee){const x=d("UserPermissions"),c=d("el-divider"),r=d("el-button"),a=d("el-col"),m=d("el-row"),U=d("el-card"),v=d("page-wrapper"),u=h("permission"),p=h("role");return n(),_(v,{title:o.$route.meta.title},{content:e(()=>[$,C,I,N]),default:e(()=>[s(x),s(U,{class:"mt10"},{default:e(()=>[s(c,{"content-position":"left"},{default:e(()=>[V]),_:1}),s(m,{gutter:10},{default:e(()=>[i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"primary"},{default:e(()=>[B]),_:1})]),_:1},512),[[u,"User:store"]]),i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"danger"},{default:e(()=>[S]),_:1})]),_:1},512),[[u,"User:destroy"]]),i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"success"},{default:e(()=>[D]),_:1})]),_:1},512),[[u,["User:store","User:destroy"]]])]),_:1}),s(c,{"content-position":"left"},{default:e(()=>[W]),_:1}),s(m,{gutter:10},{default:e(()=>[o.hasPermission("User:store")?(n(),_(a,{key:0,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"primary"},{default:e(()=>[G]),_:1})]),_:1})):l("",!0),o.hasPermission("User:destroy")?(n(),_(a,{key:1,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"danger"},{default:e(()=>[H]),_:1})]),_:1})):l("",!0),o.hasPermission(["User:store","User:destroy"])?(n(),_(a,{key:2,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"success"},{default:e(()=>[q]),_:1})]),_:1})):l("",!0)]),_:1}),s(c,{"content-position":"left"},{default:e(()=>[z]),_:1}),s(m,{gutter:10},{default:e(()=>[i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"primary"},{default:e(()=>[E]),_:1})]),_:1},512),[[p,"Administrator"]]),i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"danger"},{default:e(()=>[F]),_:1})]),_:1},512),[[p,"Test"]]),i(s(a,{xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"success"},{default:e(()=>[J]),_:1})]),_:1},512),[[p,["Administrator","Test"]]])]),_:1}),s(c,{"content-position":"left"},{default:e(()=>[K]),_:1}),s(m,{gutter:10},{default:e(()=>[o.hasRole("Administrator")?(n(),_(a,{key:0,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"primary"},{default:e(()=>[L]),_:1})]),_:1})):l("",!0),o.hasRole("Test")?(n(),_(a,{key:1,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"danger"},{default:e(()=>[M]),_:1})]),_:1})):l("",!0),o.hasRole(["Administrator","Test"])?(n(),_(a,{key:2,xl:6,lg:6,md:12,sm:12,xs:24},{default:e(()=>[s(r,{type:"success"},{default:e(()=>[O]),_:1})]),_:1})):l("",!0)]),_:1})]),_:1})]),_:1},8,["title"])}var de=T(R,[["render",Q],["__scopeId","data-v-3a70a2a7"]]);export{de as default};
