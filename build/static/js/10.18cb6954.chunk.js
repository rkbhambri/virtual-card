(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(20),o=t(21),r=t(31),p=t(167),s=t(168),l=t(139),u=t(178),m=t(174),d=t(175),f=t(173),b=t(177),E=t(159);n.default=Object(c.b)(function(e){return{application:e.dashboard.application,profilingState:e.dashboard.profilingState}},function(e){return{onGetUserApplication:function(){return e(o.l())},onCreateApplication:function(){return e(o.c())},onUpdateInspiration:function(n,t,a){return e(o.u(n,t,a))},onUpdateBizCanvas:function(n,t){return e(o.s(n,t))},onUpdateFinance:function(n,t){return e(o.t(n,t))}}})(function(e){Object(a.useEffect)(function(){e.onGetUserApplication()},[]);return i.a.createElement("div",{className:"application ml-3"},i.a.createElement(p.a,{style:{justifyContent:"center",alignItems:"center",maxWidth:"100%"}},i.a.createElement(s.a,{className:"application-data mb-2 mt-3 ml-2",md:6,lg:4,sm:8,xs:12},i.a.createElement(l.a,{body:!0,style:{minHeight:"300px"},className:"p-2"},function(n){if("application"===n.userAction){var t=Object(E.a)(e.application)?{}:e.application.currentState.name;return i.a.createElement(i.a.Fragment,null,"inspiration"===t&&i.a.createElement(u.a,{updateInspiration:function(n){return function(n){e.onUpdateInspiration(n,e.application.id,e.profilingState.assessmentCompleted)}(n)}}),"bizcanvas"===t&&i.a.createElement(m.a,{updateBizCanvas:function(n){return function(n){e.onUpdateBizCanvas(n,e.application.id)}(n)}}),"finance"===t&&i.a.createElement(d.a,{updateFinance:function(n){return function(n){e.onUpdateFinance(n,e.application.id)}(n)}}),("inspirationReview"===t||"bizcanvasReview"===t||"financeReview"===t)&&i.a.createElement(b.a,{message:f.b}),"completed"===t&&i.a.createElement(b.a,{message:f.a,completed:"completed"===t}))}return"assessmentNeeded"!==n.userAction||n.assessmentCompleted?"beginApplication"===n.userAction?i.a.createElement(r.a,{to:"/begin-application"}):void 0:i.a.createElement(r.a,{to:"/assessment"})}(e.profilingState)))))})}}]);