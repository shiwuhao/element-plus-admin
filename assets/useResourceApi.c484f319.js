var M=Object.defineProperty,E=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(t,a,s)=>a in t?M(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,y=(t,a)=>{for(var s in a||(a={}))F.call(a,s)&&S(t,s,a[s]);if(I)for(var s of I(a))J.call(a,s)&&S(t,s,a[s]);return t},L=(t,a)=>E(t,j(a));import{S as Q,o as G,c as H,h as K,w as R,a as _,ap as w,x as Y,t as Z,Y as U,e as d,aK as W,at as X,z as ee,b as te,r as h,y as ae,Z as se,B as oe,aL as ne}from"./vendor.55f737cb.js";import{_ as re,u as ie,s as u,l as le}from"./index.2338912f.js";const ce={modelValue:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},beforeClose:{type:Function},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},customClass:{type:String},destroyOnClose:{type:Boolean,default:!1},modal:{type:Boolean,default:!0},direction:{type:String,default:"rtl"},size:{type:[String,Number],default:"50%"},title:{type:String},withHeader:{type:Boolean,default:!0},modalClass:{type:String},zIndex:{type:Number}};const de={name:"BasicDrawer",props:ce,setup(t,{emit:a}){const{getIsMobile:s}=ie();return{getIsMobile:s,drawerClose:()=>a("update:modelValue",!1)}}},ue={class:"drawer-container"},fe={class:"drawer__title"},pe={class:"drawer__content"},ge={class:"drawer__footer"};function me(t,a,s,r,p,g){const l=Q;return G(),H("div",ue,[K(l,U(t.$props,{size:r.getIsMobile?"100%":t.$props.size,onClose:r.drawerClose}),{title:R(()=>[_("div",fe,[w(t.$slots,"title",{},()=>[Y(Z(t.$props.title),1)],!0)])]),default:R(()=>[_("div",pe,[w(t.$slots,"default",{},void 0,!0)]),_("div",ge,[w(t.$slots,"footer",{},void 0,!0)])]),_:3},16,["size","onClose"])])}var he=re(de,[["render",me],["__scopeId","data-v-b2bb96d8"]]);function Ce(){const t=d(()=>u.getters.getConfigs.groups),a=d(()=>u.getters.getConfigs.types),s=d(()=>u.getters.getConfigs.components),r=d(()=>u.getters.getConfigs.permissions),p=d(()=>{const f=le(W(u.getters.getConfigs.permissions));return[{id:0,pid:0,title:"\u6839\u8282\u70B9",children:f}]}),g=d(()=>u.getters.getConfigs.roles),l=X(ee().getRoutes().filter(f=>f.meta.menu));return{getGroups:t,getTypes:a,getComponents:s,getPermissions:r,getTreePermissions:p,getRoles:g,getPermissionRoutes:l}}function ve({listApi:t,itemApi:a,updateApi:s,storeApi:r,deleteApi:p,query:g={},item:l={},paginate:f={},uniqueId:N="id",refreshAfterConfirm:P=!0}){const m=h(null),T=h(null),$=h(null),z=JSON.parse(JSON.stringify(l)),e=ae({item:l,query:g,lists:[],dialog:!1,paginate:y({layout:"prev, pager, next, ->, total"},f),listLoading:!1,itemLoading:!1,confirmLoading:!1,refreshAfterConfirm:P}),D=ne(async()=>{await i()},1e3),V=async()=>{await D()},i=async()=>{e.listLoading=!0;const{data:{data:o,meta:n}}=await t(e.query).then(c=>c);e.lists=o,n&&(e.paginate.pageSize=n.per_page,e.paginate.total=n.total,e.paginate.pageCount=n.last_page),e.listLoading=!1},C=async o=>{e.itemLoading=!0;const{data:{data:n}}=await a(o).then(c=>c);e.item=n,e.itemLoading=!1},k=()=>{e.dialog=!0},x=async o=>{e.dialog=!0,await C(o)},A=async o=>(await p(o).then(n=>n),e.refreshAfterConfirm&&await i(),Promise.resolve()),v=async()=>{await s(e.item).then(o=>o),e.refreshAfterConfirm&&await i()},B=async()=>{await r(e.item).then(o=>o),e.refreshAfterConfirm&&await i()},O=()=>new Promise(o=>{m.value.validate(async n=>{if(n){try{e.confirmLoading=!0;const{[N]:c}=e.item;c?await v():await B(),b(),e.confirmLoading=!1}catch{e.confirmLoading=!1}o()}})}),b=()=>{e.item=z,e.dialog=!1,se(()=>m.value.clearValidate()).then(o=>o)},q=async o=>{e.query.page=o,await i()};return oe(async()=>{await i()}),L(y({},te(e)),{formRef:m,queryRef:T,tableRef:$,getList:i,getQuery:V,getItem:C,addItem:k,editItem:x,updateItem:v,storeItem:B,deleteItem:A,confirmItem:O,cancelItem:b,changePage:q})}export{he as _,ve as a,Ce as u};
