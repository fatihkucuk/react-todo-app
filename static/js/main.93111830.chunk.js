(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),i=n.n(c),d=(n(15),n(1)),r=(n(16),n(9)),l=n(2),u=n.n(l),s=(n(19),function(e){var t=Object(a.useState)(e.todo?e.todo.description:""),n=Object(d.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!!e.todo),l=Object(d.a)(r,2),s=l[0],b=l[1],m={input:{padding:0},button:{padding:10,width:"auto"}};return o.a.createElement("div",{className:"AddTodo"},o.a.createElement("input",{type:"text",onChange:function(e){i(e.target.value)},value:c,placeholder:"ex: Learn React Hooks and Redux"}),s?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-red",onClick:function(){b(!1),e.canceled()},style:m.button},"Cancel"),o.a.createElement("button",{className:"btn btn-blue",onClick:function(){var t={id:e.todo.id,description:c};e.todoUpdated(t),i("")},style:m.button},"Update")):o.a.createElement("button",{className:"btn btn-blue",onClick:function(){var t={id:u()(),description:c};e.todoAdded(t),i("")}},"Add"))}),b=(n(20),function(e){var t=Object(a.useState)([{id:u()(),description:"Learn React.js"},{id:u()(),description:"Learn React Hooks"},{id:u()(),description:"Learn Redux"}]),n=Object(d.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(null),b=Object(d.a)(l,2),m=b[0],p=b[1];Object(a.useEffect)((function(){e.todo&&i([].concat(Object(r.a)(c),[e.todo]))}),[e.todo]);var f=function(e){var t=c.filter((function(t){return t.id!==e}));i(t)},v=function(e){p(e)},E=function(e){var t=c.findIndex((function(t){return t.id===e.id}));t>-1&&(c[t]=e,p(null))},h=function(){p(null)},j={listItem:{padding:0}},g=c.map((function(e,t){var n=m===e.id;return o.a.createElement("li",{key:e.id,style:n?j.listItem:{}},n?o.a.createElement(s,{todo:e,todoUpdated:E,canceled:h}):e.description,n?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-red",onClick:f.bind(void 0,e.id)},"Delete"),o.a.createElement("button",{className:"btn btn-blue",onClick:v.bind(void 0,e.id)},"Edit")))}));return o.a.createElement("ul",{className:"TodoList"},g)});var m=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(s,{todoAdded:function(e){c(e)}}),o.a.createElement(b,{todo:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.93111830.chunk.js.map