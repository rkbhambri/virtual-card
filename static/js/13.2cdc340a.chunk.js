(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{330:function(e,t,n){},485:function(e,t,n){},545:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),i=n(535),o=n(26),m=function(e){return c.a.createElement("div",{className:"question"},e.questionText)},r=n(118),l=function(e){return c.a.createElement(i.a,{className:"options mt-3"},e.options.map(function(e){return c.a.createElement(r.a,{className:"option-wrapper text-left mt-2 pt-4 pb-4",key:e.id},c.a.createElement(i.a,{className:"option",xs:10},e.optionText),c.a.createElement("span",{className:"bet-count",xs:2},"".concat(e.betCountOnOption," %")))}))},u=n(131),p=function(e){return c.a.createElement("div",{className:"details mt-4"},c.a.createElement(r.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"icon"})," ",e.contestId),c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"icon"})," ",e.entryFee)))},E=(n(540),n(317),n(547),n(330),n(485),function(e){return c.a.createElement("div",{className:"contest p-4 mt-4"},c.a.createElement(m,{questionText:e.item.questionText}),c.a.createElement(p,{contestId:e.item.contestId,entryFee:e.item.entryFee}),c.a.createElement(l,{options:e.item.options}))}),I=n(5);t.default=Object(s.b)(function(e){return{questions:e.contests.questions}},function(e){return{onGetQuestions:function(){return e(o.d())}}})(function(e){Object(I.c)("auth",{id:"01a83e40-1d6f-11ea-865f-9532913174eb",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxYTgzZTQwLTFkNmYtMTFlYS04NjVmLTk1MzI5MTMxNzRlYiIsIm5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsMTIzLmNvbSIsIm1vYmlsZSI6Ijc1MzY3ODkwMjkiLCJpYXQiOjE1NzYyMTc3ODF9.Xt_bsmdx_yTkTc6YTHIOMzrwXSbHw9xFCyA4U2coleQ"}),Object(a.useEffect)(function(){0===e.questions.length&&e.onGetQuestions()},[]);return c.a.createElement(i.a,{className:"contests pb-5 mb-5",md:12,sm:12,xs:12},c.a.createElement("br",null),c.a.createElement("h3",{className:"pl-2 text-white"},"Hi Ram krishan"),e.questions.map(function(e){return c.a.createElement(E,{item:e,key:e.id})}))})}}]);
//# sourceMappingURL=13.2cdc340a.chunk.js.map