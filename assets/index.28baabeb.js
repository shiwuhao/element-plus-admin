import{P as y}from"./PageWrapper.53968525.js";import{s as a,az as u,r as d,o as i,j as C,w as n,b as r,a as s,c as m,v as f,h as l,p as x,e as g}from"./vendor.489a9f8e.js";import{_ as b}from"./index.78e35457.js";const O={name:"index",components:{PageWrapper:y},setup(){const e=a(!1),o=a(null);u(o,p=>e.value=!1);const c=a(!1),t=a(null);return u(t,p=>c.value=!1,{event:"mousedown"}),{modal:e,modalRef:o,dropdown:c,dropdownRef:t}}},V=e=>(x("data-v-64105a0c"),e=e(),g(),e),j=l(" \u4F7F\u7528VueUse onClickOutside "),B=l("\u67E5\u770B"),I=l(" Open Modal "),N={class:"relative inline-block mt10"},R=l(" Open Dropdown "),P={key:0,ref:"dropdownRef",class:"dropdown-inner"},S={key:0,ref:"modalRef",class:"modal"},$=V(()=>s("div",{class:"inner"},[s("p",{class:"heading"}," Demo Modal "),s("p",null,"Click outside of the modal to close it.")],-1)),D=[$];function M(e,o,c,t,p,W){const v=d("el-link"),_=d("el-button"),h=d("el-card"),k=d("page-wrapper");return i(),C(k,{title:e.$route.meta.title},{content:n(()=>[j,r(v,{type:"primary",href:"https://vueuse.org/core/onClickOutside/",target:"_blank"},{default:n(()=>[B]),_:1})]),default:n(()=>[r(h,{shadow:"none"},{default:n(()=>[s("div",null,[r(_,{type:"primary",onClick:o[0]||(o[0]=w=>t.modal=!0)},{default:n(()=>[I]),_:1})]),s("div",N,[r(_,{type:"primary",onClick:o[1]||(o[1]=w=>t.dropdown=!0)},{default:n(()=>[R]),_:1}),t.dropdown?(i(),m("div",P," Click outside of the dropdown to close it. ",512)):f("",!0)]),t.modal?(i(),m("div",S,D,512)):f("",!0)]),_:1})]),_:1},8,["title"])}var U=b(O,[["render",M],["__scopeId","data-v-64105a0c"]]);export{U as default};
