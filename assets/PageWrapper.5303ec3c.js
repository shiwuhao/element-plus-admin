import{s as r,B as u,k as p,o as i,c as d,a as t,a2 as s,h as o,t as l,v as _,n as f,a1 as g}from"./vendor.a913ed64.js";import{_ as h}from"./index.59caaf27.js";const v={name:"PageWrapper",props:{title:{type:String,default:""},subTitle:{type:String,default:""},content:{type:String,default:""},contentBackground:{type:Boolean,default:!1},contentFullHeight:{type:Boolean,default:!1}},setup(){const e=r(null);let n=r(null);return u(()=>{const{height:a}=p();n.value=a.value-e.value.offsetTop-22}),{contentRef:e,contentHeight:n}}},m={class:"page-wrapper"},y={class:"page-header"},B={class:"flex-row-justify"},S={key:0,class:"page-header-wrap"},b={class:"page-header-title"},k={class:"page-header-sub-title"},$={class:"page-header-content"};function w(e,n,a,c,H,P){return i(),d("div",m,[t("div",y,[t("div",B,[a.title?(i(),d("div",S,[t("span",b,[s(e.$slots,"title",{},()=>[o(l(a.title),1)],!0)]),t("span",k,[s(e.$slots,"sub-title",{},()=>[o(l(a.subTitle),1)],!0)])])):_("",!0),t("div",null,[s(e.$slots,"extra",{},void 0,!0)])]),t("div",$,[s(e.$slots,"content",{},()=>[o(l(a.content),1)],!0)])]),t("div",{class:f(["page-wrapper-content",{"content-bg":e.$props.contentBackground}]),ref:"contentRef",style:g({minHeight:e.$props.contentFullHeight?c.contentHeight+"px":"auto"})},[s(e.$slots,"default",{},void 0,!0)],6)])}var j=h(v,[["render",w],["__scopeId","data-v-45bc9f17"]]);export{j as P};
