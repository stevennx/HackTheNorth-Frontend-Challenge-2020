(this["webpackJsonphackthenorth-frontend-challenge-2020"]=this["webpackJsonphackthenorth-frontend-challenge-2020"]||[]).push([[0],{26:function(n,e,t){n.exports=t.p+"static/media/not_hack_the_north.e2d8cdc9.png"},55:function(n,e,t){n.exports=t(85)},60:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(24),c=t.n(o),i=(t(60),t(15)),u=t(17),l=t(3),s=t(4);function p(){var n=Object(l.a)(["\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n\n  width: 450px;\n  height: 750px;\n  background: #4d3585;\n  background-color: transparent;\n  > div {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media only screen and (max-width: 450px) {\n    width: 100vw;\n    height: 100vh;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(l.a)(['\n  width: 100%;\n  height: 100%;\n  background-image: url("https://hcti.io/v1/image/9ada3f7d-280e-409f-a8f6-8d19e8ab4b9a");\n  background-position: center;\n']);return f=function(){return n},n}function d(){var n=Object(l.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n\n  min-width: 320px;\n  min-height: 700px;\n\n  * {\n    box-sizing: border-box;\n    font-family: monospace;\n  }\n"]);return d=function(){return n},n}var h=s.a.div(d()),m=s.a.div(f()),b=s.a.div(p()),v=function(n){var e=n.children,t=n.fireRippleEffect,o=Object(r.useState)({x:-1,y:-1}),c=Object(u.a)(o,2),i=c[0],l=c[1];return Object(r.useLayoutEffect)((function(){var n=function(){var n=function(){var n=$("#logo").first(),e=n.offset(),t=n.width(),r=n.height();return{x:e.left+t/2,y:e.top+r/2}}(),e=n.x,t=n.y;l({x:e,y:t})};return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),Object(r.useLayoutEffect)((function(){var n=i.x,e=i.y;if(!(n<=-1||e<=-1)){var r=$("#main");t({x:n,y:e,$background:r})}}),[t,i]),a.a.createElement(h,null,a.a.createElement(m,{id:"main"}),a.a.createElement(b,null,e))},g=function(n){return{type:"FIRE_RIPPLE_EFFECT",payload:{x:n.x,y:n.y,$background:n.$background}}},x=Object(i.b)(null,{fireRippleEffect:g})(v),E=t(30),O=t(20),w=t(26),y=t.n(w);function j(){var n=Object(l.a)(["\n  width: 100%;\n  margin-top: 15px;\n  padding: 10px 15px;\n  background-color: #1bd6bd;\n  color: white;\n  border-radius: 5px;\n  border: 1px solid #1bd6bd;\n\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n\n  :hover {\n    cursor: pointer;\n    background-color: black;\n    color: #1bd6bd;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(l.a)(["\n  margin-bottom: 12px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #20293c;\n  background-color: #20293c;\n  color: #8a9eb2;\n  outline: none;\n"]);return k=function(){return n},n}function _(){var n=Object(l.a)(["\n  line-height: 22px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 5px;\n\n  color: white;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n"]);return _=function(){return n},n}function R(){var n=Object(l.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n\n  width: 60%;\n  margin-bottom: auto;\n\n  label,\n  input {\n    display: block;\n    width: 100%;\n  }\n"]);return R=function(){return n},n}var S=s.a.form(R()),I=s.a.label(_()),L=s.a.input(k()),F=s.a.button(j()),C=a.a.memo((function(n){var e=n.loginAction,t=Object(r.useState)(""),o=Object(u.a)(t,2),c=o[0],i=o[1],l=Object(r.useState)(""),s=Object(u.a)(l,2),p=s[0],f=s[1],d=Object(O.f)();return a.a.createElement(S,{onSubmit:function(n){n.preventDefault(),e({email:c,password:p,history:d})}},a.a.createElement(I,{htmlFor:"email"},"Email"),a.a.createElement(L,{name:"email",type:"text",value:c,onChange:function(n){n.preventDefault();var e=n.target;i(e.value)}}),a.a.createElement(I,{htmlFor:"email"},"Password"),a.a.createElement(L,{name:"password",type:"password",value:p,onChange:function(n){n.preventDefault();var e=n.target;f(e.value)}}),a.a.createElement(F,{type:"submit"},"LOGIN"))})),T=Object(i.b)(null,{loginAction:function(n){var e=n.email,t=n.password;n.history;return function(n){var e=n.email,t=n.password;return"a"===e&&"b"===t}({email:e,password:t})?{type:"LOGIN_USER_SUCCESS",payload:{errorMessage:null}}:{type:"LOGIN_USER_ERROR",payload:{errorMessage:"Invalid credentials"}}}})(C);function P(){var n=Object(l.a)(["\n    font-size: 52px;\n    font-weight: 600;\n    margin: 30px 0;\n\n    color: white;\n"]);return P=function(){return n},n}function U(){var n=Object(l.a)(["\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    pointer-events: none;\n    opacity: 0.9;\n\n    margin-top: auto;\n"]);return U=function(){return n},n}function N(){var n=Object(l.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n\n    padding: 40px 20px;\n"]);return N=function(){return n},n}var A=s.a.div(N()),G=s.a.img(U()),M=s.a.span(P()),z=function(){return a.a.createElement(A,null,a.a.createElement(G,{src:y.a,alt:"",id:"logo"}),a.a.createElement(M,null,"Login"),a.a.createElement(T,null))};function D(){var n=Object(l.a)(["\n  display: inline-block;\n  color: #070a1c;\n"]);return D=function(){return n},n}function W(){var n=Object(l.a)(["\n  background-color: #1bd6bd;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  :first-child {\n    margin-right: 10px;\n  }\n"]);return W=function(){return n},n}function B(){var n=Object(l.a)([""]);return B=function(){return n},n}function J(){var n=Object(l.a)(["\n  color: #1bd6bd;\n  line-height: 30px;\n"]);return J=function(){return n},n}function Q(){var n=Object(l.a)(["\n  > span {\n    float: left;\n  }\n  > div {\n    float: right;\n  }\n"]);return Q=function(){return n},n}var Y=s.a.div(Q()),q=s.a.span(J()),H=s.a.div(B()),K=s.a.button(W()),V=s.a.span(D()),X=function(n){var e=n.hasAction,t=n.numWorkshops,o=Object(r.useState)(t),c=Object(u.a)(o,2),i=c[0],l=c[1];return a.a.createElement(Y,null,a.a.createElement(q,null,"Workshops Attended: ".concat(i)),e&&a.a.createElement(H,null,i>0&&a.a.createElement(K,{onClick:function(){return l(i-1)}},a.a.createElement(V,null,"-")),a.a.createElement(K,{onClick:function(){return l(i+1)}},a.a.createElement(V,null,"+"))))};function Z(){var n=Object(l.a)(["=\n  cursor: pointer;\n"]);return Z=function(){return n},n}function nn(){var n=Object(l.a)(["\n  > span, a {\n    line-height: 22px;\n    color: #1bd6bd;\n  }\n"]);return nn=function(){return n},n}var en=s.a.div(nn()),tn=s.a.a(Z()),rn=function(n){var e=n.companyName,t=n.companyUrl;return a.a.createElement(en,null,a.a.createElement("span",null,"Check us out @ "),a.a.createElement(tn,{href:t,target:"_blank"},e))};function an(){var n=Object(l.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n"]);return an=function(){return n},n}function on(){var n=Object(l.a)(["\n  > span,\n  a {\n    line-height: 22px;\n    color: #1bd6bd;\n  }\n"]);return on=function(){return n},n}var cn=s.a.div(on()),un=s.a.a(an()),ln=function(n){var e=n.phoneNumber;n.canCallNumber;return a.a.createElement(cn,null,a.a.createElement("span",null,"Slide into our DMs @ ",a.a.createElement(un,null,function(n){var e=(""+n).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return e?e[1]+"-"+e[2]+"-"+e[3]:null}(e))))},sn=t(49),pn=t.n(sn);function fn(){var n=Object(l.a)(["\n  > span,\n  a {\n    line-height: 22px;\n    color: #1bd6bd;\n  }\n"]);return fn=function(){return n},n}var dn=s.a.div(fn()),hn=function(n){var e=n.nextShift,t=pn()(new Date(e));return a.a.createElement(dn,null,a.a.createElement("span",null,"Next Shift is at [".concat(t.format("MMMM Do YYYY, h:mm:ss a"),"]")))};function mn(){var n=Object(l.a)(["\n  margin-top: 8px;\n  text-align: center;\n  span, a {\n    font-weight: 600 !important;\n    font-size: 16px;\n  }\n"]);return mn=function(){return n},n}var bn=s.a.div(mn()),vn=function(n){var e=n.profile;return a.a.createElement(bn,null,e.num_workshops_attended&&a.a.createElement(X,{numWorkshops:e.num_workshops_attended,hasAction:!!e.actions.find((function(n){return"attend_workshop"===n}))}),e.sponsor_company&&a.a.createElement(rn,{companyName:e.sponsor_company,companyUrl:e.sponsor_company_link}),e.phone_number&&a.a.createElement(ln,{phoneNumber:e.phone_number,canCallNumber:!!e.actions.find((function(n){return"call_phone"===n}))}),e.next_shift&&a.a.createElement(hn,{nextShift:e.next_shift}))},gn=t(50),xn=t.n(gn);function En(){var n=Object(l.a)(["\n  font-size: 18px;\n  color: #5bd7ff;\n  line-height: 30px;\n  float: left;\n  font-weight: 600 !important;\n"]);return En=function(){return n},n}function On(){var n=Object(l.a)(["\n  margin-bottom: 16px;\n  > div {\n    float: right;\n  }\n"]);return On=function(){return n},n}function wn(){var n=Object(l.a)(["\n  color: #8a9eb2;\n  font-size: 14px;\n  letter-spacing: 0.16px;\n  line-height: 24px;\n  height: 100%;\n  margin: 0;\n  padding-right: 16px;\n"]);return wn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  margin: 16px 0 8px 0;\n  max-height: 150px;\n  overflow: scroll;\n"]);return yn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  float: right;\n"]);return jn=function(){return n},n}function kn(){var n=Object(l.a)(["\n  float: left;\n  letter-spacing: 1.5px;\n"]);return kn=function(){return n},n}function _n(){var n=Object(l.a)(["\n  margin-top: 12px;\n  span {\n    color: white;\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 600;\n    opacity: 0.7;\n  }\n"]);return _n=function(){return n},n}function Rn(){var n=Object(l.a)(["\n  float: left;\n  font-size: 36px;\n  color: #0e7c9f;\n  line-height: 36px;\n  font-weight: 600 !important;\n"]);return Rn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 50%;\n  margin-top: 120px;\n  margin-bottom: auto;\n  padding: 0 50px;\n\n  display: flex;\n  flex-flow: column wrap;\n\n  div,\n  span {\n    font-weight: 500;\n  }\n"]);return Sn=function(){return n},n}var In=s.a.div(Sn()),Ln=s.a.span(Rn()),Fn=s.a.div(_n()),Cn=s.a.span(kn()),Tn=s.a.span(jn()),Pn=s.a.div(yn()),Un=s.a.p(wn()),Nn=s.a.div(On()),An=s.a.span(En()),Gn=function(n){var e=n.profile,t=Object(r.useState)(e.checked_in||!1),o=Object(u.a)(t,2),c=o[0],i=o[1];return Object(r.useEffect)((function(){i(e.checked_in||!1)}),[e]),a.a.createElement(In,null,a.a.createElement(Ln,null,e.name),a.a.createElement(Fn,null,a.a.createElement(Cn,null,e.type.toUpperCase()),a.a.createElement(Tn,null,e.id)),a.a.createElement(Pn,null,a.a.createElement(Un,null,e.bio)),a.a.createElement(Nn,null,a.a.createElement(An,null,c?"Checked In ":"Check In "),a.a.createElement(xn.a,{checked:c,onChange:function(){return i(!c)},onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch",id:"material-switch",disabled:!e.actions.find((function(n){return"check_in"===n}))})),a.a.createElement(vn,{profile:e}))};function Mn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 55px;\n  cursor: pointer;\n  border: 6px solid #5bd7ff;\n\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  &:hover {\n    width: 202px;\n    height: 202px;\n  }\n"]);return Mn=function(){return n},n}function zn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 160px;\n  background-color: #070a1c;\n  border-bottom: 6px solid #5bd7ff;\n  border-opacity: 0.5;\n"]);return zn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n\n  position: relative;\n  background-color: #070a1c;\n  border-radius: 10px;\n\n  opacity: 0.95;\n  border: 6px solid #5bd7ff;\n"]);return Dn=function(){return n},n}var $n=s.a.div(Dn()),Wn=s.a.div(zn()),Bn=s.a.img(Mn()),Jn=function(n){var e=n.profile,t=n.requestProfile;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement($n,null,a.a.createElement(Wn,null),a.a.createElement(Bn,{src:e?e.profile_pic:y.a,alt:"",id:"logo",onClick:function(){return t()}}),e&&a.a.createElement(Gn,{profile:e}))},Qn=function(){return{type:"GET_PROFILE_REQUEST",payload:{isFetching:!0}}},Yn=function(n){return{type:"GET_PROFILE_SUCCESS",payload:{isFetching:!1,profile:n,errorMessage:null}}},qn=t(23),Hn=t.n(qn),Kn=Object(i.b)((function(n){return{profile:Hn()(n,"userProfile.profile",null)}}),{requestProfile:Qn})(Jn),Vn=function(n){var e=n.isAuthenticated;return a.a.createElement(x,null,a.a.createElement(E.a,null,a.a.createElement(O.c,null,a.a.createElement(O.a,{path:"/login",component:e?Kn:z}),a.a.createElement(O.a,{path:"/profile",component:e?Kn:z}),a.a.createElement(O.a,{component:e?Kn:z}))))},Xn=Object(i.b)((function(n){return{isAuthenticated:n.userLogin.isAuthenticated}}))(Vn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Zn=t(14),ne=t(21),ee=Object(Zn.combineReducers)({userLogin:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_USER_SUCCESS":return Object(ne.a)({},n,{},e.payload,{isAuthenticated:!0});case"LOGIN_USER_ERROR":return Object(ne.a)({},n,{},e.payload,{isAuthenticated:!1});default:return n}},userProfile:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PROFILE_REQUEST":case"GET_PROFILE_SUCCESS":case"GET_PROFILE_FAILURE":return Object(ne.a)({},n,{},e.payload);default:return n}}}),te=t(53),re=t(51),ae=t(7),oe=t.n(ae),ce=t(8),ie=t(27),ue=t.n(ie),le=oe.a.mark(pe),se=oe.a.mark(fe);function pe(n){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.b)((function(){return ue.a.fire({icon:"error",title:n.payload.errorMessage,text:"Something went wrong!"})}));case 2:case"end":return e.stop()}}),le)}function fe(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.e)("FIRE_ERROR_ALERT",pe);case 2:case"end":return n.stop()}}),se)}var de=oe.a.mark(me),he=oe.a.mark(be);function me(n){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.d)({type:"FIRE_ERROR_ALERT",payload:{errorMessage:n.payload.errorMessage||""}});case 2:case"end":return e.stop()}}),de)}function be(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.e)("LOGIN_USER_ERROR",me);case 2:case"end":return n.stop()}}),he)}var ve=t(52),ge=t.n(ve),xe=function(){return ge()({method:"get",url:"https://hackthenorth.netlify.com/api/fe-challenge-attendee"})},Ee=oe.a.mark(je),Oe=oe.a.mark(ke),we=oe.a.mark(_e),ye=oe.a.mark(Re);function je(){var n,e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ce.b)(xe);case 3:if(n=t.sent,!(e=Hn()(n,"data",null))){t.next=10;break}return t.next=8,Object(ce.d)(Yn(e));case 8:t.next=12;break;case 10:return t.next=12,Object(ce.d)({type:"GET_PROFILE_FAILURE",payload:{isFetching:!1,profile:null,errorMessage:null}});case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),t.next=18,Object(ce.d)({type:"GET_PROFILE_ERROR",payload:{isFetching:!1,profile:null,errorMessage:Hn()(t.t0,"message","Network Error!")}});case 18:case"end":return t.stop()}}),Ee,null,[[0,14]])}function ke(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.b)((function(){return ue.a.fire({icon:"error",title:"Oops...",html:"<span>We asked for a profile...but they ghosted us! &#128542</span>",confirmButtonText:"Try Again!",preConfirm:function(){Ae.dispatch({type:"GET_PROFILE_REQUEST",payload:{isFetching:!0}})}})}));case 2:case"end":return n.stop()}}),Oe)}function _e(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.f)("GET_PROFILE_REQUEST",je);case 2:case"end":return n.stop()}}),we)}function Re(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.f)("GET_PROFILE_FAILURE",ke);case 2:case"end":return n.stop()}}),ye)}var Se=oe.a.mark(Le),Ie=oe.a.mark(Fe);function Le(n){var e,t;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(e=n.payload.$background).ripples({interactive:!1,resolution:400,dropRadius:0,perturbance:.005}),e.ripples("drop",n.payload.x,n.payload.y,40,.15),t=0;case 4:if(!(t<5)){r.next=11;break}return r.next=7,Object(ce.c)(1500);case 7:e.ripples("drop",n.payload.x,n.payload.y,40,.15);case 8:t++,r.next=4;break;case 11:return r.next=13,Object(ce.c)(14e3);case 13:return e.ripples("destroy"),r.next=16,Object(ce.d)(g(n.payload));case 16:case"end":return r.stop()}}),Se)}function Fe(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.f)("FIRE_RIPPLE_EFFECT",Le);case 2:case"end":return n.stop()}}),Ie)}var Ce=oe.a.mark(Te);function Te(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ce.a)([be(),fe(),_e(),Re(),Fe()]);case 2:case"end":return n.stop()}}),Ce)}var Pe=Object(te.a)(),Ue=function(){try{var n=localStorage.getItem("state");if(null===n)return;return JSON.parse(n)}catch(e){return{}}}(),Ne=Object(Zn.createStore)(ee,Ue,Object(re.composeWithDevTools)(Object(Zn.applyMiddleware)(Pe)));Ne.subscribe((function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("state",e)}catch(t){}}(Ne.getState())})),Pe.run(Te);var Ae=Ne;c.a.render(a.a.createElement(i.a,{store:Ae},a.a.createElement(Xn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.9c255597.chunk.js.map