(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(1),u=(n(11),n(12),n(13),n(2)),l=n.n(u),i=n(3),m="https://mate-api.herokuapp.com",p=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts/"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,r=a.data,0!==t){e.next=9;break}return e.abrupt("return",r);case 9:return e.abrupt("return",r.filter((function(e){return e.userId===t})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.userId,n=e.postId,c=e.setPostId,s=Object(a.useState)([]),u=Object(o.a)(s,2),l=u[0],i=u[1];Object(a.useEffect)((function(){p(t).then((function(e){return i(e)}))}),[t]);return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},l.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void c(n===t?0:t);var t}},n===e.id?"Close":"Open"))}))))},b=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/comments/"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,0!==t){e.next=8;break}return e.abrupt("return",a.data);case 8:return e.abrupt("return",a.data.filter((function(e){return e.postId===t})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t,n,a,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(m,"/comments/"),{method:"POST",body:JSON.stringify({postId:t,name:n,email:a,body:r})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),h=(n(15),function(e){var t=e.postId,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),m=i[0],p=i[1],f=Object(a.useState)(""),d=Object(o.a)(f,2),b=d[0],E=d[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),v(t,s,m,b),u(""),p(""),E("")}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",value:s,onChange:function(e){return u(e.target.value)},placeholder:"Your name",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",value:m,onChange:function(e){return p(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",value:b,onChange:function(e){return E(e.target.value)},placeholder:"Type comment here",className:"NewCommentForm__input"})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),_=(n(16),function(e){var t=e.postId,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),m=i[0],p=i[1],d=Object(a.useState)(!1),v=Object(o.a)(d,2),_=v[0],N=v[1];Object(a.useEffect)((function(){b(t).then((function(e){return u(e)})),f(t).then((function(e){return p(e.body)}))}),[t,s]);return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,m)),s.length>0&&r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){N(!_)}},"".concat(_?"Show":"Hide"," ").concat(s.length," comments")),!_&&r.a.createElement("ul",{className:"PostDetails__list"},s.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return E(e.id)}},"X"),r.a.createElement("p",null,e.body))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(h,{comments:s,postId:t}))))}),N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),u=Object(o.a)(s,2),l=u[0],i=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){return c(+e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(d,{userId:n,postId:l,setPostId:i})),r.a.createElement("div",{className:"App__content"},0!==l&&r.a.createElement(_,{postId:l}))))};s.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.ab28ead9.chunk.js.map