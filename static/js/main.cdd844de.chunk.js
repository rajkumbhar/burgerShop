(this["webpackJsonpburger-shop"]=this["webpackJsonpburger-shop"]||[]).push([[0],{44:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(16),s=t.n(c),i=t(13),r=t(12),d=t(25),l=t.n(d),j=t(27),u=t.n(j),b=t(28),o=t.n(b),h=t(22);h.a.initializeApp({apiKey:"AIzaSyCW_euXAbjpMUa-IQY07gm_hqokAQ8F6Xk",authDomain:"burger-shop-d6386.firebaseapp.com",databaseURL:"https://burger-shop-d6386-default-rtdb.firebaseio.com",projectId:"burger-shop-d6386",storageBucket:"burger-shop-d6386.appspot.com",messagingSenderId:"376919066686",appId:"1:376919066686:web:8d57931d6733792a3a296f"});var p=h.a,m=t(4);var g=function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsx)("img",{className:"image",src:e.src,alt:e.name}),Object(m.jsx)("h1",{children:e.name}),Object(m.jsx)("p",{children:e.details}),Object(m.jsxs)("p",{children:["By ",Object(m.jsx)("span",{children:e.chef})]}),Object(m.jsxs)("div",{className:"rating",children:[Object(m.jsx)(l.a,{style:{color:"green"}}),Object(m.jsx)("div",{className:"rating-number",children:e.rating})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"card-delete-btn",onClick:function(){p.database().ref("Menu").child(e.id).remove()},children:Object(m.jsx)(u.a,{})}),Object(m.jsx)("button",{className:"card-edit-btn",children:Object(m.jsx)(o.a,{})})]})]})},x=t(10);var O=function(){var e=Object(n.useState)({name:"Hank's Juiciest Chicken Burger",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",details:"20m Easy 4 servings",chef:"Hank Douglas",rating:"4.5"}),a=Object(r.a)(e,2),t=a[0],c=a[1];function s(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(x.a)({},t,n))}))}return Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("input",{type:"text",value:t.name,name:"name",onChange:s,placeholder:"Name the dish"}),Object(m.jsx)("input",{type:"text",value:t.chef,name:"chef",onChange:s,placeholder:"Chef"}),Object(m.jsx)("input",{type:"text",value:t.details,name:"details",onChange:s,placeholder:"Details"}),Object(m.jsx)("input",{type:"url",value:t.img,name:"img",onChange:s,placeholder:"Paste the image url"}),Object(m.jsx)("input",{type:"number",value:t.rating,name:"rating",onChange:s,placeholder:"Rating"}),Object(m.jsx)("button",{className:"input-btn",onClick:function(e){p.database().ref("Menu").push(t),e.preventDefault(),c({name:"",details:"",chef:"",img:"",rating:""})},children:"+"})]})};var f=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){p.database().ref("Menu").on("value",(function(e){var a=e.val(),t=[];for(var n in a)t.push(Object(i.a)({id:n},a[n]));c(t)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),t?t.map((function(e,a){return Object(m.jsx)(g,{id:e.id,name:e.name,src:e.img,details:e.details,chef:e.chef,rating:e.rating},a)})):""]})};s.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cdd844de.chunk.js.map