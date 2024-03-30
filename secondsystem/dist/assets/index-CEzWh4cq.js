import{d as P,x as N,g as h,o as k,i as z,h as s,c as a,s as _,t as v,u,a as x,r as f,e as O,k as w,w as R,y as $,b as c,F as U,p as F,j as q,_ as S,q as D}from"./index-BV_n13TT.js";import{g as j}from"./request-DB0I7XXH.js";const E={key:0},G={key:1},H=P({__name:"describePgae",props:{stock:{}},setup(r){const y=r,{stock:o}=N(y);function d(n){const e=n.slice(0,4),l=n.slice(4,6),t=n.slice(6,8),b=n.slice(8,10),m=n.slice(10,12),i=n.slice(12,14);return`${e}/${l}/${t} ${b}:${m}:${i}`}return(n,e)=>{const l=h("a-descriptions-item"),t=h("a-descriptions");return k(),z(t,{title:"股票信息",bordered:""},{default:s(()=>[a(l,{label:"名字"},{default:s(()=>[_(v(u(o).name),1)]),_:1}),a(l,{label:"股票代码"},{default:s(()=>[_(v(u(o).code),1)]),_:1}),a(l,{label:"成交量"},{default:s(()=>[_(v(u(o).transactionVolume),1)]),_:1}),a(l,{label:"外盘"},{default:s(()=>[_(v(u(o).foreignDisk),1)]),_:1}),a(l,{label:"内盘",span:2},{default:s(()=>[_(v(u(o).innerDisk),1)]),_:1}),a(l,{label:"状态",span:3},{default:s(()=>[u(o).Status?(k(),x("div",E," 股票在交易 ")):(k(),x("div",G," 股票已关闭 "))]),_:1}),a(l,{label:"涨幅"},{default:s(()=>[_(v(u(o).rise),1)]),_:1}),a(l,{label:"跌幅"},{default:s(()=>[_(v(u(o).fall),1)]),_:1}),a(l,{label:"最高"},{default:s(()=>[_(v(u(o).highest),1)]),_:1}),a(l,{label:"数据最新时间"},{default:s(()=>[_(v(d(u(o).inquireTime)),1)]),_:1})]),_:1})}}}),g=r=>(F("data-v-7c01071a"),r=r(),q(),r),J=g(()=>c("br",null,null,-1)),K={class:"detile"},L=g(()=>c("div",{class:"title"},"图表数据",-1)),M=g(()=>c("div",null,"买入卖出数据",-1)),Q=g(()=>c("div",null,"价格变化数据",-1)),W=g(()=>c("div",null,"买卖数据",-1)),X=P({__name:"detilePage",setup(r){const y=f(null),o=f(null),d=f(null),n=O(),e=w(()=>n.state.stock?(console.log("切断的数据",n.state.stock.split("~")),n.state.stock.split("~")):[]);let l=w(()=>({name:e.value[1],code:e.value[2],transactionVolume:e.value[6],foreignDisk:e.value[7],innerDisk:e.value[8],rise:e.value[31],fall:e.value[32],highest:e.value[41],Status:e.value[29],inquireTime:e.value[30]})),t=w(()=>({stockname:e.value[1],stockCode:e.value[2],newestPrice:e.value[3],yesterdayClose:e.value[4],openPrice:e.value[5],dealVolume:e.value[6],buyVolume:e.value[7],sellVolume:e.value[8],buyOnePrice:e.value[9],buyOneVolume:e.value[10],buyTwoPrice:e.value[11],buyTwoVolume:e.value[12],sellOneVolume:e.value[18],sellOnePrice:e.value[19],sellTwoVolume:e.value[20],sellTwoPrice:e.value[21],buyThreePrice:e.value[13],buyThreeVolume:e.value[14],buyFourPrice:e.value[15],buyFourVolume:e.value[16],buyFivePrice:e.value[17],buyFiveVolume:e.value[18],currentTime:e.value[30]}));R(t,(m,i)=>{console.log("stockData has changed from",i,"to",m),b()},{deep:!0});const b=()=>{$(y.value).setOption({tooltip:{trigger:"item",position:function(p){return[p[0],"10%"]},formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"交易量",type:"pie",data:[{value:t.value.buyVolume||0,name:"买入"},{value:t.value.sellVolume||0,name:"卖出"}]}]}),$(d.value).setOption({tooltip:{trigger:"axis",position:function(p){return[p[0],"10%"]}},xAxis:{type:"category",data:["买一","买二","买三","买四","买五","卖一","卖二"]},yAxis:{type:"value"},series:[{data:[t.value.buyOneVolume||0,t.value.buyTwoVolume||0,t.value.buyThreeVolume||0,t.value.buyFourVolume||0,t.value.buyFiveVolume||0,t.value.sellOneVolume||0,t.value.sellTwoVolume||0],type:"bar"}]}),$(o.value).setOption({tooltip:{trigger:"axis",position:function(p){return[p[0],"10%"]}},xAxis:{type:"category",data:["开盘价","昨日收盘价","当前价格"]},yAxis:{type:"value"},series:[{data:[t.value.openPrice||0,t.value.yesterdayClose||0,t.value.newestPrice||0],type:"line"}]})};return(m,i)=>(k(),x(U,null,[a(H,{stock:u(l)},null,8,["stock"]),J,c("div",K,[L,c("div",{id:"pie-chart",ref_key:"pieChart",ref:y,style:{width:"600px",height:"400px"}},null,512),M,c("div",{id:"line-chart",ref_key:"lineChart",ref:o,style:{width:"600px",height:"400px"}},null,512),Q,c("div",{id:"bar-chart",ref_key:"barChart",ref:d,style:{width:"600px",height:"400px"}},null,512),W])],64))}}),Y=S(X,[["__scopeId","data-v-7c01071a"]]),T=r=>(F("data-v-3f702021"),r=r(),q(),r),Z={class:"stock"},ee=T(()=>c("div",{class:"title"},"股票信息查询",-1)),te=T(()=>c("br",null,null,-1)),ae=T(()=>c("br",null,null,-1)),le="http://qt.gtimg.cn/q=",se=P({__name:"index",setup(r){const y=O(),o=[{value:"sh",label:"sh"},{value:"sz",label:"sz"}],d=f([]),n=f(""),e=f(""),l=f(""),t=async()=>{const i=await j(`${le}${l.value}`);n.value=i,console.log("拿到的股票数据",n.value),y.commit("updatestock",n.value)},b=()=>{l.value=d.value+e.value,t()};return(m,i)=>{const C=h("a-cascader"),p=h("a-col"),A=h("a-input-search"),B=h("a-row"),I=h("a-card");return k(),x("div",Z,[a(I,{class:"search"},{default:s(()=>[ee,te,c("div",null,[a(B,null,{default:s(()=>[a(p,{span:6},{default:s(()=>[a(C,{value:u(d),"onUpdate:value":i[0]||(i[0]=V=>D(d)?d.value=V:null),options:o,placeholder:"Please select"},null,8,["value"])]),_:1}),a(p,{span:16},{default:s(()=>[a(A,{value:u(e),"onUpdate:value":i[1]||(i[1]=V=>D(e)?e.value=V:null),placeholder:"输入股票代码","enter-button":"",onSearch:b},null,8,["value"])]),_:1})]),_:1})])]),_:1}),ae,a(I,{class:"detile"},{default:s(()=>[a(Y)]),_:1})])}}}),ue=S(se,[["__scopeId","data-v-3f702021"]]);export{ue as default};
