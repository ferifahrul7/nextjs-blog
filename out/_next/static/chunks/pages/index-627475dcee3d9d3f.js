(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4900)}])},8045:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(c){r=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,i=e.sizes,a=e.unoptimized,l=void 0!==a&&a,d=e.priority,f=void 0!==d&&d,p=e.loading,v=e.lazyBoundary,w=void 0===v?"200px":v,x=e.className,j=e.quality,A=e.width,k=e.height,E=e.objectFit,I=e.objectPosition,_=e.onLoadingComplete,N=e.loader,P=void 0===N?z:N,D=e.placeholder,L=void 0===D?"empty":D,R=e.blurDataURL,q=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=i?"responsive":"intrinsic";"layout"in q&&(q.layout&&(C=q.layout),delete q.layout);var T="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var W=y(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(R=R||W.blurDataURL,T=W.src,(!C||"fill"!==C)&&(k=k||W.height,A=A||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}t="string"===typeof t?t:T;var B=O(A),F=O(k),H=O(j),U=!f&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,U=!1);m.has(t)&&(U=!1);0;var M,G=r(u.useIntersection({rootMargin:w,disabled:!U}),2),Q=G[0],V=G[1],X=!U||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:I},$="blur"===L?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===C)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof F){var ee=F/B,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===C?(J.display="block",J.position="relative",Y=!0,K.paddingTop=te):"intrinsic"===C?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Y=!0,K.maxWidth="100%",M='<svg width="'.concat(B,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(J.display="inline-block",J.position="relative",J.width=B,J.height=F)}else 0;var ie={src:g,srcSet:void 0,sizes:void 0};X&&(ie=S({src:t,unoptimized:l,layout:C,width:B,quality:H,sizes:i,loader:P}));var ne=t;0;0;var re=(n(b={},"imagesrcset",ie.srcSet),n(b,"imagesizes",ie.sizes),b);return o.default.createElement("span",{style:J},Y?o.default.createElement("span",{style:K},M?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(M))}):null):null,o.default.createElement("img",Object.assign({},q,ie,{decoding:"async","data-nimg":C,className:x,ref:function(e){Q(e),function(e,t,i,n,r){if(!e)return;var a=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),r){var i=e.naturalWidth,a=e.naturalHeight;r({naturalWidth:i,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,ne,0,L,_)},style:h({},Z,$)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},q,S({src:t,unoptimized:l,layout:C,width:B,quality:H,sizes:i,loader:P}),{decoding:"async","data-nimg":C,style:Z,className:x,loading:p||"lazy"}))),f?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ie.src+ie.srcSet+ie.sizes,rel:"preload",as:"image",href:ie.srcSet?void 0:ie.src},re))):null)};var o=f(i(7294)),s=f(i(5443)),c=i(6978),l=i(5809),u=i(7190);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function f(e){return e&&e.__esModule?e:{default:e}}function h(e){for(var t=arguments,i=function(i){var n=null!=t[i]?t[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))},n=1;n<arguments.length;n++)i(n);return e}var m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var p=new Map([["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=new URL("".concat(t).concat(E(i))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(E(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(E(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var b,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,w=v.deviceSizes,x=v.imageSizes,j=v.loader,A=v.path,k=(v.domains,a(w).concat(a(x)));function S(e){var t=e.src,i=e.unoptimized,n=e.layout,r=e.width,o=e.quality,s=e.sizes,c=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,r=/(^|\s)(1?\d?\d)vw/g,o=[];n=r.exec(i);n)o.push(parseInt(n[2]));if(o.length){var s,c=.01*(s=Math).min.apply(s,a(o));return{widths:k.filter((function(e){return e>=w[0]*c})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(r,n,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(e,i){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===d?e:i+1).concat(d)})).join(", "),src:c({src:t,quality:o,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=p.get(j);if(t)return t(h({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(j))}function E(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},4900:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(5893),r=i(9008),a=i(5675),o=function(){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"mt-24 lg:mt-30 grid place-items-center",children:(0,n.jsx)("section",{className:"bg-blue-200 rounded-lg shadow-lg lg:w-6/12",children:(0,n.jsxs)("div",{className:"-translate-y-24 text-center",children:[(0,n.jsx)(a.default,{src:"/static/images/photo.jpg",className:"shadow-lg",width:200,height:200}),(0,n.jsxs)("div",{className:"mx-auto",children:[(0,n.jsx)("h1",{className:"text-2xl text-center font-bold text-blue-900 mt-2",children:"Feri Fahrul Nurashari"}),(0,n.jsx)("h2",{className:"text-sm font-bold",children:"Web Developer"}),(0,n.jsx)("div",{className:"text-sky-900 text-justify px-10 pt-3",children:(0,n.jsx)("p",{children:"Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself. I am Feri Fahrul Nurashari and I am from Indonesia. Taking web development as a profession not only fulfils my pocket but also my heart because it has been my passion since my early teenage. I believe that people should do things in which they are good at or in which their heart lays. That's why I chose freelance web development as my career because I believe I'm good at this and mas I am always honest and I am never afraid of doing hard work."})})]})]})})})})};function s(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("meta",{charset:"UTF-8"}),(0,n.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",integrity:"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}),(0,n.jsx)("title",{children:"Halo teman-teman."})]}),(0,n.jsx)(o,{})]})}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);