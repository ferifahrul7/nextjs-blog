(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6373)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),l=t(387),c=t(7190);var u={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var n=r(i.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,x=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,j=r(c.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],N=a.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);a.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof x?x:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,x,t,o]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:l}))}(e,o,d,p,h,y,m,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:o&&o.locale,_=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=_||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=o.useRef(),u=r(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},6373:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),o=t(1664),a=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"container flex items-center justify-between py-4 mt-5 sm:mt-12",children:[(0,r.jsx)("div",{className:"py-1",children:(0,r.jsx)("h1",{className:"text-2xl font-bold text-sky-700",children:"My Profile"})}),(0,r.jsxs)("ul",{className:"hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-900 uppercase text-xs",children:[(0,r.jsx)("li",{className:"cursor-pointer nav-link",children:(0,r.jsx)(o.default,{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"cursor-pointer nav-link",children:(0,r.jsx)(o.default,{href:"/about",children:"Tentang"})}),(0,r.jsx)("li",{className:"cursor-pointer nav-link",children:"Kontak"}),(0,r.jsx)("li",{className:"cursor-pointer nav-link",children:"Portfolio"}),(0,r.jsx)("button",{type:"button",className:"bg-indigo-500 hover:bg-indigo-800 px-7 py-3 rounded-md text-white uppercase",children:"Call"})]}),(0,r.jsx)("div",{className:"flex sm:hidden flex-1 mx-3 justify-end",children:(0,r.jsx)("i",{className:"text-2xl fas fa-bars"})})]})})})},i=function(e){var n=e.children;return(0,r.jsxs)("div",{className:"container font-Poppins",children:[(0,r.jsx)(a,{}),(0,r.jsx)("main",{children:n})]})};t(906);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}var u=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(i,{children:(0,r.jsx)(n,c({},t))})}},906:function(){},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);