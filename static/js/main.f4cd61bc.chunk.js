(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports={modalContainer:"Modal_modalContainer__28A7L",overlay:"Modal_overlay__1TgzI",modal:"Modal_modal__1vwov",closeButton:"Modal_closeButton__3Jizr"}},25:function(e,t,a){e.exports={remindersList:"RemindersList_remindersList__3aAwJ",reminderItem:"RemindersList_reminderItem__1GZrh"}},3:function(e,t,a){e.exports={reminderForm:"ReminderForm_reminderForm__2MScg",form:"ReminderForm_form__lhVDV",reminderConfirm:"ReminderForm_reminderConfirm__3WsIO",fieldLabel:"ReminderForm_fieldLabel__1NW8-",field:"ReminderForm_field__1T2ab",fieldError:"ReminderForm_fieldError__3W-Yl",colorsContainer:"ReminderForm_colorsContainer__Emceq",colorItem:"ReminderForm_colorItem__1rSig",active:"ReminderForm_active__1q2M0"}},32:function(e,t,a){e.exports={dayRemindersModal:"DayRemindersModal_dayRemindersModal__2QYUS",addButton:"DayRemindersModal_addButton__1_AWI"}},43:function(e,t,a){e.exports={calendarHeader:"CalendarHeader_calendarHeader__y9fGb"}},45:function(e){e.exports=["#16a085","#2980b9","#8e44ad","#c0392b","#f39c12"]},46:function(e,t,a){e.exports=a(76)},7:function(e,t,a){e.exports={calendarBody:"CalendarBody_calendarBody__3tfJR",calendarDaysTitleContainer:"CalendarBody_calendarDaysTitleContainer__2_pyE",dayTitle:"CalendarBody_dayTitle__16hfc",calendarWeeksContainer:"CalendarBody_calendarWeeksContainer__1GkeV",calendarWeekRow:"CalendarBody_calendarWeekRow__h_T1h",calendarItem:"CalendarBody_calendarItem__Dfa74",inactive:"CalendarBody_inactive__3HOys",dayNumber:"CalendarBody_dayNumber__2kOb4",today:"CalendarBody_today__2qh-L"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=a(6),l=a(15),d=a(42),s=a(2),m=a(8),u=a.n(m),p=a(24),f=a.n(p),y=u()(new Date).hours(0).minutes(0).seconds(0).milliseconds(0),h=u.a.months(),v={shortNames:u.a.weekdaysShort(),fullNames:u.a.weekdays()},b=function(e){for(var t=e.month,a=e.year,n=[],r=u()(new Date(a,t,1,0,0,0)),o=r.clone().add(1,"month").subtract(1,"days");r.day()>0;)r.subtract(1,"days");for(;o.day()<6;)o.add(1,"days");for(;r.diff(o,"days")<=0;)n.push({date:r.clone(),isFromCurrentMonth:r.month()===t}),r.add(1,"days");return f.a.chunk(n,7)},E={selectedMonth:y.month(),selectedYear:y.year()},_=a(4),O={},C=Object(l.c)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_NEXT_MONTH":return Object(s.a)({},e,function(e){var t=e.month,a=e.year;return t<11?{selectedMonth:++t,selectedYear:a}:{selectedMonth:0,selectedYear:++a}}({month:e.selectedMonth,year:e.selectedYear}));case"SET_PREVIOUS_MONTH":return Object(s.a)({},e,function(e){var t=e.month,a=e.year;return t>0?{selectedMonth:--t,selectedYear:a}:{selectedMonth:11,selectedYear:--a}}({month:e.selectedMonth,year:e.selectedYear}));default:return e}},reminders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REMINDER":var a=Object(s.a)({},e[t.payload.date.year()])||{},n=Object(s.a)({},a[t.payload.date.month()])||{},r=n[t.payload.date.date()]||{};return r[t.payload.time]=t.payload,Object(s.a)({},e,Object(_.a)({},t.payload.date.year(),Object(s.a)({},a,Object(_.a)({},t.payload.date.month(),Object(s.a)({},n,Object(_.a)({},t.payload.date.date(),r))))));case"EDIT_REMINDER":return Object(s.a)({},e,Object(_.a)({},t.payload.date.year(),Object(s.a)({},e[t.payload.date.year()],Object(_.a)({},t.payload.date.month(),Object(s.a)({},e[t.payload.date.year()][t.payload.date.month()],Object(_.a)({},t.payload.date.date(),Object(s.a)({},e[t.payload.date.year()][t.payload.date.month()][t.payload.date.date()],Object(_.a)({},t.payload.time,t.payload))))))));case"REMOVE_REMINDER":var o=Object(s.a)({},e[t.payload.date.year()]),c=Object(s.a)({},o[t.payload.date.month()]),i=Object(s.a)({},c[t.payload.date.date()]);return Object(s.a)({},e,Object(_.a)({},t.payload.date.year(),Object(s.a)({},o,Object(_.a)({},t.payload.date.month(),Object(s.a)({},c,Object(_.a)({},t.payload.date.date(),f.a.omit(i,t.payload.time)))))));default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,R=Object(l.e)(C,j(Object(l.a)(d.a))),k=a(43),M=a.n(k),g={setNextMonth:function(){return{type:"SET_NEXT_MONTH"}},setPreviousMonth:function(){return{type:"SET_PREVIOUS_MONTH"}}},w=Object(i.b)(function(e){var t=e.calendar;return{selectedMonth:t.selectedMonth,selectedYear:t.selectedYear}},g)(function(e){var t=e.selectedMonth,a=e.selectedYear,n=e.setNextMonth,o=e.setPreviousMonth;return r.a.createElement("div",{className:M.a.calendarHeader},r.a.createElement("button",{onClick:o},"<"),r.a.createElement("div",null,"".concat(h[t]," / ").concat(a)),r.a.createElement("button",{onClick:n},">"))}),N=a(26),D=function(){return window.innerWidth<=750},S=a(10),x=a(11),I=a(13),F=a(12),T=a(14),Y=a(9),B=a.n(Y),V=a(17),L=a(44),H=a.n(L).a.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"71537e9c0483dc4aa421eb4f7e66cdd5"}}),P=function(){var e=Object(V.a)(B.a.mark(function e(t){var a,n,r,o,c;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.options,e.prev=1,e.next=4,H.get(a,n);case 4:return r=e.sent,o=Object(N.a)(r.data.weather,1),c=o[0],e.abrupt("return",c.main);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return","");case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(V.a)(B.a.mark(function e(t){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({url:"/weather",options:{params:{q:t}}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=function(){for(var e=[],t=0;t<24;t++)for(var a=0;a<4;a++){var n=15*a;e.push(u()().hours(t).minutes(n).format("HH:mm"))}return e}(),J=function(e){return Object.keys(e).sort().reduce(function(t,a){return t.push(e[a]),t},[])},U=function(){var e=Object(V.a)(B.a.mark(function e(t){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=a(20),q=a.n(X),z=function(e){var t=e.children,a=e.onDismiss,n=e.showOverlay;return c.a.createPortal(r.a.createElement("div",{onClick:a,className:"".concat(q.a.modalContainer," ").concat(n?q.a.overlay:"")},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:q.a.modal},r.a.createElement("button",{onClick:a,className:q.a.closeButton},"X"),t)),document.getElementById("rootModal"))},G=a(3),Q=a.n(G),Z=function(e){var t=e.onColorClick,a=e.selectedColor,n=e.colors;return r.a.createElement("div",{className:Q.a.colorsContainer},n.map(function(e){return r.a.createElement("div",{key:e,style:{backgroundColor:e},className:"".concat(Q.a.colorItem," ").concat(a===e?Q.a.active:""),onClick:function(){return t(e)}})}))},K=function(e){var t=e.type,a=e.onChange,n=e.value,o=e.options,c=e.errorState,i=e.disabled;switch(t){case"multilineText":return r.a.createElement("textarea",{className:"".concat(Q.a.field," ").concat(c?Q.a.fieldError:""),cols:"30",rows:"10",value:n,onChange:a,maxLength:"30",disabled:i});case"colorPicker":return r.a.createElement("div",{style:{padding:"1em"},className:"".concat(Q.a.field," ").concat(c?Q.a.fieldError:"")},r.a.createElement(Z,{colors:o,onColorClick:a,selectedColor:n,errorState:c,disabled:i}));case"timePicker":return r.a.createElement("select",{value:n,onChange:a,className:Q.a.field,disabled:i},o.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}));default:return r.a.createElement("input",{className:"".concat(Q.a.field," ").concat(c?Q.a.fieldError:""),type:t,value:n,onChange:a,disabled:i})}},$=function(e){var t=e.title,a=e.type,n=e.value,o=e.onChange,c=e.options,i=e.errorState,l=e.disabled;return r.a.createElement("label",{className:Q.a.fieldLabel},t,r.a.createElement(K,{type:a,value:n,onChange:o,options:c,errorState:i,disabled:l}))},ee=a(45),te=function(e){function t(e){var a;Object(S.a)(this,t),(a=Object(I.a)(this,Object(F.a)(t).call(this,e))).onInputChange=function(e,t){a.setState(function(a){return{formValues:Object(s.a)({},a.formValues,Object(_.a)({},e,t))}})},a.fieldsValid=function(){var e=a.state.formValues,t=e.text,n=e.city,r=e.color,o={city:""===n.trim(),text:""===t.trim(),color:""===r.trim()},c=Object.keys(o).reduce(function(e,t){return e&&!o[t]},!0);return c||a.setState({formErrors:o}),c},a.onSubmitForm=function(e){e.preventDefault(),a.setState({formErrors:{text:!1,color:!1,city:!1}},Object(V.a)(B.a.mark(function e(){var t,n,r,o,c,i,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.fieldsValid()){e.next=7;break}return t=a.props,n=t.isCreation,r=t.addReminder,o=t.editReminder,c=t.removeReminder,i=t.onConfirmSuccess,e.next=4,U(a.state.formValues.city);case 4:l=e.sent,n?r(Object(s.a)({},a.state.formValues,{forecast:l})):(c(a.props.originalReminder),o(Object(s.a)({},a.state.formValues,{forecast:l}))),i();case 7:case"end":return e.stop()}},e)})))};var n=a.props.reminder?Object(s.a)({},a.props.reminder):{text:"",color:"",city:"",time:"00:00",date:a.props.date||u()()};return a.state={formValues:n,formErrors:{text:!1,color:!1,city:!1}},a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.formErrors,n=t.formValues,o=n.text,c=n.color,i=n.city,l=n.time,d=n.date;return r.a.createElement("div",{className:Q.a.reminderForm},r.a.createElement("h2",null,this.props.isCreation?"Create Reminder":"Edit Reminder"),r.a.createElement("form",{className:Q.a.form,onSubmit:this.onSubmitForm},r.a.createElement($,{title:"Date",value:d.format("YYYY-MM-DD"),onChange:function(t){return e.onInputChange("date",u()(t.target.value))},type:"date",disabled:void 0!==this.props.originalReminder}),r.a.createElement($,{title:"Time",value:l,onChange:function(t){return e.onInputChange("time",t.target.value)},type:"timePicker",options:A}),r.a.createElement($,{title:"Text",value:o,onChange:function(t){return e.onInputChange("text",t.target.value)},type:"multilineText",errorState:a.text}),r.a.createElement($,{title:"City",value:i,onChange:function(t){return e.onInputChange("city",t.target.value)},type:"text",errorState:a.city}),r.a.createElement($,{title:"Color",value:c,onChange:function(t){return e.onInputChange("color",t)},options:ee,type:"colorPicker",errorState:a.color}),r.a.createElement("button",{className:Q.a.reminderConfirm},"Confirm")))}}]),t}(r.a.Component),ae={addReminder:function(e){return{type:"ADD_REMINDER",payload:e}},editReminder:function(e){return{type:"EDIT_REMINDER",payload:e}},removeReminder:function(e){return{type:"REMOVE_REMINDER",payload:e}}},ne=Object(i.b)(function(e,t){return t.originalReminder?{reminder:t.originalReminder,isCreation:!1}:{isCreation:!0}},ae)(te),re=a(21),oe=a(22),ce=a(25),ie=a.n(ce),le=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},a.onShowReminderForm=function(e){e.stopPropagation(),a.setState({modalOpen:!0})},a.onHideReminderForm=function(){a.setState({modalOpen:!1})},a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.reminder,t=e.text,a=e.color,n=e.time,o=e.city,c=e.date,i=e.forecast;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ie.a.reminderItem,style:{backgroundColor:a},onClick:this.onShowReminderForm},r.a.createElement("p",null,r.a.createElement(re.a,{icon:oe.b}),r.a.createElement("span",null,n)),r.a.createElement("p",null,r.a.createElement(re.a,{icon:oe.d}),r.a.createElement("span",null,t)),r.a.createElement("p",null,r.a.createElement(re.a,{icon:oe.c}),r.a.createElement("span",null,o)),r.a.createElement("p",null,r.a.createElement(re.a,{icon:oe.a}),r.a.createElement("span",null,""!==i?i:"No forecast available"))),this.state.modalOpen&&r.a.createElement(z,{onDismiss:this.onHideReminderForm,showOverlay:!0},r.a.createElement(ne,{originalReminder:this.props.reminder,date:c,onConfirmSuccess:this.onHideReminderForm})))}}]),t}(r.a.Component),de=function(e){var t=e.reminders;return t.length?r.a.createElement("div",{className:ie.a.remindersList},t.map(function(e){return r.a.createElement(le,{key:e.time,reminder:e})})):null},se=a(32),me=a.n(se),ue=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!0},a.renderTitle=function(){var e=a.props,t=e.date,n=e.reminders.length,r=1===n?"reminder":"reminders";return"".concat(t.format("MM/DD/YYYY")," (").concat(n," ").concat(r,")")},a.onDismissReminderForm=function(){a.setState({visible:!0})},a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this,t=this.props.reminders;return this.state.visible?r.a.createElement("div",{className:me.a.dayRemindersModal},r.a.createElement("h3",null,this.renderTitle()),r.a.createElement("div",null,r.a.createElement(de,{reminders:t})),r.a.createElement("button",{className:me.a.addButton,onClick:function(){return e.setState({visible:!1})}},"+")):r.a.createElement(z,{onDismiss:this.onDismissReminderForm},r.a.createElement(ne,{date:this.props.date,onConfirmSuccess:this.onDismissReminderForm}))}}]),t}(r.a.Component),pe=Object(i.b)(function(e,t){var a=e.reminders,n=t.date,r=a[n.year()]&&a[n.year()][n.month()]&&a[n.year()][n.month()][n.date()]?a[n.year()][n.month()][n.date()]:{};return{reminders:J(r)}},null)(ue),fe=a(7),ye=a.n(fe),he=function(e){var t=e.onDayClick,a=e.isFromCurrentMonth,n=e.date,o=e.reminders;return r.a.createElement("div",{className:"".concat(ye.a.calendarItem," ").concat(a?"":ye.a.inactive),onClick:t},r.a.createElement("div",{className:"".concat(ye.a.dayNumber," ").concat(0===n.diff(y,"days")?ye.a.today:"")},r.a.createElement("span",null,n.date())),r.a.createElement(de,{reminders:o}))},ve=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},a.onDayClick=function(){a.openModal()},a.openModal=function(){a.setState({modalOpen:!0})},a.closeModal=function(){a.setState({modalOpen:!1})},a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.isFromCurrentMonth,n=e.reminders;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{onDayClick:this.onDayClick,isFromCurrentMonth:a,reminders:n,date:t}),this.state.modalOpen&&r.a.createElement(z,{onDismiss:this.closeModal,showOverlay:!0},r.a.createElement(pe,{date:t})))}}]),t}(r.a.Component),be=Object(i.b)(function(e,t){var a=e.reminders,n=t.date,r=a[n.year()]&&a[n.year()][n.month()]&&a[n.year()][n.month()][n.date()]?a[n.year()][n.month()][n.date()]:{};return{reminders:J(r)}},null)(ve),Ee=function(e){var t=e.week;return r.a.createElement("div",{className:ye.a.calendarWeekRow},t.map(function(e){var t=e.date,a=e.isFromCurrentMonth;return r.a.createElement(be,{key:"".concat(t.date(),"_").concat(t.month(),"_").concat(t.year()),date:t,isFromCurrentMonth:a})}))},_e=Object(i.b)(function(e){var t=e.calendar,a=t.selectedMonth,n=t.selectedYear;return{weeks:b({month:a,year:n})}},null)(function(e){var t=e.weeks,a=function(){var e=Object(n.useState)(D()),t=Object(N.a)(e,2),a=t[0],r=t[1],o=function(){r(D())};return Object(n.useEffect)(function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}},[]),a}()?v.shortNames:v.fullNames;return r.a.createElement("div",{className:ye.a.calendarBody},r.a.createElement("div",{className:ye.a.calendarDaysTitleContainer},a.map(function(e){return r.a.createElement("div",{className:ye.a.dayTitle,key:e},e)})),r.a.createElement("div",{className:ye.a.calendarWeeksContainer},t.map(function(e,t){return r.a.createElement(Ee,{key:t,week:e})})))}),Oe=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},r.a.createElement(w,null),r.a.createElement(_e,null))};a(75);c.a.render(r.a.createElement(i.a,{store:R},r.a.createElement(Oe,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f4cd61bc.chunk.js.map