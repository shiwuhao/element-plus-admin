import{P as x}from"./PageWrapper.e44c97a1.js";import{s,ax as u,r as d,o as i,j as y,w as n,b as r,a,c as m,v as f,h as l,p as C,e as g}from"./vendor.b8da4354.js";import{_ as b}from"./index.016aa2f2.js";const O={name:"index",components:{PageWrapper:x},setup(){const e=s(!1),o=s(null);u(o,p=>e.value=!1);const c=s(!1),t=s(null);return u(t,p=>c.value=!1,{event:"mousedown"}),{modal:e,modalRef:o,dropdown:c,dropdownRef:t}}},V=e=>(C("data-v-64105a0c"),e=e(),g(),e),j=l(" \u4F7F\u7528VueUse onClickOutside "),B=l("\u67E5\u770B"),I=l(" Open Modal "),N={class:"relative inline-block mt10"},R=l(" Open Dropdown "),P={key:0,ref:"dropdownRef",class:"dropdown-inner"},S={key:0,ref:"modalRef",class:"modal"},$=V(()=>a("div",{class:"inner"},[a("p",{class:"heading"}," Demo Modal "),a("p",null,"Click outside of the modal to close it.")],-1)),D=[$];function M(e,o,c,t,p,W){const v=d("el-link"),_=d("el-button"),h=d("el-card"),k=d("page-wrapper");return i(),y(k,{title:e.$route.meta.title},{content:n(()=>[j,r(v,{type:"primary",href:"https://vueuse.org/core/onClickOutside/",target:"_blank"},{default:n(()=>[B]),_:1})]),default:n(()=>[r(h,{shadow:"none"},{default:n(()=>[a("div",null,[r(_,{type:"primary",onClick:o[0]||(o[0]=w=>t.modal=!0)},{default:n(()=>[I]),_:1})]),a("div",N,[r(_,{type:"primary",onClick:o[1]||(o[1]=w=>t.dropdown=!0)},{default:n(()=>[R]),_:1}),t.dropdown?(i(),m("div",P," Click outside of the dropdown to close it. ",512)):f("",!0)]),t.modal?(i(),m("div",S,D,512)):f("",!0)]),_:1})]),_:1},8,["title"])}var q=b(O,[["render",M],["__scopeId","data-v-64105a0c"]]);export{q as default};
