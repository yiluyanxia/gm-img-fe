!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("yanxiaDrag",[],t):"object"==typeof exports?exports.yanxiaDrag=t():e.yanxiaDrag=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var a=n(9),r=n(10);t.a={name:"yanxia-drag",directives:{TransferDom:r.a},props:{value:{type:Boolean,default:!1},transfer:{type:Boolean,default:!0},dragBar:{type:String,default:""},dragBox:{type:String,default:""},title:{type:String,default:""},left:{type:String,default:""},top:{type:String,default:""}},data:function(){return{visible:this.value}},computed:{mainStyles:function(){var e={},t=parseInt(this.left),n={left:t+"px"},a=parseInt(this.top),r={top:a+"px"};return Object.assign(e,n,r),e}},mounted:function(){this.visible&&this.initYanXiaDrag()},methods:{initYanXiaDrag:function(){Object(a.a)(this.$refs.dragBar,this.$refs.dragBox)},dragClose:function(){this.visible=!1,this.$emit("input",!1),this.$emit("on-close")}},watch:{value:function(e){this.visible=e},visible:function(e){this.initYanXiaDrag(),this.$emit("value",!1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default=a.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("yanxia-drag",a.a)},function(e,t,n){"use strict";function a(e){n(3)}var r=n(0),o=n(11),i=n(8),s=a,u=i(r.a,o.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var a=n(4);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(6)("478fea3a",a,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.yanxia-dragbox{width:360px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);transition:opacity .5s;background-color:#fff;left:calc(50vw - 180px);top:15vh;z-index:99999999}.yanxia-dragbar{width:100%;height:56px;background-color:#747474;cursor:move;padding:0 8px;position:relative;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,.258824),0 2px 10px 0 rgba(0,0,0,.156863)}.yanxia-dragbar .yanxia-dragbar-title{padding:0 0 0 6px;margin:0;line-height:56px;font-size:21px;font-weight:400;color:#fff}.yanxia-close{position:absolute;top:16px;right:12px;cursor:pointer}.yanxia-close,.yanxia-close-icon{display:block;width:24px;height:24px}.yanxia-close-icon{position:relative;overflow:hidden}.yanxia-close-icon:after,.yanxia-close-icon:before{content:"";position:absolute;height:3px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff;margin-top:-4px}.yanxia-close-icon:before{transform:rotate(45deg)}.yanxia-close-icon:after{transform:rotate(-45deg)}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=a(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=f[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(o(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(o(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,a=document.querySelector("style["+g+'~="'+e.id+'"]');if(a){if(v)return h;a.parentNode.removeChild(a)}if(x){var o=p++;a=l||(l=r()),t=i.bind(null,a,o,!1),n=i.bind(null,a,o,!0)}else a=r(),t=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function i(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),m.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),f={},d=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){v=n,m=r||{};var o=c(e,t);return a(o),function(t){for(var n=[],r=0;r<o.length;r++){var i=o[r],s=f[i.id];s.refs--,n.push(s)}t?(o=c(e,t),a(o)):o=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],u=o[2],c=o[3],f={id:e+":"+r,css:s,media:u,sourceMap:c};a[i]?a[i].parts.push(f):n.push(a[i]={id:i,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,a,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):a&&(f=a),f){var d=c.functional,l=d?c.render:c.beforeCreate;d?(c._injectStyles=f,c.render=function(e,t){return f.call(t),l(e,t)}):c.beforeCreate=l?[].concat(l,f):[f]}return{esModule:i,exports:s,options:c}}},function(e,t,n){"use strict";var a=function(e,t){var n={left:0,top:0,currentX:0,currentY:0,distanceX:0,distanceY:0,flag:!1},a=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,!1)[t]};"absolute"!==a(t,"position")&&(t.style.position="absolute"),"auto"!==a(t,"left")&&(n.left=a(t,"left")),"auto"!==a(t,"top")&&(n.top=a(t,"top")),e.onmousedown=function(t){n.flag=!0,t||(t=window.event,e.onselectstart=function(){return!1});var a=t;n.currentX=a.clientX,n.currentY=a.clientY},document.onmouseup=function(){n.flag=!1,"auto"!==a(t,"left")&&(n.left=a(t,"left")),"auto"!==a(t,"top")&&(n.top=a(t,"top"))},document.onmousemove=function(e){var a=e||window.event;if(n.flag){var r=a.clientX,o=a.clientY;n.distanceX=r-n.currentX,n.distanceY=o-n.currentY;var i=parseInt(n.left)+n.distanceX,s=parseInt(n.top)+n.distanceY,u=document.documentElement.clientWidth-t.offsetWidth,c=document.documentElement.clientHeight-t.offsetHeight;return i<=0?i=0:i>=u&&(i=u),s<=0?s=0:s>=c&&(s=c),t.style.left=i+"px",t.style.top=s+"px",e.preventDefault&&e.preventDefault(),!1}}};t.a=a},function(e,t,n){"use strict";function a(e){return void 0===e&&(e=document.body),!0===e?document.body:e instanceof window.Node?e:document.querySelector(e)}var r={inserted:function(e,t,n){var r=t.value;if("true"!==e.dataset.transfer)return!1;e.className=e.className?e.className+" v-transfer-dom":"v-transfer-dom";var o=e.parentNode;if(o){var i=document.createComment(""),s=!1;!1!==r&&(o.replaceChild(i,e),a(r).appendChild(e),s=!0),e.__transferDomData||(e.__transferDomData={parentNode:o,home:i,target:a(r),hasMovedOut:s})}},componentUpdated:function(e,t){var n=t.value;if("true"!==e.dataset.transfer)return!1;var r=e.__transferDomData;if(r){var o=r.parentNode,i=r.home,s=r.hasMovedOut;!s&&n?(o.replaceChild(i,e),a(n).appendChild(e),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!0,target:a(n)})):s&&!1===n?(o.replaceChild(e,i),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!1,target:a(n)})):n&&a(n).appendChild(e)}},unbind:function(e){if("true"!==e.dataset.transfer)return!1;e.className=e.className.replace("v-transfer-dom",""),e.__transferDomData&&(!0===e.__transferDomData.hasMovedOut&&e.__transferDomData.parentNode&&e.__transferDomData.parentNode.appendChild(e),e.__transferDomData=null)}};t.a=r},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{"data-transfer":e.transfer}},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"dragBox",staticClass:"yanxia-dragbox",style:e.mainStyles},[n("div",{ref:"dragBar",staticClass:"yanxia-dragbar"},[n("h3",{staticClass:"yanxia-dragbar-title"},[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"yanxia-close",on:{click:e.dragClose}},[n("i",{staticClass:"yanxia-close-icon"})])]),e._v(" "),e._t("default")],2)])],1)},r=[],o={render:a,staticRenderFns:r};t.a=o}])});
//# sourceMappingURL=yanxia-drag.js.map