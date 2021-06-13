(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),i=n(10),u=n(2),s=n(3),l=n(4),b=n(6),d=n(5),m=n(8),h=n(17),j=n(0),f=function(e){var t=e.value,n=e.onFilter;return Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"text",name:"filter",value:t,autoComplete:"off",onChange:n})})},p=function(e){var t=e.contact,n=e.onDelete,a=t.id,r=t.name,c=t.number;return Object(j.jsxs)("li",{children:[r,": ",c,Object(j.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"Delete"})]})},O=function(e){var t=e.contacts,n=e.onDelete;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(p,{contact:e,onDelete:n},e.id)}))})},v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target.name;e.setState((function(){return Object(u.a)({},n,t.target.value)}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onSubmit(a,r),e.setState((function(){return{name:"",number:""}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",name:"name",value:t,autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(j.jsx)("input",{type:"tel",name:"number",value:n,autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleChange=function(t){var n=t.target.name;e.setState((function(){return Object(u.a)({},n,t.target.value)}))},e.addContact=function(t,n){var a={id:Object(h.a)(),name:t,number:n};e.setState((function(e){for(var t=e.contacts,n=0;n<t.length;n++)if(t[n].name.toLowerCase()===a.name.toLowerCase())return alert("".concat(a.name," is already in contacts"));return{contacts:[].concat(Object(i.a)(t),[a])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.state.filter.toLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(v,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{value:n,onFilter:this.handleChange}),Object(j.jsx)(O,{contacts:r,onDelete:this.removeContact})]})}}]),n}(m.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9a5c229c.chunk.js.map