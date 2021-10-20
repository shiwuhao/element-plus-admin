var W=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var D=(t,s,a)=>s in t?W(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,_=(t,s)=>{for(var a in s||(s={}))M.call(s,a)&&D(t,a,s[a]);if(S)for(var a of S(s))K.call(s,a)&&D(t,a,s[a]);return t},P=(t,s)=>F(t,G(s));import{s as u,A as T,l as U,an as A,g as y,r as b,D as X,o as Y,c as Z,b as H,w as v,a as C,a1 as R,i as ee,t as te,E as se,y as ae,f as m,ao as oe,$ as ne,x as re,W as ie,am as ce,z as le,ap as de}from"./vendor.43fc48c7.js";import{_ as ge,s as p,l as fe}from"./index.b91482d8.js";const ue={name:"BasicDrawer",setup(t,{emit:s}){const a=u(null),r=u(null);let l=u("");const g=()=>s("update:modelValue",!1);return T(()=>{const{height:c}=U(),{height:i}=A(a),{height:h}=A(r);l.value=y(c)-y(i)-y(h)+"px"}),{drawerClose:g,headerRef:a,footerRef:r,getScrollHeight:l}}},me={class:"drawer-container"},pe={class:"drawer__title",ref:"headerRef"},he={class:"drawer__content"},_e={class:"drawer__footer",ref:"footerRef"};function we(t,s,a,r,l,g){const c=b("el-scrollbar"),i=b("el-drawer"),h=X("loading");return Y(),Z("div",me,[H(i,ae(_(_({},t.$props),t.$attrs),{onClose:r.drawerClose}),{title:v(()=>[C("div",pe,[R(t.$slots,"title",{},()=>[ee(te(t.$attrs.title),1)],!0)],512)]),default:v(()=>[se(H(c,{height:r.getScrollHeight},{default:v(()=>[C("div",he,[R(t.$slots,"default",{},void 0,!0)])]),_:3},8,["height"]),[[h,t.$attrs.loading]]),C("div",_e,[R(t.$slots,"footer",{},void 0,!0)],512)]),_:3},16,["onClose"])])}var Re=ge(ue,[["render",we],["__scopeId","data-v-243e38fc"]]);function Le(){const t=m(()=>p.getters.getConfigs.groups),s=m(()=>p.getters.getConfigs.types),a=m(()=>p.getters.getConfigs.components),r=m(()=>p.getters.getConfigs.permissions),l=m(()=>{const i=fe(oe(p.getters.getConfigs.permissions));return[{id:0,pid:0,title:"\u6839\u8282\u70B9",children:i}]}),g=m(()=>p.getters.getConfigs.roles),c=ne(re().getRoutes().filter(i=>i.meta.menu));return{getGroups:t,getTypes:s,getComponents:a,getPermissions:r,getTreePermissions:l,getRoles:g,getPermissionRoutes:c}}function Ie({listApi:t,itemApi:s,updateApi:a,storeApi:r,deleteApi:l,query:g={},item:c={},paginate:i={},uniqueId:h="id",refreshAfterConfirm:N=!0}){const w=u(null),V=u(null),q=u(null),x=JSON.parse(JSON.stringify(c)),e=ce({item:c,query:g,lists:[],dialog:!1,paginate:_({layout:"prev, pager, next, ->, total"},i),listLoading:!1,itemLoading:!1,confirmLoading:!1,refreshAfterConfirm:N}),k=de(async()=>{await d()},1e3),z=async()=>{await k()},d=async()=>{e.listLoading=!0;const{data:{data:o,meta:n}}=await t(e.query).then(f=>f);e.lists=o,n&&(e.paginate.pageSize=n.per_page,e.paginate.total=n.total,e.paginate.pageCount=n.last_page),e.listLoading=!1},L=async o=>{e.itemLoading=!0;const{data:{data:n}}=await s(o).then(f=>f);e.item=n,e.itemLoading=!1},E=()=>{e.dialog=!0},j=async o=>{e.dialog=!0,await L(o)},J=async o=>(await l(o).then(n=>n),e.refreshAfterConfirm&&await d(),Promise.resolve()),I=async()=>{await a(e.item).then(o=>o),e.refreshAfterConfirm&&await d()},$=async()=>{await r(e.item).then(o=>o),e.refreshAfterConfirm&&await d()},O=()=>new Promise(o=>{w.value.validate(async n=>{if(n){try{e.confirmLoading=!0;const{[h]:f}=e.item;f?await I():await $(),B(),e.confirmLoading=!1}catch(f){e.confirmLoading=!1}o()}})}),B=()=>{e.item=x,e.dialog=!1,le(()=>w.value.clearValidate()).then(o=>o)},Q=async o=>{e.query.page=o,await d()};return T(async()=>{await d()}),P(_({},ie(e)),{formRef:w,queryRef:V,tableRef:q,getList:d,getQuery:z,getItem:L,addItem:E,editItem:j,updateItem:I,storeItem:$,deleteItem:J,confirmItem:O,cancelItem:B,changePage:Q})}export{Re as B,Ie as a,Le as u};
