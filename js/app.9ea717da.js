(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ef5b4849"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"25835f2b"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-screen-application/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("8a23"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),e.allScreens.length?n("router-link",{attrs:{to:"/screens/"+e.allScreens[e.allScreens.length-1].date}},[e._v("Screenpage")]):e._e()],1),n("router-view")],1)])},o=[],c=n("5530"),u=n("2f62"),s={name:"App",computed:Object(u["c"])(["allScreens"]),methods:Object(c["a"])({},Object(u["b"])(["fetchScreens"]),{},Object(u["d"])(["UPDATE_LOADED"])),created:function(){var e=this.fetchScreens();this.UPDATE_LOADED(e)}},i=s,l=(n("034f"),n("2877")),f=n("6544"),p=n.n(f),d=n("7496"),h=Object(l["a"])(i,a,o,!1,null,null,null),m=h.exports;p()(h,{VApp:d["a"]});n("d3b7");var v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Main")],1)},g=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{align:"center",justify:"center"}},[n("h1",[e._v("SCREEN APPLICATION")])])},S=[],E={name:"Main"},_=E,O=n("a523"),w=Object(l["a"])(_,y,S,!1,null,null,null),j=w.exports;p()(w,{VContainer:O["a"]});var A={name:"Home",components:{Main:j}},P=A,T=Object(l["a"])(P,b,g,!1,null,null,null),x=T.exports;r["a"].use(v["a"]);var C=[{path:"/home",name:"Home",component:x},{path:"/screens/:screensId",name:"ScreenPage",component:function(){return n.e("about").then(n.bind(null,"83a1"))}}],D=new v["a"]({mode:"history",routes:C}),N=D,k=(n("4160"),n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1"));r["a"].use(u["a"]);var L=new u["a"].Store({state:{screens:[],loaded:null,currentScreens:[]},getters:{allScreens:function(e){return e.screens},loaded:function(e){return e.loaded},currentScreens:function(e){return e.currentScreens}},mutations:{UPDATE_SCREENS:function(e,t){e.screens=t},UPDATE_LOADED:function(e,t){e.loaded=t},UPDATE_CURRENTSCREENS:function(e,t){e.currentScreens=t}},actions:{fetchScreens:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("server/screens.json");case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent.split("\n"),a=r.map((function(e){return JSON.parse(e)})),a.forEach((function(e){var t=e.data.split(" "),n={type:t[0],x:+t[1],y:+t[2],information:t.slice(3).join(" ")};e.data=n})),e.commit("UPDATE_SCREENS",a);case 9:case"end":return t.stop()}}),t)})))()}},modules:{}}),R=n("f309");r["a"].use(R["a"]);var U=new R["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:N,store:L,vuetify:U,render:function(e){return e(m)}}).$mount("#app")},"8a23":function(e,t,n){}});
//# sourceMappingURL=app.9ea717da.js.map