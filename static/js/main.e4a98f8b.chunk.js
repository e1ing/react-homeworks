(this["webpackJsonpreact-homeworks"]=this["webpackJsonpreact-homeworks"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={header:"Header_header__2dy2_",nav:"Header_nav__2gUic",activeNav:"Header_activeNav__2_r5c",menuBtn:"Header_menuBtn__1eJcJ"}},function(e,t,n){e.exports={messageComponent:"Message_messageComponent__3_nz4",content:"Message_content__xyt_D",avatar:"Message_avatar__3vrYa",name:"Message_name__2pi2m",time:"Message_time__2q5wp",angle:"Message_angle__2R43C",message:"Message_message__29nH8"}},,,,,,,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__13aES",error:"Greeting_error__xLMhF",inputClass:"Greeting_inputClass__2KgPq"}},function(e,t,n){e.exports={input:"SuperInputText_input___SlpR",superInput:"SuperInputText_superInput__2bzFp",errorInput:"SuperInputText_errorInput__2WLLB",error:"SuperInputText_error__2gngU"}},function(e,t,n){e.exports={blue:"HW4_blue__3ae_D",column:"HW4_column__3_TbF",testSpanError:"HW4_testSpanError__3z_p6"}},function(e,t,n){e.exports={default:"SuperButton_default__3pGAu",red:"SuperButton_red__1n7x4",button:"SuperButton_button__UjF0C",blink:"SuperButton_blink__1PV0b"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__1XSW1",checkbox:"SuperCheckbox_checkbox__2Nxl6",spanClassName:"SuperCheckbox_spanClassName__3PaCN"}},,,,function(e,t,n){e.exports={App:"App_App__3N74c"}},,function(e,t,n){e.exports={error:"Error_error__1Ov_F"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__3cG0h"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),o=(n(35),n(26)),i=n.n(o),j=n(10),l=n(8),u=n.n(l),b=n(0);var d=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:u.a.header,children:[Object(b.jsx)(j.b,{className:u.a.nav,activeClassName:u.a.activeNav,to:"/pre-junior",children:" Pre-junior"}),Object(b.jsx)(j.b,{className:u.a.nav,activeClassName:u.a.activeNav,to:"/junior",children:"Junior"}),Object(b.jsx)(j.b,{className:u.a.nav,activeClassName:u.a.activeNav,to:"/junior-plus",children:" Junior-plus"}),Object(b.jsx)("div",{className:u.a.menuBtn})]})})},x=n(2),h=n(28),O=n.n(h);var m=function(){return Object(b.jsxs)("div",{className:O.a.error,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},p=n(9),_=n.n(p);var v=function(e){return Object(b.jsxs)("div",{className:_.a.messageComponent,children:[Object(b.jsx)("img",{src:e.avatar,className:_.a.avatar}),Object(b.jsx)("div",{className:_.a.angle}),Object(b.jsxs)("div",{className:_.a.content,children:[Object(b.jsx)("div",{className:_.a.name,children:e.name}),Object(b.jsxs)("div",{className:_.a.message,children:[" ",e.message]}),Object(b.jsxs)("div",{className:_.a.time,children:[" ",e.time," "]})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",C="some text",N="22:00";var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(v,{avatar:f,name:g,message:C,time:N}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},S=n(3);var y=function(e){return Object(b.jsxs)("div",{children:[e.affair.name,e.affair.priority,Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(b.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(a.useState)(F),t=Object(S.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(S.a)(c,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(w,{data:j,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},B=n(30),T=n(18),A=n.n(T),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?A.a.error:A.a.inputClass;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:s}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("button",{onClick:a,disabled:!t,children:"add"}),Object(b.jsx)("span",{children:c})]})},P=function(e){var t=e.usersForGreeting,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(S.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(""),j=Object(S.a)(i,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();""!==t?(o(t),l&&u("")):(s&&o(""),u("Enter some name"))},addUser:function(){n(s),alert("Hello  ".concat(s,"!")),o("")},error:l,totalUsers:d})},H=n(44);var M=function(){var e=Object(a.useState)([]),t=Object(S.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(P,{usersForGreeting:n,addUserCallback:function(e){var t={id:Object(H.a)(),name:e};r([t].concat(Object(B.a)(n)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=n(6),U=n(7),W=n(19),G=n.n(W),D=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(G.a.error," ").concat(o||""),l="".concat(G.a.errorInput," ").concat(s||"");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},i)),c&&Object(b.jsx)("span",{className:j,children:c})]})},K=n(20),L=n.n(K),q=n(21),z=n.n(q),R=function(e){var t=e.red,n=e.className,a=Object(U.a)(e,["red","className"]),r="".concat(t?z.a.red:z.a.default," ").concat(n);return Object(b.jsx)("button",Object(J.a)({className:r},a))},X=n(22),Y=n.n(X),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(S.a)(o,2),j=i[0],l=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:L.a.column,children:[Object(b.jsx)(D,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(D,{className:L.a.blue}),Object(b.jsx)(R,{children:"default"}),Object(b.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(R,{disabled:!0,children:"disabled"}),Object(b.jsx)(V,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(V,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},$=n(29),Q=n.n($),ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(S.a)(s,2),i=o[0],j=o[1],l=r||{},u=l.children,d=l.onDoubleClick,x=l.className,h=Object(U.a)(l,["children","onDoubleClick","className"]),O="".concat(Q.a.span," ").concat(x||"");return Object(b.jsx)(b.Fragment,{children:i?Object(b.jsx)(D,Object(J.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsx)("span",Object(J.a)(Object(J.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:O},h),{},{children:u||c.value}))})};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var ae=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(ee,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(R,{onClick:function(){te("editable-span-value",n)},children:"save"}),Object(b.jsx)(R,{onClick:function(){r(ne("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(E,{}),Object(b.jsx)(M,{}),Object(b.jsx)(Z,{}),Object(b.jsx)(ae,{})]})},ce="/pre-junior",se="/junior",oe="/junior-plus";var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(x.d,{children:[Object(b.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(x.a,{to:ce})}}),Object(b.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(x.a,{to:se})}}),Object(b.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(x.a,{to:oe})}}),Object(b.jsx)(x.b,{path:ce,render:function(){return Object(b.jsx)(re,{})}}),Object(b.jsx)(x.b,{render:function(){return Object(b.jsx)(m,{})}})]})})};var je=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(ie,{})]})})};var le=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(je,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.e4a98f8b.chunk.js.map