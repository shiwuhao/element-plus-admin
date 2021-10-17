var B=Object.defineProperty;var R=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var P=(e,o,c)=>o in e?B(e,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[o]=c,y=(e,o)=>{for(var c in o||(o={}))F.call(o,c)&&P(e,c,o[c]);if(R)for(var c of R(o))M.call(o,c)&&P(e,c,o[c]);return e};import{P as W}from"./PageWrapper.6d11bd32.js";import{u as z}from"./useUser.5748bf12.js";import{_ as g,u as N,a as A}from"./index.e8421a20.js";import{r as s,o as l,j as m,w as n,b as a,a as t,t as f,p as H,e as Q,$ as v,d as b,a0 as D,E as S,c as j,i as k,F as C,n as L,a1 as V,B as G}from"./vendor.b8da4354.js";import"./BasicCard.vue_vue&type=style&index=0&scoped=true&lang.d0e75d9b.js";import{B as O}from"./BasicCard.f6cd5790.js";import{u as q}from"./useECharts.a20b1275.js";const J={name:"UserInfo",setup(){const{getUser:e}=z();return{getUser:e}}},w=e=>(H("data-v-04cf72b4"),e=e(),Q(),e),K={class:"user-wrap flex-row-left"},T={class:"userinfo"},X={class:"username"},Y=w(()=>t("div",{class:"desc"},"\u4ECA\u5929\u5929\u6C14\u4E0D\u9519\uFF0C\u633A\u98CE\u548C\u65E5\u4E3D\u7684",-1)),Z={class:"task-wrap flex-row-justify"},ee=w(()=>t("div",{class:"task-item flex-col-top"},[t("span",{class:"label"},"\u5F85\u529E"),t("span",{class:"value"},"90")],-1)),te=w(()=>t("div",{class:"task-item flex-col-top"},[t("span",{class:"label"},"\u5F85\u529E"),t("span",{class:"value"},"66")],-1)),se=w(()=>t("div",{class:"task-item flex-col-top"},[t("span",{class:"label"},"\u5F85\u529E"),t("span",{class:"value"},"80")],-1));function oe(e,o,c,p,h,x){const _=s("el-avatar"),i=s("el-col"),u=s("el-divider"),d=s("el-row");return l(),m(d,{gutter:10},{default:n(()=>[a(i,{xs:24,sm:12,md:10,lg:7},{default:n(()=>[t("div",K,[a(_,{size:80,src:p.getUser.avatar,fit:"fill"},null,8,["src"]),t("div",T,[t("div",X,"\u65E9\u5B89\uFF0C"+f(p.getUser.nickname),1),Y])])]),_:1}),a(i,{xs:24,sm:{span:8,offset:4},md:{span:8,offset:6},lg:{span:6,offset:11}},{default:n(()=>[t("div",Z,[ee,a(u,{direction:"vertical"}),te,a(u,{direction:"vertical"}),se])]),_:1})]),_:1})}var ae=g(J,[["render",oe],["__scopeId","data-v-04cf72b4"]]);const ne=()=>{const e=[];for(let o=0;o<6;o++)e.push({title:v.Random.ctitle(),time:v.Random.datetime("m-d H:m"),image:v.Random.image("32x32"),desc:v.Random.cparagraph(),name:v.Random.cname()});return e},ce=()=>{const e=[];for(let o=0;o<7;o++)e.push({title:v.Random.ctitle(),time:v.Random.datetime("m-d H:m"),image:v.Random.image("60x60"),desc:v.Random.cparagraph(100,200),name:v.Random.cname()});return e},re=()=>({tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{data:["Direct","Marketing","Search Engine","Email","Union Ads"]},series:[{name:"Access From",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{position:"inner",fontSize:14},labelLine:{show:!1},data:[{value:1548,name:"Search Engine"},{value:775,name:"Direct"},{value:679,name:"Marketing",selected:!0}]},{name:"Access From",type:"pie",radius:["45%","60%"],labelLine:{length:30},label:{formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}\uFF1A}{c}  {per|{d}%}  `,backgroundColor:"#F6F8FC",borderColor:"#8C8D8E",borderWidth:1,borderRadius:4,rich:{a:{color:"#6E7079",lineHeight:22,align:"center"},hr:{borderColor:"#8C8D8E",width:"100%",borderWidth:1,height:0},b:{color:"#4C5058",fontSize:14,fontWeight:"bold",lineHeight:33},per:{color:"#fff",backgroundColor:"#4C5058",padding:[3,4],borderRadius:4}}},data:[{value:335,name:"Direct"},{value:310,name:"Email"},{value:251,name:"Google"},{value:234,name:"Union Ads"}]}]});const le=b({setup(){const e=D({projects:ne()});return y({},S(e))}}),_e={class:"flex"},de={class:"ml-2"},ie={class:"text-secondary text-overflow mtb-1"},pe={class:"flex row-between text-secondary"};function ue(e,o,c,p,h,x){const _=s("el-avatar"),i=s("el-card"),u=s("el-col"),d=s("el-row");return l(),m(i,{header:"\u9879\u76EE",shadow:"none"},{default:n(()=>[a(d,{gutter:0},{default:n(()=>[(l(!0),j(C,null,k(e.projects,(r,$)=>(l(),m(u,{xs:24,sm:12,md:12,lg:8,xl:8,key:$},{default:n(()=>[a(i,{class:"card",shadow:"hover"},{default:n(()=>[t("div",_e,[a(_,{src:r.image,size:24},null,8,["src"]),t("span",de,f(r.title),1)]),t("div",ie,f(r.desc),1),t("div",pe,[t("span",null,f(r.name),1),t("span",null,f(r.time),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var me=g(le,[["render",ue],["__scopeId","data-v-3c1cbe6f"]]);const fe=b({setup(){const e=D({projects:ce()});return y({},S(e))}}),ve={class:"flex mr10",style:{width:"80%"}},he={class:"ml-2"},ge={class:"text-sm text-secondary text-overflow"},xe={class:"flex col-top text-sm text-secondary"};function $e(e,o,c,p,h,x){const _=s("el-image"),i=s("el-col"),u=s("el-row"),d=s("el-card");return l(),m(d,{header:"\u52A8\u6001",shadow:"none"},{default:n(()=>[a(u,null,{default:n(()=>[(l(!0),j(C,null,k(e.projects,(r,$)=>(l(),m(i,{span:24,key:$,class:"item flex row-between"},{default:n(()=>[t("div",ve,[t("div",null,[a(_,{style:{width:"60px",height:"60px"},src:r.image,"preview-src-list":[r.image]},null,8,["src","preview-src-list"])]),t("div",he,[t("div",null,f(r.title),1),t("div",ge,f(r.desc),1)])]),t("div",xe,[t("span",null,f(r.name),1),t("span",null,f(r.time),1)])]),_:2},1024))),128))]),_:1})]),_:1})}var be=g(fe,[["render",$e],["__scopeId","data-v-51b87257"]]);const we=b({name:"QuickNav",setup(){const{getMenus:e}=N();return{getMenus:e}}}),ye={class:"flex col-center row-center"},je={class:"text-xl"};function ke(e,o,c,p,h,x){const _=s("el-card"),i=s("el-col"),u=s("el-row");return l(),m(_,{header:"\u5FEB\u6377\u5BFC\u822A",shadow:"none"},{default:n(()=>[a(u,null,{default:n(()=>[(l(!0),j(C,null,k(e.getMenus,(d,r)=>(l(),m(i,{span:8,key:r,class:"item flex row-center"},{default:n(()=>[a(_,{class:"card",shadow:"hover"},{default:n(()=>[t("div",ye,[t("span",je,[t("i",{class:L(d.icon),style:V({color:d.color})},null,6)]),t("span",null,f(d.title),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var Ce=g(we,[["render",ke]]);const Re={};function Pe(e,o){const c=s("el-image"),p=s("el-carousel-item"),h=s("el-carousel");return l(),m(h,{height:"300px"},{default:n(()=>[a(p,null,{default:n(()=>[a(c,{src:"/src/assets/cover1.jpg"})]),_:1}),a(p,null,{default:n(()=>[a(c,{src:"/src/assets/cover2.jpg"})]),_:1})]),_:1})}var De=g(Re,[["render",Pe]]);const Se={name:"BarPolarStack",components:{BasicCard:O},setup(){const{elRef:e,setOptions:o}=q();return G(()=>{o(re())}),{elRef:e}}},Ie={ref:"elRef",style:{height:"380px",width:"100%"}};function Ue(e,o,c,p,h,x){const _=s("el-card");return l(),m(_,{header:"\u9879\u76EE\u7EDF\u8BA1",shadow:"none"},{default:n(()=>[t("div",Ie,null,512)]),_:1})}var Ee=g(Se,[["render",Ue]]);const Be=b({components:{PageWrapper:W,UserInfo:ae,Project:me,Dynamic:be,QuickNav:Ce,Carousel:De,ProjectStatistic:Ee},setup(){const{getIsMobile:e}=A();return{getIsMobile:e}}});function Fe(e,o,c,p,h,x){const _=s("UserInfo"),i=s("Project"),u=s("Dynamic"),d=s("el-col"),r=s("QuickNav"),$=s("Carousel"),I=s("ProjectStatistic"),U=s("el-row"),E=s("PageWrapper");return l(),m(E,null,{content:n(()=>[a(_)]),default:n(()=>[a(U,{gutter:10},{default:n(()=>[a(d,{xs:24,sm:24,md:24,lg:18,xl:16},{default:n(()=>[a(i,{class:"mb-2"}),a(u,{class:"mb-2"})]),_:1}),a(d,{xs:24,sm:24,md:24,lg:6,xl:8},{default:n(()=>[a(r,{class:"mb-2"}),a($,{class:"mb-2"}),a(I,{class:"mb-2"})]),_:1})]),_:1})]),_:1})}var Ve=g(Be,[["render",Fe],["__scopeId","data-v-0225935e"]]);export{Ve as default};