(this.webpackJsonpreact6=this.webpackJsonpreact6||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__bjp3c",section:"App_section__2ZK0b"}},17:function(t,e,n){t.exports={item:"ContactsListItem_item__2Nn8R",span:"ContactsListItem_span__1VV1u",button:"ContactsListItem_button__36uzD"}},21:function(t,e,n){t.exports={label:"Filter_label__1u5Ty",input:"Filter_input__16fW9"}},22:function(t,e,n){t.exports={container:"Notification_container__1iq87",notificationContent:"Notification_notificationContent__2QZb1"}},26:function(t,e,n){t.exports={container:"Layout_container__1X_72"}},28:function(t,e,n){t.exports={enter:"itemTransition_enter__3m_mj",enterActive:"itemTransition_enterActive__3xX-D",exit:"itemTransition_exit__3r-Z3",exitActive:"itemTransition_exitActive__3dBkl"}},29:function(t,e,n){t.exports={appear:"transitionTitle_appear__iM4jC",appearActive:"transitionTitle_appearActive__3xejG"}},30:function(t,e,n){t.exports={enter:"NotificationTransition_enter__NZEzB",enterActive:"NotificationTransition_enterActive__ZtfKN",exit:"NotificationTransition_exit__123YL",exitActive:"NotificationTransition_exitActive__1DQGE"}},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),i=n(12),l=n(13),s=n(16),u=n(15),m=n(2),p=n(26),b=n.n(p);var f=function(t){var e=t.children;return c.a.createElement("section",{className:b.a.container},e)},_=n(21),d=n.n(_),v=n(3),O=n(46),h=Object(v.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(O.a)(),name:t,number:e}}}})),C=Object(v.b)("contacts/getFromLS"),N={addContact:h,removeContact:Object(v.b)("contacts/remove"),filterContact:Object(v.b)("contacts/filter"),getFromLS:C},E={onChangeFilter:N.filterContact},j=Object(m.b)((function(t){return{value:t.contacts.filter}}),E)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",{className:d.a.label},"Search contacts by name",c.a.createElement("input",{className:d.a.input,type:"text",vlaue:e,onChange:function(t){return n(t.target.value)}})))})),g=n(4),y=n(9),S=n.n(y),x=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.contacts.some((function(t){return t.name===a}))?t.props.openModal():(t.props.onAddContact(a,c),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("label",{className:S.a.label},"Name",c.a.createElement("input",{className:S.a.input,type:"text",name:"name",value:e,onChange:this.handleInputChange,required:!0})),c.a.createElement("label",{className:S.a.label},"Number",c.a.createElement("input",{className:S.a.input,type:"tel",name:"number",value:n,onChange:this.handleInputChange,required:!0})),c.a.createElement("button",{className:S.a.button,type:"submit"},"Add contact"))}}]),n}(a.Component),A={onAddContact:N.addContact},I=Object(m.b)((function(t){return{contacts:t.contacts.items}}),A)(x),F=n(27),k=n(17),T=n.n(k);var L=Object(m.b)((function(t,e){var n=t.contacts.items.find((function(t){return t.id===e.id}));return Object(F.a)({},n)}),(function(t,e){return{onRemove:function(){return t(N.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",{className:T.a.item},c.a.createElement("span",{className:T.a.span},e,": ",n),c.a.createElement("button",{className:T.a.button,type:"button",onClick:a},"X"))})),M=n(47),J=n(45),w=n(28),Z=n.n(w);var D,R=Object(m.b)((function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}))((function(t){var e=t.contacts;return c.a.createElement(M.a,{component:"ul"},e.map((function(t){var e=t.id;return c.a.createElement(J.a,{key:e,classNames:Z.a,timeout:250},c.a.createElement(L,{id:e}))})))})),q=n(22),B=n.n(q),Q=function(){return c.a.createElement("div",{className:B.a.container},c.a.createElement("p",{className:B.a.notificationContent},"Contact already exist!"))},X=n(10),z=n.n(X),G=n(29),K=n.n(G),V=n(30),Y=n.n(V),P=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isOpenModal:!1},t.handleOpenModal=function(){t.setState({isOpenModal:!0}),setTimeout((function(){t.setState({isOpenModal:!1})}),3e3)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(localStorage.getItem("contacts")){var t=JSON.parse(localStorage.getItem("contacts"));this.props.onCheckContacts(t)}}},{key:"render",value:function(){var t=this.state.isOpenModal,e=this.props.contacts;return c.a.createElement(f,null,c.a.createElement(J.a,{in:!0,appear:!0,timeout:500,classNames:K.a},c.a.createElement("h2",{className:z.a.title},"Phonebook")),c.a.createElement("section",{className:z.a.section},c.a.createElement(I,{openModal:this.handleOpenModal})),c.a.createElement("h2",{className:z.a.title},"Contacts"),e.length>0?c.a.createElement("section",{className:z.a.section},c.a.createElement(j,null),c.a.createElement(R,null)):c.a.createElement("h2",null,"Your phonebook is empty."),c.a.createElement(J.a,{in:t,appear:!0,classNames:Y.a,timeout:250,unmountOnExit:!0},c.a.createElement(Q,null)))}}]),n}(a.Component),W={onCheckContacts:N.getFromLS},H=Object(m.b)((function(t){return{contacts:t.contacts.items}}),W)(P),U=n(23),$=n(1),tt=Object(v.c)([],(D={},Object(g.a)(D,N.addContact,(function(t,e){var n=localStorage.getItem("contacts"),a=e.payload.contact;if(n){var c=JSON.parse(n);localStorage.setItem("contacts",JSON.stringify([a].concat(Object(U.a)(c))))}else localStorage.setItem("contacts",JSON.stringify([a]));return[e.payload.contact].concat(Object(U.a)(t))})),Object(g.a)(D,N.removeContact,(function(t,e){var n=JSON.parse(localStorage.getItem("contacts")).filter((function(t){return t.id!==e.payload}));return localStorage.setItem("contacts",JSON.stringify(n)),t.filter((function(t){return t.id!==e.payload}))})),Object(g.a)(D,N.getFromLS,(function(t,e){return e.payload})),D)),et=Object(v.c)("",Object(g.a)({},N.filterContact,(function(t,e){return e.payload}))),nt=Object($.c)({items:tt,filter:et}),at=Object(v.a)({reducer:{contacts:nt}});n(42);r.a.render(c.a.createElement(m.a,{store:at},c.a.createElement(H,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={input:"ContactFrom_input__s8RZ5",label:"ContactFrom_label__3-ROa",button:"ContactFrom_button__sdQlS"}}},[[43,1,2]]]);
//# sourceMappingURL=main.89e24957.chunk.js.map