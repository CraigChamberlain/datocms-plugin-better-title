parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"4ain":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.map(function(e){return"".concat(e).concat(r.shift()||"")}).join("")},t=e;exports.default=t;
},{}],"Pxvw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./html"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){var e=r(['\n      <div class="BetterTitle">\n        <span>',"</span>\n      </div>\n    "]);return n=function(){return e},e}function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){return l(e)||a(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,t){var n=[],r=!0,i=!1,u=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(o){i=!0,u=o}finally{try{r||null==l.return||l.return()}finally{if(i)throw u}}return n}function l(e){if(Array.isArray(e))return e}function o(e,t,n,r,i,u,a){try{var l=e[u](a),o=l.value}catch(c){return void n(c)}l.done?t(o):Promise.resolve(o).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var u=e.apply(t,n);function a(e){o(u,r,i,a,l,"next",e)}function l(e){o(u,r,i,a,l,"throw",e)}a(void 0)})}}function s(e,t){if(null==e)return{};var n,r,i=f(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function t(e){var n=this,r=e.parameters,u=e.fieldPath,a=s(e,["parameters","fieldPath"]);p(this,t),v(this,"getFieldValue",function(){var e=c(regeneratorRuntime.mark(function e(t){var r,u,a,l,o,c,s,f,p,d,h,v,g;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.constructor.cleanValue,o=(u=t).match(/(?<=\()[^(].+(?=\))/gm),!u.match(/\w+:/)){e.next=15;break}return c=t.split(":"),s=i(c,2),u=s[0],a=s[1],f=n.plugin.getFieldValue(u),e.next=11,n.client.items.find(f);case 11:p=e.sent,l=p[r(a)],e.next=16;break;case 15:l=n.plugin.getFieldValue(r(t));case 16:return o&&(d=o[0].split(/(?<=(?<!\\)\/),(?=(?:\s+|)(?:'|"))/g).map(function(e){return e.trim().slice(1,-1)}),h=i(d,2),v=h[0],g=h[1],l=l.toString().replace(new RegExp(v,"g"),g)),e.abrupt("return",l);case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());var l=r.instance,o=l.visible,f=l.fields,d=r.global.apiToken;this._plugin=a,this._fieldPath=u,this._client=new Dato.SiteClient(d),this._fields=f.split(/(?<=(?:\w|\))),/).map(function(e){return e.trim()}),a.toggleField(u,o)}var r;return h(t,[{key:"render",value:(r=c(regeneratorRuntime.mark(function t(){var r,i,u,a,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.fields,i=this.plugin,u=this.fieldPath,a=this.getFieldValue,t.next=3,Promise.all(r.map(a));case 3:return l=t.sent.join(" "),i.setFieldValue(u,l),t.abrupt("return",(0,e.default)(n(),l));case 6:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"plugin",get:function(){return this._plugin}},{key:"fieldPath",get:function(){return this._fieldPath}},{key:"client",get:function(){return this._client}},{key:"fields",get:function(){return this._fields}}]),t}();exports.default=g,v(g,"cleanValue",function(e){return e.replace(/(:.+|\(.+)/g,"")});
},{"./html":"4ain"}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./BetterTitle"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,n,t,r,u,i,o){try{var a=e[i](o),c=a.value}catch(s){return void t(s)}a.done?n(c):Promise.resolve(c).then(r,u)}function r(e){return function(){var n=this,r=arguments;return new Promise(function(u,i){var o=e.apply(n,r);function a(e){t(o,u,i,a,c,"next",e)}function c(e){t(o,u,i,a,c,"throw",e)}a(void 0)})}}var u=document.getElementById("root");DatoCmsPlugin.init(function(n){n.startAutoResizer();var t=new e.default(n),i=function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.render();case 2:return e.abrupt("return",u.innerHTML=e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();i(),t.fields.map(function(n){return e.default.cleanValue(n)}).forEach(function(e){return n.addFieldChangeListener(e,i)})});
},{"./BetterTitle":"Pxvw"}]},{},["Focm"], null)