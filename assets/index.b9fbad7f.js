var M=Object.defineProperty,q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var N=(t,s,n)=>s in t?M(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,x=(t,s)=>{for(var n in s||(s={}))K.call(s,n)&&N(t,n,s[n]);if(P)for(var n of P(s))H.call(s,n)&&N(t,n,s[n]);return t},F=(t,s)=>q(t,G(s));import{bq as D,d as R,at as I,b as E,p as V,o as l,f as u,w as a,c as g,G as h,a as e,h as o,t as r,F as y,aM as w,b1 as $,bt as J,aB as U,bD as O,x as A,aF as Q,n as W,K as X,L as Y,N as Z,a2 as ee,r as te,U as z,i as se,j as oe}from"./vendor.55f737cb.js";/* empty css               *//* empty css                */import{_ as b,o as ae}from"./index.2338912f.js";/* empty css                        */import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const B=(t=27)=>{const s=[];for(let n=0;n<t;n++)s.push({title:D.Random.ctitle(),time:"2021/12/12 12:12",image:"https://v3.cn.vuejs.org/logo.png",desc:D.Random.cparagraph(1,10),name:D.Random.cname()});return s},ne=()=>[{icon:"el-icon-edit",title:"\u79D1\u5B66\u642C\u7816\u7EC4",color:"#ff4000"},{icon:"el-icon-share",title:"\u4E2D\u4E8C\u5C11\u5E74\u56E2",color:"#7c51b8"},{icon:"el-icon-share",title:"\u9AD8\u903C\u683C\u8BBE\u8BA1",color:"#00adf7"},{icon:"el-icon-share",title:"\u7A0B\u5E8F\u5458\u65E5\u5E38",color:"#00adf7"},{icon:"el-icon-edit",title:"\u79D1\u5B66\u642C\u7816\u7EC4",color:"#7c51b8"},{icon:"el-icon-edit",title:"\u7A0B\u5E8F\u5458\u65E5\u5E38",color:"#ff4000"}],ce=()=>[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"},{name:"Tag 6",type:"danger"},{name:"Tag 7",type:"danger"},{name:"Tag 8",type:"danger"},{name:"Tag 9",type:"danger"},{name:"Tag 10",type:"danger"},{name:"Tag 11",type:"danger"},{name:"Tag 3",type:"info"},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 2",type:"success"}];const le=R({setup(){const t=I({lists:B(15)});return x({},E(t))}}),_e={class:"flex-row mr-2 w-full"},re={class:"ml-2 w-full"},de={class:"flex-row between"},ie={class:"m-0"},pe={class:"text-sm text-secondary"},me={class:"text-df text-secondary text-overflow-2"};function ue(t,s,n,f,T,k){const i=V,_=w,p=$;return l(),u(p,null,{default:a(()=>[(l(!0),g(y,null,h(t.lists,(d,c)=>(l(),u(_,{span:24,key:c,class:"item flex-row between"},{default:a(()=>[e("div",_e,[e("div",null,[o(i,{size:45,src:d.image},null,8,["src"])]),e("div",re,[e("div",de,[e("h4",ie,r(d.title),1),e("div",pe,r(d.time),1)]),e("div",me,r(d.desc),1)])])]),_:2},1024))),128))]),_:1})}var fe=b(le,[["render",ue],["__scopeId","data-v-4ab7fe45"]]);const ve=R({setup(){const t=I({lists:B(32)});return x({},E(t))}}),ge={class:"flex-row"},xe={class:"flex-col between w-full m-2"},he={class:"m-0 text-overflow-1"},ye={class:"flex-row between text-xs text-secondary"},we={class:"text-overflow-1"},$e={class:"text-overflow-1"};function be(t,s,n,f,T,k){const i=J,_=U,p=w,d=$;return l(),u(d,{gutter:10},{default:a(()=>[(l(!0),g(y,null,h(t.lists,(c,v)=>(l(),u(p,{key:v,xs:24,sm:12,md:12,lg:8,xl:8,class:"py-1"},{default:a(()=>[o(_,{"body-style":{padding:"10px"},shadow:"none"},{default:a(()=>[e("div",null,[e("div",ge,[o(i,{class:"image",src:c.image,"preview-src-list":[c.image]},null,8,["src","preview-src-list"]),e("div",xe,[e("h4",he,r(c.title),1),e("div",ye,[e("div",we,r(c.time),1),e("div",$e,r(c.name),1)])])])])]),_:2},1024)]),_:2},1024))),128))]),_:1})}var Te=b(ve,[["render",be],["__scopeId","data-v-ac51e31c"]]);const ke={name:"UserInfo",setup(){const{getUser:t}=ae(),s=I({tags:ce(),teams:ne()});return F(x({},E(s)),{getUser:t})}},S=t=>(X("data-v-5ad80bf0"),t=t(),Y(),t),je={class:"info flex-col center align-center"},Ie={class:"text-xl text-primary text-bo"},Ee=S(()=>e("div",{class:"text-sm text-secondary"},"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1)),Ue={class:"task-wrap flex-row between align-center"},ze=S(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"90")],-1)),Se=S(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"66")],-1)),Ce=S(()=>e("div",{class:"task-item flex-col"},[e("span",{class:"label"},"\u5F85\u529E"),e("span",{class:"value"},"80")],-1)),De=A("\u6807\u7B7E"),Re={class:"tag"},Ve=A("\u56E2\u961F"),Ae={class:"team"},Be={class:"text-df ml-1"};function Pe(t,s,n,f,T,k){const i=V,_=Z,p=ee,d=O,c=w,v=$,j=U;return l(),u(j,{shadow:"none"},{default:a(()=>[e("div",je,[e("div",null,[o(i,{src:f.getUser.avatar,size:100},null,8,["src"])]),e("div",Ie,r(f.getUser.nickname),1),Ee,e("div",Ue,[ze,o(_,{direction:"vertical"}),Se,o(_,{direction:"vertical"}),Ce])]),o(_,{"content-position":"left"},{default:a(()=>[De]),_:1}),e("div",Re,[o(d,{wrap:""},{default:a(()=>[(l(!0),g(y,null,h(t.tags,m=>(l(),u(p,{key:m.name,type:m.type},{default:a(()=>[A(r(m.name),1)]),_:2},1032,["type"]))),128))]),_:1})]),o(_,{"content-position":"left"},{default:a(()=>[Ve]),_:1}),e("div",Ae,[o(v,{gutter:10},{default:a(()=>[(l(!0),g(y,null,h(t.teams,(m,C)=>(l(),u(c,{span:12,key:C,style:{"padding-bottom":"5px","padding-top":"5px"}},{default:a(()=>[e("i",{class:Q([m.icon,"text-xl"]),style:W({color:m.color})},null,6),e("span",Be,r(m.title),1)]),_:2},1024))),128))]),_:1})])]),_:1})}var Ne=b(ke,[["render",Pe],["__scopeId","data-v-5ad80bf0"]]);const Fe=R({setup(){const t=I({projects:B(21)});return x({},E(t))}}),Le={class:"flex-row mb-1"},Me={class:"ml-2"},qe={class:"text-df h-3 text-secondary text-overflow-3 my-1"},Ge={class:"flex-row between text-secondary"};function Ke(t,s,n,f,T,k){const i=V,_=U,p=w,d=$;return l(),u(d,null,{default:a(()=>[(l(!0),g(y,null,h(t.projects,(c,v)=>(l(),u(p,{xs:24,sm:12,md:12,lg:8,xl:8,key:v},{default:a(()=>[o(_,{class:"card",shadow:"hover"},{default:a(()=>[e("div",Le,[o(i,{src:c.image,size:24},null,8,["src"]),e("span",Me,r(c.title),1)]),e("div",qe,r(c.desc),1),e("div",Ge,[e("span",null,r(c.name),1),e("span",null,r(c.time),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})}var He=b(Fe,[["render",Ke]]);const Je={name:"index",components:{Article:fe,UserInfo:Ne,Project:He,Task:Te},setup(){return{active:te("article")}}},Oe={class:"mx-2"};function Qe(t,s,n,f,T,k){const i=z("Article"),_=se,p=z("Task"),d=z("Project"),c=oe,v=U,j=w,m=z("UserInfo"),C=$;return l(),g("div",Oe,[o(C,{gutter:8},{default:a(()=>[o(j,{xs:24,sm:24,md:24,lg:16,xl:18,class:"mt-2"},{default:a(()=>[o(v,{shadow:"none"},{default:a(()=>[o(c,{modelValue:f.active,"onUpdate:modelValue":s[0]||(s[0]=L=>f.active=L)},{default:a(()=>[o(_,{label:"\u6587\u7AE0",name:"article",lazy:!0},{default:a(()=>[o(i)]),_:1}),o(_,{label:"\u4EFB\u52A1",name:"task",lazy:!0},{default:a(()=>[o(p)]),_:1}),o(_,{label:"\u9879\u76EE",name:"project",lazy:!0},{default:a(()=>[o(d)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(j,{xs:24,sm:24,md:24,lg:8,xl:6,class:"mt-2"},{default:a(()=>[o(m)]),_:1})]),_:1})])}var nt=b(Je,[["render",Qe]]);export{nt as default};
