(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{37:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),u=n(10),o=n(8);var i=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",(new Date).getFullYear()))},m=n(27),f=n.n(m);var s=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-warning shadow-sm p-3 mb-5 "},r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement(f.a,{style:{fontSize:30}}),"Keeper")))},E=n(29),p=n.n(E),v=n(64);var d=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement(v.a,{"aria-label":"delete",onClick:function(){e.onDelete(e.id)}},r.a.createElement(p.a,null)))},b=n(25),g=n(30),h=n.n(g),j=n(65),k=n(66);var O=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],f=i[1],s=Object(a.useRef)();function E(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(b.a)(Object(b.a)({},e),{},{[n]:a})}))}function p(e){s.current.contains(e.target)?l(!0):l(!1)}return Object(a.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[]),r.a.createElement("div",{ref:s},r.a.createElement("form",{className:"create-note"},c?r.a.createElement("input",{name:"title",placeholder:"Title",onChange:E,value:m.title}):null,r.a.createElement("textarea",{name:"content",placeholder:"Take a note...",rows:c?3:1,onChange:E,value:m.content}),r.a.createElement(k.a,{in:c},r.a.createElement(j.a,{color:"warning","aria-label":"add",onClick:function(t){t.preventDefault(),e.func(m),f({title:"",content:""})}},r.a.createElement(h.a,null)))))};var w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function l(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(O,{func:function(e){""===e.title&&""===e.content||c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:l})})),r.a.createElement(i,null))};l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f3238587.chunk.js.map