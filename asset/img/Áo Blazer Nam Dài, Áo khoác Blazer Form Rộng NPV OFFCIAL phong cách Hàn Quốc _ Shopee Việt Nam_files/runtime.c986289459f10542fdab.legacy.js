!function(){"use strict";var e,t,n,r,o={},a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return o[e].call(t.exports,t,t.exports,i),t.exports}i.m=o,i.x=function(){},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"rcmd/"+({17:"HomeDailyDiscoverMain",241:"HomeDailyDiscoverCustomCampaign",739:"HomeDailyDiscoverCampaign"}[e]||e)+"."+{17:"d22725a812e862145767",69:"7eab927ee010f1bd122e",71:"2825569c4e0da9bfdaf9",241:"66fe33230cefdaebe644",687:"661dd225c13340708b08",739:"91ef316a0adbc579ee5c",740:"b300a5f401d9038caec1"}[e]+".legacy.js"},i.miniCssF=function(e){return"rcmd/"+({17:"HomeDailyDiscoverMain",106:"pcmall-rcmd-cart-ymal",241:"HomeDailyDiscoverCustomCampaign",688:"pcmall-rcmd-flash-sale-sold-out-page",739:"HomeDailyDiscoverCampaign",785:"pcmall-rcmd-pdp-ftss",971:"pcmall-rcmd-cart-ymal-page",972:"pcmall-rcmd-daily-discover-module"}[e]||e)+"."+{17:"56f890da0cd301827260",88:"0e09b2664e398cd698aa",106:"e1197387388919b5faca",241:"56f890da0cd301827260",687:"865c9687802f2d4123ec",688:"f53200c14c90fa6d5365",739:"56f890da0cd301827260",785:"5224f774818b50cbbbf7",971:"0b9a1c5505054ae01e76",972:"4e47bb0b71967911284e"}[e]+".legacy.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="@shopee/pcmall-rcmd:",i.l=function(n,r,o,a){if(e[n])e[n].push(r);else{var c,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",t+o),c.src=n),e[n]=[r];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),l&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},self["mfeStartuppcmall-rcmd"]=function(){var e=i.x;i.x=function(){var t=self.mfeModules=self.mfeModules||[];(t.s=t.s||[]).push(["pcmall-rcmd",i]),e&&e(),i.x=function(){}}},i.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/",n=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,o.parentNode.removeChild(o),r(l)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},i.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{17:1,241:1,687:1,739:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0},t=[];i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}};var n=function(){},r=function(r,o){for(var a,c,l=o[0],u=o[1],f=o[2],d=o[3],s=0,m=[];s<l.length;s++)c=l[s],i.o(e,c)&&e[c]&&m.push(e[c][0]),e[c]=0;for(a in u)i.o(u,a)&&(i.m[a]=u[a]);for(f&&f(i),r&&r(o);m.length;)m.shift()();return d&&t.push.apply(t,d),n()},o=self.wpJsonpPcmallRcmd=self.wpJsonpPcmallRcmd||[];function a(){for(var n,r=0;r<t.length;r++){for(var o=t[r],a=!0,c=1;c<o.length;c++){var l=o[c];0!==e[l]&&(a=!1)}a&&(t.splice(r--,1),n=i(i.s=o[0]))}return 0===t.length&&(i.x(),i.x=function(){}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var c=i.x;i.x=function(){return i.x=c||function(){},(n=a)()}}(),i.x()}();
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-rcmd/_/runtime.c986289459f10542fdab.legacy.js.map