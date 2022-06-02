"use strict";(window.webpackChunkwebsite=window.webpackChunkwebsite||[]).push([[179],{2692:function(e,n,t){t.d(n,{Z:function(){return se}});var i,r,s,a,c,u,o,l=t(77039),d=t(76313),m=(t(18820),t(7298)),f=t(87623),h=t(4637),p=m.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  height: 56px;\n  padding: 4px 24px;\n  background-color: #fff;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #e8e8e8;\n"]))),x=m.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n  color: #111;\n"]))),j=m.ZP.img(s||(s=(0,d.Z)(["\n  height: 100%;\n"]))),Z=m.ZP.div(a||(a=(0,d.Z)(["\n  width: 48px;\n  height: 36px;\n  overflow: hidden;\n  margin-right: 16px;\n"]))),g=m.ZP.a(c||(c=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 28px;\n  color: #222;\n"]))),b=function(){return(0,h.jsx)(g,{target:"_blank",href:"https://github.com/modern-js-dev/modern-js-benchmark",children:(0,h.jsx)(f.Z,{})})},v=function(){return(0,h.jsxs)(p,{className:"nav-bar",children:[(0,h.jsxs)(x,{children:[(0,h.jsx)(Z,{children:(0,h.jsx)(j,{src:"https://lf-cdn-tos.bytescm.com/obj/static/webinfra/modern-js-website/assets/images/images/modernjs-logo.svg"})}),"Modern.js Benchmark"]}),(0,h.jsx)(b,{})]})},y=t(29218),w=t(39727),S=t(51543),T="bundle-size",k="compile-speed",z=["mwa-minimal","mwa-initial","mwa-ssr","mwa-arco-pro","mwa-arco-pro-esbuild"],B=["minifiedBundleSize","gzippedBundleSize"],C=["devColdBootTime","devHotBootTime","devPluginSetupTime","devPrepareTime","buildColdBootTime","buildHotBootTime","buildPluginSetupTime","buildPrepareTime"],P=y.Z.Item,F=m.ZP.div(u||(u=(0,d.Z)(["\n  position: fixed;\n  top: 56px;\n  left: 0;\n  bottom: 0;\n  width: 260px;\n"]))),I={display:"flex",alignItems:"center",height:48,fontSize:15,marginBottom:8},N=function(e){return(0,h.jsx)(F,{children:(0,h.jsxs)(y.Z,{mode:"vertical",style:{height:"100%",padding:"16px 4px"},onClickMenuItem:e.onClickMenuItem,defaultSelectedKeys:[e.defaultSelectedKey],children:[(0,h.jsxs)(P,{style:I,children:[(0,h.jsx)(w.Z,{style:{fontSize:20}}),"Bundle Size"]},T),(0,h.jsxs)(P,{style:I,children:[(0,h.jsx)(S.Z,{style:{fontSize:20}}),"Compile Speed"]},k)]})})},M=t(99114),K=t(63205),R=t(5912),A=t(97918),D=t(63365),H=t(16330),O=t(71842),L=function(e){var n=e.metrics;return(0,h.jsx)(K.Z,{bordered:!1,style:{marginBottom:24},children:(0,h.jsxs)(A.Z,{layout:"vertical",onSubmit:e.onSubmit,children:[(0,h.jsx)(R.Z.Title,{heading:6,style:{marginTop:0},children:"Filters"}),(0,h.jsxs)(D.Z.Row,{gutter:40,children:[(0,h.jsx)(D.Z.Col,{span:8,children:(0,h.jsx)(A.Z.Item,{label:"Case",field:"caseName",initialValue:e.initialCase,style:{marginBottom:8},children:(0,h.jsx)(H.Z,{children:z.map((function(e){return(0,h.jsx)(H.Z.Option,{value:e,children:e},e)}))})})}),(0,h.jsx)(D.Z.Col,{span:8,children:(0,h.jsx)(A.Z.Item,{label:"Metrics",field:"metricsName",initialValue:n[0],style:{marginBottom:8},children:(0,h.jsx)(H.Z,{children:n.map((function(e){return(0,h.jsx)(H.Z.Option,{value:e,children:e},e)}))})})})]}),(0,h.jsx)(O.Z,{type:"primary",htmlType:"submit",style:{width:120,marginTop:10},children:"Query"})]})})},E=t(59496),V=t(44367),W=t(36834),Y=t(82173),Q=new Map,_=function(){var e=(0,Y.Z)((0,W.Z)().mark((function e(n){var t;return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Q.has(n)){e.next=2;break}return e.abrupt("return",Q.get(n));case 2:return e.next=4,fetch(n).then((function(e){return e.json()})).catch((function(){}));case 4:return t=e.sent,Q.set(n,t),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=function(){var e=(0,Y.Z)((0,W.Z)().mark((function e(){return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_("./commits-info.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,Y.Z)((0,W.Z)().mark((function e(n){var t,i;return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return t=e.sent,e.next=5,Promise.all(t.map((function(e){return _("./".concat(e.id,"/").concat(n,".json"))})));case 5:return i=e.sent,e.abrupt("return",i.map((function(e,n){return(0,V.Z)((0,V.Z)({},t[n]),{},{metrics:e})})).filter((function(e){return!!e.metrics})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=t(59061),U=t.n(J),X=function(e){return U()(e).format("YY-MM-DD HH:mm")},$=function(e,n){return e.map((function(e){return{date:"".concat(X(e.time),"\uff08").concat(e.id,"\uff09"),size:(t=e.metrics[n].total,Number((t/1e3).toFixed(2)))};var t}))},ee=function(){var e=(0,E.useRef)(null),n=(0,E.useRef)(null),t=(0,E.useState)("mwa-initial"),i=(0,l.Z)(t,2),r=i[0],s=i[1],a=(0,E.useState)(B[0]),c=(0,l.Z)(a,2),u=c[0],o=c[1];return(0,E.useEffect)((function(){G(r).then((function(t){!function(e,t,i){n.current?n.current.changeData($(e,t)):i&&(n.current=new M.Line(i,{data:$(e,t),height:400,xField:"date",yField:"size",xAxis:{label:{formatter:function(e){return e.split(" ")[0]}}},yAxis:{label:{formatter:function(e){return"".concat(e," KB")}}},point:{size:4,style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{fields:["date","size","commitId"],formatter:function(e){return{name:"Total Size",value:"".concat(e.size," KB")}}}}),n.current.render())}(t,u,e.current)}))}),[r,u]),(0,h.jsxs)("div",{style:{padding:24},children:[(0,h.jsx)(L,{metrics:B,initialCase:r,onSubmit:function(e){s(e.caseName),o(e.metricsName)}}),(0,h.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,h.jsx)(R.Z.Title,{heading:6,style:{marginTop:0},children:"Trending"}),(0,h.jsx)("div",{ref:e})]})]})},ne=function(e,n){return e.map((function(e){return{date:"".concat(X(e.time),"\uff08").concat(e.id,"\uff09"),time:(t=e.metrics[n],Number((t/1e3).toFixed(2)))};var t}))},te=function(){var e=(0,E.useRef)(null),n=(0,E.useRef)(null),t=(0,E.useState)("mwa-arco-pro"),i=(0,l.Z)(t,2),r=i[0],s=i[1],a=(0,E.useState)(C[0]),c=(0,l.Z)(a,2),u=c[0],o=c[1];return(0,E.useEffect)((function(){G(r).then((function(t){!function(e,t,i){n.current?n.current.changeData(ne(e,t)):i&&(n.current=new M.Line(i,{data:ne(e,t),height:400,xField:"date",yField:"time",xAxis:{label:{formatter:function(e){return e.split(" ")[0]}}},yAxis:{label:{formatter:function(e){return"".concat(e," s")}}},point:{size:4,style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{formatter:function(e){return{name:"Time",value:e.time+"s"}}}}),n.current.render())}(t,u,e.current)}))}),[r,u]),(0,h.jsxs)("div",{style:{padding:24},children:[(0,h.jsx)(L,{metrics:C,initialCase:r,onSubmit:function(e){s(e.caseName),o(e.metricsName)}}),(0,h.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,h.jsx)(R.Z.Title,{heading:6,style:{marginTop:0},children:"Trending"}),(0,h.jsx)("div",{ref:e})]})]})},ie=function(e){return(0,h.jsx)("div",{style:{marginLeft:260},children:function(){switch(e.menuIndex){case T:return(0,h.jsx)(ee,{});case k:return(0,h.jsx)(te,{})}return null}()})},re=m.ZP.div(o||(o=(0,d.Z)(["\n  min-height: 100vh;\n"]))),se=function(){var e=(0,E.useState)(T),n=(0,l.Z)(e,2),t=n[0],i=n[1];return(0,h.jsxs)(re,{children:[(0,h.jsx)(v,{}),(0,h.jsx)(N,{defaultSelectedKey:t,onClickMenuItem:i}),(0,h.jsx)(ie,{menuIndex:t})]})}}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[447],(function(){return n(15976),n(77410),n(90124)}));e.O()}]);
//# sourceMappingURL=main.7f1704b1.js.map