import{_ as p}from"./PageWrapper.66af3ba5.js";import{u as m,r as g,ba as h,o as k,f as x,w as e,h as o,a as c,t as j,x as n,ay as y,aB as C}from"./vendor.55f737cb.js";/* empty css                *//* empty css                */import{_ as b}from"./index.2338912f.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const w={name:"index",components:{PageWrapper:p},setup(){const{isFullscreen:a,enter:r,exit:_,toggle:t}=m(),l=g(null),{toggle:i}=m(l);return{isFullscreen:a,enter:r,exit:_,toggle:t,elDom:l,toggleElement:i}}},v=n(" \u4F7F\u7528VueUse useFullscreen "),E=n("\u67E5\u770B\u6587\u6863"),B=n("\u8FDB\u5165\u5168\u5C4F"),F=n("\u9000\u51FA\u5168\u5C4F"),D=n("toggle\u5168\u5C4F"),V=c("div",{class:"mt-2"},null,-1),N={class:"flex-col center align-center",ref:"elDom",style:{background:"white"}},W=n("toggleElement");function P(a,r,_,t,l,i){const u=h,s=y,d=C,f=p;return k(),x(f,{title:a.$route.meta.title},{content:e(()=>[v,o(u,{type:"primary",href:"https://vueuse.org/core/useFullscreen/",target:"_blank"},{default:e(()=>[E]),_:1})]),default:e(()=>[o(d,{header:"Window",shadow:"none"},{default:e(()=>[c("p",null,"state\uFF1A"+j(t.isFullscreen),1),o(s,{type:"primary",onClick:t.enter},{default:e(()=>[B]),_:1},8,["onClick"]),o(s,{type:"danger",onClick:t.exit},{default:e(()=>[F]),_:1},8,["onClick"]),o(s,{type:"success",onClick:t.toggle},{default:e(()=>[D]),_:1},8,["onClick"])]),_:1}),V,o(d,{header:"Dom",shadow:"none"},{default:e(()=>[c("div",N,[o(s,{type:"success",onClick:t.toggleElement},{default:e(()=>[W]),_:1},8,["onClick"])],512)]),_:1})]),_:1},8,["title"])}var H=b(w,[["render",P]]);export{H as default};
