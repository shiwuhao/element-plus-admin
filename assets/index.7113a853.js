import{_ as i}from"./PageWrapper.66af3ba5.js";import{r as b,bm as j,ba as y,o as C,f as h,w as o,h as n,a as l,t as c,x as a,ay as k,aq as g,aB as V}from"./vendor.55f737cb.js";/* empty css                *//* empty css                */import{_ as v}from"./index.2338912f.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const w={name:"index",components:{PageWrapper:i},setup(){const p=b("Hello"),{text:e,copy:r,copied:t,isSupported:d}=j();return{input:p,text:e,copy:r,copied:t}}},B=a(" \u4F7F\u7528VueUse useClipboard "),E=a("\u67E5\u770B"),N=a(" Current copied: ");function P(p,e,r,t,d,S){const _=y,m=k,u=g,f=V,x=i;return C(),h(x,{title:p.$route.meta.title},{content:o(()=>[B,n(_,{type:"primary",href:"https://vueuse.org/core/useClipboard/",target:"_blank"},{default:o(()=>[E]),_:1})]),default:o(()=>[n(f,{header:"Copy",shadow:"none"},{default:o(()=>[l("p",null,[N,l("code",null,c(t.text||"none"),1)]),n(u,{modelValue:t.input,"onUpdate:modelValue":e[1]||(e[1]=s=>t.input=s)},{append:o(()=>[n(m,{type:"primary",onClick:e[0]||(e[0]=s=>t.copy(t.input))},{default:o(()=>[a(c(t.copied?"Copied!":"Copy"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title"])}var T=v(w,[["render",P]]);export{T as default};