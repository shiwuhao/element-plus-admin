var G=Object.defineProperty,R=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(e,t,s)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&k(e,s,t[s]);if($)for(var s of $(t))D.call(t,s)&&k(e,s,t[s]);return e},B=(e,t)=>R(e,V(t));import{$ as C,s as A,a6 as j,B as y,r as n,o as u,j as _,w as a,c as F,i as N,b as o,h as O,t as T,a as g,a1 as E,F as M,a0 as P,E as z}from"./vendor.b8da4354.js";import{u as b}from"./useECharts.a20b1275.js";import"./BasicCard.vue_vue&type=style&index=0&scoped=true&lang.d0e75d9b.js";import{B as w}from"./BasicCard.f6cd5790.js";import{_ as f}from"./index.e8421a20.js";import{B as W}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.0576a7c1.js";import"./BasicForm.20f12b09.js";import"./BasicUpload.2c5d3117.js";const I=()=>({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},legend:{data:["Show","Click","Visit","Inquiry","Order","Order2","Order3","Order4"]},series:[{name:"Funnel",type:"funnel",left:"0%",top:60,bottom:10,width:"100%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:80,name:"Visit2"},{value:70,name:"Visit"},{value:60,name:"Inquiry"},{value:50,name:"Order"},{value:40,name:"Click"},{value:30,name:"Show"},{value:20,name:"Order2"},{value:10,name:"Order3"}]}]}),U=()=>({angleAxis:{},radiusAxis:{type:"category",data:["Mon","Tue","Wed","Thu"],z:10},polar:{},series:[{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"A",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[2,4,6,8],coordinateSystem:"polar",name:"B",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"C",stack:"a",emphasis:{focus:"series"}}],legend:{show:!0,data:["A","B","C"]}}),q=e=>({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new e.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new e.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 221, 255)"},{offset:1,color:"rgba(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new e.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(55, 162, 255)"},{offset:1,color:"rgba(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190]}]}),H=()=>[{title:"\u8BBF\u95EE\u91CF",notice:"\u6700\u8FD1\u4E00\u5468\u8BBF\u95EE\u91CF",description:"\u6BD4\u4E0A\u5468\u589E\u52A030%",value:"4.2K",chart:"bar",chartStyle:{width:"100%",height:"50px"},chartOption:{tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],show:!1},yAxis:{type:"value",show:!1},series:[{data:[30,52,30,20,30,45,30],type:"bar"}]}},{title:"\u9500\u552E\u989D",notice:"\u6700\u8FD1\u4E00\u5468\u9500\u552E\u989D",description:"\u6BD4\u4E0A\u5468\u589E\u52A020%",value:"\uFFE512640",chartStyle:{width:"100%",height:"50px"},chartOption:{tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],show:!1},yAxis:{type:"value",show:!1},series:[{data:[30,52,30,20,30,45,30],type:"line"}]}},{title:"\u7528\u6237\u589E\u957F",notice:"\u6700\u8FD1\u4E00\u5468\u7528\u6237\u589E\u957F\u91CF",description:"45.5%\u6765\u81EAfacebook",value:"44150",chartStyle:{width:"100%",height:"50px"},chartOption:{tooltip:{},series:[{type:"pie",radius:"100%",data:[{value:1048,name:"Mobile"},{value:735,name:"Username"},{value:580,name:"Email"}]}]}},{title:"\u8BA2\u5355\u91CF",notice:"\u6700\u8FD1\u4E00\u5468\u8BA2\u5355\u91CF",description:"45.5%\u6765\u81EA\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",value:"12640",chartStyle:{width:"100%",height:"50px"},chartOption:{tooltip:{},series:[{type:"pie",radius:["60%","100%"],data:[{value:1048,name:"wechat"},{value:735,name:"H5"},{value:580,name:"App"}]}]}}],K=()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Email",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Search Engine",type:"bar",data:[862,1018,964,1026,1679,1600,1570],emphasis:{focus:"series"},markLine:{lineStyle:{type:"dashed"},data:[[{type:"min"},{type:"max"}]]}}]}),Q=()=>[{label:"\u6392\u540D",prop:"rank",width:50},{label:"\u57CE\u5E02",prop:"city",showOverflowTooltip:!0,width:100},{label:"\u95E8\u5E97",prop:"title"},{label:"\u91D1\u989D",prop:"num"}],J=()=>{const e=[];for(let t=0;t<8;t++){const s={rank:t+1,title:C.Random.ctitle(5),city:C.Random.city(),num:C.Random.natural(1e5,5e5)};e.push(s)}return e};const X={name:"GrowCard",components:{BasicCard:w},setup(){const e=500,t=A(0),s=j(t,{duration:e}),c=H().map(p=>{const{elRef:m,setOptions:r}=b();return B(S({},p),{elRef:m,setOptions:r})});return y(()=>{c.forEach(p=>{p.setOptions(p.chartOption)})}),{growData:c,customNumber:s}}};function Y(e,t,s,c,p,m){const r=n("el-col"),l=n("el-row"),i=n("BasicCard");return u(),_(l,{gutter:10},{default:a(()=>[(u(!0),F(M,null,N(c.growData,(d,h)=>(u(),_(r,{xl:6,lg:6,md:12,sm:12,xs:24,key:h,class:"mb10"},{default:a(()=>[o(i,{title:d.title,notice:d.notice},{footer:a(()=>[O(T(d.description),1)]),default:a(()=>[o(l,{gutter:"10"},{default:a(()=>[o(r,{span:10},{default:a(()=>[O(T(d.value),1)]),_:2},1024),o(r,{span:14},{default:a(()=>[g("div",{ref:d.elRef,style:E(d.chartStyle)},null,4)]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","notice"])]),_:2},1024))),128))]),_:1})}var Z=f(X,[["render",Y],["__scopeId","data-v-7d742cc2"]]);const ee={name:"Sale",components:{BasicCard:w,BasicTable:W},setup(){const e=P({rankData:J(),rankColumn:Q()}),{elRef:t,setOptions:s}=b();return y(()=>{s(K())}),S({elRef:t},z(e))}},te={ref:"elRef",style:{height:"380px",width:"100%"}};function ae(e,t,s,c,p,m){const r=n("el-col"),l=n("BasicTable"),i=n("el-row");return u(),_(i,null,{default:a(()=>[o(r,{xl:16,lg:16,md:16,sm:24,xs:24},{default:a(()=>[g("div",te,null,512)]),_:1}),o(r,{xl:8,lg:8,md:8,sm:24,xs:24},{default:a(()=>[o(l,{columns:e.rankColumn,data:e.rankData,size:"small"},null,8,["columns","data"])]),_:1})]),_:1})}var oe=f(ee,[["render",ae]]);const ne={name:"VisitCard",components:{Sale:oe},setup(){return{activeName:A("first")}}};function se(e,t,s,c,p,m){const r=n("Sale"),l=n("el-tab-pane"),i=n("el-tabs"),d=n("el-card"),h=n("el-col"),x=n("el-row");return u(),_(x,{gutter:10,class:"mb10"},{default:a(()=>[o(h,{span:24},{default:a(()=>[o(d,{shadow:"none"},{default:a(()=>[o(i,{modelValue:c.activeName,"onUpdate:modelValue":t[0]||(t[0]=v=>c.activeName=v)},{default:a(()=>[o(l,{label:"\u9500\u552E\u989D",name:"first"},{default:a(()=>[o(r)]),_:1}),o(l,{label:"\u8BBF\u95EE\u91CF",name:"second"},{default:a(()=>[o(r)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}var re=f(ne,[["render",se]]);const le={name:"AreaStackGradientChart",components:{BasicCard:w},setup(){const{elRef:e,setOptions:t,echarts:s}=b();return y(()=>{t(q(s))}),{elRef:e}}},ie={ref:"elRef",style:{height:"380px",width:"100%"}};function ce(e,t,s,c,p,m){const r=n("BasicCard"),l=n("el-col"),i=n("el-row");return u(),_(i,null,{default:a(()=>[o(l,null,{default:a(()=>[o(r,{title:"\u6E10\u53D8\u5806\u53E0\u9762\u79EF\u56FE"},{default:a(()=>[g("div",ie,null,512)]),_:1})]),_:1})]),_:1})}var de=f(le,[["render",ce]]);const pe={name:"BarPolarStackChart",components:{BasicCard:w},setup(){const{elRef:e,setOptions:t}=b();return y(()=>{t(U())}),{elRef:e}}},ue={ref:"elRef",style:{height:"380px",width:"100%"}};function me(e,t,s,c,p,m){const r=n("BasicCard"),l=n("el-col"),i=n("el-row");return u(),_(i,null,{default:a(()=>[o(l,null,{default:a(()=>[o(r,{title:"\u6781\u5750\u6807\u7CFB\u4E0B\u7684\u5806\u53E0\u67F1\u72B6\u56FE"},{default:a(()=>[g("div",ue,null,512)]),_:1})]),_:1})]),_:1})}var _e=f(pe,[["render",me]]);const fe={name:"BarPolarStack",components:{BasicCard:w},setup(){const{elRef:e,setOptions:t}=b();return y(()=>{t(I())}),{elRef:e}}},he={ref:"elRef",style:{height:"380px",width:"100%"}};function ye(e,t,s,c,p,m){const r=n("BasicCard"),l=n("el-col"),i=n("el-row");return u(),_(i,null,{default:a(()=>[o(l,null,{default:a(()=>[o(r,{title:"\u6F0F\u6597\u56FE"},{default:a(()=>[g("div",he,null,512)]),_:1})]),_:1})]),_:1})}var ge=f(fe,[["render",ye]]);const be={name:"index2",components:{GrowCard:Z,VisitCard:re,AreaStackGradientChart:de,BarPolarStackChart:_e,FunnelChart:ge},setup(){return{}}},we={class:"m10"};function xe(e,t,s,c,p,m){const r=n("GrowCard"),l=n("VisitCard"),i=n("AreaStackGradientChart"),d=n("el-col"),h=n("BarPolarStackChart"),x=n("FunnelChart"),v=n("el-row");return u(),F("div",we,[o(r),o(l),o(v,{gutter:10},{default:a(()=>[o(d,{xl:8,lg:8,md:12,sm:12,xs:24,class:"mb10"},{default:a(()=>[o(i)]),_:1}),o(d,{xl:8,lg:8,md:12,sm:12,xs:24,class:"mb10"},{default:a(()=>[o(h)]),_:1}),o(d,{xl:8,lg:8,md:12,sm:12,xs:24,class:"mb10"},{default:a(()=>[o(x)]),_:1})]),_:1})])}var Te=f(be,[["render",xe]]);export{Te as default};