import{P as g}from"./PageWrapper.5303ec3c.js";import{s as a,aD as x,C as y,r as l,o as v,j as w,w as r,a as t,b as i,t as s,h as c}from"./vendor.a913ed64.js";import{_ as T}from"./index.59caaf27.js";const V={name:"index",components:{PageWrapper:g},setup(){const n=a(""),o=a(!0),p=a(!1),e=x(n,1e3,o.value,p.value),d=a(0);return y(e,()=>d.value+=1),{input:n,throttled:e,updated:d,trailing:o,leading:p}}},k=c(" \u4F7F\u7528VueUse useThrottle "),j=c("\u67E5\u770B"),B=t("p",null,"\u5E94\u7528\u573A\u666F\uFF1A\u65E0\u8BBA\u9891\u7387\u591A\u9AD8\u53EA\u6309\u7167\u56FA\u5B9A\u8282\u594F\u6267\u884C(\u7C7B\u4F3C\u4E8E\u6280\u80FD\u51B7\u5374\u65F6\u95F4),\u4F8B\u5982 \u9F20\u6807\u4E0D\u65AD\u70B9\u51FB\u89E6\u53D1\uFF0Cmousedown(\u5355\u4F4D\u65F6\u95F4\u5185\u53EA\u89E6\u53D1\u4E00\u6B21)",-1),C=t("p",null,"Delay is set to 1000ms for this demo.",-1);function D(n,o,p,e,d,N){const u=l("el-link"),_=l("el-input"),m=l("el-card"),h=l("page-wrapper");return v(),w(h,{title:n.$route.meta.title},{content:r(()=>[t("p",null,[k,i(u,{type:"primary",href:"https://vueuse.org/shared/usethrottle/",target:"_blank"},{default:r(()=>[j]),_:1})]),B]),default:r(()=>[i(m,{shadow:"none"},{default:r(()=>[i(_,{modelValue:e.input,"onUpdate:modelValue":o[0]||(o[0]=f=>e.input=f),placeholder:"Try to type anything...",type:"text"},null,8,["modelValue"]),C,t("p",null,"Throttled: "+s(e.throttled),1),t("p",null,"Times Updated: "+s(e.updated),1),t("p",null,"Trailing: "+s(e.trailing),1),t("p",null,"Leading: "+s(e.leading),1)]),_:1})]),_:1},8,["title"])}var W=T(V,[["render",D]]);export{W as default};
