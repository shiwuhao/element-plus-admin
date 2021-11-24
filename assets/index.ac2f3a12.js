var C=Object.defineProperty,F=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))I.call(t,r)&&v(e,r,t[r]);return e},V=(e,t)=>F(e,$(t));import{_ as k}from"./PageWrapper.66af3ba5.js";import{r as O,y as S,b as B,o as N,f as x,w as l,a as P,h as o,x as u,aq as M,av as G,P as Q,Q as T,aO as W,aM as Z,aN as D,b1 as L,O as H,aR as J,aQ as K,aP as X,ax as Y,ay as ee,az as te}from"./vendor.55f737cb.js";/* empty css                     *//* empty css                       *//* empty css                          *//* empty css               */import{_ as oe,u as le}from"./index.2338912f.js";import"https://at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"https://at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"https://at.alicdn.com/t/font_1804572_162pxjij64s.js";const ae={components:{PageWrapper:k},setup(){const e=O(null),{getIsMobile:t}=le(),r=S({form:{name:"",region:"",date1:"",date2:"",type:[],resource:"",desc:"",delivery:""},rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}}),m={submitForm:()=>{e.value.validate(p=>{if(p)alert("submit!");else return console.log("error submit!!"),!1})},resetForm:()=>{e.value.resetFields()}};return V(d(d({},B(r)),m),{getIsMobile:t,formRef:e})}},re=P("span",{class:"text-secondary"},"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",-1),se={class:"p-2"},ne=u(" -"),ie=u("Create"),me=u("Reset");function de(e,t,r,m,p,ue){const f=M,s=G,c=Q,h=T,E=W,n=Z,j=D,_=L,w=H,i=J,R=K,g=X,q=Y,b=ee,A=te,U=k;return N(),x(U,{title:e.$route.meta.title,"content-background":"","content-full-height":""},{content:l(()=>[re]),default:l(()=>[P("div",se,[o(_,{justify:"center"},{default:l(()=>[o(n,{xs:24,sm:22,md:20,lg:16,xl:10},{default:l(()=>[o(A,{ref:"formRef",model:e.form,rules:e.rules,"label-width":"120px","label-position":m.getIsMobile?"top":"left"},{default:l(()=>[o(s,{label:"Activity name",prop:"name"},{default:l(()=>[o(f,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.form.name=a)},null,8,["modelValue"])]),_:1}),o(s,{label:"Activity zone",prop:"region"},{default:l(()=>[o(h,{modelValue:e.form.region,"onUpdate:modelValue":t[1]||(t[1]=a=>e.form.region=a),placeholder:"Activity zone",class:"w-full"},{default:l(()=>[o(c,{label:"Zone one",value:"shanghai"}),o(c,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"Activity time",required:""},{default:l(()=>[o(_,null,{default:l(()=>[o(n,{span:11},{default:l(()=>[o(s,{prop:"date1"},{default:l(()=>[o(E,{modelValue:e.form.date1,"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.date1=a),type:"date",placeholder:"Pick a date",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1}),o(n,{span:2,style:{"text-align":"center"}},{default:l(()=>[ne]),_:1}),o(n,{span:11},{default:l(()=>[o(s,{prop:"date2"},{default:l(()=>[o(j,{modelValue:e.form.date2,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.date2=a),placeholder:"Pick a time",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(s,{label:"Instant delivery",prop:"delivery"},{default:l(()=>[o(w,{modelValue:e.form.delivery,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.delivery=a)},null,8,["modelValue"])]),_:1}),o(s,{label:"Activity type",prop:"type"},{default:l(()=>[o(R,{modelValue:e.form.type,"onUpdate:modelValue":t[5]||(t[5]=a=>e.form.type=a)},{default:l(()=>[o(i,{label:"Online activities",name:"type"}),o(i,{label:"Promotion activities",name:"type"}),o(i,{label:"Offline activities",name:"type"}),o(i,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"Resources",prop:"resource"},{default:l(()=>[o(q,{modelValue:e.form.resource,"onUpdate:modelValue":t[6]||(t[6]=a=>e.form.resource=a)},{default:l(()=>[o(g,{label:"Sponsorship"}),o(g,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"Activity form",prop:"desc"},{default:l(()=>[o(f,{modelValue:e.form.desc,"onUpdate:modelValue":t[7]||(t[7]=a=>e.form.desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),o(s,null,{default:l(()=>[o(b,{type:"primary",onClick:t[8]||(t[8]=a=>e.submitForm("form"))},{default:l(()=>[ie]),_:1}),o(b,{onClick:t[9]||(t[9]=a=>e.resetForm("form"))},{default:l(()=>[me]),_:1})]),_:1})]),_:1},8,["model","rules","label-position"])]),_:1})]),_:1})])]),_:1},8,["title"])}var he=oe(ae,[["render",de]]);export{he as default};