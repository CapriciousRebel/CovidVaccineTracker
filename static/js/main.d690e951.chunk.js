(this.webpackJsonpcovidvaccinetracker=this.webpackJsonpcovidvaccinetracker||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(11),r=n.n(s),i=(n(81),n(70)),l=n(12),o=(n(82),n(141)),j=n(142),b=n(143),u=n.p+"static/media/logo192.5c9b380d.png",d=n(2),p=function(){return Object(d.jsx)(o.a,{style:{backgroundColor:"#0CB8CF"},className:"h-10",children:Object(d.jsxs)(j.a,{className:"d-flex align-items-center justify-content-center h-100",children:[Object(d.jsx)(b.a,{xs:3,className:"d-flex flex-row align-items-center justify-content-center",children:Object(d.jsx)("img",{alt:"Covid Vaccine Tracker",src:u,height:"40",width:"40",className:"d-inline-block align-top"})}),Object(d.jsx)(b.a,{xs:9,children:Object(d.jsx)("h2",{children:"Covid Vaccine Tracker"})})]})})},h=n(22),m=n(68),f=n.n(m),O=n(67),x=n.n(O),y=n(71),v=n(149),g=function(e){return Object(d.jsxs)(b.a,{className:"w-10rem p-3 m-0 d-flex flex-column align-items-center ",children:[Object(d.jsx)(v.a,{checked:e.type[e.name],onChange:function(t){var n=Object(y.a)({},e.type);n[t.target.name]=t.target.checked,e.setType(n)},name:e.name,color:"primary",size:"medium"}),Object(d.jsx)("p",{className:"w-10rem p-0 m-0 text-center font-weight-bold",children:e.name})]})},w=function(e){return Object(d.jsx)(o.a,{fluid:!0,children:Object(d.jsxs)(j.a,{className:"border-bottom",children:[Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"Covaxin"}),Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"Covishield"}),Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"Free"}),Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"Paid"}),Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"18+"}),Object(d.jsx)(g,{type:e.type,setType:e.setType,name:"45+"})]})})},C=function(e){var t=Object(c.useState)(!1),n=Object(h.a)(t,2),a=n[0],s=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(o.a,{className:"d-flex align-items-center justify-content-center border-bottom",onClick:function(){s(!a)},children:[Object(d.jsx)("h5",{className:"m-0",children:"Filters"}),a?Object(d.jsx)(x.a,{fontSize:"large"}):Object(d.jsx)(f.a,{fontSize:"large"})]}),a?Object(d.jsx)(w,{type:e.filterType,setType:e.setFilterType}):null]})},T=n(28),N=n.n(T),S=n(43),k=n(150),F=n(147),_=n(148),E=n(69),z=n.n(E),D=function(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()};var I=function(){var e=Object(S.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(t,"&date=").concat(D()),e.abrupt("return",z.a.get(n,{}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(h.a)(r,2),l=i[0],u=i[1],p=Object(c.useState)(null),m=Object(h.a)(p,2),f=m[0],O=m[1],x=function(){var t=Object(S.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("requesting: ",a),I(a).then((function(t){0!==(t=t.data.centers).length?e.setFetchedCenters(t):e.setFetchedCenters(null)})).catch((function(t){console.log("Error while fetching data for pincode: ",t),e.setFetchedCenters(null)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(S.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setSubmitOnce(!0),u(a),x(),f&&clearInterval(f),O(setInterval(x,5e3));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(o.a,{className:"d-flex flex-column align-items-center",children:[Object(d.jsxs)(b.a,{className:"w-15rem pt-5",children:[Object(d.jsx)(j.a,{children:Object(d.jsx)(_.a,{id:"standard-basic",label:"Enter an Indian pincode...",onChange:function(e){return function(e){s(e.target.value)}(e)},onKeyDown:function(e){"Enter"===e.key&&y()}})}),Object(d.jsx)(j.a,{className:"mt-5 w-10rem",children:Object(d.jsx)(k.a,{variant:"primary",type:"submit",onClick:y,className:" align-self-center",children:"Submit"})})]}),e.submitOnce&&a?Object(d.jsxs)(j.a,{className:"d-flex align-items-start my-5 py-2 border-top border-bottom",children:[Object(d.jsx)(b.a,{xs:1,children:Object(d.jsx)(F.a,{size:"sm",animation:"grow"})}),Object(d.jsx)(b.a,{children:Object(d.jsxs)("p",{className:"m-0",children:["Tracking for pincode: ",l]})})]}):null]})},P=function(e){return Object(d.jsxs)(j.a,{className:"border-bottom",onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}("https://www.cowin.gov.in/home")},children:[Object(d.jsx)(b.a,{xs:6,className:"border-right",children:e.name}),Object(d.jsx)(b.a,{children:e.available_capacity}),Object(d.jsx)(b.a,{children:e.date})]})},q=function(e){var t=function(){var t=[];return e.fetchedCenters.forEach((function(n){n.sessions.forEach((function(c){var a,s,r;0!==c.available_capacity&&(r=n.fee_type,e.filterType[r]&&(s=c.vaccine,e.filterType[s.charAt(0)+s.substring(1).toLowerCase()])&&(a=c.min_age_limit,e.filterType[a+"+"])&&t.push({name:n.name,available_capacity:c.available_capacity,date:c.date.split("-")[0]+"/"+c.date.split("-")[1]}))}))})),t};return Object(c.useEffect)((function(){console.log("centers mounted")})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(j.a,{className:"border-bottom",children:[Object(d.jsx)(b.a,{xs:6,children:Object(d.jsx)("p",{className:"font-weight-bold",children:"Name"})}),Object(d.jsx)(b.a,{children:"Capacity"}),Object(d.jsx)(b.a,{children:"Date"})]}),e.fetchedCenters&&0!==t().length?t().map((function(e,t){return Object(d.jsx)(P,{name:e.name,available_capacity:e.available_capacity,date:e.date},t)})):Object(d.jsx)("h3",{className:"m-0",children:"No slots available right now satisfying the requirements, you'll be notified when slots are found..."})]})},A=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(h.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(!1),b=Object(h.a)(j,2),u=b[0],p=b[1],m=Object(c.useState)({Covishield:!0,Covaxin:!0,Free:!0,Paid:!0,"18+":!0,"45+":!0}),f=Object(h.a)(m,2),O=f[0],x=f[1];return Object(c.useEffect)((function(){console.log("fetchedCenters: ",n)}),[n]),Object(c.useEffect)((function(){console.log("availableSessions: ",i)}),[i]),Object(d.jsxs)(o.a,{fluid:!0,children:[Object(d.jsx)(C,{filterType:O,setFilterType:x}),Object(d.jsx)(B,{fetchedCenters:n,setFetchedCenters:a,submitOnce:u,setSubmitOnce:p}),u?Object(d.jsx)(q,{fetchedCenters:n,filterType:O,availableSessions:i,setAvailableSessions:l}):null]})};var J=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)("div",{className:"h-10",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{className:"h-90",children:Object(d.jsx)(l.a,{exact:!0,path:"/",component:A})})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))},81:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.d690e951.chunk.js.map