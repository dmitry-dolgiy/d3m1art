(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,n){e.exports=n(521)},460:function(e,t,n){},476:function(e,t,n){},518:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"authenticated",function(){return S}),n.d(a,"unauthenticated",function(){return A}),n.d(a,"authenticatedError",function(){return x}),n.d(a,"hideAuthenticatedError",function(){return I}),n.d(a,"signInAction",function(){return R}),n.d(a,"signOutAction",function(){return U});var r={};n.r(r),n.d(r,"auth",function(){return D});var o={};n.r(o),n.d(o,"taskValueChange",function(){return H}),n.d(o,"initSuccessListOfTask",function(){return F}),n.d(o,"removeTask",function(){return P}),n.d(o,"addTask",function(){return K}),n.d(o,"updateTask",function(){return z}),n.d(o,"onSaveTask",function(){return q}),n.d(o,"onRemoveTask",function(){return G}),n.d(o,"onUpdateTask",function(){return J});var c,i,s,u,l=n(0),p=n.n(l),m=n(24),d=n.n(m),f=n(17),h=n(19),b=n(30),v=n.n(b),g=n(45),O=n(20),j=n(21),k=n(49),E=n.n(k),y=E.a.create({baseURL:"https://quiet-dawn-70829.herokuapp.com"}),w=new(function(){function e(t){Object(O.a)(this,e),Object.assign(this,{httpService:t})}return Object(j.a)(e,[{key:"signIn",value:function(e){var t=e.email,n=e.password;return this.httpService.post("/sign-in",{email:t,password:n}).then(function(e){return e.data})}}]),e}())(y),T=n(526),C=n(44),N=n.n(C),S=Object(T.a)("AUTHENTICATED"),A=Object(T.a)("UNAUTHENTICATED"),x=Object(T.a)("AUTHENTICATION_ERROR"),I=Object(T.a)("HIDE_AUTHENTICATION_ERROR"),R=function(e){var t=e.email,n=e.password;return function(){var e=Object(g.a)(v.a.mark(function e(a){var r,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(Object(C.showLoading)()),e.next=4,w.signIn({email:t,password:n});case 4:r=e.sent,o=r.token,localStorage.setItem("user",o),a(S()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(x({error:"Invalid email or password"}));case 13:return e.prev=13,a(Object(C.hideLoading)()),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[0,10,13,16]])}));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(g.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),n(A()),e.push("/signin");case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},L=n(22),W=n(42),_=n(523),D=Object(_.a)((c={},Object(L.a)(c,S,function(e){return Object(W.a)({},e,{authenticated:!0})}),Object(L.a)(c,A,function(e){return Object(W.a)({},e,{authenticated:!1})}),Object(L.a)(c,x,function(e,t){var n=t.payload.error;return Object(W.a)({},e,{error:n})}),Object(L.a)(c,I,function(e){return Object(W.a)({},e,{error:null})}),c),{}),M=n(525).a,B=n(218),V=n(198),H=Object(T.a)("ON_TASK_VALUE_CHANGE"),F=Object(T.a)("INIT_LIST_OF_TASKS"),P=Object(T.a)("ON_REMOVE_TASK"),K=Object(T.a)("ON_ADD_TASK"),z=Object(T.a)("ON_UPDATE_TASK"),q=function(e){var t=e.task;return function(){var e=Object(g.a)(v.a.mark(function e(n){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("https://5c99023942365600143931e4.mockapi.io/api/v1/tasks",{task:t});case 2:a=e.sent,r=a.data,n(K({task:r}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},G=function(e){var t=e.id;return function(){var e=Object(g.a)(v.a.mark(function e(n){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete("https://5c99023942365600143931e4.mockapi.io/api/v1/tasks/".concat(t));case 2:a=e.sent,r=a.data,n(P({id:r.id}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=function(e){var t=e.id,n=e.state;return function(){var e=Object(g.a)(v.a.mark(function e(a){var r,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("https://5c99023942365600143931e4.mockapi.io/api/v1/tasks/".concat(t),{state:n});case 2:r=e.sent,o=r.data,a(z({task:o}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Q=Object(_.a)((i={},Object(L.a)(i,H,function(e,t){var n=t.payload.value;return Object(V.capitalize)(n)}),Object(L.a)(i,K,function(){return""}),i),""),$=Object(_.a)((s={},Object(L.a)(s,H,function(e,t){var n=t.payload.value;return!Boolean(n)}),Object(L.a)(s,K,function(){return!0}),s),!0),X=Object(_.a)((u={},Object(L.a)(u,F,function(e,t){return t.payload.tasks}),Object(L.a)(u,P,function(e,t){var n=t.payload.id;return e.filter(function(e){return e.id!==n})}),Object(L.a)(u,z,function(e,t){var n=t.payload.task;return e.map(function(e){return e.id===n.id?Object(W.a)({},n):Object(W.a)({},e)})}),Object(L.a)(u,K,function(e,t){var n=t.payload.task;return[].concat(Object(B.a)(e),[n])}),u),[]),Y=Object(f.combineReducers)({auth:D,listOfTasks:X,form:M,currentTaskValue:Q,activeStateButton:$,loadingBar:C.loadingBarReducer}),Z=n(199),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ne=n(200),ae=n(26),re=n(25),oe=n(27),ce=n(106),ie=n(56),se=n(522),ue=n(209),le=n.n(ue),pe=n(105),me=n.n(pe),de=n(208),fe=n.n(de),he=n(103),be=n.n(he),ve=n(211),ge=n.n(ve),Oe=n(102),je=n.n(Oe),ke=n(75),Ee=n.n(ke),ye=n(524),we=n(104),Te=n.n(we),Ce=n(210),Ne=n.n(Ce),Se=n(63),Ae=n.n(Se),xe=n(212),Ie=n.n(xe),Re=n(100),Ue=n.n(Re),Le=n(219),We=n(6),_e=n.n(We),De=n(201),Me=n.n(De),Be=n(203),Ve=n.n(Be),He=n(204),Fe=n.n(He),Pe=n(207),Ke=n.n(Pe),ze=n(205),qe=n.n(ze),Ge=n(206),Je=n.n(Ge),Qe=n(77),$e=n.n(Qe),Xe=n(133),Ye=n.n(Xe),Ze=n(202),et=n.n(Ze),tt=n(32),nt={success:Me.a,warning:et.a,error:Ve.a,info:Fe.a};var at=Object(tt.withStyles)(function(e){return{success:{backgroundColor:qe.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:Je.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,n=e.className,a=e.message,r=e.onClose,o=e.variant,c=Object(Le.a)(e,["classes","className","message","onClose","variant"]),i=nt[o];return p.a.createElement(Ye.a,Object.assign({className:_e()(t[o],n),"aria-describedby":"client-snackbar",message:p.a.createElement("span",{id:"client-snackbar",className:t.message},p.a.createElement(i,{className:_e()(t.icon,t.iconVariant)}),a),action:[p.a.createElement($e.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:r},p.a.createElement(Ke.a,{className:t.icon}))]},c))}),rt=n(9),ot=n.n(rt),ct=function(e){var t=e.type,n=e.input,a=e.meta.touched;return p.a.createElement(Ee.a,Object.assign({type:t,error:!n.value&&a},n))},it=function(e){var t=e.input,n=t.value,a=t.onChange,r=e.label;return p.a.createElement(je.a,{label:r,checked:n,onChange:a})},st=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(ae.a)(this,(e=Object(re.a)(t)).call.apply(e,[this].concat(r)))).hideSignInErrorMessage=function(){n.props.hideAuthenticatedError()},n}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.signInAction,a=e.errorMessage,r=e.history;return p.a.createElement("main",{className:t.main},p.a.createElement(fe.a,null),p.a.createElement(Ae.a,{className:t.paper},p.a.createElement(le.a,{className:t.avatar},p.a.createElement(Ne.a,null)),p.a.createElement(Ue.a,{component:"h1",variant:"h5"},"Sign in"),p.a.createElement("div",{className:t.form},p.a.createElement(be.a,{margin:"normal",required:!0,fullWidth:!0},p.a.createElement(Te.a,{htmlFor:"email"},"Email Address"),p.a.createElement(ye.a,{component:ct,type:"text",id:"email",name:"email",autoComplete:"email",autoFocus:!0})),p.a.createElement(be.a,{margin:"normal",required:!0,fullWidth:!0},p.a.createElement(Te.a,{htmlFor:"password"},"Password"),p.a.createElement(ye.a,{component:ct,type:"password",name:"password",id:"password"})),p.a.createElement(ge.a,{control:p.a.createElement(ye.a,{component:it,name:"remember",color:"primary"}),label:"Remember me"}),p.a.createElement(me.a,{onClick:this.props.handleSubmit(function(e){return n(e,r)}),type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign in"),p.a.createElement(Ie.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Boolean(a),autoHideDuration:5e3,onClose:this.hideSignInErrorMessage},p.a.createElement(at,{variant:"error",message:a,onClose:this.hideSignInErrorMessage})))))}}]),t}(l.Component),ut=Object(se.a)({form:"signIn"})(ot()(function(e){return{main:Object(L.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:"#0D82E4"},form:{width:"100%",marginTop:e.spacing.unit},submit:{backgroundColor:"#04A9E4","&:hover":{backgroundColor:"#1D7FE4"},marginTop:3*e.spacing.unit}}})(st)),lt=Object(h.connect)(function(e){return{errorMessage:e.auth.error}},a)(ut),pt=n(137),mt=n.n(pt),dt=n(213),ft=n(2),ht=n.n(ft),bt=function(e){var t=function(t){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(ae.a)(this,(e=Object(re.a)(n)).call.apply(e,[this].concat(r)))).PropTypes={router:ht.a.object},t}return Object(oe.a)(n,t),Object(j.a)(n,[{key:"componentWillMount",value:function(){this.props.authenticated&&this.props.history.push("/")}},{key:"componentWillUpdate",value:function(e){e.authenticated&&this.props.history.push("/")}},{key:"render",value:function(){return p.a.createElement(e,this.props)}}]),n}(l.Component);return Object(h.connect)(function(e){return{authenticated:e.auth.authenticated}})(t)},vt=(n(460),function(e){function t(){return Object(O.a)(this,t),Object(ae.a)(this,Object(re.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"getSignOutItem",value:function(){var e=this;return p.a.createElement("span",{onClick:function(){return e.props.signOutAction(e.props.history)},style:{cursor:"pointer"},className:_e()(this.props.classes.title,"bm-particle-item bm-sign-out")},"Sign out")}},{key:"render",value:function(){return p.a.createElement(dt.push,this.props,p.a.createElement("div",{className:"menu-item"},p.a.createElement(ce.b,{to:"/",className:_e()(this.props.classes.title,"bm-particle-item")},"Home"),this.getSignOutItem()))}}]),t}(l.Component)),gt={display:"inline-block",color:"#EEE",textDecoration:"none","&:hover":{color:"#9E9E9E"}},Ot=bt(Object(tt.withStyles)(function(e){return{root:{color:e.palette.text.primary},iconHover:{},title:Object(W.a)({},gt)}})(vt)),jt=Object(h.connect)(function(e){return{authenticated:e.auth.authenticated}},a)(Ot),kt=n(217),Et=n.n(kt),yt=n(76),wt=n.n(yt),Tt=n(216),Ct=n.n(Tt),Nt=n(215),St=n.n(Nt),At=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(ae.a)(this,(e=Object(re.a)(t)).call.apply(e,[this].concat(r)))).onRemoveTask=function(e){n.props.onRemoveTask({id:e})},n.onUpdateTask=function(e,t){n.props.onUpdateTask({id:e,state:t})},n}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes;return t.tasks.map(function(t){var a=t.task,r=t.state,o=t.id;return p.a.createElement("div",{className:n.icon,key:o},p.a.createElement(St.a,{transitionName:"anim",transitionAppear:!0,transitionAppearTimeout:2e3,transitionLeaveTimeout:5e3,transitionEnterTimeout:5e3,transitionEnter:!1,transitionLeave:!0},p.a.createElement(je.a,{className:n.label,checked:r,color:"primary",onClick:function(){return e.onUpdateTask(o,!r)}}),p.a.createElement(wt.a,{value:a,className:r?n.input:n.common}),p.a.createElement($e.a,{onClick:function(){return e.onRemoveTask(o)}},p.a.createElement(Ct.a,{className:n.root}))))})}}]),t}(l.Component),xt=Object(tt.withStyles)(function(e){return{common:{top:2,position:"relative"},root:{color:e.palette.text.primary},label:{color:"primary"},icon:{padding:0,marginLeft:-10,marginTop:6},input:{cursor:"pointer",textDecoration:"line-through",position:"relative",top:2}}})(At),It=(n(476),function(e){function t(){return Object(O.a)(this,t),Object(ae.a)(this,Object(re.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://5c99023942365600143931e4.mockapi.io/api/v1/tasks");case 2:t=e.sent,n=t.data,this.props.initSuccessListOfTask({tasks:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.listOfTasks,a=e.taskValueChange,r=e.currentTaskValue,o=e.activeStateButton,c=e.onSaveTask,i=e.onRemoveTask,s=e.onUpdateTask;return p.a.createElement("div",{className:t.common},p.a.createElement(Et.a,{type:"text",autoFocus:!0,className:t.input,value:r,placeholder:"Enter new task..",onChange:function(e){var t=e.target.value;return a({value:t})},onKeyPress:function(e){return"Enter"===e.key?c({task:r}):null}}),p.a.createElement(me.a,{color:"primary",className:t.button,disabled:o,onClick:function(){return c({task:r})},variant:"contained"},"Add"),p.a.createElement(xt,{className:"item-list",tasks:n,onRemoveTask:i,onUpdateTask:s}))}}]),t}(l.Component)),Rt=Object(tt.withStyles)(function(){return{common:{margin:"auto"},input:{width:180},button:{marginLeft:20}}})(It),Ut=Object(h.connect)(function(e){return{currentTaskValue:e.currentTaskValue,activeStateButton:e.activeStateButton,listOfTasks:e.listOfTasks}},o)(Rt),Lt=(n(518),function(e){function t(){return Object(O.a)(this,t),Object(ae.a)(this,Object(re.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.history;return p.a.createElement("div",{id:"main-page",className:t.root},p.a.createElement(jt,{history:n,pageWrapId:"main-page-wrap",outerContainerId:"main-page"}),p.a.createElement(mt.a,{id:"main-page-wrap",container:!0,direction:"row",justify:"center",spacing:24},p.a.createElement(mt.a,{item:!0,xs:12},p.a.createElement(Ae.a,{className:t.paper},p.a.createElement(Ut,null)))))}}]),t}(l.Component)),Wt=Object(tt.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing.unit,margin:4*e.spacing.unit,maxWidth:300,color:e.palette.text.secondary,marginLeft:95,textAlign:"center",zIndex:9999}}})(Lt),_t=Object(h.connect)(null,a)(Wt),Dt=function(e){var t=function(t){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(ae.a)(this,(e=Object(re.a)(n)).call.apply(e,[this].concat(r)))).PropTypes={router:ht.a.object},t}return Object(oe.a)(n,t),Object(j.a)(n,[{key:"componentWillMount",value:function(){this.props.authenticated||this.props.history.push("/signin")}},{key:"componentWillUpdate",value:function(e){e.authenticated||this.props.history.push("/signin")}},{key:"render",value:function(){return p.a.createElement(e,this.props)}}]),n}(l.Component);return Object(h.connect)(function(e){return{authenticated:e.auth.authenticated}},r)(t)},Mt=function(e){function t(){return Object(O.a)(this,t),Object(ae.a)(this,Object(re.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{id:"App"},p.a.createElement(N.a,{showFastActions:!0}),p.a.createElement(ce.a,{basename:"/d3m1art"},p.a.createElement(ie.a,{path:"/d3m1art/",exact:!0,component:Dt(_t)}),p.a.createElement(ie.a,{path:"/d3m1art/signin",component:bt(lt)})))}}]),t}(l.Component),Bt=Object(f.createStore)(Y,Object(Z.composeWithDevTools)(Object(f.applyMiddleware)(ne.a,Object(C.loadingBarMiddleware)())));localStorage.getItem("user")&&Bt.dispatch(S()),d.a.render(p.a.createElement(h.Provider,{store:Bt},p.a.createElement(Mt,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/d3m1art",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/d3m1art","/service-worker.js");ee?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e)}).catch(function(){console.log("No internet connection found. MainPageContainer is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):te(e)})}}()}},[[220,1,2]]]);
//# sourceMappingURL=main.b68d54a1.chunk.js.map