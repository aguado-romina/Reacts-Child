(this["webpackJsonpreacts-child"]=this["webpackJsonpreacts-child"]||[]).push([[0],{88:function(e,t,r){},89:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),c=r(27),a=r.n(c),i=r(13),o=r(3),l=r(0);var d=function(){return Object(l.jsxs)("div",{className:"bg-white overflow-hidden md:flex md:justify-center mb-6",children:[Object(l.jsx)("div",{class:"font-montserrat"}),Object(l.jsxs)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:[Object(l.jsxs)("div",{className:"sm:text-center lg:text-center",children:[Object(l.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[Object(l.jsx)("span",{className:"block xl:inline",children:"Welcome "}),Object(l.jsxs)("span",{className:"block text-indigo-600 xl:inline",children:["to Paw's Date",Object(l.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(l.jsx)("div",{className:"w-6/12 sm:w-4/12 px-4",children:Object(l.jsx)("img",{src:"https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/puppy.gif?raw=true",alt:"testing",className:"shadow rounded-full max-w-full h-auto align-middle border-none"})})})]})]}),Object(l.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(l.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"A letter written from a dog to their human."})})]}),Object(l.jsxs)("div",{className:"grid grid-cols-6",children:[Object(l.jsx)("button",{type:"submit",className:"group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:Object(l.jsx)(i.b,{to:"/signup",className:"/"===window.location.pathname||"/signup"===window.location.pathname,children:"Sign Up"})}),Object(l.jsx)("button",{type:"submit",className:"group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:Object(l.jsx)(i.b,{to:"/login",className:"/"===window.location.pathname||"/login"===window.location.pathname,children:"Login"})})]})]})]})},u=r(5),m=r(46),j=r(19),b=r(6),p="UPDATE_PROFILE",x="SET_CURRENT_PROFILE",h="ADD_PROFILE",f="LOADING",O="ADD_MATCH",g="REMOVE_MATCH",v=Object(s.createContext)(),y=v.Provider,N=function(e,t){switch(t.type){case x:return Object(b.a)(Object(b.a)({},e),{},{currentProfile:t.profile,loading:!1});case p:return Object(b.a)(Object(b.a)({},e),{},{profiles:Object(j.a)(t.profiles),loading:!1});case h:return Object(b.a)(Object(b.a)({},e),{},{profiles:[t.profile].concat(Object(j.a)(e.profiles)),loading:!1});case"REMOVE_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profiles:e.profiles.filter((function(e){return e._id!==t._id}))});case O:return Object(b.a)(Object(b.a)({},e),{},{matches:[t.profile].concat(Object(j.a)(e.matches)),loading:!1});case"UPDATE_MATCHES":return Object(b.a)(Object(b.a)({},e),{},{matches:Object(j.a)(e.matches),loading:!1});case g:return Object(b.a)(Object(b.a)({},e),{},{matches:e.matches.filter((function(e){return e._id!==t._id}))});case f:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});default:return e}},w=function(e){e.value;var t=Object(m.a)(e,["value"]),r=Object(s.useReducer)(N,{profiles:[],currentProfile:{_id:0,puppyParent:"",puppyName:"",puppyImage:"",bio:"",breed:"",age:""},matches:[],loading:!1}),n=Object(u.a)(r,2),c=n[0],a=n[1];return Object(l.jsx)(y,Object(b.a)({value:[c,a]},t))},_=function(){return Object(s.useContext)(v)},E=r(14),S=r.n(E),C=function(e){return S.a.get("/api/profiles/"+e)},P=function(e){return S.a.put("/api/profiles/"+e)},k=function(e){return S.a.post("/api/profiles",e)};var R=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Cover photo"}),Object(l.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:Object(l.jsxs)("div",{className:"space-y-1 text-center",children:[Object(l.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:Object(l.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(l.jsxs)("div",{className:"flex text-sm text-gray-600",children:[Object(l.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[Object(l.jsx)("span",{children:"Upload a file"}),Object(l.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only"})]}),Object(l.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),Object(l.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})},T=r(44);r(73);r(75).config();var A=T.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID}),F=n.a.createContext(),D=function(e){var t=e.children,r=Object(s.useState)(null),n=Object(u.a)(r,2),c=n[0],a=n[1],i=Object(s.useState)(!0),o=Object(u.a)(i,2),d=o[0],m=o[1];return Object(s.useEffect)((function(){A.auth().onAuthStateChanged((function(e){a(e),m(!1)}))}),[]),d?Object(l.jsx)(l.Fragment,{children:"Loading..."}):Object(l.jsx)(F.Provider,{value:{currentUser:c},children:t})};var I=function(){var e=Object(s.useContext)(F).currentUser,t=Object(s.useRef)(),r=Object(s.useRef)(),n=Object(s.useRef)(),c=Object(s.useRef)(),a=Object(s.useRef)(),i=_(),o=Object(u.a)(i,2),d=o[0],m=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"hidden sm:block","aria-hidden":"true",children:Object(l.jsx)("div",{className:"py-5",children:Object(l.jsx)("div",{className:"border-t border-gray-200"})})}),Object(l.jsx)("div",{className:"mt-10 sm:mt-0",children:Object(l.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[Object(l.jsx)("div",{className:"md:col-span-1",children:Object(l.jsxs)("div",{className:"px-4 sm:px-0",children:[Object(l.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Profile"}),Object(l.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"Make a Profile So You Can Start Matching."})]})}),Object(l.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(l.jsx)("form",{action:"#",method:"POST",children:Object(l.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(l.jsxs)("div",{className:"px-4 py-5 bg-white sm:p-6",children:[Object(l.jsx)(R,{}),Object(l.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(l.jsx)("label",{htmlFor:"puppy_parent",className:"block text-sm font-medium text-gray-700",children:"My Human"}),Object(l.jsx)("input",{required:!0,ref:t,type:"text",name:"puppy_parent",id:"puppy_parent",autoComplete:"given-name",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(l.jsx)("label",{htmlFor:"puppy_name",className:"block text-sm font-medium text-gray-700",children:"My Name"}),Object(l.jsx)("input",{required:!0,ref:r,type:"text",name:"puppy_name",id:"puppy_name",autoComplete:"puppyName",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6",children:[Object(l.jsx)("label",{htmlFor:"puppy_bio",className:"block text-sm font-medium text-gray-700",children:"About Me"}),Object(l.jsx)("input",{ref:a,type:"text",name:"puppy_bio",id:"puppy_bio",autoComplete:"puppyBio",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[Object(l.jsx)("label",{htmlFor:"puppy_breed",className:"block text-sm font-medium text-gray-700",children:"What I am"}),Object(l.jsx)("input",{ref:n,type:"text",name:"puppy_breed",id:"puppy_breed",autoComplete:"breed",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[Object(l.jsx)("label",{htmlFor:"puppy_age",className:"block text-sm font-medium text-gray-700",children:"How Old I Am"}),Object(l.jsx)("input",{ref:c,type:"text",name:"puppy_age",id:"puppy_age",autoComplete:"age",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]})]})]}),Object(l.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(l.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(s){s.preventDefault(),m({type:f}),k({currentUser:e.uid,puppyParent:t.current.value,puppyName:r.current.value,bio:a.current.value,breed:n.current.value,age:c.current.value}).then((function(e){m({type:h,profile:e.data})})).catch((function(e){return console.log(e)})),t.current.value="",r.current.value="",a.current.value="",n.current.value="",c.current.value=""},disabled:d.loading,children:"Create Profile"})})]})})})]})})]})};var U=function(){return Object(l.jsx)(I,{})},H=r(17),L=r.n(H),W=r(21),M=Object(o.g)((function(e){var t=e.history,r=Object(s.useState)(),n=Object(u.a)(r,2),c=n[0],a=n[1],i=Object(s.useState)(),o=Object(u.a)(i,2),d=o[0],m=o[1],j=Object(s.useCallback)(function(){var e=Object(W.a)(L.a.mark((function e(r){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,A.auth().createUserWithEmailAndPassword(c,d);case 4:t.push("/createprofile"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[t,c,d]);return Object(l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign up for an account"})}),Object(l.jsxs)("form",{onSubmit:j,className:"mt-8 space-y-6",children:[Object(l.jsx)("input",{type:"hidden",name:"remember",value:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(l.jsx)("input",{onChange:function(e){a(e.target.value)},value:c,id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(l.jsx)("input",{onChange:function(e){m(e.target.value)},value:d,id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",className:"text-white group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign Up"})})]})]})})}));var B=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(M,{})})},K=Object(o.g)((function(e){var t=e.history,r=Object(s.useState)(),n=Object(u.a)(r,2),c=n[0],a=n[1],d=Object(s.useState)(),m=Object(u.a)(d,2),j=m[0],b=m[1],p=Object(s.useCallback)(function(){var e=Object(W.a)(L.a.mark((function e(r){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,A.auth().signInWithEmailAndPassword(c,j);case 4:console.log(c),t.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t,c,j]);return Object(s.useContext)(F).currentUser?Object(l.jsx)(o.a,{to:"/profile"}):Object(l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),Object(l.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or",Object(l.jsx)(i.b,{to:"/signup",className:"/login"===window.location.pathname||"/signup"===window.location.pathname,children:"Sign Up"})]})]}),Object(l.jsxs)("form",{onSubmit:p,className:"mt-8 space-y-6",children:[Object(l.jsx)("input",{type:"hidden",name:"remember",value:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(l.jsx)("input",{onChange:function(e){a(e.target.value)},id:"email-address",value:c,name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(l.jsx)("input",{onChange:function(e){b(e.target.value)},id:"password",value:j,name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",className:"text-white group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign in"})})]})]})})}));r(39);var z=function(){return Object(l.jsx)(K,{})};function q(e){var t=e.fluid,r=e.children;return Object(l.jsx)("div",{className:"container".concat(t?"-fluid":""),children:r})}function V(e){var t=e.fluid,r=e.children;return Object(l.jsx)("div",{className:"row".concat(t?"-fluid":""),children:r})}function G(e){var t=e.size,r=e.children;return Object(l.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:r})}var Y=function(e){var t=_(),r=Object(u.a)(t,2),n=r[0],c=r[1];Object(s.useEffect)((function(){C(e.match.params.id).then((function(e){return c({type:x,profile:e.data})})).catch((function(e){return console.log(e)}))}),[]);return Object(l.jsx)(l.Fragment,{children:n.currentProfile?Object(l.jsxs)(q,{fluid:!0,children:[Object(l.jsx)(V,{children:Object(l.jsx)(G,{size:"md-12",children:Object(l.jsxs)("h1",{children:[n.currentProfile.puppyParent," with"," ",n.currentProfile.puppyName]})})}),Object(l.jsxs)(V,{children:[Object(l.jsx)(G,{size:"md-10 md-offset-1",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("h1",{children:"Content:"}),Object(l.jsx)("p",{children:n.currentProfile.body})]})}),-1!==n.matches.indexOf(n.currentProfile)?Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){c({type:g,_id:n.currentProfile._id})},children:"Remove from Favorites!"}):Object(l.jsx)("button",{className:"btn",onClick:function(){c({type:O,profile:n.currentProfile})},children:"\u2764\ufe0f Add to Favorites"})]}),Object(l.jsx)(V,{children:Object(l.jsx)(G,{size:"md-2",children:Object(l.jsx)(i.b,{to:"/",children:"\u2190 Back to Profile"})})})]}):Object(l.jsx)("div",{children:"loading..."})})},J=function(){return Object(l.jsx)(q,{fluid:!0,children:Object(l.jsx)(V,{children:Object(l.jsxs)(G,{size:"md-12",children:[Object(l.jsx)("h1",{children:"404 Page Not Found"}),Object(l.jsx)("h1",{children:Object(l.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})},Q=r(45),X=r.n(Q);var Z=function(){var e=Object(s.useContext)(F).currentUser,t=Object(s.useRef)(),r=Object(s.useRef)(),n=Object(s.useRef)(),c=Object(s.useRef)(),a=Object(s.useRef)(),i=_(),o=Object(u.a)(i,2),d=o[0],m=o[1],j=Object(s.useState)(!1),b=Object(u.a)(j,2),x=b[0],h=b[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"hidden sm:block","aria-hidden":"true",children:Object(l.jsx)("div",{className:"py-5",children:Object(l.jsx)("div",{className:"border-t border-gray-200"})})}),Object(l.jsx)("div",{className:"mt-10 sm:mt-0",children:Object(l.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[Object(l.jsx)("div",{className:"md:col-span-1",children:Object(l.jsxs)("div",{className:"px-4 sm:px-0",children:[Object(l.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Profile"}),Object(l.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"You Can Update Your Profile here"})]})}),Object(l.jsxs)("button",{onClick:function(){return h(!0)},children:[" ","+ Update Your Profile"]}),Object(l.jsx)(X.a,{isOpen:x,children:Object(l.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(l.jsxs)("div",{className:"px-4 py-5 bg-white sm:p-6",children:[Object(l.jsx)(R,{}),Object(l.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(l.jsx)("label",{htmlFor:"puppy_parent",className:"block text-sm font-medium text-gray-700",children:"My Human"}),Object(l.jsx)("input",{required:!0,ref:t,type:"text",name:"puppy_parent",id:"puppy_parent",autocomplete:"given-name",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(l.jsx)("label",{htmlFor:"puppy_name",className:"block text-sm font-medium text-gray-700",children:"My Name"}),Object(l.jsx)("input",{required:!0,ref:r,type:"text",name:"puppy_name",id:"puppy_name",autocomplete:"puppy-name",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6",children:[Object(l.jsx)("label",{htmlFor:"puppy_bio",className:"block text-sm font-medium text-gray-700",children:"About Me"}),Object(l.jsx)("input",{ref:a,type:"text",name:"puppy_bio",id:"puppy_bio",autocomplete:"puppyBio",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[Object(l.jsx)("label",{htmlFor:"puppy_breed",className:"block text-sm font-medium text-gray-700",children:"What I am"}),Object(l.jsx)("input",{ref:n,type:"text",name:"puppy_breed",id:"puppy_breed",autocomplete:"breed",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(l.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[Object(l.jsx)("label",{htmlFor:"puppy_age",className:"block text-sm font-medium text-gray-700",children:"How Old I Am"}),Object(l.jsx)("input",{ref:c,type:"text",name:"puppy_age",id:"puppy_age",autocomplete:"age",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]})]})]}),Object(l.jsxs)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:[Object(l.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(s){h(!1),s.preventDefault(),m({type:f});var i={currentUser:e.uid};P(i,{puppyParent:t.current.value,puppyName:r.current.value,bio:a.current.value,breed:n.current.value,age:c.current.value}).then((function(e){console.log("are you working??"),m({type:p,profile:e.data})})).catch((function(e){return console.log(e)})),t.current.value="",r.current.value="",a.current.value="",n.current.value="",c.current.value=""},disabled:d.loading,children:"+ Update Profile"}),Object(l.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",disabled:d.loading,onClick:function(){return h(!1)},children:"Close"})]})]})})})})]})})]})},$=Object(o.g)((function(e){var t=e.history;return Object(l.jsx)("nav",{className:"bg-gray-800",children:Object(l.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(l.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(l.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(l.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),Object(l.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})}),Object(l.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(l.jsx)("div",{className:"flex-shrink-0 flex items-center"}),Object(l.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(l.jsxs)("div",{className:"flex space-x-4",children:[Object(l.jsx)("a",{href:"#",className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Welcome"}),Object(l.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Profile"}),Object(l.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Your Matches"}),Object(l.jsx)("button",{className:"text-white group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-500",onClick:function(){return A.auth().signOut(),t.push("/")},children:"Sign out"})]})})]})]})})})})),ee=function(e){e.history;var t=Object(s.useContext)(F).currentUser;return Object(s.useEffect)((function(){S.a.get("/api/profiles/".concat(t.uid)).then((function(e){console.log(e.data)}))}),[]),console.log(t),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($,{}),Object(l.jsx)(Z,{})]})};var te=function(){return Object(l.jsx)(D,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{children:Object(l.jsx)(w,{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",component:d}),Object(l.jsx)(o.b,{exact:!0,path:"/login",component:z}),Object(l.jsx)(o.b,{exact:!0,path:"/signup",component:B}),Object(l.jsx)(o.b,{exact:!0,path:"/createprofile",component:U}),Object(l.jsx)(o.b,{exact:!0,path:"/profile",component:ee}),Object(l.jsx)(o.b,{exact:!0,path:"/profiles/:id",component:Y}),Object(l.jsx)(o.b,{component:J})]})})})})})};r(88);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(te,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.23f2cdb0.chunk.js.map