(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={wrapper:"Calendar_wrapper__3eXHe",calendar:"Calendar_calendar__2Gxos"}},29:function(e,t,a){e.exports={info:"CalendarInfo_info__kC_xL"}},30:function(e,t,a){e.exports={dayName:"CalendarHeader_dayName__2Wlkf"}},33:function(e,t,a){e.exports={closeButton:"CloseButton_closeButton__13jbo"}},34:function(e,t,a){e.exports={base:"StandardButton_base__3rZ-s",standard:"StandardButton_standard__31GSR"}},39:function(e,t,a){e.exports=a(51)},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=a(35),i=a(11),d=a(10),u=a(12),s=a(27),m=new Date,f=new Date(m.getFullYear(),m.getMonth(),1),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"calendar/SET_CALENDAR_MONTH":return n.date;default:return e}},p=a(28),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"calendar/SET_CALENDAR_DATA":return Object(p.a)({},e,n);default:return e}},E={isOpen:!1,date:null,data:null},h=Object(u.combineReducers)({date:_,data:v,dataEditor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"calendar/OPEN_EDITOR":case"calendar/CLOSE_EDITOR":return n;case"calendar/SET_CALENDAR_DATA":return{isOpen:!1,date:null,data:null};default:return e}}}),D=Object(u.createStore)(h,Object(s.composeWithDevTools)()),y=(a(48),a(49),["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"]),w=a(29),b=a.n(w),C=function(e){var t=e.date;return r.a.createElement("div",{className:b.a.info},"".concat(y[t.getMonth()]," ").concat(t.getFullYear()))},g=a(30),N=a.n(g),O=function(e){var t=e.dayNames;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement("div",{key:e,className:N.a.dayName},e)}))},k=a(8),j=a.n(k),T=function(e){var t=e.isCurrent,a=e.monthType,n=e.date,o=e.data,c=e.editor;return r.a.createElement("button",{className:[j.a[a],j.a.day,t?j.a.current:""].join(" "),onClick:function(){return c(n,o)}},r.a.createElement("div",{className:j.a.info},r.a.createElement("div",{className:j.a.caption},n.getDate()),r.a.createElement("div",{className:[j.a.data,o?j.a.filled:""].join(" ")},r.a.createElement("pre",{className:j.a.formatter},o))))},x=function(e){var t=e.calendar,a=e.editor;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(T,{key:e.date.getTime(),isCurrent:e.isCurrent,monthType:e.monthType,date:e.date,data:e.data,editor:a})}))},M=a(13),S=a(17),A=a(31),R=a(37),L=a(32),W=a(38),F=a(33),B=a.n(F),I=function(e){var t=e.onClick;return r.a.createElement("button",{className:B.a.closeButton,type:"button",onClick:t},"\xd7")},Y=a(34),U=a.n(Y),H=function(e){var t=e.type,a=void 0===t?"button":t,n=e.children,o=e.onClick;return r.a.createElement("button",{className:U.a.standard,type:a,onClick:o},n)},J=function(e){return e.dataEditor.isOpen},K=function(e){return e.dataEditor.date},P=function(e){return e.dataEditor.data},G=a(9),Z=a.n(G),Q=function(e){function t(){var e,a;Object(S.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(R.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(o)))).state={data:null},a.backdropRef=Object(n.createRef)(),a.closeModal=function(){(0,a.props.onClose)()},a.onWindowClick=function(e){a.backdropRef.current===e.target&&a.closeModal()},a.onWindowKeyDown=function(e){"Escape"===e.key&&a.closeModal()},a.handleInput=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t=a.props,n=t.onSave,r=t.date,o=a.state.data;e.preventDefault(),n(r,o)},a}return Object(W.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.onWindowClick),window.addEventListener("keydown",this.onWindowKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onWindowClick),window.removeEventListener("keydown",this.onWindowKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.isOpen,a=e.date,n=e.data;return t&&r.a.createElement("div",{className:Z.a.backdrop,ref:this.backdropRef},r.a.createElement("div",{className:Z.a.modal},r.a.createElement("div",{className:Z.a.header},r.a.createElement("div",{className:Z.a.title},a.toLocaleDateString()),r.a.createElement(I,{onClick:this.closeModal})),r.a.createElement("form",{className:Z.a.form,onSubmit:this.onSubmit},r.a.createElement("label",{className:Z.a.label,htmlFor:"data"},"\u0417\u0430\u043c\u0435\u0442\u043a\u0438:"),r.a.createElement("textarea",{className:Z.a.textarea,name:"data",id:"data",cols:"30",rows:"15",onChange:this.handleInput,value:n}),r.a.createElement("div",{className:Z.a.buttons},r.a.createElement(H,{type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement(H,{onClick:this.closeModal},"\u041e\u0442\u043c\u0435\u043d\u0430")))))}}]),t}(n.Component),X={onClose:function(){return{type:"calendar/CLOSE_EDITOR",payload:{isOpen:!1,date:null,data:null}}},onSave:function(e,t){return{type:"calendar/SET_CALENDAR_DATA",payload:Object(M.a)({},e.getTime(),t)}}},z=Object(d.b)(function(e){return{isOpen:J(e),date:K(e),data:P(e)}},X)(Q),V=function(e){return new Date(e.date)},$=a(19),q=function e(){Object(S.a)(this,e)};q.Previous="prevMonth",q.Current="currMonth",q.Next="nextMonth";var ee=function(e,t){switch(t){case 1:return function(e){return e%4===0&&(e%100!==0||e%400===0)}(e)?29:28;case 3:case 5:case 8:case 10:return 30;default:return 31}},te=function(e,t,a,n){return{date:e,isCurrent:t,monthType:a,data:n[e.getTime()]}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new Date,n=e.getFullYear(),r=e.getMonth(),o=a.getFullYear()===n&&a.getMonth()===r?a.getDate():void 0,c=function(e,t,a,n){var r=[],o=new Date(e,t,1),c=o.getDay(),l=0===c?6:c-1,i=0===t?11:t-1,d=11===i?e-1:e;if(r[l]=te(o,1===a,q.Current,n),l>0)for(var u=ee(d,i),s=l;s>0;)r[--s]=te(new Date(d,i,u--),!1,q.Previous,n);if(l<6)for(var m=1,f=l;f<6;)r[++f]=te(new Date(e,t,++m),m===a,q.Current,n);return r}(n,r,o,t),l=function(e,t,a,n){var r=[],o=ee(e,t),c=new Date(e,t,o).getDay(),l=0===c?6:c-1,i=11===t?0:t+1,d=11===t?e+1:e;if(r[l]=te(new Date(e,t,o),o===a,q.Current,n),l>0)for(var u=o,s=l;s>0;)r[--s]=te(new Date(e,t,--u),u===a,q.Current,n);if(l<6)for(var m=1,f=l;f<6;)r[++f]=te(new Date(d,i,m++),!1,q.Next,n);return r}(n,r,o,t),i=function(e,t,a,n,r,o){for(var c=[],l=a,i=n;l<i;)c.push(te(new Date(e,t,l),l++===r,q.Current,o));return c}(n,r,c[6].date.getDate()+1,l[0].date.getDate(),o,t);return[].concat(Object($.a)(c),Object($.a)(i),Object($.a)(l))},ne=a(18),re=a.n(ne),oe={setDate:function(){return{type:"calendar/SET_CALENDAR_MONTH",payload:{date:arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date}}},editor:function(e,t){return{type:"calendar/OPEN_EDITOR",payload:{isOpen:!0,date:e,data:t}}}},ce=Object(d.b)(function(e){return{date:V(e)}},oe)(function(e){var t=e.date,a=e.calendar,n=e.dayNames,o=e.setDate,c=e.editor;return r.a.createElement("div",{className:re.a.wrapper},r.a.createElement("div",{className:re.a.dashboard},r.a.createElement(H,{onClick:function(){return o(function(e){var t=e.getMonth(),a=e.getFullYear();return new Date(0===t?a-1:a,0===t?11:t-1,1)}(t))}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(H,{onClick:function(){return o(function(){var e=new Date,t=e.getMonth(),a=e.getFullYear();return new Date(a,t,1)}())}},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"),r.a.createElement(H,{onClick:function(){return o(function(e){var t=e.getMonth(),a=e.getFullYear();return new Date(11===t?a+1:a,11===t?0:t+1,1)}(t))}},"\u0412\u043f\u0435\u0440\u0435\u0434")),r.a.createElement(C,{date:t}),r.a.createElement("div",{className:re.a.calendar},r.a.createElement(O,{dayNames:n}),r.a.createElement(x,{calendar:a,editor:c})),r.a.createElement(z,null))}),le=function(e){return e.data},ie=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"];var de=Object(d.b)(function(e){return{date:V(e),data:le(e)}})(function(e){var t=e.date,a=e.data;return r.a.createElement("div",{className:"App"},r.a.createElement(ce,{calendar:ae(t,a),dayNames:ie}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,{store:D},r.a.createElement(l.a,null,r.a.createElement(i.a,{component:de}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={prevMonth:"CalendarDay_prevMonth__3csUQ",nextMonth:"CalendarDay_nextMonth__2UW6b",filled:"CalendarDay_filled__1U-Q2",day:"CalendarDay_day__2CKDx",current:"CalendarDay_current__zyECY",info:"CalendarDay_info__14IZX",caption:"CalendarDay_caption__1Zemr",data:"CalendarDay_data__2fDp-",formatter:"CalendarDay_formatter__x0Jv9"}},9:function(e,t,a){e.exports={backdrop:"DataEditor_backdrop__2cfFR",modal:"DataEditor_modal__355Tf",header:"DataEditor_header__2-pmx",title:"DataEditor_title__17iG6",form:"DataEditor_form__2SYV_",label:"DataEditor_label__2J3-b",textarea:"DataEditor_textarea__BUbNj",buttons:"DataEditor_buttons__3eUBe"}}},[[39,1,2]]]);
//# sourceMappingURL=main.19a7fc1d.chunk.js.map