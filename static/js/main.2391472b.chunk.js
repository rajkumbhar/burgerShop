(this["webpackJsonpburger-shop"]=this["webpackJsonpburger-shop"]||[]).push([[0],{44:function(e,a,t){"use strict";t.r(a);var c=t(3),n=t(16),s=t.n(n),i=t(13),r=t(12),l=t(25),d=t.n(l),j=t(27),b=t.n(j),o=t(28),u=t.n(o),h=t(22);h.a.initializeApp({apiKey:"AIzaSyCW_euXAbjpMUa-IQY07gm_hqokAQ8F6Xk",authDomain:"burger-shop-d6386.firebaseapp.com",databaseURL:"https://burger-shop-d6386-default-rtdb.firebaseio.com",projectId:"burger-shop-d6386",storageBucket:"burger-shop-d6386.appspot.com",messagingSenderId:"376919066686",appId:"1:376919066686:web:8d57931d6733792a3a296f"});var m=h.a,p=t(4);var g=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsx)("img",{className:"image",src:e.src,alt:e.name}),Object(p.jsx)("h1",{children:e.name}),Object(p.jsx)("p",{children:e.details}),Object(p.jsxs)("p",{children:["By ",Object(p.jsx)("span",{children:e.chef})]}),Object(p.jsxs)("div",{className:"rating",children:[Object(p.jsx)(d.a,{style:{color:"green"}}),Object(p.jsxs)("div",{className:"rating-number",children:["Rs. ",e.rating,"/-"]})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"card-delete-btn",onClick:function(){m.database().ref("Menu").child(e.id).remove()},children:Object(p.jsx)(b.a,{})}),Object(p.jsx)("button",{className:"card-edit-btn",children:Object(p.jsx)(u.a,{})})]})]})},O=t(10);var x=function(){var e=Object(c.useState)({name:"",img:"",details:"",chef:"",rating:""}),a=Object(r.a)(e,2),t=a[0],n=a[1];function s(e){var a=e.target,t=a.name,c=a.value;n((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(O.a)({},t,c))}))}return Object(p.jsxs)("div",{className:"input-box",children:[Object(p.jsx)("input",{type:"text",value:t.name,name:"name",onChange:s,placeholder:"Medicine"}),Object(p.jsx)("input",{type:"text",value:t.chef,name:"chef",onChange:s,placeholder:"Company"}),Object(p.jsx)("input",{type:"text",value:t.details,name:"details",onChange:s,placeholder:"Details"}),Object(p.jsx)("input",{type:"url",value:t.img,name:"img",onChange:s,placeholder:"Paste the image url"}),Object(p.jsx)("input",{type:"number",value:t.rating,name:"rating",onChange:s,placeholder:"Price"}),Object(p.jsx)("button",{className:"input-btn",onClick:function(e){m.database().ref("Menu").push(t),e.preventDefault(),n({name:"",details:"",chef:"",img:"",rating:""})},children:"+"})]})};var v=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){m.database().ref("Menu").on("value",(function(e){var a=e.val(),t=[];for(var c in a)t.push(Object(i.a)({id:c},a[c]));n(t)}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"logo-card",children:[Object(p.jsx)("a",{href:"./login.html",children:Object(p.jsx)("img",{className:"medicine-logo",src:"https://www.flaticon.com/svg/vstatic/svg/1546/1546140.svg?token=exp=1619092661~hmac=07b69991ac5dfd1e425d64c5e62c61d5",alt:"logo"})}),Object(p.jsx)("span",{className:"company-name",children:"Castle Health Care"})]})}),Object(p.jsx)(x,{}),t?t.map((function(e,a){return Object(p.jsx)(g,{id:e.id,name:e.name,src:e.img,details:e.details,chef:e.chef,rating:e.rating},a)})):""]})};s.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2391472b.chunk.js.map