var Q=Object.defineProperty,N=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var B=(t,o,c)=>o in t?Q(t,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[o]=c,h=(t,o)=>{for(var c in o||(o={}))E.call(o,c)&&B(t,c,o[c]);if(S)for(var c of S(o))F.call(o,c)&&B(t,c,o[c]);return t},P=(t,o)=>N(t,q(o));import{_ as A,d as C,$ as I,W as j,r as s,o as r,k as f,w as n,c as x,j as w,a as e,b as a,t as d,F as y,i as V,n as K,a0 as L,p as W,e as G,s as H}from"./vendor.43fc48c7.js";import{_ as $,u as J}from"./index.2753bfca.js";const D=(t=27)=>{const o=[];for(let c=0;c<t;c++)o.push({title:A.Random.ctitle(),time:"2021/12/12 12:12",image:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJt7bicBACKAWlkCacxl072UAfaOsxQgfbfpquHItiaPsDj4CoaC9Q02sI0DhSZdnKlQaUAb2E8Vicg/132",desc:A.Random.cparagraph(1,10),name:A.Random.cname()});return o},M=()=>[{icon:"el-icon-edit",title:"\u79D1\u5B66\u642C\u7816\u7EC4",color:"#ff4000"},{icon:"el-icon-share",title:"\u4E2D\u4E8C\u5C11\u5E74\u56E2",color:"#7c51b8"},{icon:"el-icon-share",title:"\u9AD8\u903C\u683C\u8BBE\u8BA1",color:"#00adf7"},{icon:"el-icon-share",title:"\u7A0B\u5E8F\u5458\u65E5\u5E38",color:"#00adf7"},{icon:"el-icon-edit",title:"\u79D1\u5B66\u642C\u7816\u7EC4",color:"#7c51b8"},{icon:"el-icon-edit",title:"\u7A0B\u5E8F\u5458\u65E5\u5E38",color:"#ff4000"}],O=()=>[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"},{name:"Tag 6",type:"danger"},{name:"Tag 7",type:"danger"},{name:"Tag 8",type:"danger"},{name:"Tag 9",type:"danger"},{name:"Tag 10",type:"danger"},{name:"Tag 11",type:"danger"},{name:"Tag 3",type:"info"},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 2",type:"success"}];const Z=C({setup(){const t=I({lists:D(15)});return h({},j(t))}}),X={class:"flex-row mr-2 w-full"},Y={class:"ml-2 w-full"},ee={class:"flex-row between"},te={class:"m-0"},se={class:"text-sm text-secondary"},oe={class:"text-df text-secondary text-overflow-2"};function ae(t,o,c,v,b,T){const p=s("el-avatar"),_=s("el-col"),m=s("el-row");return r(),f(m,null,{default:n(()=>[(r(!0),x(y,null,w(t.lists,(i,l)=>(r(),f(_,{span:24,key:l,class:"item flex-row between"},{default:n(()=>[e("div",X,[e("div",null,[a(p,{size:45,src:i.image},null,8,["src"])]),e("div",Y,[e("div",ee,[e("h4",te,d(i.title),1),e("div",se,d(i.time),1)]),e("div",oe,d(i.desc),1)])])]),_:2},1024))),128))]),_:1})}var ne=$(Z,[["render",ae],["__scopeId","data-v-e862d9e8"]]);const ce=C({setup(){const t=I({lists:D(32)});return h({},j(t))}}),le={class:"flex-row"},re={class:"flex-col between w-full m-2"},_e={class:"m-0 text-overflow-1"},de={class:"flex-row between text-xs text-secondary"},ie={class:"text-overflow-1"},pe={class:"text-overflow-1"};function me(t,o,c,v,b,T){const p=s("el-image"),_=s("el-card"),m=s("el-col"),i=s("el-row");return r(),f(i,{gutter:10},{default:n(()=>[(r(!0),x(y,null,w(t.lists,(l,g)=>(r(),f(m,{key:g,xs:24,sm:12,md:12,lg:8,xl:8,class:"py-1"},{default:n(()=>[a(_,{"body-style":{padding:"10px"},shadow:"none"},{default:n(()=>[e("div",null,[e("div",le,[a(p,{class:"image",src:l.image,"preview-src-list":[l.image]},null,8,["src","preview-src-list"]),e("div",re,[e("h4",_e,d(l.title),1),e("div",de,[e("div",ie,d(l.time),1),e("div",pe,d(l.name),1)])])])])]),_:2},1024)]),_:2},1024))),128))]),_:1})}var ue=$(ce,[["render",me],["__scopeId","data-v-19bb9b0e"]]);const fe={name:"UserInfo",setup(){const{getUser:t}=J(),o=I({tags:O(),teams:M()});return P(h({},j(o)),{getUser:t})}},U=t=>(W("data-v-7fad93de"),t=t(),G(),t),ve={class:"info flex-col center align-center"},ge={class:"text-xl text-primary text-bo"},xe=U(()=>e("div",{class:"text-sm text-secondary"},"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1)),he={class:"task-wrap flex-row between align-center"},we=U(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"90")],-1)),ye=U(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"66")],-1)),$e=U(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"80")],-1)),be=V("\u6807\u7B7E"),Te={class:"tag"},ke=V("\u56E2\u961F"),Ie={class:"team"},je={class:"text-df ml-1"};function Ue(t,o,c,v,b,T){const p=s("el-avatar"),_=s("el-divider"),m=s("el-tag"),i=s("el-space"),l=s("el-col"),g=s("el-row"),k=s("el-card");return r(),f(k,{shadow:"none"},{default:n(()=>[e("div",ve,[e("div",null,[a(p,{src:v.getUser.avatar,size:100},null,8,["src"])]),e("div",ge,d(v.getUser.nickname),1),xe,e("div",he,[we,a(_,{direction:"vertical"}),ye,a(_,{direction:"vertical"}),$e])]),a(_,{"content-position":"left"},{default:n(()=>[be]),_:1}),e("div",Te,[a(i,{wrap:""},{default:n(()=>[(r(!0),x(y,null,w(t.tags,u=>(r(),f(m,{key:u.name,type:u.type},{default:n(()=>[V(d(u.name),1)]),_:2},1032,["type"]))),128))]),_:1})]),a(_,{"content-position":"left"},{default:n(()=>[ke]),_:1}),e("div",Ie,[a(g,{gutter:10},{default:n(()=>[(r(!0),x(y,null,w(t.teams,(u,z)=>(r(),f(l,{span:12,key:z,style:{"padding-bottom":"5px","padding-top":"5px"}},{default:n(()=>[e("i",{class:K([u.icon,"text-xl"]),style:L({color:u.color})},null,6),e("span",je,d(u.title),1)]),_:2},1024))),128))]),_:1})])]),_:1})}var ze=$(fe,[["render",Ue],["__scopeId","data-v-7fad93de"]]);const Ae=C({setup(){const t=I({projects:D(21)});return h({},j(t))}}),Ce={class:"flex-row mb-1"},Ve={class:"ml-2"},De={class:"text-df h-3 text-secondary text-overflow-3 my-1"},Se={class:"flex-row between text-secondary"};function Be(t,o,c,v,b,T){const p=s("el-avatar"),_=s("el-card"),m=s("el-col"),i=s("el-row");return r(),f(i,null,{default:n(()=>[(r(!0),x(y,null,w(t.projects,(l,g)=>(r(),f(m,{xs:24,sm:12,md:12,lg:8,xl:8,key:g},{default:n(()=>[a(_,{class:"card",shadow:"hover"},{default:n(()=>[e("div",Ce,[a(p,{src:l.image,size:24},null,8,["src"]),e("span",Ve,d(l.title),1)]),e("div",De,d(l.desc),1),e("div",Se,[e("span",null,d(l.name),1),e("span",null,d(l.time),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})}var Pe=$(Ae,[["render",Be]]);const Re={name:"index",components:{Article:ne,UserInfo:ze,Project:Pe,Task:ue},setup(){return{active:H("article")}}},Qe={class:"mx-2"};function Ne(t,o,c,v,b,T){const p=s("Article"),_=s("el-tab-pane"),m=s("Task"),i=s("Project"),l=s("el-tabs"),g=s("el-card"),k=s("el-col"),u=s("UserInfo"),z=s("el-row");return r(),x("div",Qe,[a(z,{gutter:8},{default:n(()=>[a(k,{xs:24,sm:24,md:24,lg:16,xl:18,class:"mt-2"},{default:n(()=>[a(g,{shadow:"none"},{default:n(()=>[a(l,{modelValue:v.active,"onUpdate:modelValue":o[0]||(o[0]=R=>v.active=R)},{default:n(()=>[a(_,{label:"\u6587\u7AE0",name:"article",lazy:!0},{default:n(()=>[a(p)]),_:1}),a(_,{label:"\u4EFB\u52A1",name:"task",lazy:!0},{default:n(()=>[a(m)]),_:1}),a(_,{label:"\u9879\u76EE",name:"project",lazy:!0},{default:n(()=>[a(i)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(k,{xs:24,sm:24,md:24,lg:8,xl:6,class:"mt-2"},{default:n(()=>[a(u)]),_:1})]),_:1})])}var Ke=$(Re,[["render",Ne]]);export{Ke as default};
