var E=Object.defineProperty,k=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var w=(e,o,s)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,m=(e,o)=>{for(var s in o||(o={}))g.call(o,s)&&w(e,s,o[s]);if(i)for(var s of i(o))h.call(o,s)&&w(e,s,o[s]);return e},v=(e,o)=>k(e,x(o));var y=(e,o)=>{var s={};for(var t in e)g.call(e,t)&&o.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&i)for(var t of i(e))o.indexOf(t)<0&&h.call(e,t)&&(s[t]=e[t]);return s};import{y as I,m as q,z as S,b as z,aM as B,aq as C,av as R,ay as F,b1 as L,az as N,c as U,h as a,w as l,o as $,a as p,t as P,K as A,L as D,x as K}from"./vendor.55f737cb.js";/* empty css                     *//* empty css               */import{_ as M}from"./index.2338912f.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const Q={name:"Login",setup(){const e=I({title:"Element Plus Admin",form:{username:"admin",password:"password"},rules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}]},loading:!1}),{dispatch:o}=q(),{push:s,currentRoute:t}=S(),_=async()=>{try{const{access_token:n}=await o("user/login",e.form);if(n){const{query:f}=t.value,r=f,{redirect:d}=r,u=y(r,["redirect"]);await s({path:d||"/",query:m({},u)}),e.loading=!1}}catch(n){console.error(n),e.loading=!1}};return v(m({},z(e)),{login:_})}},b=e=>(A("data-v-1ebf2035"),e=e(),D(),e),T={class:"container flex-row center align-center"},G={class:"title"},H=b(()=>p("i",{class:"el-icon-user"},null,-1)),J=b(()=>p("i",{class:"el-icon-lock"},null,-1)),O=K(" Login ");function W(e,o,s,t,_,f){const r=B,n=C,d=R,u=F,j=L,V=N;return $(),U("div",T,[a(V,{ref:"loginForm",size:"large",model:e.form,rules:e.rules,class:"login-form m-3"},{default:l(()=>[a(j,null,{default:l(()=>[a(r,null,{default:l(()=>[p("h3",G,P(e.title),1)]),_:1}),a(r,null,{default:l(()=>[a(d,{prop:"username"},{default:l(()=>[a(n,{modelValue:e.form.username,"onUpdate:modelValue":o[0]||(o[0]=c=>e.form.username=c),placeholder:"Username"},{prefix:l(()=>[H]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(r,null,{default:l(()=>[a(d,{prop:"username"},{default:l(()=>[a(n,{modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=c=>e.form.password=c),placeholder:"Password","show-password":""},{prefix:l(()=>[J]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(r,null,{default:l(()=>[a(u,{class:"w-full",loading:e.loading,type:"primary",onClick:t.login},{default:l(()=>[O]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["model","rules"])])}var le=M(Q,[["render",W],["__scopeId","data-v-1ebf2035"]]);export{le as default};
