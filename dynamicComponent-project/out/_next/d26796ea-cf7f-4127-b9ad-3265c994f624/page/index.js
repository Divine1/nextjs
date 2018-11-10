module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([0],{100:function(e,t,r){"use strict";var n=r(99),o=r(101),i=r(214)(),a=Object,u=o.call(Function.call,Array.prototype.push),s=o.call(Function.call,Object.prototype.propertyIsEnumerable),c=i?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,o,f,l,p,d,h,y,m=a(e);for(o=1;o<arguments.length;++o){f=a(arguments[o]),p=n(f);var b=i&&(Object.getOwnPropertySymbols||c);if(b)for(d=b(f),l=0;l<d.length;++l)y=d[l],s(f,y)&&u(p,y);for(l=0;l<p.length;++l)h=f[y=p[l]],s(f,y)&&(m[y]=h)}return m}},101:function(e,t,r){"use strict";var n=r(213);e.exports=Function.prototype.bind||n},102:function(e,t,r){"use strict";var n=r(100);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),i="";for(var a in o)i+=a;return e!==i}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?n:Object.assign:n}},103:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},104:function(e,t,r){"use strict";var n=r(8),o=r(223),i=r(225),a=r(226),u=r(227),s=r(105),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(228);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",y=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||u(e.url)||(d=new window.XDomainRequest,h="onload",y=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",b=e.auth.password||"";p.Authorization="Basic "+c(m+":"+b)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||y)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,n),d=null}},d.onerror=function(){f(s("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var v=r(229),g=(e.withCredentials||u(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},105:function(e,t,r){"use strict";var n=r(224);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},106:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},107:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},204:function(e,t,r){e.exports=r(205)},205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r.n(n),i=r(206),a=r.n(i),u=r(218),s=r.n(u);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){console.log("componentDidMount IndexPage - "),s.a.get("http://localhost:4000/api").then(function(e){console.log("in success ",e.data)}).catch(function(e){console.log("in err ",e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Hello Next.js"),o.a.createElement(a.a,{href:"/testhosting-demo/about"},o.a.createElement("a",null,"here")))}}])&&f(r.prototype,n),i&&f(r,i),t}();t.default=p},206:function(e,t,r){e.exports=r(207)},207:function(e,t,r){"use strict";var n=r(15),o=r(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(46)),a=o(r(208)),u=o(r(20)),s=o(r(6)),c=o(r(7)),f=o(r(21)),l=o(r(22)),p=o(r(70)),d=r(94),h=n(r(5)),y=o(r(36)),m=o(r(210)),b=n(r(45)),v=r(19),g=function(e){function t(e){var r,n;(0,s.default)(this,t);for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return(n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(i)))).linkClicked=n.linkClicked.bind((0,p.default)(n)),n.formatUrls(e),n}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,o=this.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var i=window.location.pathname;n=(0,d.resolve)(i,n),o=o?(0,d.resolve)(i,o):n,e.preventDefault();var a=this.props.scroll;null==a&&(a=o.indexOf("#")<0);var u=this.props.replace?"replace":"push";b.default[u](n,o,{shallow:r}).then(function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,d.resolve)(e,this.href);b.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,i.default)(e.href)?(0,d.format)(e.href):e.href,this.as=e.as&&"object"===(0,i.default)(e.as)?(0,d.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,n=this.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=n||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,b._rewriteUrlForNextExport)(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=g,Object.defineProperty(g,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,m.default)({href:y.default.oneOfType([y.default.string,y.default.object]).isRequired,as:y.default.oneOfType([y.default.string,y.default.object]),prefetch:y.default.bool,replace:y.default.bool,shallow:y.default.bool,passHref:y.default.bool,scroll:y.default.bool,children:y.default.oneOfType([y.default.element,function(e,t){return"string"==typeof e[t]&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var w=(0,v.execOnce)(v.warn)},208:function(e,t,r){e.exports=r(209)},209:function(e,t,r){var n=r(0),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},210:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,i.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,s)&&(t=e[s],!t||t[s]!==c))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,u({},s,(r=function(){return function(t,r,n){var i=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(i.length>0)return new TypeError(String(n)+": unknown props found: "+String(i.join(", ")));return null}}(),(0,n.default)(r,u({},s,c)))));var r};var n=a(r(211)),o=a(r(216)),i=a(r(217));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s="prop-types-exact: ​",c={};e.exports=t.default},211:function(e,t,r){"use strict";var n=r(98),o=r(100),i=r(102),a=r(215),u=i();n(u,{getPolyfill:i,implementation:o,shim:a}),e.exports=u},212:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},213:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,i=n.call(arguments,1),a=Math.max(0,t.length-i.length),u=[],s=0;s<a;s++)u.push("$"+s);if(r=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=t.apply(this,i.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,i.concat(n.call(arguments)))}),t.prototype){var c=function(){};c.prototype=t.prototype,r.prototype=new c,c.prototype=null}return r}},214:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},215:function(e,t,r){"use strict";var n=r(98),o=r(102);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},216:function(e,t,r){"use strict";var n=r(101);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},217:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},218:function(e,t,r){e.exports=r(219)},219:function(e,t,r){"use strict";var n=r(8),o=r(103),i=r(221),a=r(71);function u(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var s=u(a);s.Axios=i,s.create=function(e){return u(n.merge(a,e))},s.Cancel=r(107),s.CancelToken=r(235),s.isCancel=r(106),s.all=function(e){return Promise.all(e)},s.spread=r(236),e.exports=s,e.exports.default=s},220:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},221:function(e,t,r){"use strict";var n=r(71),o=r(8),i=r(230),a=r(231);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=u},222:function(e,t,r){"use strict";var n=r(8);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},223:function(e,t,r){"use strict";var n=r(105);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},224:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},225:function(e,t,r){"use strict";var n=r(8);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},226:function(e,t,r){"use strict";var n=r(8),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},227:function(e,t,r){"use strict";var n=r(8);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},228:function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,i=String(e),a="",u=0,s=n;i.charAt(0|u)||(s="=",u%1);a+=s.charAt(63&t>>8-u%1*8)){if((r=i.charCodeAt(u+=.75))>255)throw new o;t=t<<8|r}return a}},229:function(e,t,r){"use strict";var n=r(8);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},230:function(e,t,r){"use strict";var n=r(8);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},231:function(e,t,r){"use strict";var n=r(8),o=r(232),i=r(106),a=r(71),u=r(233),s=r(234);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},232:function(e,t,r){"use strict";var n=r(8);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},233:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},234:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},235:function(e,t,r){"use strict";var n=r(107);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},236:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},71:function(e,t,r){"use strict";(function(t){var n=r(8),o=r(222),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,s={adapter:("undefined"!=typeof XMLHttpRequest?u=r(104):void 0!==t&&(u=r(104)),u),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){s.headers[e]={}}),n.forEach(["post","put","patch"],function(e){s.headers[e]=n.merge(i)}),e.exports=s}).call(t,r(97))},8:function(e,t,r){"use strict";var n=r(103),o=r(220),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function u(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},98:function(e,t,r){"use strict";var n=r(99),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,u=Object.defineProperty,s=u&&function(){var e={};try{for(var t in u(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),c=function(e,t,r,n){var o;t in e&&("function"!=typeof(o=n)||"[object Function]"!==i.call(o)||!n())||(s?u(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},f=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);o&&(i=a.call(i,Object.getOwnPropertySymbols(t)));for(var u=0;u<i.length;u+=1)c(e,i[u],t[i[u]],r[i[u]])};f.supportsDescriptors=!!s,e.exports=f},99:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,a=r(212),u=Object.prototype.propertyIsEnumerable,s=!u.call({toString:null},"toString"),c=u.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{l(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),h=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),i=a(e),u=t&&"[object String]"===o.call(e),p=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var h=c&&r;if(u&&e.length>0&&!n.call(e,0))for(var y=0;y<e.length;++y)p.push(String(y));if(i&&e.length>0)for(var m=0;m<e.length;++m)p.push(String(m));else for(var b in e)h&&"prototype"===b||!n.call(e,b)||p.push(String(b));if(s)for(var v=function(e){if("undefined"==typeof window||!d)return l(e);try{return l(e)}catch(e){return!1}}(e),g=0;g<f.length;++g)v&&"constructor"===f[g]||!n.call(e,f[g])||p.push(f[g]);return p};h.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return a(t)?e(i.call(t)):e(t)}}}else Object.keys=h;return Object.keys||h},e.exports=h}},[204]).default}});