(this["webpackJsonphackthenorth-frontend-challenge-2020"]=this["webpackJsonphackthenorth-frontend-challenge-2020"]||[]).push([[0],{26:function(n,e,t){n.exports=t.p+"static/media/not_hack_the_north.e2d8cdc9.png"},53:function(n,e,t){n.exports=t(82)},58:function(n,e,t){},82:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(24),c=t.n(o),i=(t(58),t(17)),u=t(5),l=t(6);function s(){var n=Object(u.a)(["\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n\n  width: 450px;\n  height: 750px;\n  background: #4d3585;\n  background-color: transparent;\n  > div {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media only screen and (max-width: 450px) {\n    width: 100vw; \n    height: 100vh;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(u.a)(['\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: url("https://hcti.io/v1/image/90c90c06-1674-485e-917b-2d9ead6d6bcd");\n\n  min-width: 320px;\n  min-height: 700px;\n\n  * {\n    box-sizing: border-box;\n    font-family: monospace;\n  }\n']);return p=function(){return n},n}var f=l.a.div(p()),d=l.a.div(s()),h=function(n){var e=n.children;return Object(r.useLayoutEffect)((function(){var n=function(){var n=$("#logo").first(),e=n.offset(),t=n.width(),r=n.height();return{x:e.left+t/2,y:e.top+r/2}}(),e=n.x,t=n.y,r=$("#main");r.ripples({interactive:!1,resolution:400,dropRadius:40,perturbance:.15}),r.ripples("drop",e,t,40,.15)}),[]),a.a.createElement(f,{id:"main"},a.a.createElement(d,null,e))},b=t(30),m=t(19),g=t(26),v=t.n(g),x=t(23);function E(){var n=Object(u.a)(["\n  width: 100%;\n  margin-top: 15px;\n  padding: 10px 15px;\n  background-color: rgb(70, 153, 179);\n  color: white;\n  border-radius: 5px;\n  border: 1px solid rgb(70, 153, 179);\n\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n\n  :hover {\n    cursor: pointer;\n    background-color: black;\n    color: rgb(70, 153, 179);\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #20293c;\n  background-color: #20293c;\n  color: #8a9eb2;\n  outline: none;\n"]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n  line-height: 22px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 5px;\n\n  color: white;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n"]);return w=function(){return n},n}function j(){var n=Object(u.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n\n  width: 60%;\n  margin-bottom: auto;\n\n  label,\n  input {\n    display: block;\n    width: 100%;\n  }\n"]);return j=function(){return n},n}var y=l.a.form(j()),R=l.a.label(w()),_=l.a.input(O()),k=l.a.button(E()),S=a.a.memo((function(n){var e=n.loginAction,t=Object(r.useState)(""),o=Object(x.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)(""),l=Object(x.a)(u,2),s=l[0],p=l[1],f=Object(m.f)();return a.a.createElement(y,{onSubmit:function(n){n.preventDefault(),e({email:c,password:s,history:f})}},a.a.createElement(R,{htmlFor:"email"},"Email"),a.a.createElement(_,{name:"email",type:"text",value:c,onChange:function(n){n.preventDefault();var e=n.target;i(e.value)}}),a.a.createElement(R,{htmlFor:"email"},"Password"),a.a.createElement(_,{name:"password",type:"password",value:s,onChange:function(n){n.preventDefault();var e=n.target;p(e.value)}}),a.a.createElement(k,{type:"submit"},"LOGIN"))})),I=Object(i.b)(null,{loginAction:function(n){var e=n.email,t=n.password;n.history;return function(n){var e=n.email,t=n.password;return"a"===e&&"b"===t}({email:e,password:t})?{type:"LOGIN_USER_SUCCESS",payload:{errorMessage:null}}:{type:"LOGIN_USER_ERROR",payload:{errorMessage:"Invalid credentials"}}}})(S);function L(){var n=Object(u.a)(["\n    font-size: 48px;\n    font-weight: 600;\n    margin: 20px 0;\n\n    color: white;\n"]);return L=function(){return n},n}function F(){var n=Object(u.a)(["\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    pointer-events: none;\n    opacity: 0.9;\n\n    margin-top: auto;\n"]);return F=function(){return n},n}function T(){var n=Object(u.a)(["\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n\n    padding: 40px 20px;\n"]);return T=function(){return n},n}var P=l.a.div(T()),U=l.a.img(F()),G=l.a.span(L()),A=function(){return a.a.createElement(P,null,a.a.createElement(U,{src:v.a,alt:"",id:"logo"}),a.a.createElement(G,null,"Login"),a.a.createElement(I,null))};function C(){var n=Object(u.a)(["\n    display: inline-block;\n    width: 60%;\n    height: 30px;\n"]);return C=function(){return n},n}function M(){var n=Object(u.a)(["\n    margin-top: 20px; \n    text-align: center;\n"]);return M=function(){return n},n}var N=l.a.div(M()),z=l.a.button(C()),q=function(){return a.a.createElement(N,null,a.a.createElement(z,null,"Some Action"))};function D(){var n=Object(u.a)(["\n  font-size: 12px;\n  color: white;\n"]);return D=function(){return n},n}function J(){var n=Object(u.a)(["\n  color: #8a9eb2;\n  font-size: 14px;\n  letter-spacing: 0.16px;\n  line-height: 24px;\n  height: 100%;\n  margin: 0;\n"]);return J=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin: 20px 0;\n  max-height: 150px;\n  overflow: scroll;\n"]);return Q=function(){return n},n}function W(){var n=Object(u.a)(["\n  float: right;\n"]);return W=function(){return n},n}function B(){var n=Object(u.a)(["\n  float: left;\n  letter-spacing: 1.5px;\n"]);return B=function(){return n},n}function H(){var n=Object(u.a)(["\n  margin-top: 8px;\n  span {\n    color: white;\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 600;\n    opacity: 0.7;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  float: left;\n  font-size: 36px;\n  color: #1bd6bd;\n  line-height: 36px;\n"]);return K=function(){return n},n}function V(){var n=Object(u.a)(["\n  width: 100%;\n  height: 50%;\n  margin-top: 130px;\n  padding: 0 50px;\n\n  display: flex;\n  flex-flow: column wrap;\n\n  div,\n  span {\n    font-weight: 500;\n  }\n"]);return V=function(){return n},n}var X=l.a.div(V()),Y=l.a.span(K()),Z=l.a.div(H()),nn=l.a.span(B()),en=l.a.span(W()),tn=l.a.div(Q()),rn=l.a.p(J()),an=l.a.div(D()),on=function(n){var e=n.profile,t=n.requestProfile,o=Object(r.useState)(e&&e.checked_in||!1),c=Object(x.a)(o,2),i=c[0];c[1];return Object(r.useEffect)((function(){t()}),[]),a.a.createElement(X,null,a.a.createElement(Y,null,e&&e.name),a.a.createElement(Z,null,a.a.createElement(nn,null,e&&e.type.toUpperCase()),a.a.createElement(en,null,e&&e.id)),a.a.createElement(tn,null,a.a.createElement(rn,null,e&&e.bio)),a.a.createElement(an,null,"Checked In: ","".concat(i)),a.a.createElement(q,null))};function cn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 90px;\n  cursor: pointer;\n\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  &:hover {\n    box-shadow: 0px 4px 8px #1bd6bd;\n    width: 202px;\n    height: 202px;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(u.a)(["\n  width: 100%;\n  height: 25%;\n  background-color: #070a1c;\n  border-bottom: 1px solid #1bd6bd;\n  border-opacity: 0.5;\n"]);return un=function(){return n},n}function ln(){var n=Object(u.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n\n  position: relative;\n  background-color: #070a1c;\n  border-radius: 10px;\n\n  opacity: 0.95;\n"]);return ln=function(){return n},n}var sn=l.a.div(ln()),pn=l.a.div(un()),fn=l.a.img(cn()),dn=function(n){var e=n.profile,t=n.requestProfile;return a.a.createElement(sn,null,a.a.createElement(pn,null),a.a.createElement(fn,{src:e?e.profile_pic:v.a,alt:"",id:"logo",onClick:function(){return t()}}),a.a.createElement(on,{profile:e,requestProfile:t}))},hn=function(){return{type:"GET_PROFILE_REQUEST",payload:{isFetching:!0}}},bn=function(n){return{type:"GET_PROFILE_SUCCESS",payload:{isFetching:!1,profile:n,errorMessage:null}}},mn=t(22),gn=Object(i.b)((function(n){return{profile:Object(mn.get)(n,"userProfile.profile",null)}}),{requestProfile:hn})(dn),vn=function(n){var e=n.isAuthenticated;return a.a.createElement(h,null,a.a.createElement(b.a,null,a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/login",component:e?gn:A}),a.a.createElement(m.a,{path:"/profile",component:e?gn:A}),a.a.createElement(m.a,{component:e?gn:A}))))},xn=Object(i.b)((function(n){return{isAuthenticated:n.userLogin.isAuthenticated}}))(vn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var En=t(14),On=t(20),wn=Object(En.combineReducers)({userLogin:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_USER_SUCCESS":return Object(On.a)({},n,{},e.payload,{isAuthenticated:!0});case"LOGIN_USER_ERROR":return Object(On.a)({},n,{},e.payload,{isAuthenticated:!1});default:return n}},userProfile:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PROFILE_REQUEST":case"GET_PROFILE_SUCCESS":case"GET_PROFILE_FAILURE":return Object(On.a)({},n,{},e.payload);default:return n}}}),jn=t(51),yn=t(49),Rn=t(7),_n=t.n(Rn),kn=t(9),Sn=t(27),In=t.n(Sn),Ln=_n.a.mark(Tn),Fn=_n.a.mark(Pn);function Tn(n){return _n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(kn.b)((function(){return In.a.fire({icon:"error",title:n.payload.errorMessage,text:"Something went wrong!"})}));case 2:case"end":return e.stop()}}),Ln)}function Pn(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.d)("FIRE_ERROR_ALERT",Tn);case 2:case"end":return n.stop()}}),Fn)}var Un=_n.a.mark(An),Gn=_n.a.mark(Cn);function An(n){return _n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(kn.c)({type:"FIRE_ERROR_ALERT",payload:{errorMessage:n.payload.errorMessage||""}});case 2:case"end":return e.stop()}}),Un)}function Cn(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.d)("LOGIN_USER_ERROR",An);case 2:case"end":return n.stop()}}),Gn)}var Mn=t(50),Nn=t.n(Mn),zn=function(){return Nn()({method:"get",url:"https://hackthenorth.netlify.com/api/fe-challenge-attendee"})},qn=_n.a.mark(Wn),Dn=_n.a.mark(Bn),Jn=_n.a.mark($n),Qn=_n.a.mark(Hn);function Wn(){var n,e;return _n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(kn.b)(zn);case 3:if(n=t.sent,!(e=Object(mn.get)(n,"data",null))){t.next=10;break}return t.next=8,Object(kn.c)(bn(e));case 8:t.next=12;break;case 10:return t.next=12,Object(kn.c)({type:"GET_PROFILE_FAILURE",payload:{isFetching:!1,profile:null,errorMessage:null}});case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),t.next=18,Object(kn.c)({type:"GET_PROFILE_ERROR",payload:{isFetching:!1,profile:null,errorMessage:Object(mn.get)(t.t0,"message","Network Error!")}});case 18:case"end":return t.stop()}}),qn,null,[[0,14]])}function Bn(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.b)((function(){return In.a.fire({icon:"error",title:"Oops...",html:"<span>We asked for a profile...but they ghosted us! &#128542</span>",confirmButtonText:"Try Again!",preConfirm:function(){ne.dispatch({type:"GET_PROFILE_REQUEST",payload:{isFetching:!0}})}})}));case 2:case"end":return n.stop()}}),Dn)}function $n(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.e)("GET_PROFILE_REQUEST",Wn);case 2:case"end":return n.stop()}}),Jn)}function Hn(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.e)("GET_PROFILE_FAILURE",Bn);case 2:case"end":return n.stop()}}),Qn)}var Kn=_n.a.mark(Vn);function Vn(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(kn.a)([Cn(),Pn(),$n(),Hn()]);case 2:case"end":return n.stop()}}),Kn)}var Xn=Object(jn.a)(),Yn=function(){try{var n=localStorage.getItem("state");if(null===n)return;return JSON.parse(n)}catch(e){return{}}}(),Zn=Object(En.createStore)(wn,Yn,Object(yn.composeWithDevTools)(Object(En.applyMiddleware)(Xn)));Zn.subscribe((function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("state",e)}catch(t){}}(Zn.getState())})),Xn.run(Vn);var ne=Zn;c.a.render(a.a.createElement(i.a,{store:ne},a.a.createElement(xn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4ab19d6c.chunk.js.map