(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(5),c=i.n(s),o=(i(12),i(2)),d=(i(13),i(7)),r=function(e,t){var i=Object(n.useState)(!1),a=Object(o.a)(i,2),s=(a[0],a[1],Object(n.useState)(null)),c=Object(o.a)(s,2),r=c[0],l=c[1],u=function(e){e.map((function(e){if(e.isIntersecting){var t=Object(d.a)({},e.target),i=Object.values(t);l(i[0].key)}}))},w=Object(n.useMemo)((function(){return e}));return Object(n.useEffect)((function(){var e=new IntersectionObserver(u,w),i=t.current;return i.map((function(t){e.observe(t)})),function(){i.map((function(t){e.unobserve(t)}))}}),[w,t]),r},l=i(6),u=i.n(l),w=i(3),m=i(1),v=function(){var e=Object(n.useState)({0:{shuldPlay:!1,link:"https://www.w3schools.com/html/mov_bbb.mp4",hide:!0}}),t=Object(o.a)(e,2),i=t[0],a=t[1],s=Object(n.useRef)([]),c=r({root:null,rootMargin:"0px",threshold:.3},s);Object(n.useEffect)((function(){if(c){var e=document.getElementById(String(c));e&&e.children[0].play()}return function(){var e=document.getElementById(String(c));e&&e.children[0].pause()}}),[s,c]);var d=function(e){if(c){var t=document.getElementById("like".concat(e));if(t)if(t.classList.contains("activated"))t.classList.remove("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"like",message:"like unClicked",data:{like:!1}}));else{var i=document.getElementById("dislike".concat(e));i&&i.classList.contains("activated")&&(i.classList.remove("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"dislike",message:"dislike unClicked",data:{dislike:!1}}))),t.classList.add("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"like",message:"like Clicked",data:{like:!0}}))}}};return Object(m.jsxs)("div",{className:"Container noScrollbar",children:[Object.values(i).map((function(e,t){return Object(m.jsxs)("div",{ref:function(e){return s.current[t]=e},id:String(t),className:" bg-gray-500 sn relative ",children:[Object(m.jsx)("video",{onLoadedData:function(){!function(e){var t=i;t[e].hide=!1,a(t)}(t)},onClick:function(e){!function(e,t){var i=document.getElementById(e);i&&(1===t.detail?(i.children[0].paused?i.children[0].play():i.children[0].pause(),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage()):2===t.detail&&d(String(e)))}(String(t),e)},className:"videoo",autoPlay:!1,height:"100%",preload:"auto",loop:!0,children:Object(m.jsx)("source",{src:e.link,type:"video/mp4"})}),Object(m.jsxs)("div",{className:"ratingOverlay",children:[Object(m.jsx)(w.d,{onClick:function(){d(String(t))},id:"like".concat(t),className:"like",size:27}),Object(m.jsx)(w.c,{onClick:function(){!function(e){if(c){var t=document.getElementById("dislike".concat(e));if(t)if(t.classList.contains("activated"))t.classList.remove("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"dislike",message:"dislike unClicked",data:{dislike:!1}}));else{var i=document.getElementById("like".concat(e));i&&i.classList.contains("activated")&&(i.classList.remove("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"like",message:"like unClicked",data:{dislike:!1}}))),t.classList.add("activated"),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"dislike",message:"dislike Clicked",data:{dislike:!0}}))}}}(String(t))},id:"dislike".concat(t),className:"dislike",size:27}),Object(m.jsx)(w.b,{onClick:function(){!function(e){c&&document.getElementById("comment".concat(e))&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"comments",message:"comments Clicked",data:{}}))}(String(t))},id:"comment".concat(t),className:"comment",size:27}),Object(m.jsx)(w.a,{onClick:function(){!function(e){c&&document.getElementById("description".concat(e))&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"description",message:"description Clicked",data:{}}))}(String(t))},id:"description".concat(t),className:"description",size:27})]}),Object(m.jsx)("div",{id:"userDescription".concat(t),className:"UserDescriptionOverlay",onClick:function(){return function(e){console.log("ok"),c&&document.getElementById("userDescription".concat(e))&&window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({type:"userDescription",message:"userDescription Clicked",data:{}}))}(String(t))},children:Object(m.jsx)("span",{children:"James Steven Donaldson (born May 7, 1998), better known by his online alias MrBeast (formerly MrBeast6000), is an American YouTuber, businessman, and philanthropist. He has been credited with pioneering a genre of YouTube videos that center on expensive stunts."})})]},t)})),Object(m.jsx)("div",{className:"loadingOverlay w-screen",children:Object(m.jsx)(u.a,{type:"cylon",color:"gray",className:"loader "})})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);