(this.webpackJsonpcontactfiles=this.webpackJsonpcontactfiles||[]).push([[0],{42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(33),o=a.n(s),i=(a(42),a(8)),l=a(9),u=a(11),h=a(10),d=a(15),p=a(2),j=a(4),b=a.n(j),m=a(13),O=a(36),f=a(17),v=a(14),x=a.n(v),y=c.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[].concat(Object(O.a)(e.contacts),[t.payload])});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return C(e,t)}))}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(y.Provider,{value:this.state,children:this.props.children})})}}]),a}(r.Component),N=y.Consumer,k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(m.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("http://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,r=t.name,c=t.email,s=t.phone,o=this.state.showContactInfo;return Object(n.jsx)(N,{children:function(t){var i=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",style:{width:"25rem"},children:[Object(n.jsxs)("h4",{style:{fontWeight:"bold"},children:[r,Object(n.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(n.jsx)("i",{onClick:e.onDeleteClick.bind(e,a,i),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),Object(n.jsx)(d.b,{to:"/contact/edit/".concat(a),children:Object(n.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",c]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Phone: ",s]})]}):null]})}})}}]),a}(r.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(N,{children:function(e){var t=e.contacts;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("h1",{className:"display-4 mb-3",children:[Object(n.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(n.jsx)(k,{contact:e},e.id)}))]})}})}}]),a}(r.Component),S=function(e){var t=e.heading;return Object(n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{href:"/",className:"navabr-brand text-white",children:t}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/",className:"nav-link",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/about",className:"nav-link",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/contact/add",className:"nav-link",children:"Add"})})]})})]})})};S.defaultProps={heading:"My App"};var E=S,A=(a(66),a(18)),T=a(35),D=a.n(T),P=function(e){var t=e.label,a=e.name,r=e.value,c=e.placeholder,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:s,name:a,className:D()("form-control",{"is-invalid":i}),placeholder:c,value:r,onChange:o}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};P.defaultProps={type:"text"};var q=P,F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,x.a.post("http://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card",style:{width:"25rem"},children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:r,onChange:e.onChange,error:s.email}),Object(n.jsx)(q,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-primary btn-block"})]})})]})}})}}]),a}(r.Component),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,x.a.put("http://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("http://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card",style:{width:"25rem"},children:[Object(n.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:r,onChange:e.onChange,error:s.email}),Object(n.jsx)(q,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-primary btn-block"})]})})]})}})}}]),a}(r.Component);var M=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(n.jsx)("p",{className:"lead",children:"Simple app to manage Contacts"})]})};var _=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"404 Page not found"}),Object(n.jsx)("p",{className:"lead",children:"Sorry, the page does not seem to exist"})]})},L=(a(67),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(g,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(E,{heading:"Contact Manager"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",component:w}),Object(n.jsx)(p.a,{exact:!0,path:"/about",component:M}),Object(n.jsx)(p.a,{exact:!0,path:"/contact/add",component:F}),Object(n.jsx)(p.a,{exact:!0,path:"/contact/edit/:id",component:I}),Object(n.jsx)(p.a,{Component:_})]})})]})})})}}]),a}(r.Component)),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),U()}},[[68,1,2]]]);
//# sourceMappingURL=main.e05f00e7.chunk.js.map