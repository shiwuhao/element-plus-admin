var I=Object.defineProperty,N=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var M=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))P.call(t,s)&&M(e,s,t[s]);if(w)for(var s of w(t))Q.call(t,s)&&M(e,s,t[s]);return e},E=(e,t)=>N(e,C(t));import{_ as U}from"./PageWrapper.8aec7a08.js";import{y as v,b as $,p as z,o as i,f as S,w as a,h as l,a as r,x as h,aq as G,av as R,aM as T,ay as k,b1 as W,az as D,c as u,F as y,G as j,t as m,O as H,a5 as q,i as O,j as J,aB as K}from"./vendor.55f737cb.js";/* empty css                *//* empty css                     *//* empty css               */import{B}from"./Form.c0c78dc0.js";import{_ as g,o as X,u as A}from"./index.3250e07d.js";/* empty css                 *//* empty css                          *//* empty css                       *//* empty css                        */import"../../../../at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"../../../../at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"../../../../at.alicdn.com/t/font_1804572_162pxjij64s.js";const Y={name:"BasicSetting",components:{BasicForm:B},setup(){const{getUser:e}=X(),t=v({form:e,rules:[]}),{getIsMobile:s}=A();return E(b({},$(t)),{getIsMobile:s})}},Z=h("\u4FDD\u5B58"),ee={class:"flex-row center"},te={class:"flex-col center"},le={class:"mt-5"},ae=h("\u66F4\u6362\u5934\u50CF");function oe(e,t,s,_,V,x){const c=G,o=R,n=T,f=k,d=W,F=z,L=D;return i(),S(L,{model:e.form,"label-position":_.getIsMobile?"top":"right","label-width":"80px"},{default:a(()=>[l(d,{gutter:10},{default:a(()=>[l(n,{sm:24,xs:24,md:18,lg:16,xl:14},{default:a(()=>[l(d,null,{default:a(()=>[l(n,null,{default:a(()=>[l(o,{label:"\u7528\u6237\u540D"},{default:a(()=>[l(c,{modelValue:e.form.username,"onUpdate:modelValue":t[0]||(t[0]=p=>e.form.username=p),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{default:a(()=>[l(o,{label:"\u90AE\u7BB1"},{default:a(()=>[l(c,{modelValue:e.form.email,"onUpdate:modelValue":t[1]||(t[1]=p=>e.form.email=p)},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{default:a(()=>[l(o,{label:"\u6635\u79F0"},{default:a(()=>[l(c,{modelValue:e.form.nickname,"onUpdate:modelValue":t[2]||(t[2]=p=>e.form.nickname=p)},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{default:a(()=>[l(o,{label:"\u4E2A\u4EBA\u7B80\u4ECB"},{default:a(()=>[l(c,{modelValue:e.form.desc,"onUpdate:modelValue":t[3]||(t[3]=p=>e.form.desc=p),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),l(n,null,{default:a(()=>[l(o,null,{default:a(()=>[l(f,{type:"primary"},{default:a(()=>[Z]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{md:6,lg:8,xl:10},{default:a(()=>[r("div",ee,[r("div",te,[l(F,{src:e.form.avatar,size:130},null,8,["src"]),r("div",le,[l(f,{type:"primary",class:"w-full"},{default:a(()=>[ae]),_:1})])])])]),_:1})]),_:1})]),_:1},8,["model","label-position"])}var se=g(Y,[["render",oe]]);const ne={name:"BasicSetting",components:{BasicForm:B},setup(){const e=v({secureSettingList:[{label:"\u8D26\u6237\u5BC6\u7801",value:"1",description:"\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u5F3A",extra:"\u4FEE\u6539"},{label:"\u5BC6\u7801\u624B\u673A",value:"2",description:"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A185****7907",extra:"\u4FEE\u6539"},{label:"\u5BC6\u4FDD\u95EE\u9898",value:"3",description:"\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",extra:"\u4FEE\u6539"},{label:"\u5BC6\u4FDD\u90AE\u7BB1",value:"4",description:"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1\uFF1A\uFF1Aadmin****.com",extra:"\u4FEE\u6539"},{label:"MFA\u8BBE\u5907",value:"5",description:"\u672A\u7ED1\u5B9A MFA \u8BBE\u5907\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4",extra:"\u4FEE\u6539"}]});return b({},$(e))}},re={class:"list"},ie={class:"title"},ce={class:"label"},ue=h("\u4FEE\u6539");function de(e,t,s,_,V,x){const c=k;return i(),u("div",re,[(i(!0),u(y,null,j(e.secureSettingList,(o,n)=>(i(),u("div",{class:"item",key:n},[r("div",null,[r("div",ie,m(o.label),1),r("div",ce,m(o.description),1)]),r("div",null,[l(c,{type:"text"},{default:a(()=>[ue]),_:1})])]))),128))])}var pe=g(ne,[["render",de]]);const me={name:"BasicSetting",components:{BasicForm:B},setup(){const e=v({secureSettingList:[{label:"QQ",value:"1",description:"\u5F53\u524D\u672A\u7ED1\u5B9AQQ\u5E10\u53F7",extra:"\u7ED1\u5B9A"},{label:"\u5FAE\u4FE1",value:"2",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u5FAE\u4FE1\u5E10\u53F7",extra:"\u7ED1\u5B9A"},{label:"\u652F\u4ED8\u5B9D",value:"3",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u5E10\u53F7",extra:"\u7ED1\u5B9A"},{label:"\u5FAE\u535A",value:"4",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u5FAE\u535A\u5E10\u53F7",extra:"\u7ED1\u5B9A"},{label:"GitHub",value:"5",description:"\u5F53\u524D\u672A\u7ED1\u5B9AGitHub\u5E10\u53F7",extra:"\u7ED1\u5B9A"}]});return b({},$(e))}},_e={class:"list"},fe={class:"title"},be={class:"label"};function ve(e,t,s,_,V,x){const c=k;return i(),u("div",_e,[(i(!0),u(y,null,j(e.secureSettingList,(o,n)=>(i(),u("div",{class:"item",key:n},[r("div",null,[r("div",fe,m(o.label),1),r("div",be,m(o.description),1)]),r("div",null,[l(c,{type:"text"},{default:a(()=>[h(m(o.extra),1)]),_:2},1024)])]))),128))])}var $e=g(me,[["render",ve]]);const ge={name:"BasicSetting",components:{BasicForm:B},setup(){const e=v({secureSettingList:[{label:"\u7CFB\u7EDF\u6D88\u606F",value:"1",description:"\u7CFB\u7EDF\u6D88\u606F",status:!0},{label:"\u5F85\u529E\u4EFB\u52A1",value:"2",description:"\u5F85\u529E\u4EFB\u52A1",status:!0},{label:"\u7AD9\u5185\u4FE1",value:"2",description:"\u7AD9\u5185\u4FE1",status:!0}]});return b({},$(e))}},Ve={class:"list"},xe={class:"title"},Se={class:"label"};function he(e,t,s,_,V,x){const c=H;return i(),u("div",Ve,[(i(!0),u(y,null,j(e.secureSettingList,(o,n)=>(i(),u("div",{class:"item",key:n},[r("div",null,[r("div",xe,m(o.label),1),r("div",Se,m(o.description),1)]),r("div",null,[l(c,{modelValue:o.status,"onUpdate:modelValue":f=>o.status=f},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])}var ye=g(ge,[["render",he]]);const je={name:"index",components:{PageWrapper:U,BaseSetting:se,SecureSetting:pe,AccountBind:$e,MsgNotify:ye},setup(){const e=v({tabActive:"1",tabs:[{label:"\u57FA\u672C\u8BBE\u7F6E",value:"1",component:"BaseSetting"},{label:"\u5B89\u5168\u8BBE\u7F6E",value:"2",component:"SecureSetting"},{label:"\u8D26\u6237\u7ED1\u5B9A",value:"3",component:"AccountBind"},{label:"\u6D88\u606F\u901A\u77E5",value:"4",component:"MsgNotify"}]}),{getIsMobile:t}=A();return E(b({},$(e)),{getIsMobile:t})}};function Be(e,t,s,_,V,x){const c=O,o=J,n=K,f=U;return i(),S(f,{title:e.$route.meta.title},{default:a(()=>[l(n,{shadow:"none",class:"m-2"},{default:a(()=>[l(o,{"tab-position":_.getIsMobile?"top":"left",modelValue:e.tabActive,"onUpdate:modelValue":t[0]||(t[0]=d=>e.tabActive=d)},{default:a(()=>[(i(!0),u(y,null,j(e.tabs,d=>(i(),S(c,{label:d.label,name:d.value,key:d.value},{default:a(()=>[(i(),S(q(d.component)))]),_:2},1032,["label","name"]))),128))]),_:1},8,["tab-position","modelValue"])]),_:1})]),_:1},8,["title"])}var Re=g(je,[["render",Be]]);export{Re as default};
