function t(){return[{prop:"id",label:"ID",minWidth:"100"},{prop:"name",label:"\u59D3\u540D",minWidth:"180"},{prop:"age",label:"\u5E74\u9F84",minWidth:"80"},{prop:"no",label:"\u7F16\u53F7",minWidth:"100"},{prop:"address",label:"\u5730\u5740",minWidth:"280"},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:"150"},{prop:"updated_at",label:"\u66F4\u65B0\u65F6\u95F4",minWidth:"200"},{slot:"action",label:"\u64CD\u4F5C",minWidth:"200"}]}function n(){return[{prop:"id",label:"ID",minWidth:"100"},{prop:"name",slot:"name",label:"\u81EA\u5B9A\u4E49:\u59D3\u540D",minWidth:"180"},{prop:"age",label:"\u5E74\u9F84",minWidth:"80"},{prop:"no",label:"\u7F16\u53F7",minWidth:"100"},{prop:"address",label:"\u5730\u5740",minWidth:"280"},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:"150"},{prop:"updated_at",label:"\u66F4\u65B0\u65F6\u95F4",minWidth:"200"},{slot:"action",label:"\u81EA\u5B9A\u4E49:\u64CD\u4F5C",minWidth:"200"}]}function o(){const a=[];for(let e=0;e<15;e++)a.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()});return a}function i(){const a=[];for(let e=0;e<15;e++)a.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString(),children:[{id:`l2-${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()},{id:`l2-${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()}]});return a}export{o as a,i as b,n as c,t as g};
