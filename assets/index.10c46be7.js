var O=Object.defineProperty;var j=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(a,n,l)=>n in a?O(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,A=(a,n)=>{for(var l in n||(n={}))G.call(n,l)&&B(a,l,n[l]);if(j)for(var l of j(n))P.call(n,l)&&B(a,l,n[l]);return a};import{o as u,f as b,w as e,h as t,a as s,x as r,bo as U,a2 as I,bp as M,B as R,aM as $,bu as W,b1 as w,at as T,b as C,c as F,G as J,t as E,F as q,aB as L,bv as H,U as v,bl as N,ay as Q,d as V}from"./vendor.55f737cb.js";/* empty css               */import{_ as d}from"./BasicCard.157c5593.js";/* empty css                             */import{_ as h}from"./index.3250e07d.js";import"./Form.c0c78dc0.js";import{u as y}from"./useECharts.57d9d8cb.js";import{_ as g}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.9bfd4450.js";/* empty css                *//* empty css                */import"../../../../at.alicdn.com/t/font_2915553_2xnkr1mdevd.js";import"../../../../at.alicdn.com/t/font_2915337_b0wn8zcpm25.js";import"../../../../at.alicdn.com/t/font_1804572_162pxjij64s.js";/* empty css                     *//* empty css                 *//* empty css                          *//* empty css                       *//* empty css                        */const z={name:"ServerStatus",components:{BasicCard:d}},X=s("i",{class:"el-icon-menu"},null,-1),K=r(" \u7CFB\u7EDF "),Y=r(" CentOS 8.2.2004 x86_64(Py3.7.8) "),Z=s("i",{class:"el-icon-mobile-phone"},null,-1),ee=r(" \u5185\u5B58 "),te=r(" 16GB "),se=s("i",{class:"el-icon-location-outline"},null,-1),ae=r(" \u786C\u76D8 "),oe=r(" 20TB "),ne=s("i",{class:"el-icon-tickets"},null,-1),le=r(" CPU "),ce=r("16\u6838\u5FC3"),ie=s("i",{class:"el-icon-office-building"},null,-1),re=r(" \u5E26\u5BBD "),de=r(" 100MB ");function _e(a,n,l,p,m,f){const o=U,i=I,c=M,_=d;return u(),b(_,{title:"System Info"},{default:e(()=>[t(c,{class:"mb-2",column:1,border:""},{default:e(()=>[t(o,null,{label:e(()=>[X,K]),default:e(()=>[Y]),_:1}),t(o,null,{label:e(()=>[Z,ee]),default:e(()=>[te]),_:1}),t(o,null,{label:e(()=>[se,ae]),default:e(()=>[oe]),_:1}),t(o,null,{label:e(()=>[ne,le]),default:e(()=>[t(i,{size:"small"},{default:e(()=>[ce]),_:1})]),_:1}),t(o,null,{label:e(()=>[ie,re]),default:e(()=>[de]),_:1})]),_:1})]),_:1})}var ue=h(z,[["render",_e]]);const pe=()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]}],yAxis:[{type:"value"}],series:[{name:"MEMORY USAGE",type:"bar",emphasis:{focus:"series"},data:[70,80,77,62,95,10,20,95,10,20,44,10,20,95]},{name:"CPU USAGE",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[50,70,35,60,100,33,58,80,77,62,95,10,33,80]}]}),k=()=>({tooltip:{},series:[{type:"pie",radius:["60%","100%"],label:{show:!1},data:[{value:1048,name:"wechat"},{value:735,name:"H5"},{value:580,name:"App"}]}]}),me=()=>({tooltip:{trigger:"axis"},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]}]}),fe={name:"ServerStatus",components:{BasicCard:d},setup(){const{elRef:a,setOptions:n}=y(),{elRef:l,setOptions:p}=y(),{elRef:m,setOptions:f}=y();return R(()=>{n(pe()),p(k()),f(k())}),{elRef:a,elRef2:l,elRef3:m}}},be={ref:"elRef",style:{height:"300px",width:"100%"}},he={ref:"elRef2",style:{height:"100px",width:"100%"}},Se=s("div",{class:"text-xs text-secondary"},"DISK USAGE",-1),xe={class:"mt-1"},ve=s("span",null,"20GB / 256GB",-1),$e=s("div",{class:"text-sm text-secondary mt-1"},[s("div",{class:"flex-row between"},[s("span",null,"/dev/disk1"),s("span",null,"19.56GB")]),s("div",{class:"flex-row between"},[s("span",null,"/dev/disk2"),s("span",null,"23.56GB")])],-1),we=s("div",{class:"mt-2 text-xs text-secondary"},"Last updated 1 min ago",-1),ye={ref:"elRef3",style:{height:"100px",width:"100%"}},ge=s("div",{class:"text-xs text-secondary"},"BANDWIDTH",-1),Ae={class:"mt-1"},je=s("span",null,"83GB / 10TB",-1),Be=s("div",{class:"text-sm text-secondary mt-1"},[s("div",{class:"flex-row between"},[s("span",null,"HTTP"),s("span",null,"35.47GB")]),s("div",{class:"flex-row between"},[s("span",null,"FTP"),s("span",null,"12.25GB")])],-1),Re=s("div",{class:"mt-2 text-xs text-secondary"},"Last updated 1 min ago",-1);function Te(a,n,l,p,m,f){const o=$,i=W,c=w,_=d;return u(),b(_,{title:"Server Status"},{default:e(()=>[t(c,null,{default:e(()=>[t(o,{xs:24},{default:e(()=>[s("div",be,null,512)]),_:1}),t(o,{span:12,xs:24,class:"mt-2"},{default:e(()=>[t(c,{gutter:10},{default:e(()=>[t(o,{span:8,xs:6},{default:e(()=>[s("div",he,null,512)]),_:1}),t(o,{span:16,xs:18},{default:e(()=>[Se,s("div",xe,[ve,t(i,{class:"mt-2","text-inside":!0,"stroke-width":5,percentage:7})]),$e,we]),_:1})]),_:1})]),_:1}),t(o,{span:12,xs:24,class:"mt-2"},{default:e(()=>[t(c,{gutter:10},{default:e(()=>[t(o,{span:8,xs:6},{default:e(()=>[s("div",ye,null,512)]),_:1}),t(o,{span:16,xs:18},{default:e(()=>[ge,s("div",Ae,[je,t(i,{class:"mt-2","text-inside":!0,"stroke-width":5,percentage:20})]),Be,Re]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var Ce=h(fe,[["render",Te]]);const Fe={name:"ServerStatus",components:{BasicCard:d,BasicTable:g},setup(){const a=T({tableColumn:[{prop:"queue",label:"Queue",minWidth:100},{prop:"processes",label:"Processes",minWidth:80},{prop:"jobs",label:"Jobs",minWidth:100},{prop:"wait",label:"Wait",minWidth:120}],tableData:[{queue:"default",processes:"4",jobs:1e3,wait:"A Few Seconds"},{queue:"hot",processes:"5",jobs:5e3,wait:"A Few Seconds"},{queue:"promotion",processes:"6",jobs:1e3,wait:"A Few Seconds"},{queue:"first",processes:"8",jobs:2e3,wait:"A Few Seconds"},{queue:"second",processes:"8",jobs:2e3,wait:"A Few Seconds"}],queueStatus:[{label:"JOBS PER MINUTE",value:117},{label:"JOBS PAST HOUR",value:"5,808"},{label:"FAILED JOBS",value:"701"},{label:"STATUS",value:"Active"},{label:"TOTAL PROCESSES",value:"14"},{label:"MAX WAIT TIME",value:"--"},{label:"MAX RUNTIME",value:"First"},{label:"MAX THROUGHPUT",value:"First"}]});return A({},C(a))}},Ee={class:"flex row-center col-center"},ke={class:"text-sm text-secondary text-overflow"},De={class:"text-xl"};function Oe(a,n,l,p,m,f){const o=L,i=$,c=w,_=g,S=d;return u(),b(S,{title:"Queue Status"},{default:e(()=>[t(c,{gutter:10},{default:e(()=>[t(i,{span:24,class:"mb-2"},{default:e(()=>[t(c,null,{default:e(()=>[(u(!0),F(q,null,J(a.queueStatus,(x,D)=>(u(),b(i,{xs:12,sm:12,md:8,lg:8,xl:6,key:D},{default:e(()=>[t(o,{class:"card",shadow:"hover"},{default:e(()=>[s("div",Ee,[s("span",ke,E(x.label),1),s("span",De,E(x.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(i,{span:24},{default:e(()=>[t(_,{columns:a.tableColumn,data:a.tableData},null,8,["columns","data"])]),_:1})]),_:1})]),_:1})}var Ge=h(Fe,[["render",Oe]]);const Pe={name:"FailedJobs",components:{BasicCard:d,BasicTable:g,Refresh:H},setup(){const a=T({tableColumn:[{prop:"job",label:"Job",minWidth:90},{prop:"runtime",label:"Runtime",minWidth:70},{prop:"failed_at",label:"Failed At",minWidth:110},{prop:"action",label:"Action",slot:"action",minWidth:80}],tableData:[{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"CallTask",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendPush",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"CallTask",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendPush",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"}]});return A({},C(a))}};function Ue(a,n,l,p,m,f){const o=v("Refresh"),i=N,c=Q,_=g,S=d;return u(),b(S,{title:"Failed Jobs"},{default:e(()=>[t(_,{columns:a.tableColumn,data:a.tableData,size:"small"},{action:e(x=>[t(c,{type:"primary"},{default:e(()=>[t(i,{size:14},{default:e(()=>[t(o)]),_:1})]),_:1})]),_:1},8,["columns","data"])]),_:1})}var Ie=h(Pe,[["render",Ue]]);const Me={name:"ServerStatus",components:{BasicCard:d},setup(){const{elRef:a,setOptions:n}=y();return R(()=>{n(me())}),{elRef:a}}},We={ref:"elRef",style:{height:"310px",width:"100%"}};function Je(a,n,l,p,m,f){const o=$,i=w,c=d;return u(),b(c,{title:"Throughput"},{default:e(()=>[t(i,null,{default:e(()=>[t(o,{xs:24,class:"mb-2"},{default:e(()=>[s("div",We,null,512)]),_:1})]),_:1})]),_:1})}var qe=h(Me,[["render",Je]]);const Le=V({components:{ServerStatus:Ce,QueueStatus:Ge,FailedJobs:Ie,Throughput:qe,Information:ue}}),He={class:"m-2"};function Ne(a,n,l,p,m,f){const o=v("ServerStatus"),i=v("QueueStatus"),c=$,_=v("Information"),S=v("FailedJobs"),x=w;return u(),F("div",He,[t(x,{gutter:10},{default:e(()=>[t(c,{xs:24,sm:24,md:24,lg:16,xl:16,class:"mb-2"},{default:e(()=>[t(o,{class:"mb-2"}),t(i,{class:"mb-2"})]),_:1}),t(c,{xs:24,sm:24,md:24,lg:8,xl:8,class:"mb-2"},{default:e(()=>[t(_,{class:"mb-2"}),t(S,{class:"mb-2"})]),_:1})]),_:1})])}var ut=h(Le,[["render",Ne]]);export{ut as default};
