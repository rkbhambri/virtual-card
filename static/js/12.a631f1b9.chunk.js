(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(e,a,t){e.exports=t.p+"static/media/user.7a21cbe9.svg"},340:function(e,a,t){e.exports=t.p+"static/media/Card-4.c402cf9f.jpg"},345:function(e,a,t){e.exports=t.p+"static/media/Card-1.48711be7.jpg"},346:function(e,a,t){e.exports=t.p+"static/media/Card-2.5442f60c.jpg"},347:function(e,a,t){e.exports=t.p+"static/media/Card-3.ba448f33.jpg"},348:function(e,a,t){e.exports=t.p+"static/media/Card-5.9896da61.jpg"},349:function(e,a,t){e.exports=t.p+"static/media/Card-6.8b9075cc.jpg"},551:function(e,a,t){},552:function(e,a,t){},571:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(326),r=t(25),s=t.n(r),m=(t(338),t(32)),i=t.n(m),d=(t(8),t(10)),o=t(93),u=t(95),p=t(24),b=t(418),E=t(556),f=t(141);function g(e){var a=e.children,t=e.className,l=e.content,n=i()("sub header",t),r=Object(o.a)(g,e),m=Object(u.a)(g,e);return c.a.createElement(m,s()({},r,{className:n}),p.a.isNil(a)?l:a)}g.handledProps=["as","children","className","content"],g.propTypes={},g.create=Object(f.d)(g,function(e){return{content:e}});var N=g;function h(e){var a=e.children,t=e.className,l=e.content,n=i()("content",t),r=Object(o.a)(h,e),m=Object(u.a)(h,e);return c.a.createElement(m,s()({},r,{className:n}),p.a.isNil(a)?l:a)}h.handledProps=["as","children","className","content"],h.propTypes={};var v=h;function x(e){var a=e.attached,t=e.block,l=e.children,n=e.className,r=e.color,m=e.content,f=e.disabled,g=e.dividing,h=e.floated,k=e.icon,w=e.image,y=e.inverted,j=e.size,O=e.sub,C=e.subheader,R=e.textAlign,S=i()("ui",r,j,Object(d.a)(t,"block"),Object(d.a)(f,"disabled"),Object(d.a)(g,"dividing"),Object(d.e)(h,"floated"),Object(d.a)(!0===k,"icon"),Object(d.a)(!0===w,"image"),Object(d.a)(y,"inverted"),Object(d.a)(O,"sub"),Object(d.b)(a,"attached"),Object(d.d)(R),"header",n),T=Object(o.a)(x,e),z=Object(u.a)(x,e);if(!p.a.isNil(l))return c.a.createElement(z,s()({},T,{className:S}),l);var D=b.a.create(k,{autoGenerateKey:!1}),I=E.a.create(w,{autoGenerateKey:!1}),M=N.create(C,{autoGenerateKey:!1});return D||I?c.a.createElement(z,s()({},T,{className:S}),D||I,(m||M)&&c.a.createElement(v,null,m,M)):c.a.createElement(z,s()({},T,{className:S}),m,M)}x.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],x.propTypes={},x.Content=v,x.Subheader=N;var k=x,w=t(100),y=t(324),j=t(332),O=t.n(j),C=t(345),R=t.n(C),S=t(346),T=t.n(S),z=t(347),D=t.n(z),I=t(340),M=t.n(I),G=t(348),K=t.n(G),P=t(349),A=t.n(P),J=t(568),q=t(566),B=t(388),F=function(e){return c.a.createElement(J.a,{basic:!0,dimmer:"blurring",open:e.isShowCardModalOpen,onClose:e.toggleShowCardModal,className:"show-card-details",id:"modal"},c.a.createElement(J.a.Content,null,c.a.createElement(J.a.Description,null,c.a.createElement("div",{className:"card mt-4",style:{borderRadius:"15px",backgroundImage:"url(".concat(e.cardToShow,")")}},c.a.createElement(n.a,{className:"text-right mb-2"},c.a.createElement(B.a,{className:"mt-3",style:{fontSize:"28px"}}),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"profile-pic"},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"60px",width:"60px"}})),c.a.createElement("div",{className:"name mt-3"},"Ram krishan"))),c.a.createElement(n.a,{className:"social-details pb-2",md:12,sm:12},c.a.createElement("div",{className:"social-icons"},c.a.createElement(q.a,{horizontal:!0},c.a.createElement(b.a,{name:"facebook official",style:{fontSize:"28px"}}),c.a.createElement(b.a,{className:"ml-2 mr-2",name:"instagram",style:{fontSize:"28px"}}),c.a.createElement(b.a,{className:"ml-2 mr-2",name:"youtube",style:{fontSize:"28px"}}),c.a.createElement(b.a,{name:"github",style:{fontSize:"28px"}})))))),c.a.createElement("br",null)))},H=(t(551),function(e){var a=Object(l.useState)({1:R.a,2:T.a,3:D.a,4:M.a,5:K.a,6:A.a}),t=Object(w.a)(a,1)[0],r=Object(l.useState)(!1),s=Object(w.a)(r,2),m=s[0],i=s[1],d=Object(l.useState)(!1),o=Object(w.a)(d,2),u=o[0],p=o[1],b=function(e){p(t[e]),i(function(e){return!e})};return c.a.createElement("div",{className:"cards pb-5 mt-3"},c.a.createElement(F,{isShowCardModalOpen:m,toggleShowCardModal:function(){return i(function(e){return!e})},cardToShow:u}),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[1],")")},onClick:function(){return b(1)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",{className:"text-center"},"Date : "),c.a.createElement("div",{className:"pt-1"},"12-04-2020")))),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[2],")")},onClick:function(){return b(2)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",null,"Date : "),c.a.createElement("div",null,"12-04-2020")))),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[3],")")},onClick:function(){return b(3)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",null,"Date : "),c.a.createElement("div",null,"12-04-2020")))),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[4],")")},onClick:function(){return b(4)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",null,"Date : "),c.a.createElement("div",null,"12-04-2020")))),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[5],")")},onClick:function(){return b(5)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",null,"Date : "),c.a.createElement("div",null,"12-04-2020")))),c.a.createElement(n.a,{className:"card-details mt-2 pb-4 pl-2 pr-2 pt-2 border",md:12,sm:12,style:{borderRadius:"15px",background:"#fff",color:"#696969",backgroundImage:"url(".concat(t[6],")")},onClick:function(){return b(6)}},c.a.createElement(y.a,null,c.a.createElement(n.a,{className:"d-flex mt-2",xs:8},c.a.createElement("img",{src:O.a,className:"rounded-circle",alt:"not available",style:{height:"50px",width:"50px"}}),c.a.createElement("div",{className:"details font-weight-bold pt-1 ml-3"},c.a.createElement("div",{className:"name"},"Ram krishan"),c.a.createElement("div",{className:"card-category pt-1 font-weight-bold"},"Travel"))),c.a.createElement(n.a,{className:"mt-2",xs:4},c.a.createElement("div",null,"Date : "),c.a.createElement("div",null,"12-04-2020")))))});t(552),a.default=function(e){return c.a.createElement(n.a,{className:"received-cards"},c.a.createElement(k,{as:"h2",className:"pt-4"},"Received Cards"),c.a.createElement(H,null))}}}]);
//# sourceMappingURL=12.a631f1b9.chunk.js.map