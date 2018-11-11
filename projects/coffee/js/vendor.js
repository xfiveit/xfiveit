!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.cssVars=t()}(this,function(){"use strict";function d(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},r=Array.isArray(e)?e:[e],o=Array.apply(null,Array(r.length)).map(function(e){return null});function c(e,t){a.onError(e,r[t],t)}function u(e,t){var n=a.onSuccess(e,r[t],t);e=!1===n?"":n||e,o[t]=e,-1===o.indexOf(null)&&a.onComplete(o)}r.forEach(function(e,t){var n=document.createElement("a");n.setAttribute("href",e),n.href=n.href;var r=n.host!==location.host,o=n.protocol===location.protocol;if(r&&"undefined"!=typeof XDomainRequest)if(o){var i=new XDomainRequest;i.open("GET",e),i.timeout=0,i.onprogress=Function.prototype,i.ontimeout=Function.prototype,i.onload=function(){u(i.responseText,t)},i.onerror=function(e){c(i,t)},setTimeout(function(){i.send()},0)}else console.log("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol"),c(null,t);else{var s=new XMLHttpRequest;s.open("GET",e),a.mimeType&&s.overrideMimeType&&s.overrideMimeType(a.mimeType),a.onBeforeSend(s,e,t),s.onreadystatechange=function(){4===s.readyState&&(200===s.status?u(s.responseText,t):c(s,t))},s.send()}})}function e(e){var n={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},f={include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},t=Array.apply(null,document.querySelectorAll(f.include)).filter(function(e){return t=e,n=f.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),a=Array.apply(null,Array(t.length)).map(function(e){return null});function c(){if(-1===a.indexOf(null)){var e=a.join("");f.onComplete(e,a,t)}}function u(e,n,r,t){var o=f.onSuccess(e,r,t);(function r(o,i,s,a){var c=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var u=5<arguments.length&&void 0!==arguments[5]?arguments[5]:[];var l=p(o,s,u);l.rules.length?d(l.absoluteUrls,{onBeforeSend:function(e,t,n){f.onBeforeSend(e,i,t)},onSuccess:function(n,e,t){var r=f.onSuccess(n,i,e),o=p(n=!1===r?"":r||n,e,u);return o.rules.forEach(function(e,t){n=n.replace(e,o.absoluteRules[t])}),n},onError:function(e,t,n){c.push({xhr:e,url:t}),u.push(l.rules[n]),r(o,i,s,a,c,u)},onComplete:function(e){e.forEach(function(e,t){o=o.replace(l.rules[t],e)}),r(o,i,s,a,c,u)}}):a(o,c)})(e=!1===o?"":o||e,r,t,function(e,t){null===a[n]&&(t.forEach(function(e){return f.onError(e.xhr,r,e.url)}),!f.filter||f.filter.test(e)?a[n]=e:a[n]="",c())})}function p(e,o){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i={};return i.rules=(e.replace(n.cssComments,"").match(n.cssImports)||[]).filter(function(e){return-1===t.indexOf(e)}),i.urls=i.rules.map(function(e){return e.replace(n.cssImports,"$1")}),i.absoluteUrls=i.urls.map(function(e){return l(e,o)}),i.absoluteRules=i.rules.map(function(e,t){var n=i.urls[t],r=l(i.absoluteUrls[t],o);return e.replace(n,r)}),i}t.length?t.forEach(function(o,i){var s=o.getAttribute("href"),e=o.getAttribute("rel"),t="LINK"===o.nodeName&&s&&e&&"stylesheet"===e.toLowerCase(),n="STYLE"===o.nodeName;t?d(s,{mimeType:"text/css",onBeforeSend:function(e,t,n){f.onBeforeSend(e,o,t)},onSuccess:function(e,t,n){var r=l(s,location.href);u(e,i,o,r)},onError:function(e,t,n){a[i]="",f.onError(e,o,t),c()}}):n?u(o.textContent,i,o,location.href):(a[i]="",c())}):f.onComplete("",[])}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}function f(){for(var i=function(e){return e instanceof Object&&e.constructor===Object},e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(r,o){return Object.keys(o).forEach(function(e){var t=r[e],n=o[e];i(t)&&i(n)?r[e]=f(t,n):r[e]=n}),r},{})}var p=t;function t(e,t,n){e instanceof RegExp&&(e=o(e,n)),t instanceof RegExp&&(t=o(t,n));var r=i(e,t,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function o(e,t){var n=t.match(e);return n?n[0]:null}function i(e,t,n){var r,o,i,s,a,c=n.indexOf(e),u=n.indexOf(t,c+1),l=c;if(0<=c&&0<u){for(r=[],i=n.length;0<=l&&!a;)l==c?(r.push(l),c=n.indexOf(e,l+1)):1==r.length?a=[r.pop(),u]:((o=r.pop())<i&&(i=o,s=u),u=n.indexOf(t,l+1)),l=c<u&&0<=c?c:u;r.length&&(a=[i,s])}return a}function u(o){function i(e){throw new Error("CSS parse error: "+e)}function s(e){var t=e.exec(o);if(t)return o=o.slice(t[0].length),t}function n(){s(/^\s*/)}function a(){return s(/^{\s*/)}function c(){return s(/^}/)}function r(){if(n(),"/"===o[0]&&"*"===o[1]){for(var e=2;o[e]&&("*"!==o[e]||"/"!==o[e+1]);)e++;if(!o[e])return i("end of comment is missing");var t=o.slice(2,e);return o=o.slice(e+2),{type:"comment",comment:t}}}function u(){for(var e=[],t=void 0;t=r();)e.push(t);return e}function l(){for(n();"}"===o[0];)i("extra closing bracket");var e=s(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function f(){s(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=s(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!s(/^:\s*/))return i("property missing ':'");var n=s(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),r={type:"declaration",property:t.replace(e,""),value:n?n[0].replace(e,"").trim():""};return s(/^[;\s]*/),r}}function p(){if(!a())return i("missing '{'");for(var e=void 0,t=u();e=f();)t.push(e),t=t.concat(u());return c()?t:i("missing '}'")}function d(){n();for(var e=[],t=void 0;t=s(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)e.push(t[1]),s(/^,\s*/);if(e.length)return{type:"keyframe",values:e,declarations:p()}}function h(){if(n(),"@"===o[0])return function(){var e=s(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=s(/^([-\w]+)\s*/)))return i("@keyframes missing name");var n=e[1];if(!a())return i("@keyframes missing '{'");for(var r=void 0,o=u();r=d();)o.push(r),o=o.concat(u());return c()?{type:"keyframes",name:n,vendor:t,keyframes:o}:i("@keyframes missing '}'")}}()||function(){var e=s(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:t()}}()||function(){if(s(/^@host\s*/))return{type:"host",rules:t()}}()||function(){var e=s(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:t()}}()||function(){var e=s(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(s(/^@page */))return{type:"page",selectors:l()||[],declarations:p()}}()||function(){var e=s(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:t()}}()||function(){if(s(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=s(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}()}function t(e){if(!e&&!a())return i("missing '{'");for(var t,n=void 0,r=u();o.length&&(e||"}"!==o[0])&&(n=h()||(void 0,(t=l()||[]).length||i("selector missing"),{type:"rule",selectors:t,declarations:p()}));)r.push(n),r=r.concat(u());return e||c()?r:i("missing '}'")}return{type:"stylesheet",stylesheet:{rules:t(!0),errors:[]}}}t.range=i;var h={},m="--",y="var";function v(e){var t,i,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s={},a=f({fixNestedCalc:!0,onlyVars:!0,persist:!1,preserve:!1,variables:{},onWarning:function(){}},n),r=a.persist?h:a.variables,o=u(e);if(a.onlyVars&&(o.stylesheet.rules=function n(e){return e.filter(function(e){if(e.declarations){var t=e.declarations.filter(function(e){var t=e.property&&0===e.property.indexOf(m),n=e.value&&-1<e.value.indexOf(y+"(");return t||n});return"font-face"!==e.type&&(e.declarations=t),Boolean(t.length)}return e.keyframes?Boolean(e.keyframes.filter(function(e){return Boolean(e.declarations.filter(function(e){var t=e.property&&0===e.property.indexOf(m),n=e.value&&-1<e.value.indexOf(y+"(");return t||n}).length)}).length):!e.rules||(e.rules=n(e.rules).filter(function(e){return e.declarations&&e.declarations.length}),Boolean(e.rules.length))})}(o.stylesheet.rules)),o.stylesheet.rules.forEach(function(e){var o=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,t){var n=e.property,r=e.value;n&&0===n.indexOf(m)&&(s[n]=r,o.push(t))}),!a.preserve))for(var t=o.length-1;0<=t;t--)e.declarations.splice(o[t],1)}),Object.keys(a.variables).forEach(function(e){var t="--"+e.replace(/^-+/,""),n=a.variables[e];e!==t&&(a.variables[t]=n,delete a.variables[e]),a.persist&&(h[t]=n)}),Object.keys(r).length){var c={declarations:[],selectors:[":root"],type:"rule"};Object.keys(r).forEach(function(e){s[e]=r[e],c.declarations.push({type:"declaration",property:e,value:r[e]}),a.persist&&(h[e]=r[e])}),a.preserve&&o.stylesheet.rules.push(c)}return function e(n,r){n.rules.forEach(function(t){t.rules?e(t,r):t.keyframes?t.keyframes.forEach(function(e){"keyframe"===e.type&&r(e.declarations,t)}):t.declarations&&r(t.declarations,n)})}(o.stylesheet,function(e,t){for(var n=void 0,r=void 0,o=void 0,i=0;i<e.length;i++)o=(n=e[i]).value,"declaration"===n.type&&o&&-1!==o.indexOf(y+"(")&&(r=g(o,s,a))!==n.value&&(a.preserve?(e.splice(i,0,{type:n.type,property:n.property,value:r}),i++):n.value=r)}),a.fixNestedCalc&&(t=o.stylesheet.rules,i=/(-[a-z]+-)?calc\(/,t.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";i.test(t);){var r=p("calc(",")",t||"");for(t=t.slice(r.end);i.test(r.body);){var o=p(i,")",r.body);r.body=o.pre+"("+o.body+")"+o.post}n+=r.pre+"calc("+r.body,n+=i.test(t)?"":")"+r.post}e.value=n||e.value})})),function(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",s=arguments[2],a={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+n(e.rules)+"}"},"font-face":function(e){return"@font-face{"+n(e.declarations)+"}"},host:function(e){return"@host{"+n(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+n(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+n(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+n(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+n(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+n(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+n(e.rules)+"}"}};function n(e){for(var t="",n=0;n<e.length;n++){var r=e[n];s&&s(r);var o=a[r.type](r);o&&(t+=o,o.length&&r.selectors&&(t+=i))}return t}return n(e.stylesheet.rules)}(o)}function g(e,t){var n,r,o,i,s,a,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},u=arguments[3],l=p("var(",")",e),f="CSS transform warning:";return l?0===l.body.trim().length?(c.onWarning(f+" var() must contain a non-whitespace string"),e):l.pre+(n=l.body,r=n.split(",")[0],o=(n.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],i=t.hasOwnProperty(r)?String(t[r]):void 0,s=i||(o?String(o):void 0),a=u||n,i||c.onWarning(f+' variable "'+r+'" is undefined'),s&&"undefined"!==s&&0<s.length?g(s,t,c,a):"var("+a+")")+g(l.post,t,c):(-1!==e.indexOf("var(")&&c.onWarning(f+' missing closing ")" in the value "'+e+'"'),e)}var r="css-vars-ponyfill",s={include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:!1,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},b="undefined"!=typeof window,w=b&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),E={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},S=null;function x(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=f(s,n);function c(e,t,n,r){a.silent||console.error(e+"\n",t),a.onError(e,t,n,r)}function u(e){a.silent||console.warn(e),a.onWarning(e)}if(b)if("loading"!==document.readyState)if(w&&a.onlyLegacy)w&&a.updateDOM&&Object.keys(a.variables).forEach(function(e){var t="--"+e.replace(/^-+/,""),n=a.variables[e];document.documentElement.style.setProperty(t,n)});else{var l=r;a.watch&&function(o,t){if(window.MutationObserver&&!S){var i=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},s=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},a=null;(S=new MutationObserver(function(e){var r=!1;e.forEach(function(e){if("attributes"===e.type)r=i(e.target)||s(e.target);else if("childList"===e.type){var t=Array.apply(null,e.addedNodes),n=Array.apply(null,e.removedNodes);r=[].concat(t,n).some(function(e){var t=i(e)&&!e.disabled,n=s(e)&&!e.disabled&&E.cssVars.test(e.textContent);return t||n})}r&&(clearTimeout(a),a=setTimeout(function(){x(o)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}}(a,l),e({include:a.include,exclude:"#"+l+(a.exclude?","+a.exclude:""),filter:a.onlyVars?E.cssVars:null,onBeforeSend:a.onBeforeSend,onSuccess:function(r,e,o){var t=a.onSuccess(r,e,o);(r=!1===t?"":t||r,a.updateURLs)&&(r.replace(E.cssComments,"").match(E.cssUrls)||[]).forEach(function(e){var t=e.replace(E.cssUrls,"$1"),n=C(t,o);r=r.replace(e,e.replace(t,n))});return r},onError:function(e,t,n){var r=e.responseURL||C(n,location.href),o=e.statusText?"("+e.statusText+")":"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");c("CSS XHR Error: "+r+" "+e.status+" "+o,t,e,r)},onComplete:function(e,n,r){var t=null;e=n.map(function(e,t){return E.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-"+t+"__*/"}).join("");try{e=v(e,{fixNestedCalc:a.fixNestedCalc,onlyVars:a.onlyVars,persist:a.updateDOM,preserve:a.preserve,variables:a.variables,onWarning:u});var o=E.cssKeyframes.test(e);if(e=e.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return n[t]}),a.updateDOM&&r&&r.length){var i=r[r.length-1];(t=document.querySelector("#"+l)||document.createElement("style")).setAttribute("id",l),t.textContent!==e&&(t.textContent=e),i.nextSibling!==t&&i.parentNode&&i.parentNode.insertBefore(t,i.nextSibling),o&&function(){var e=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(e){for(var t=document.body.getElementsByTagName("*"),n=[],r="__CSSVARSPONYFILL-KEYFRAMES__",o=0,i=t.length;o<i;o++){var s=t[o],a=getComputedStyle(s)[e];"none"!==a&&(s.style[e]+=r,n.push(s))}document.body.offsetHeight;for(var c=0,u=n.length;c<u;c++){var l=n[c].style;l[e]=l[e].replace(r,"")}}}()}}catch(e){var s=!1;n.forEach(function(e,t){try{e=v(e,a)}catch(e){var n=r[t-0];s=!0,c(e.message,n)}}),s||c(e.message||e)}a.onComplete(e,t)}})}else document.addEventListener("DOMContentLoaded",function e(t){x(n),document.removeEventListener("DOMContentLoaded",e)})}function C(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}return x}),function(){var e,t,n;e=function(){function r(e,t){var n,r;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof e)for(n in e)r=e[n],this.options[n]=r;this.context=null!=t?t:this,this.unique=this._genKey()}return r.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&0<this.context.nextUrl.length},r.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},r.prototype.run=function(e){var t,n;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&((n=document.createElement("script")).id="instafeed-fetcher",n.src=e||this._buildUrl(),document.getElementsByTagName("head")[0].appendChild(n),t="instafeedCache"+this.unique,window[t]=new r(this.options,this),window[t].unique=this.unique),!0},r.prototype.parse=function(e){var t,n,r,o,i,s,a,c,u,l,f,p,d,h,m,y,v,g,b,w,E,S,x,C,k,O,N,_;if("object"!=typeof e){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==e.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(0===e.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,e),this.context.nextUrl="",null!=e.pagination&&(this.context.nextUrl=e.pagination.next_url),"none"!==this.options.sortBy)switch(k="least"===(O="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"))[0],O[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",k);break;case"liked":e.data=this._sortBy(e.data,"likes.count",k);break;case"commented":e.data=this._sortBy(e.data,"comments.count",k);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(p=e.data,C=parseInt(this.options.limit,10),null!=this.options.limit&&p.length>C&&(p=p.slice(0,C)),s=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(p=this._filter(p,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(a="",_=document.createElement("div"),c=0,w=p.length;c<w;c++){if("object"!=typeof(l=(u=p[c]).images[this.options.resolution]))throw i="No image found for resolution: "+this.options.resolution+".",new Error(i);y=l.width,m="square",(h=l.height)<y&&(m="landscape"),y<h&&(m="portrait"),f=l.url,0<=window.location.protocol.indexOf("http")&&!this.options.useHttp&&(f=f.replace(/https?:\/\//,"//")),a+=this._makeTemplate(this.options.template,{model:u,id:u.id,link:u.link,type:u.type,image:f,width:y,height:h,orientation:m,caption:this._getObjectProperty(u,"caption.text"),likes:u.likes.count,comments:u.comments.count,location:this._getObjectProperty(u,"location.name")})}for(_.innerHTML=a,o=[],r=0,n=_.childNodes.length;r<n;)o.push(_.childNodes[r]),r+=1;for(g=0,E=o.length;g<E;g++)x=o[g],s.appendChild(x)}else for(b=0,S=p.length;b<S;b++){if(u=p[b],d=document.createElement("img"),"object"!=typeof(l=u.images[this.options.resolution]))throw i="No image found for resolution: "+this.options.resolution+".",new Error(i);f=l.url,0<=window.location.protocol.indexOf("http")&&!this.options.useHttp&&(f=f.replace(/https?:\/\//,"//")),d.src=f,!0===this.options.links?((t=document.createElement("a")).href=u.link,t.appendChild(d),s.appendChild(t)):s.appendChild(d)}if("string"==typeof(N=this.options.target)&&(N=document.getElementById(N)),null==N)throw i='No element with id="'+this.options.target+'" on page.',new Error(i);N.appendChild(s),document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")),v="instafeedCache"+this.unique,window[v]=void 0;try{delete window[v]}catch(e){e}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},r.prototype._buildUrl=function(){var e,t;switch("https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return t="https://api.instagram.com/v1/"+e,null!=this.options.accessToken?t+="?access_token="+this.options.accessToken:t+="?client_id="+this.options.clientId,null!=this.options.limit&&(t+="&count="+this.options.limit),t+="&callback=instafeedCache"+this.unique+".parse"},r.prototype._genKey=function(){var e;return""+(e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+e()+e()+e()},r.prototype._makeTemplate=function(e,t){var n,r,o,i,s;for(r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;r.test(n);)i=n.match(r)[1],s=null!=(o=this._getObjectProperty(t,i))?o:"",n=n.replace(r,function(){return""+s});return n},r.prototype._getObjectProperty=function(e,t){var n,r;for(r=(t=t.replace(/\[(\w+)\]/g,".$1")).split(".");r.length;){if(n=r.shift(),!(null!=e&&n in e))return null;e=e[n]}return e},r.prototype._sortBy=function(e,o,i){var t;return t=function(e,t){var n,r;return n=this._getObjectProperty(e,o),r=this._getObjectProperty(t,o),i?r<n?1:-1:n<r?1:-1},e.sort(t.bind(this)),e},r.prototype._filter=function(e,t){var n,r,o,i;for(n=[],r=function(e){if(t(e))return n.push(e)},o=0,i=e.length;o<i;o++)r(e[o]);return n},r}(),t=this,n=function(){return e},"function"==typeof define&&define.amd?define([],n):"object"==typeof module&&module.exports?module.exports=n():t.Instafeed=n()}.call(this);