!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'* {\n  cursor: none; }\n\ndiv._f-cursor._container {\n  --cursor-size: 4px;\n  --cursor-active-size: 4px;\n  --backlight-size: 30px;\n  --backlight-active-size: 40px;\n  --cursor-animation-time: .01s;\n  --backlight-animation-time: .12s;\n  --cursor-color: #000;\n  --cursor-active-color: #000;\n  --backlight-color: rgba(0, 0, 0, .12);\n  --backlight-active-color: rgba(0, 0, 0, .12); }\n\ndiv._f-cursor._container {\n  position: fixed;\n  display: block;\n  width: var(--backlight-size);\n  height: var(--backlight-size); }\n  div._f-cursor._container div._f-cursor._backlight, div._f-cursor._container div._f-cursor._cursor {\n    position: absolute;\n    display: block;\n    border-radius: 50%;\n    pointer-events: none;\n    -webkit-transform: scale(0, 0);\n        -ms-transform: scale(0, 0);\n            transform: scale(0, 0); }\n  div._f-cursor._container div._f-cursor._backlight {\n    width: var(--backlight-size);\n    height: var(--backlight-size);\n    background: var(--backlight-color); }\n    div._f-cursor._container div._f-cursor._backlight * {\n      background-color: var(--cursor-color);\n      color: var(--cursor-color); }\n  div._f-cursor._container div._f-cursor._cursor {\n    width: var(--cursor-size);\n    height: var(--cursor-size);\n    background: var(--cursor-color); }\n    div._f-cursor._container div._f-cursor._cursor * {\n      background-color: var(--cursor-color);\n      color: var(--cursor-color); }\n  div._f-cursor._container[animate="true"] div._f-cursor._backlight {\n    -webkit-transition: var(--backlight-animation-time) ease all;\n    -o-transition: var(--backlight-animation-time) ease all;\n    transition: var(--backlight-animation-time) ease all; }\n  div._f-cursor._container[animate="true"] div._f-cursor._cursor {\n    -webkit-transition: var(--cursor-animation-time) ease all;\n    -o-transition: var(--cursor-animation-time) ease all;\n    transition: var(--cursor-animation-time) ease all; }\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}var h=null,p=0;function v(t,e){var n,r,i;if(e.singleton){var o=p++;n=h||(h=u(e)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=u(e),r=function(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return c(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],u=i[a.id];u&&(u.refs--,r.push(u))}t&&c(s(t,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete i[f.id]}}}}},function(t,e,n){"use strict";n.r(e);n(0);class r{constructor(t,e){let n=document.createElement(t);return this.element=n,e&&this.attribute(e),this}attribute(t,e){if("string"==typeof t)this.attribute({attributes:e});else for(let e in t)["html","text"].includes(e)?"html"==e?this.element.innerHTML=t[e]:this.element.innerText=t[e]:this.element.setAttribute(e,t[e]);return this}event(...t){if(2==t.length&&"string"==typeof t[0]&&"function"==typeof t[1])this.element.addEventListener(t[0],t[1]);else for(let e=0;e<t.length;e++){const n=t[e];if(!Array.isArray(n)||"function"!=typeof n[1]||"string"!=typeof n[0])throw new Error("Cannot process given argument at position "+(e+1));this.element.addEventListener(n[0],n[1])}return this}childs(...t){Array.isArray(t)||(t=Array(t));for(let e of t)e instanceof r||"Progress"==e.constructor.name?this.element.appendChild(e.element):this.element.appendChild(e);return this}}window.FancyCursor=class{constructor(t){if(!0===window.FancyCursorAttach)throw new Error("FancyCursor already attached to this page");const e={cursor:new r("div",{class:"_f-cursor _cursor"}).element,backlight:new r("div",{class:"_f-cursor _backlight"}).element};e.container=new r("div",{class:"_f-cursor _container",show:!1}).childs(e.backlight,e.cursor).element,function(e){const n=[["cursor","backlight"],["size","active-size","animation-time","color","active-color"]];n[0].forEach(function(r){r in t&&n[1].forEach(function(n){let i=n.split("-");if(i.length>1?(i[1]=i[1][1].toLocaleUpperCase()+i[1].slice(1),i=i.join("")):i=i[0],i in t[r]){let o=t[r][n];for(/size/.test(i)&&(o+="px");/pxpx/.test(o);)o=o.replace("pxpx","px");e.container.style.setProperty(`--${r}-${n}`,t[r][n])}})})}(e);let n=!0,i="";const o=t=>{(t.clientX>=window.innerWidth-1||t.clientX<=0||t.clientY>=window.innerHeight-1||t.clientY<=0)&&(i=" scale(0, 0)"),e.cursor.style="transform: matrix(1, 0, 0, 1, "+`${t.clientX-e.cursor.offsetWidth/2-7}, `+`${t.clientY-e.cursor.offsetHeight/2-7})`+i,e.backlight.style="transform: matrix(1, 0, 0, 1, "+`${t.clientX-e.backlight.offsetWidth/2-7}, `+`${t.clientY-e.backlight.offsetHeight/2-7})`+i};window.addEventListener("mousemove",function(t){if(n)return window.requestAnimationFrame(()=>o(t)),i=" scale(0, 0)",setTimeout(()=>{e.container.setAttribute("animate",!0),setTimeout(()=>{e.container.setAttribute("show",!0),i=""},3),n=!1},2),!1;window.requestAnimationFrame(()=>o(t))});const a={mouseout:()=>{i=" scale(0, 0)",e.container.setAttribute("show",!1)},mouseover:()=>{e.container.setAttribute("show",!0),i=""}};Object.keys(a).forEach(t=>window.addEventListener(t,a[t])),document.body.appendChild(e.container),window.FancyCursorAttach=!0,this.container=e.container}}}]);