(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,a,t){e.exports=t.p+"static/media/user.7a21cbe9.svg"},164:function(e,a,t){e.exports=t.p+"static/media/Card-4.c402cf9f.jpg"},192:function(e,a,t){e.exports=t.p+"static/media/Card-1.48711be7.jpg"},193:function(e,a,t){e.exports=t.p+"static/media/Card-2.5442f60c.jpg"},194:function(e,a,t){e.exports=t.p+"static/media/Card-3.ba448f33.jpg"},195:function(e,a,t){e.exports=t.p+"static/media/Card-5.9896da61.jpg"},196:function(e,a,t){e.exports=t.p+"static/media/Card-6.8b9075cc.jpg"},497:function(e,a,t){},517:function(e,a,t){},568:function(e,a,t){"use strict";t.r(a);var n=t(41),l=t(0),r=t.n(l),c=t(19),s=t(572),i=t(24),o=t(103),m=t(104),d=t(310),u=t(556),f=t(311),E=t(498),p=t(559),b=(t(497),t(142)),g=t.n(b),y=t(192),x=t.n(y),N=t(193),C=t.n(N),h=t(194),v=t.n(h),k=t(164),j=t.n(k),w=t(195),O=t.n(w),z=t(196),D=t.n(z),S=function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),c=t[0],i=t[1],m=Object(l.useState)({1:x.a,2:C.a,3:v.a,4:j.a,5:O.a,6:D.a}),b=Object(n.a)(m,1)[0];return r.a.createElement("div",{className:"card mt-4",style:{borderRadius:"15px",backgroundImage:"url(".concat(b[e.id],")")},onClick:function(){return e.id,void i(function(e){return!e})}},r.a.createElement(o.a,{className:"text-right mb-2"},r.a.createElement(d.a,{className:"mt-3",style:{fontSize:"28px"}}),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"profile-pic"},r.a.createElement("img",{src:g.a,className:"rounded-circle",alt:"not available",style:{height:"60px",width:"60px"}})),r.a.createElement("div",{className:"name mt-3"},"KARAMJIT DAS"))),r.a.createElement(o.a,{className:"social-details pb-2",md:12,sm:12},r.a.createElement("div",{className:"social-icons"},r.a.createElement(u.a,{horizontal:!0},r.a.createElement(f.a,{name:"facebook official",style:{fontSize:"28px"}}),r.a.createElement(f.a,{className:"ml-2 mr-2",name:"instagram",style:{fontSize:"28px"}}),r.a.createElement(f.a,{className:"ml-2 mr-2",name:"youtube",style:{fontSize:"28px"}}),r.a.createElement(f.a,{name:"github",style:{fontSize:"28px"}})))),c&&r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"d-flex",style:{justifyContent:"space-between"}},r.a.createElement(f.a,{name:"facebook official",style:{fontSize:"28px"}}),r.a.createElement(E.a,{type:"text",transparent:!0,placeholder:"Enter here",className:"border",style:{color:"#fff",borderRadius:"7px"}}),r.a.createElement(p.a,{toggle:!0})),r.a.createElement("div",{className:"d-flex mt-4",style:{justifyContent:"space-between"}},r.a.createElement(f.a,{name:"instagram",style:{fontSize:"28px"}}),r.a.createElement(E.a,{type:"text",transparent:!0,placeholder:"Enter here",className:"border",style:{color:"#fff",borderRadius:"7px"}}),r.a.createElement(p.a,{toggle:!0})),r.a.createElement("div",{className:"d-flex mt-4",style:{justifyContent:"space-between"}},r.a.createElement(f.a,{name:"youtube",style:{fontSize:"28px"}}),r.a.createElement(E.a,{type:"text",transparent:!0,placeholder:"Enter here",className:"border",style:{color:"#fff",borderRadius:"7px"}}),r.a.createElement(p.a,{toggle:!0})),r.a.createElement("div",{className:"d-flex mt-4",style:{justifyContent:"space-between"}},r.a.createElement(f.a,{name:"github",style:{fontSize:"28px"}}),r.a.createElement(E.a,{type:"text",transparent:!0,placeholder:"Enter here",className:"border",style:{color:"#fff",borderRadius:"7px"}}),r.a.createElement(p.a,{toggle:!0})),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(s.a,{className:"pl-4 pr-4",size:"tiny",icon:"check",style:{color:"green",borderRadius:"8px"}}))))},A=function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement(S,{walletDetails:e.walletDetails,id:"1"}),r.a.createElement(S,{walletDetails:e.walletDetails,id:"2"}),r.a.createElement(S,{walletDetails:e.walletDetails,id:"3"}),r.a.createElement(S,{walletDetails:e.walletDetails,id:"4"}),r.a.createElement(S,{walletDetails:e.walletDetails,id:"5"}),r.a.createElement(S,{walletDetails:e.walletDetails,id:"6"}))},U=t(563),M=t(54),R=t(564),T=t(547),I=t(561),G=t(53),q="Card Name is required",J="Card Category is required",P=Object(c.b)(null,function(e){return{onAddCard:function(a){return e(i.a(a))}}})(function(e){var a=Object(l.useState)({name:"",category:"",thumbnailId:"",facebookUrl:!1,instagramUrl:!1,linkedinUrl:!1,tiktokUrl:!1,youtubeChannelUrl:!1}),t=Object(n.a)(a,2),c=t[0],i=t[1],d=Object(l.useState)({}),u=Object(n.a)(d,2),E=u[0],p=u[1],b=function(e){var a=Object(M.a)({},c);a[e]=!a[e],i(a)},y=function(){var a,t=Object(G.c)(E);Object(G.a)(c.name)&&(t.name="".concat(q)),Object(G.a)(c.category)&&(t.category="".concat(J)),p(t),a=t,0===Object.keys(a).length&&(console.log("kgsagku==",c),e.toggleAddCardModal(),e.onAddCard(c))};return r.a.createElement(R.a,null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"profile-pic"},r.a.createElement(T.a,{style:{height:"50px",width:"50px"},src:g.a,className:"rounded-circle",onError:function(e){return e.target.src=g.a},alt:"Engage"})),r.a.createElement("div",{className:"name ml-3"},r.a.createElement("h3",null,"Ram Krishan"))),r.a.createElement("br",null),r.a.createElement("div",{className:"card-name"},r.a.createElement(R.a.Input,{error:E.name,required:!0,type:"text",id:"name",fluid:!0,label:"Card Name",placeholder:"Card Name",onChange:function(e){return function(e){var a=Object(M.a)({},c);if(a.name=e,i(a),E.name){var t=Object(G.c)(E);delete t.name,p(t)}}(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"card-type"},r.a.createElement("h5",null,"Card Type"),r.a.createElement(I.a,{error:!!E.category,fluid:!0,placeholder:"Select Card Type",options:[{key:"af",value:"Meetup",text:"Meetup"},{key:"ax",value:"Personal",text:"Personal"},{key:"al",value:"al",text:"Professional"},{key:"dz",value:"dz",text:"Travel"},{key:"as",value:"as",text:"Social"},{key:"ad",value:"ad",text:"Work"},{key:"ao",value:"ao",text:"Office"}],onChange:function(e){return function(e){var a=Object(M.a)({},c);if(a.category=e.target.textContent,i(a),E.category){var t=Object(G.c)(E);delete t.category,p(t)}}(e)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"social-links"},r.a.createElement("h3",null,"Social Links"),r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(f.a,{size:"huge",name:"facebook",className:c.facebookUrl?"text-success":"",onClick:function(){return b("facebookUrl")}})),r.a.createElement(o.a,null,r.a.createElement(f.a,{size:"huge",name:"instagram",className:c.instagramUrl?"text-success":"",onClick:function(){return b("instagramUrl")}})),r.a.createElement(o.a,null,r.a.createElement(f.a,{size:"huge",name:"linkedin",className:c.linkedinUrl?"text-success":"",onClick:function(){return b("linkedinUrl")}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(f.a,{size:"huge",name:"youtube",className:c.youtubeChannelUrl?"text-success":"",onClick:function(){return b("youtubeChannelUrl")}})),r.a.createElement(o.a,{className:"offset-1"},r.a.createElement(f.a,{size:"huge",name:"youtube",className:c.xyz?"text-success":"",onClick:function(){return b("")}})),r.a.createElement("br",null)))),r.a.createElement("div",{className:"text-right mt-4"},r.a.createElement(s.a,{onClick:function(){return y()}},"Add")))}),W=function(e){return r.a.createElement(U.a,{dimmer:"blurring",open:e.isAddCardModalOpen,onClose:e.toggleAddCardModal,className:"add-card-details",closeIcon:!0,id:"modal"},r.a.createElement(U.a.Content,null,r.a.createElement(U.a.Description,null,r.a.createElement(P,{toggleAddCardModal:function(){return e.toggleAddCardModal()}})),r.a.createElement("br",null)))};t(517),a.default=Object(c.b)(function(e){return{walletDetails:e.wallet.walletDetails,transactions:e.wallet.transactions}},function(e){return{onGetWalletDetails:function(){return e(i.f())},onGetTransactions:function(){return e(i.e())}}})(function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),c=t[0],i=t[1],d=function(){i(function(e){return!e})};return Object(l.useEffect)(function(){e.onGetWalletDetails(),e.onGetTransactions()},[]),r.a.createElement(o.a,{className:"my-cards pt-4 pb-5"},r.a.createElement(W,{isAddCardModalOpen:c,toggleAddCardModal:function(){return d()}}),r.a.createElement(m.a,{className:"mb-3"},r.a.createElement(o.a,{xs:8},r.a.createElement("h3",{className:"text-white pl-1"},"My Cards")),r.a.createElement(o.a,{className:"add-icon text-right"},r.a.createElement(s.a,{size:"tiny",icon:"add",style:{color:"#000",borderRadius:"8px"},onClick:function(){return d()}}))),r.a.createElement(A,null))})}}]);
//# sourceMappingURL=11.ce7fe777.chunk.js.map