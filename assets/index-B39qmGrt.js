var mt=(H,_)=>()=>(_||H((_={exports:{}}).exports,_),_.exports);var pt=mt((nt,at)=>{(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))J(T);new MutationObserver(T=>{for(const k of T)if(k.type==="childList")for(const z of k.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&J(z)}).observe(document,{childList:!0,subtree:!0});function R(T){const k={};return T.integrity&&(k.integrity=T.integrity),T.referrerPolicy&&(k.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?k.credentials="include":T.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function J(T){if(T.ep)return;T.ep=!0;const k=R(T);fetch(T.href,k)}})();(function(H,_){typeof nt=="object"&&typeof at<"u"?_(nt):typeof define=="function"&&define.amd?define(["exports"],_):_(H.dat={})})(globalThis,function(H){function _(e,t){var n=e.__state.conversionName.toString(),o=Math.round(e.r),u=Math.round(e.g),c=Math.round(e.b),h=e.a,g=Math.round(e.h),b=e.s.toFixed(1),v=e.v.toFixed(1);if(t||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var A=e.hex.toString(16);A.length<6;)A="0"+A;return"#"+A}return n==="CSS_RGB"?"rgb("+o+","+u+","+c+")":n==="CSS_RGBA"?"rgba("+o+","+u+","+c+","+h+")":n==="HEX"?"0x"+e.hex.toString(16):n==="RGB_ARRAY"?"["+o+","+u+","+c+"]":n==="RGBA_ARRAY"?"["+o+","+u+","+c+","+h+"]":n==="RGB_OBJ"?"{r:"+o+",g:"+u+",b:"+c+"}":n==="RGBA_OBJ"?"{r:"+o+",g:"+u+",b:"+c+",a:"+h+"}":n==="HSV_OBJ"?"{h:"+g+",s:"+b+",v:"+v+"}":n==="HSVA_OBJ"?"{h:"+g+",s:"+b+",v:"+v+",a:"+h+"}":"unknown format"}function R(e,t,n){Object.defineProperty(e,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(E.recalculateRGB(this,t,n),this.__state[t])},set:function(o){this.__state.space!=="RGB"&&(E.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=o}})}function J(e,t){Object.defineProperty(e,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(E.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(E.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}function T(e){if(e==="0"||d.isUndefined(e))return 0;var t=e.match(Z);return d.isNull(t)?0:parseFloat(t[1])}function k(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}function z(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}function r(e,t,n,o,u){return o+(e-t)/(n-t)*(u-o)}function P(e,t,n,o){e.style.background="",d.each(Ae,function(u){e.style.cssText+="background: "+u+"linear-gradient("+t+", "+n+" 0%, "+o+" 100%); "})}function Ke(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}function Y(e,t,n){var o=document.createElement("li");return t&&o.appendChild(t),n?e.__ul.insertBefore(o,n):e.__ul.appendChild(o),e.onResize(),o}function ke(e){l.unbind(window,"resize",e.__resizeHandler),e.saveToLocalStorageIfPossible&&l.unbind(window,"unload",e.saveToLocalStorageIfPossible)}function De(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];n.innerHTML=t?n.value+"*":n.value}function Je(e,t,n){if(n.__li=t,n.__gui=e,d.extend(n,{options:function(c){if(arguments.length>1){var h=n.__li.nextElementSibling;return n.remove(),le(e,n.object,n.property,{before:h,factoryArgs:[d.toArray(arguments)]})}if(d.isArray(c)||d.isObject(c)){var g=n.__li.nextElementSibling;return n.remove(),le(e,n.object,n.property,{before:g,factoryArgs:[c]})}},name:function(c){return n.__li.firstElementChild.firstElementChild.innerHTML=c,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof de){var o=new ce(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});d.each(["updateDisplay","onChange","onFinishChange","step"],function(c){var h=n[c],g=o[c];n[c]=o[c]=function(){var b=Array.prototype.slice.call(arguments);return g.apply(o,b),h.apply(n,b)}}),l.addClass(t,"has-slider"),n.domElement.insertBefore(o.domElement,n.domElement.firstElementChild)}else if(n instanceof ce){var u=function(c){if(d.isNumber(n.__min)&&d.isNumber(n.__max)){var h=n.__li.firstElementChild.firstElementChild.innerHTML,g=n.__gui.__listening.indexOf(n)>-1;n.remove();var b=le(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return b.name(h),g&&b.listen(),b}return c};n.min=d.compose(u,n.min),n.max=d.compose(u,n.max)}else n instanceof ue?(l.bind(t,"click",function(){l.fakeEvent(n.__checkbox,"click")}),l.bind(n.__checkbox,"click",function(c){c.stopPropagation()})):n instanceof Se?(l.bind(t,"click",function(){l.fakeEvent(n.__button,"click")}),l.bind(t,"mouseover",function(){l.addClass(n.__button,"hover")}),l.bind(t,"mouseout",function(){l.removeClass(n.__button,"hover")})):n instanceof ge&&(l.addClass(t,"color"),n.updateDisplay=d.compose(function(c){return t.style.borderLeftColor=n.__color.toString(),c},n.updateDisplay),n.updateDisplay());n.setValue=d.compose(function(c){return e.getRoot().__preset_select&&n.isModified()&&De(e.getRoot(),!0),c},n.setValue)}function B(e,t){var n=e.getRoot(),o=n.__rememberedObjects.indexOf(t.object);if(o!==-1){var u=n.__rememberedObjectIndecesToControllers[o];if(u===void 0&&(u={},n.__rememberedObjectIndecesToControllers[o]=u),u[t.property]=t,n.load&&n.load.remembered){var c=n.load.remembered,h=void 0;if(c[e.preset])h=c[e.preset];else{if(!c[M])return;h=c[M]}if(h[o]&&h[o][t.property]!==void 0){var g=h[o][t.property];t.initialValue=g,t.setValue(g)}}}}function le(e,t,n,o){if(t[n]===void 0)throw new Error('Object "'+t+'" has no property "'+n+'"');var u=void 0;if(o.color)u=new ge(t,n);else{var c=[t,n].concat(o.factoryArgs);u=Re.apply(e,c)}o.before instanceof x&&(o.before=o.before.__li),B(e,u),l.addClass(u.domElement,"c");var h=document.createElement("span");l.addClass(h,"property-name"),h.innerHTML=u.property;var g=document.createElement("div");g.appendChild(h),g.appendChild(u.domElement);var b=Y(e,g,o.before);return l.addClass(b,D.CLASS_CONTROLLER_ROW),u instanceof ge?l.addClass(b,"color"):l.addClass(b,$e(u.getValue())),Je(e,b,u),e.__controllers.push(u),u}function ie(e,t){return document.location.href+"."+t}function F(e,t,n){var o=document.createElement("option");o.innerHTML=t,o.value=t,e.__preset_select.appendChild(o),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function Ie(e,t){t.style.display=e.useLocalStorage?"block":"none"}function I(e){var t=e.__save_row=document.createElement("li");l.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),l.addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",l.addClass(n,"button gears");var o=document.createElement("span");o.innerHTML="Save",l.addClass(o,"button"),l.addClass(o,"save");var u=document.createElement("span");u.innerHTML="New",l.addClass(u,"button"),l.addClass(u,"save-as");var c=document.createElement("span");c.innerHTML="Revert",l.addClass(c,"button"),l.addClass(c,"revert");var h=e.__preset_select=document.createElement("select");if(e.load&&e.load.remembered?d.each(e.load.remembered,function(A,w){F(e,w,w===e.preset)}):F(e,M,!1),l.bind(h,"change",function(){for(var A=0;A<e.__preset_select.length;A++)e.__preset_select[A].innerHTML=e.__preset_select[A].value;e.preset=this.value}),t.appendChild(h),t.appendChild(n),t.appendChild(o),t.appendChild(u),t.appendChild(c),oe){var g=document.getElementById("dg-local-explain"),b=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block",localStorage.getItem(ie(e,"isLocal"))==="true"&&b.setAttribute("checked","checked"),Ie(e,g),l.bind(b,"change",function(){e.useLocalStorage=!e.useLocalStorage,Ie(e,g)})}var v=document.getElementById("dg-new-constructor");l.bind(v,"keydown",function(A){!A.metaKey||A.which!==67&&A.keyCode!==67||fe.hide()}),l.bind(n,"click",function(){v.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),fe.show(),v.focus(),v.select()}),l.bind(o,"click",function(){e.save()}),l.bind(u,"click",function(){var A=prompt("Enter a new preset name.");A&&e.saveAs(A)}),l.bind(c,"click",function(){e.revert()})}function Qe(e){function t(c){return c.preventDefault(),e.width+=u-c.clientX,e.onResize(),u=c.clientX,!1}function n(){l.removeClass(e.__closeButton,D.CLASS_DRAG),l.unbind(window,"mousemove",t),l.unbind(window,"mouseup",n)}function o(c){return c.preventDefault(),u=c.clientX,l.addClass(e.__closeButton,D.CLASS_DRAG),l.bind(window,"mousemove",t),l.bind(window,"mouseup",n),!1}var u=void 0;e.__resize_handle=document.createElement("div"),d.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),l.bind(e.__resize_handle,"mousedown",o),l.bind(e.__closeButton,"mousedown",o),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function Le(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function Ee(e,t){var n={};return d.each(e.__rememberedObjects,function(o,u){var c={},h=e.__rememberedObjectIndecesToControllers[u];d.each(h,function(g,b){c[b]=t?g.initialValue:g.getValue()}),n[u]=c}),n}function qe(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function Pe(e){e.length!==0&&ze.call(window,function(){Pe(e)}),d.each(e,function(t){t.updateDisplay()})}var Me=Array.prototype.forEach,_e=Array.prototype.slice,d={BREAK:{},extend:function(e){return this.each(_e.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach((function(n){this.isUndefined(t[n])||(e[n]=t[n])}).bind(this))},this),e},defaults:function(e){return this.each(_e.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach((function(n){this.isUndefined(e[n])&&(e[n]=t[n])}).bind(this))},this),e},compose:function(){var e=_e.call(arguments);return function(){for(var t=_e.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Me&&e.forEach&&e.forEach===Me)e.forEach(t,n);else if(e.length===e.length+0){var o=void 0,u=void 0;for(o=0,u=e.length;o<u;o++)if(o in e&&t.call(n,e[o],o)===this.BREAK)return}else for(var c in e)if(t.call(n,e[c],c)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var o=void 0;return function(){var u=this,c=arguments,h=n||!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(u,c)},t),h&&e.apply(u,c)}},toArray:function(e){return e.toArray?e.toArray():_e.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(e){function t(n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return Object.prototype.toString.call(e)==="[object Function]"}},Ze=[{litmus:d.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t!==null&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:_},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t!==null&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:_},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t!==null&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:_},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t!==null&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:_}}},{litmus:d.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:d.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length===3&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length===4&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:d.isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(d.isNumber(e.r)&&d.isNumber(e.g)&&d.isNumber(e.b)&&d.isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(d.isNumber(e.r)&&d.isNumber(e.g)&&d.isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(d.isNumber(e.h)&&d.isNumber(e.s)&&d.isNumber(e.v)&&d.isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(d.isNumber(e.h)&&d.isNumber(e.s)&&d.isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],pe=void 0,ye=void 0,Te=function(){ye=!1;var e=arguments.length>1?d.toArray(arguments):arguments[0];return d.each(Ze,function(t){if(t.litmus(e))return d.each(t.conversions,function(n,o){if(pe=n.read(e),ye===!1&&pe!==!1)return ye=pe,pe.conversionName=o,pe.conversion=n,d.BREAK}),d.BREAK}),ye},He=void 0,ve={hsv_to_rgb:function(e,t,n){var o=Math.floor(e/60)%6,u=e/60-Math.floor(e/60),c=n*(1-t),h=n*(1-u*t),g=n*(1-(1-u)*t),b=[[n,g,c],[h,n,c],[c,n,g],[c,h,n],[g,c,n],[n,c,h]][o];return{r:255*b[0],g:255*b[1],b:255*b[2]}},rgb_to_hsv:function(e,t,n){var o=Math.min(e,t,n),u=Math.max(e,t,n),c=u-o,h=void 0,g=void 0;return u===0?{h:NaN,s:0,v:0}:(g=c/u,h=e===u?(t-n)/c:t===u?2+(n-e)/c:4+(e-t)/c,(h/=6)<0&&(h+=1),{h:360*h,s:g,v:u/255})},rgb_to_hex:function(e,t,n){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,t),o=this.hex_with_component(o,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,n){return n<<(He=8*t)|e&~(255<<He)}},$e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(t,n){for(var o=0;o<n.length;o++){var u=n[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Q=function e(t,n,o){t===null&&(t=Function.prototype);var u=Object.getOwnPropertyDescriptor(t,n);if(u===void 0){var c=Object.getPrototypeOf(t);return c===null?void 0:e(c,n,o)}if("value"in u)return u.value;var h=u.get;if(h!==void 0)return h.call(o)},q=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},O=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?e:t},E=function(){function e(){if(G(this,e),this.__state=Te.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return X(e,[{key:"toString",value:function(){return _(this)}},{key:"toHexString",value:function(){return _(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),e}();E.recalculateRGB=function(e,t,n){if(e.__state.space==="HEX")e.__state[t]=ve.component_from_hex(e.__state.hex,n);else{if(e.__state.space!=="HSV")throw new Error("Corrupted color state");d.extend(e.__state,ve.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},E.recalculateHSV=function(e){var t=ve.rgb_to_hsv(e.r,e.g,e.b);d.extend(e.__state,{s:t.s,v:t.v}),d.isNaN(t.h)?d.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},E.COMPONENTS=["r","g","b","h","s","v","hex","a"],R(E.prototype,"r",2),R(E.prototype,"g",1),R(E.prototype,"b",0),J(E.prototype,"h"),J(E.prototype,"s"),J(E.prototype,"v"),Object.defineProperty(E.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(E.prototype,"hex",{get:function(){return!this.__state.space!=="HEX"&&(this.__state.hex=ve.rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var x=function(){function e(t,n){G(this,e),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return X(e,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),e}(),Ne={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},we={};d.each(Ne,function(e,t){d.each(e,function(n){we[n]=t})});var Z=/(\d+(\.\d+)?)px/,l={makeSelectable:function(e,t){e!==void 0&&e.style!==void 0&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var o=n,u=t;d.isUndefined(u)&&(u=!0),d.isUndefined(o)&&(o=!0),e.style.position="absolute",u&&(e.style.left=0,e.style.right=0),o&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,o){var u=n||{},c=we[t];if(!c)throw new Error("Event type "+t+" not supported.");var h=document.createEvent(c);switch(c){case"MouseEvents":var g=u.x||u.clientX||0,b=u.y||u.clientY||0;h.initMouseEvent(t,u.bubbles||!1,u.cancelable||!0,window,u.clickCount||1,0,0,g,b,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var v=h.initKeyboardEvent||h.initKeyEvent;d.defaults(u,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),v(t,u.bubbles||!1,u.cancelable,window,u.ctrlKey,u.altKey,u.shiftKey,u.metaKey,u.keyCode,u.charCode);break;default:h.initEvent(t,u.bubbles||!1,u.cancelable||!0)}d.defaults(h,o),e.dispatchEvent(h)},bind:function(e,t,n,o){var u=o||!1;return e.addEventListener?e.addEventListener(t,n,u):e.attachEvent&&e.attachEvent("on"+t,n),l},unbind:function(e,t,n,o){var u=o||!1;return e.removeEventListener?e.removeEventListener(t,n,u):e.detachEvent&&e.detachEvent("on"+t,n),l},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return l},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),o=n.indexOf(t);o!==-1&&(n.splice(o,1),e.className=n.join(" "))}else e.className=void 0;return l},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return T(t["border-left-width"])+T(t["border-right-width"])+T(t["padding-left"])+T(t["padding-right"])+T(t.width)},getHeight:function(e){var t=getComputedStyle(e);return T(t["border-top-width"])+T(t["border-bottom-width"])+T(t["padding-top"])+T(t["padding-bottom"])+T(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ue=function(e){function t(n,o){G(this,t);var u=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o)),c=u;return u.__prev=u.getValue(),u.__checkbox=document.createElement("input"),u.__checkbox.setAttribute("type","checkbox"),l.bind(u.__checkbox,"change",function(){c.setValue(!c.__prev)},!1),u.domElement.appendChild(u.__checkbox),u.updateDisplay(),u}return q(t,x),X(t,[{key:"setValue",value:function(n){var o=Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),o}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),Ue=function(e){function t(n,o,u){G(this,t);var c=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o)),h=u,g=c;if(c.__select=document.createElement("select"),d.isArray(h)){var b={};d.each(h,function(v){b[v]=v}),h=b}return d.each(h,function(v,A){var w=document.createElement("option");w.innerHTML=A,w.setAttribute("value",v),g.__select.appendChild(w)}),c.updateDisplay(),l.bind(c.__select,"change",function(){var v=this.options[this.selectedIndex].value;g.setValue(v)}),c.domElement.appendChild(c.__select),c}return q(t,x),X(t,[{key:"setValue",value:function(n){var o=Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),o}},{key:"updateDisplay",value:function(){return l.isActive(this.__select)?this:(this.__select.value=this.getValue(),Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(),Fe=function(e){function t(n,o){function u(){h.setValue(h.__input.value)}G(this,t);var c=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o)),h=c;return c.__input=document.createElement("input"),c.__input.setAttribute("type","text"),l.bind(c.__input,"keyup",u),l.bind(c.__input,"change",u),l.bind(c.__input,"blur",function(){h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}),l.bind(c.__input,"keydown",function(g){g.keyCode===13&&this.blur()}),c.updateDisplay(),c.domElement.appendChild(c.__input),c}return q(t,x),X(t,[{key:"updateDisplay",value:function(){return l.isActive(this.__input)||(this.__input.value=this.getValue()),Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),re=function(e){function t(n,o,u){G(this,t);var c=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o)),h=u||{};return c.__min=h.min,c.__max=h.max,c.__step=h.step,d.isUndefined(c.__step)?c.initialValue===0?c.__impliedStep=1:c.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(c.initialValue))/Math.LN10))/10:c.__impliedStep=c.__step,c.__precision=k(c.__impliedStep),c}return q(t,x),X(t,[{key:"setValue",value:function(n){var o=n;return this.__min!==void 0&&o<this.__min?o=this.__min:this.__max!==void 0&&o>this.__max&&(o=this.__max),this.__step!==void 0&&o%this.__step!=0&&(o=Math.round(o/this.__step)*this.__step),Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,o)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=k(n),this}}]),t}(),ce=function(e){function t(n,o,u){function c(){v.__onFinishChange&&v.__onFinishChange.call(v,v.getValue())}function h(w){var m=A-w.clientY;v.setValue(v.getValue()+m*v.__impliedStep),A=w.clientY}function g(){l.unbind(window,"mousemove",h),l.unbind(window,"mouseup",g),c()}G(this,t);var b=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o,u));b.__truncationSuspended=!1;var v=b,A=void 0;return b.__input=document.createElement("input"),b.__input.setAttribute("type","text"),l.bind(b.__input,"change",function(){var w=parseFloat(v.__input.value);d.isNaN(w)||v.setValue(w)}),l.bind(b.__input,"blur",function(){c()}),l.bind(b.__input,"mousedown",function(w){l.bind(window,"mousemove",h),l.bind(window,"mouseup",g),A=w.clientY}),l.bind(b.__input,"keydown",function(w){w.keyCode===13&&(v.__truncationSuspended=!0,this.blur(),v.__truncationSuspended=!1,c())}),b.updateDisplay(),b.domElement.appendChild(b.__input),b}return q(t,re),X(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():z(this.getValue(),this.__precision),Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),de=function(e){function t(n,o,u,c,h){function g(C){C.preventDefault();var ee=m.__background.getBoundingClientRect();return m.setValue(r(C.clientX,ee.left,ee.right,m.__min,m.__max)),!1}function b(){l.unbind(window,"mousemove",g),l.unbind(window,"mouseup",b),m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}function v(C){var ee=C.touches[0].clientX,U=m.__background.getBoundingClientRect();m.setValue(r(ee,U.left,U.right,m.__min,m.__max))}function A(){l.unbind(window,"touchmove",v),l.unbind(window,"touchend",A),m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}G(this,t);var w=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o,{min:u,max:c,step:h})),m=w;return w.__background=document.createElement("div"),w.__foreground=document.createElement("div"),l.bind(w.__background,"mousedown",function(C){document.activeElement.blur(),l.bind(window,"mousemove",g),l.bind(window,"mouseup",b),g(C)}),l.bind(w.__background,"touchstart",function(C){C.touches.length===1&&(l.bind(window,"touchmove",v),l.bind(window,"touchend",A),v(C))}),l.addClass(w.__background,"slider"),l.addClass(w.__foreground,"slider-fg"),w.updateDisplay(),w.__background.appendChild(w.__foreground),w.domElement.appendChild(w.__background),w}return q(t,re),X(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*n+"%",Q(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),Se=function(e){function t(n,o,u){G(this,t);var c=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o)),h=c;return c.__button=document.createElement("div"),c.__button.innerHTML=u===void 0?"Fire":u,l.bind(c.__button,"click",function(g){return g.preventDefault(),h.fire(),!1}),l.addClass(c.__button,"button"),c.domElement.appendChild(c.__button),c}return q(t,x),X(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(),ge=function(e){function t(n,o){function u(U){A(U),l.bind(window,"mousemove",A),l.bind(window,"touchmove",A),l.bind(window,"mouseup",h),l.bind(window,"touchend",h)}function c(U){w(U),l.bind(window,"mousemove",w),l.bind(window,"touchmove",w),l.bind(window,"mouseup",g),l.bind(window,"touchend",g)}function h(){l.unbind(window,"mousemove",A),l.unbind(window,"touchmove",A),l.unbind(window,"mouseup",h),l.unbind(window,"touchend",h),v()}function g(){l.unbind(window,"mousemove",w),l.unbind(window,"touchmove",w),l.unbind(window,"mouseup",g),l.unbind(window,"touchend",g),v()}function b(){var U=Te(this.value);U!==!1?(C.__color.__state=U,C.setValue(C.__color.toOriginal())):this.value=C.__color.toString()}function v(){C.__onFinishChange&&C.__onFinishChange.call(C,C.__color.toOriginal())}function A(U){U.type.indexOf("touch")===-1&&U.preventDefault();var j=C.__saturation_field.getBoundingClientRect(),te=U.touches&&U.touches[0]||U,et=te.clientX,je=te.clientY,me=(et-j.left)/(j.right-j.left),xe=1-(je-j.top)/(j.bottom-j.top);return xe>1?xe=1:xe<0&&(xe=0),me>1?me=1:me<0&&(me=0),C.__color.v=xe,C.__color.s=me,C.setValue(C.__color.toOriginal()),!1}function w(U){U.type.indexOf("touch")===-1&&U.preventDefault();var j=C.__hue_field.getBoundingClientRect(),te=1-((U.touches&&U.touches[0]||U).clientY-j.top)/(j.bottom-j.top);return te>1?te=1:te<0&&(te=0),C.__color.h=360*te,C.setValue(C.__color.toOriginal()),!1}G(this,t);var m=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,o));m.__color=new E(m.getValue()),m.__temp=new E(0);var C=m;m.domElement=document.createElement("div"),l.makeSelectable(m.domElement,!1),m.__selector=document.createElement("div"),m.__selector.className="selector",m.__saturation_field=document.createElement("div"),m.__saturation_field.className="saturation-field",m.__field_knob=document.createElement("div"),m.__field_knob.className="field-knob",m.__field_knob_border="2px solid ",m.__hue_knob=document.createElement("div"),m.__hue_knob.className="hue-knob",m.__hue_field=document.createElement("div"),m.__hue_field.className="hue-field",m.__input=document.createElement("input"),m.__input.type="text",m.__input_textShadow="0 1px 1px ",l.bind(m.__input,"keydown",function(U){U.keyCode===13&&b.call(this)}),l.bind(m.__input,"blur",b),l.bind(m.__selector,"mousedown",function(){l.addClass(this,"drag").bind(window,"mouseup",function(){l.removeClass(C.__selector,"drag")})}),l.bind(m.__selector,"touchstart",function(){l.addClass(this,"drag").bind(window,"touchend",function(){l.removeClass(C.__selector,"drag")})});var ee=document.createElement("div");return d.extend(m.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),d.extend(m.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:m.__field_knob_border+(m.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),d.extend(m.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),d.extend(m.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),d.extend(ee.style,{width:"100%",height:"100%",background:"none"}),P(ee,"top","rgba(0,0,0,0)","#000"),d.extend(m.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ke(m.__hue_field),d.extend(m.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:m.__input_textShadow+"rgba(0,0,0,0.7)"}),l.bind(m.__saturation_field,"mousedown",u),l.bind(m.__saturation_field,"touchstart",u),l.bind(m.__field_knob,"mousedown",u),l.bind(m.__field_knob,"touchstart",u),l.bind(m.__hue_field,"mousedown",c),l.bind(m.__hue_field,"touchstart",c),m.__saturation_field.appendChild(ee),m.__selector.appendChild(m.__field_knob),m.__selector.appendChild(m.__saturation_field),m.__selector.appendChild(m.__hue_field),m.__hue_field.appendChild(m.__hue_knob),m.domElement.appendChild(m.__input),m.domElement.appendChild(m.__selector),m.updateDisplay(),m}return q(t,x),X(t,[{key:"updateDisplay",value:function(){var n=Te(this.getValue());if(n!==!1){var o=!1;d.each(E.COMPONENTS,function(h){if(!d.isUndefined(n[h])&&!d.isUndefined(this.__color.__state[h])&&n[h]!==this.__color.__state[h])return o=!0,{}},this),o&&d.extend(this.__color.__state,n)}d.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var u=this.__color.v<.5||this.__color.s>.5?255:0,c=255-u;d.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+u+","+u+","+u+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,P(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),d.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+u+","+u+","+u+")",textShadow:this.__input_textShadow+"rgba("+c+","+c+","+c+",.7)"})}}]),t}(),Ae=["-moz-","-o-","-webkit-","-ms-",""],be={load:function(e,t){var n=t||document,o=n.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,n.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,t){var n=t||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e;var u=n.getElementsByTagName("head")[0];try{u.appendChild(o)}catch{}}},Re=function(e,t){var n=e[t];return d.isArray(arguments[2])||d.isObject(arguments[2])?new Ue(e,t,arguments[2]):d.isNumber(n)?d.isNumber(arguments[2])&&d.isNumber(arguments[3])?d.isNumber(arguments[4])?new de(e,t,arguments[2],arguments[3],arguments[4]):new de(e,t,arguments[2],arguments[3]):d.isNumber(arguments[4])?new ce(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ce(e,t,{min:arguments[2],max:arguments[3]}):d.isString(n)?new Fe(e,t):d.isFunction(n)?new Se(e,t,""):d.isBoolean(n)?new ue(e,t):null},ze=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},Be=function(){function e(){G(this,e),this.backgroundElement=document.createElement("div"),d.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),l.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),d.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;l.bind(this.backgroundElement,"click",function(){t.hide()})}return X(e,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),d.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function o(){t.domElement.style.display="none",t.backgroundElement.style.display="none",l.unbind(t.domElement,"webkitTransitionEnd",o),l.unbind(t.domElement,"transitionend",o),l.unbind(t.domElement,"oTransitionEnd",o)};l.bind(this.domElement,"webkitTransitionEnd",n),l.bind(this.domElement,"transitionend",n),l.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-l.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-l.getHeight(this.domElement)/2+"px"}}]),e}(),$=function(e){if(typeof window<"u"){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);be.inject($);var M="Default",oe=function(){try{return!!window.localStorage}catch{return!1}}(),fe=void 0,ae=!0,W=void 0,he=!1,K=[],D=function e(t){var n=this,o=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),l.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=d.defaults(o,{closeOnTop:!1,autoPlace:!0,width:e.DEFAULT_WIDTH}),o=d.defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),d.isUndefined(o.load)?o.load={preset:M}:o.preset&&(o.load.preset=o.preset),d.isUndefined(o.parent)&&o.hideable&&K.push(this),o.resizable=d.isUndefined(o.parent)&&o.resizable,o.autoPlace&&d.isUndefined(o.scrollable)&&(o.scrollable=!0);var u=oe&&localStorage.getItem(ie(this,"isLocal"))==="true",c=void 0,h=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},closeOnTop:{get:function(){return o.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:o.load.preset},set:function(v){n.parent?n.getRoot().preset=v:o.load.preset=v,qe(this),n.revert()}},width:{get:function(){return o.width},set:function(v){o.width=v,Le(n,v)}},name:{get:function(){return o.name},set:function(v){o.name=v,h&&(h.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(v){o.closed=v,o.closed?l.addClass(n.__ul,e.CLASS_CLOSED):l.removeClass(n.__ul,e.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=v?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return u},set:function(v){oe&&(u=v,v?l.bind(window,"unload",c):l.unbind(window,"unload",c),localStorage.setItem(ie(n,"isLocal"),v))}}}),d.isUndefined(o.parent)){if(o.closed=!1,l.addClass(this.domElement,e.CLASS_MAIN),l.makeSelectable(this.domElement,!1),oe&&u){n.useLocalStorage=!0;var g=localStorage.getItem(ie(this,"gui"));g&&(o.load=JSON.parse(g))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,l.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),o.closeOnTop?(l.addClass(this.__closeButton,e.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(l.addClass(this.__closeButton,e.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),l.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{o.closed===void 0&&(o.closed=!0);var b=document.createTextNode(o.name);l.addClass(b,"controller-name"),h=Y(n,b),l.addClass(this.__ul,e.CLASS_CLOSED),l.addClass(h,"title"),l.bind(h,"click",function(v){return v.preventDefault(),n.closed=!n.closed,!1}),o.closed||(this.closed=!1)}o.autoPlace&&(d.isUndefined(o.parent)&&(ae&&(W=document.createElement("div"),l.addClass(W,"dg"),l.addClass(W,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(W),ae=!1),W.appendChild(this.domElement),l.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||Le(n,o.width)),this.__resizeHandler=function(){n.onResizeDebounced()},l.bind(window,"resize",this.__resizeHandler),l.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),l.bind(this.__ul,"transitionend",this.__resizeHandler),l.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&Qe(this),c=function(){oe&&localStorage.getItem(ie(n,"isLocal"))==="true"&&localStorage.setItem(ie(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=c,o.parent||function(){var v=n.getRoot();v.width+=1,d.defer(function(){v.width-=1})}()};D.toggleHide=function(){he=!he,d.each(K,function(e){e.domElement.style.display=he?"none":""})},D.CLASS_AUTO_PLACE="a",D.CLASS_AUTO_PLACE_CONTAINER="ac",D.CLASS_MAIN="main",D.CLASS_CONTROLLER_ROW="cr",D.CLASS_TOO_TALL="taller-than-window",D.CLASS_CLOSED="closed",D.CLASS_CLOSE_BUTTON="close-button",D.CLASS_CLOSE_TOP="close-top",D.CLASS_CLOSE_BOTTOM="close-bottom",D.CLASS_DRAG="drag",D.DEFAULT_WIDTH=245,D.TEXT_CLOSED="Close Controls",D.TEXT_OPEN="Open Controls",D._keydownHandler=function(e){document.activeElement.type==="text"||e.which!==72&&e.keyCode!==72||D.toggleHide()},l.bind(window,"keydown",D._keydownHandler,!1),d.extend(D.prototype,{add:function(e,t){return le(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return le(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;d.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&W.removeChild(this.domElement);var e=this;d.each(this.__folders,function(t){e.removeFolder(t)}),l.unbind(window,"keydown",D._keydownHandler,!1),ke(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new D(t);this.__folders[e]=n;var o=Y(this,n.domElement);return l.addClass(o,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],ke(e);var t=this;d.each(e.__folders,function(n){e.removeFolder(n)}),d.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=l.getOffset(e.__ul).top,n=0;d.each(e.__ul.childNodes,function(o){e.autoPlace&&o===e.__save_row||(n+=l.getHeight(o))}),window.innerHeight-t-20<n?(l.addClass(e.domElement,D.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-20+"px"):(l.removeClass(e.domElement,D.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&d.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:d.debounce(function(){this.onResize()},50),remember:function(){if(d.isUndefined(fe)&&((fe=new Be).domElement.innerHTML=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;d.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&I(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Le(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ee(this)),e.folders={},d.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ee(this),De(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[M]=Ee(this,!0)),this.load.remembered[e]=Ee(this),this.preset=e,F(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){d.each(this.__controllers,function(t){this.getRoot().load.remembered?B(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),d.each(this.__folders,function(t){t.revert(t)}),e||De(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Pe(this.__listening)},updateDisplay:function(){d.each(this.__controllers,function(e){e.updateDisplay()}),d.each(this.__folders,function(e){e.updateDisplay()})}});var Ge={Color:E,math:ve,interpret:Te},Xe={Controller:x,BooleanController:ue,OptionController:Ue,StringController:Fe,NumberController:re,NumberControllerBox:ce,NumberControllerSlider:de,FunctionController:Se,ColorController:ge},V={dom:l},Oe={GUI:D},Ve=D,Ye={color:Ge,controllers:Xe,dom:V,gui:Oe,GUI:Ve};H.color=Ge,H.controllers=Xe,H.dom=V,H.gui=Oe,H.GUI=Ve,H.default=Ye,Object.defineProperty(H,"__esModule",{value:!0})});function _t(H,_){const R=H;g(),_={IMMEDIATE:!0,TRIGGER:"hover",AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(Math.random()*20)+5,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,..._};function J(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}const T=[],k=[],z=[];T.push(new J);const{gl:r,ext:P}=Ke(R);De()&&(_.DYE_RESOLUTION=512),P.supportLinearFiltering||(_.DYE_RESOLUTION=512,_.SHADING=!1,_.BLOOM=!1,_.SUNRAYS=!1);function Ke(i){const s={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let a=i.getContext("webgl2",s);const f=!!a;f||(a=i.getContext("webgl",s)||i.getContext("experimental-webgl",s));let p,S;f?(a.getExtension("EXT_color_buffer_float"),S=a.getExtension("OES_texture_float_linear")):(p=a.getExtension("OES_texture_half_float"),S=a.getExtension("OES_texture_half_float_linear")),a.clearColor(0,0,0,1);const y=f?a.HALF_FLOAT:p.HALF_FLOAT_OES;let N,L,se;return f?(N=Y(a,a.RGBA16F,a.RGBA,y),L=Y(a,a.RG16F,a.RG,y),se=Y(a,a.R16F,a.RED,y)):(N=Y(a,a.RGBA,a.RGBA,y),L=Y(a,a.RGBA,a.RGBA,y),se=Y(a,a.RGBA,a.RGBA,y)),{gl:a,ext:{formatRGBA:N,formatRG:L,formatR:se,halfFloatTexType:y,supportLinearFiltering:S}}}function Y(i,s,a,f){if(!ke(i,s,a,f))switch(s){case i.R16F:return Y(i,i.RG16F,i.RG,f);case i.RG16F:return Y(i,i.RGBA16F,i.RGBA,f);default:return null}return{internalFormat:s,format:a}}function ke(i,s,a,f){const p=i.createTexture();i.bindTexture(i.TEXTURE_2D,p),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,s,4,4,0,a,f,null);const S=i.createFramebuffer();return i.bindFramebuffer(i.FRAMEBUFFER,S),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,p,0),i.checkFramebufferStatus(i.FRAMEBUFFER)===i.FRAMEBUFFER_COMPLETE}function De(){return/Mobi|Android/i.test(navigator.userAgent)}class Je{constructor(s,a){this.vertexShader=s,this.fragmentShaderSource=a,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(s){let a=0;for(let p=0;p<s.length;p++)a+=ht(s[p]);let f=this.programs[a];if(!f){const p=F(r.FRAGMENT_SHADER,this.fragmentShaderSource,s);f=le(this.vertexShader,p),this.programs[a]=f}f!==this.activeProgram&&(this.uniforms=ie(f),this.activeProgram=f)}bind(){r.useProgram(this.activeProgram)}}class B{constructor(s,a){this.uniforms={},this.program=le(s,a),this.uniforms=ie(this.program)}bind(){r.useProgram(this.program)}}function le(i,s){const a=r.createProgram();if(r.attachShader(a,i),r.attachShader(a,s),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw r.getProgramInfoLog(a);return a}function ie(i){const s=[],a=r.getProgramParameter(i,r.ACTIVE_UNIFORMS);for(let f=0;f<a;f++){const p=r.getActiveUniform(i,f).name;s[p]=r.getUniformLocation(i,p)}return s}function F(i,s,a){s=Ie(s,a);const f=r.createShader(i);if(r.shaderSource(f,s),r.compileShader(f),!r.getShaderParameter(f,r.COMPILE_STATUS))throw r.getShaderInfoLog(f);return f}function Ie(i,s){if(!s)return i;let a="";return s.forEach(f=>{a+=`#define ${f}
`}),a+i}const I=F(r.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Qe=F(r.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Le=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),Ee=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),qe=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),Pe=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),Me=F(r.FRAGMENT_SHADER,_.TRANSPARENT?`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
`:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),_e=`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,d=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),Ze=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),pe=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),ye=F(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),Te=F(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),He=F(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),ve=F(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,P.supportLinearFiltering?null:["MANUAL_FILTERING"]),$e=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),G=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),X=F(r.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),Q=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),q=F(r.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),O=(r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),r.STATIC_DRAW),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(0),i=>{r.bindFramebuffer(r.FRAMEBUFFER,i),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)});let E,x,Ne,we,Z,l,ue,Ue;const Fe=e(),re=new B(Qe,Le),ce=new B(I,Ee),de=new B(I,qe),Se=new B(I,Pe),ge=new B(I,Me),Ae=new B(I,d),be=new B(I,Ze),Re=new B(I,pe),ze=new B(I,ye),Be=new B(I,Te),$=new B(I,He),M=new B(I,ve),oe=new B(I,$e),fe=new B(I,G),ae=new B(I,X),W=new B(I,Q),he=new B(I,q),K=new Je(I,_e);function D(){const i=We(_.SIM_RESOLUTION),s=We(_.DYE_RESOLUTION),a=P.halfFloatTexType,f=P.formatRGBA,p=P.formatRG,S=P.formatR,y=P.supportLinearFiltering?r.LINEAR:r.NEAREST;E?E=Ye(E,s.width,s.height,f.internalFormat,f.format,a,y):E=Oe(s.width,s.height,f.internalFormat,f.format,a,y),x?x=Ye(x,i.width,i.height,p.internalFormat,p.format,a,y):x=Oe(i.width,i.height,p.internalFormat,p.format,a,y),Ne=V(i.width,i.height,S.internalFormat,S.format,a,r.NEAREST),we=V(i.width,i.height,S.internalFormat,S.format,a,r.NEAREST),Z=Oe(i.width,i.height,S.internalFormat,S.format,a,r.NEAREST),Ge(),Xe()}function Ge(){const i=We(_.BLOOM_RESOLUTION),s=P.halfFloatTexType,a=P.formatRGBA,f=P.supportLinearFiltering?r.LINEAR:r.NEAREST;l=V(i.width,i.height,a.internalFormat,a.format,s,f),z.length=0;for(let p=0;p<_.BLOOM_ITERATIONS;p++){const S=i.width>>p+1,y=i.height>>p+1;if(S<2||y<2)break;const N=V(S,y,a.internalFormat,a.format,s,f);z.push(N)}}function Xe(){const i=We(_.SUNRAYS_RESOLUTION),s=P.halfFloatTexType,a=P.formatR,f=P.supportLinearFiltering?r.LINEAR:r.NEAREST;ue=V(i.width,i.height,a.internalFormat,a.format,s,f),Ue=V(i.width,i.height,a.internalFormat,a.format,s,f)}function V(i,s,a,f,p,S){r.activeTexture(r.TEXTURE0);const y=r.createTexture();r.bindTexture(r.TEXTURE_2D,y),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,S),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,S),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,a,i,s,0,f,p,null);const N=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,N),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,y,0),r.viewport(0,0,i,s),r.clear(r.COLOR_BUFFER_BIT);const L=1/i,se=1/s;return{texture:y,fbo:N,width:i,height:s,texelSizeX:L,texelSizeY:se,attach(Ce){return r.activeTexture(r.TEXTURE0+Ce),r.bindTexture(r.TEXTURE_2D,y),Ce}}}function Oe(i,s,a,f,p,S){let y=V(i,s,a,f,p,S),N=V(i,s,a,f,p,S);return{width:i,height:s,texelSizeX:y.texelSizeX,texelSizeY:y.texelSizeY,get read(){return y},set read(L){y=L},get write(){return N},set write(L){N=L},swap(){const L=y;y=N,N=L}}}function Ve(i,s,a,f,p,S,y){const N=V(s,a,f,p,S,y);return ce.bind(),r.uniform1i(ce.uniforms.uTexture,i.attach(0)),O(N.fbo),N}function Ye(i,s,a,f,p,S,y){return i.width===s&&i.height===a||(i.read=Ve(i.read,s,a,f,p,S,y),i.write=V(s,a,f,p,S,y),i.width=s,i.height=a,i.texelSizeX=1/s,i.texelSizeY=1/a),i}function e(i){const s=r.createTexture();r.bindTexture(r.TEXTURE_2D,s),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT),r.texImage2D(r.TEXTURE_2D,0,r.RGB,1,1,0,r.RGB,r.UNSIGNED_BYTE,new Uint8Array([255,255,255]));const a={texture:s,width:1,height:1,attach(p){return r.activeTexture(r.TEXTURE0+p),r.bindTexture(r.TEXTURE_2D,s),p}},f=new Image;return f.onload=()=>{a.width=f.width,a.height=f.height,r.bindTexture(r.TEXTURE_2D,s),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,f)},a}function t(){const i=[];_.SHADING&&i.push("SHADING"),_.BLOOM&&i.push("BLOOM"),_.SUNRAYS&&i.push("SUNRAYS"),K.setKeywords(i)}t(),D(),_.IMMEDIATE&&je(_.SPLAT_COUNT);function n(){_.AUTO&&_.INTERVAL&&!_.PAUSED&&k.push(_.SPLAT_COUNT),setTimeout(n,_.INTERVAL)}setTimeout(n,_.INTERVAL);let o=Date.now(),u=0;c();function c(){const i=h();g()&&D(),b(i),v(),_.PAUSED||A(i),w(),requestAnimationFrame(c)}function h(){const i=Date.now();let s=(i-o)/1e3;return s=Math.min(s,.016666),o=i,s}function g(){const i=ne(R.clientWidth),s=ne(R.clientHeight);return R.width!==i||R.height!==s?(R.width=i,R.height=s,!0):!1}function b(i){_.COLORFUL&&(u+=i*_.COLOR_UPDATE_SPEED,u>=1&&(u=dt(u,0,1),T.forEach(s=>{s.color=tt()})))}function v(){k.length>0&&je(k.pop()),T.forEach(i=>{i.moved&&(i.moved=!1,et(i))})}function A(i){r.disable(r.BLEND),r.viewport(0,0,x.width,x.height),fe.bind(),r.uniform2f(fe.uniforms.texelSize,x.texelSizeX,x.texelSizeY),r.uniform1i(fe.uniforms.uVelocity,x.read.attach(0)),O(we.fbo),ae.bind(),r.uniform2f(ae.uniforms.texelSize,x.texelSizeX,x.texelSizeY),r.uniform1i(ae.uniforms.uVelocity,x.read.attach(0)),r.uniform1i(ae.uniforms.uCurl,we.attach(1)),r.uniform1f(ae.uniforms.curl,_.CURL),r.uniform1f(ae.uniforms.dt,i),O(x.write.fbo),x.swap(),oe.bind(),r.uniform2f(oe.uniforms.texelSize,x.texelSizeX,x.texelSizeY),r.uniform1i(oe.uniforms.uVelocity,x.read.attach(0)),O(Ne.fbo),de.bind(),r.uniform1i(de.uniforms.uTexture,Z.read.attach(0)),r.uniform1f(de.uniforms.value,_.PRESSURE),O(Z.write.fbo),Z.swap(),W.bind(),r.uniform2f(W.uniforms.texelSize,x.texelSizeX,x.texelSizeY),r.uniform1i(W.uniforms.uDivergence,Ne.attach(0));for(let a=0;a<_.PRESSURE_ITERATIONS;a++)r.uniform1i(W.uniforms.uPressure,Z.read.attach(1)),O(Z.write.fbo),Z.swap();he.bind(),r.uniform2f(he.uniforms.texelSize,x.texelSizeX,x.texelSizeY),r.uniform1i(he.uniforms.uPressure,Z.read.attach(0)),r.uniform1i(he.uniforms.uVelocity,x.read.attach(1)),O(x.write.fbo),x.swap(),M.bind(),r.uniform2f(M.uniforms.texelSize,x.texelSizeX,x.texelSizeY),P.supportLinearFiltering||r.uniform2f(M.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY);const s=x.read.attach(0);r.uniform1i(M.uniforms.uVelocity,s),r.uniform1i(M.uniforms.uSource,s),r.uniform1f(M.uniforms.dt,i),r.uniform1f(M.uniforms.dissipation,_.VELOCITY_DISSIPATION),O(x.write.fbo),x.swap(),r.viewport(0,0,E.width,E.height),P.supportLinearFiltering||r.uniform2f(M.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),r.uniform1i(M.uniforms.uVelocity,x.read.attach(0)),r.uniform1i(M.uniforms.uSource,E.read.attach(1)),r.uniform1f(M.uniforms.dissipation,_.DENSITY_DISSIPATION),O(E.write.fbo),E.swap()}function w(i){_.BLOOM&&U(E.read,l),_.SUNRAYS&&(j(E.read,E.write,ue),te(ue,Ue,1)),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.enable(r.BLEND);const s=r.drawingBufferWidth,a=r.drawingBufferHeight;r.viewport(0,0,s,a);const f=null;_.TRANSPARENT||m(f,ct(_.BACK_COLOR)),_.TRANSPARENT&&C(f),ee(f,s,a)}function m(i,s){Se.bind(),r.uniform4f(Se.uniforms.color,s.r,s.g,s.b,1),O(i)}function C(i){ge.bind(),r.uniform1f(ge.uniforms.aspectRatio,R.width/R.height),O(i)}function ee(i,s,a){if(K.bind(),_.SHADING&&r.uniform2f(K.uniforms.texelSize,1/s,1/a),r.uniform1i(K.uniforms.uTexture,E.read.attach(0)),_.BLOOM){r.uniform1i(K.uniforms.uBloom,l.attach(1)),r.uniform1i(K.uniforms.uDithering,Fe.attach(2));const f=ft(Fe,s,a);r.uniform2f(K.uniforms.ditherScale,f.x,f.y)}_.SUNRAYS&&r.uniform1i(K.uniforms.uSunrays,ue.attach(3)),O(i)}function U(i,s){if(z.length<2)return;let a=s;r.disable(r.BLEND),Ae.bind();const f=_.BLOOM_THRESHOLD*_.BLOOM_SOFT_KNEE+1e-4,p=_.BLOOM_THRESHOLD-f,S=f*2,y=.25/f;r.uniform3f(Ae.uniforms.curve,p,S,y),r.uniform1f(Ae.uniforms.threshold,_.BLOOM_THRESHOLD),r.uniform1i(Ae.uniforms.uTexture,i.attach(0)),r.viewport(0,0,a.width,a.height),O(a.fbo),be.bind();for(let N=0;N<z.length;N++){const L=z[N];r.uniform2f(be.uniforms.texelSize,a.texelSizeX,a.texelSizeY),r.uniform1i(be.uniforms.uTexture,a.attach(0)),r.viewport(0,0,L.width,L.height),O(L.fbo),a=L}r.blendFunc(r.ONE,r.ONE),r.enable(r.BLEND);for(let N=z.length-2;N>=0;N--){const L=z[N];r.uniform2f(be.uniforms.texelSize,a.texelSizeX,a.texelSizeY),r.uniform1i(be.uniforms.uTexture,a.attach(0)),r.viewport(0,0,L.width,L.height),O(L.fbo),a=L}r.disable(r.BLEND),Re.bind(),r.uniform2f(Re.uniforms.texelSize,a.texelSizeX,a.texelSizeY),r.uniform1i(Re.uniforms.uTexture,a.attach(0)),r.uniform1f(Re.uniforms.intensity,_.BLOOM_INTENSITY),r.viewport(0,0,s.width,s.height),O(s.fbo)}function j(i,s,a){r.disable(r.BLEND),ze.bind(),r.uniform1i(ze.uniforms.uTexture,i.attach(0)),r.viewport(0,0,s.width,s.height),O(s.fbo),Be.bind(),r.uniform1f(Be.uniforms.weight,_.SUNRAYS_WEIGHT),r.uniform1i(Be.uniforms.uTexture,s.attach(0)),r.viewport(0,0,a.width,a.height),O(a.fbo)}function te(i,s,a){re.bind();for(let f=0;f<a;f++)r.uniform2f(re.uniforms.texelSize,i.texelSizeX,0),r.uniform1i(re.uniforms.uTexture,i.attach(0)),O(s.fbo),r.uniform2f(re.uniforms.texelSize,0,i.texelSizeY),r.uniform1i(re.uniforms.uTexture,s.attach(0)),O(i.fbo)}function et(i){const s=i.deltaX*_.SPLAT_FORCE,a=i.deltaY*_.SPLAT_FORCE;me(i.texcoordX,i.texcoordY,s,a,i.color)}function je(i){for(let s=0;s<i;s++){const a=tt();a.r*=10,a.g*=10,a.b*=10;const f=Math.random(),p=Math.random(),S=1e3*(Math.random()-.5),y=1e3*(Math.random()-.5);me(f,p,S,y,a)}}function me(i,s,a,f,p){r.viewport(0,0,x.width,x.height),$.bind(),r.uniform1i($.uniforms.uTarget,x.read.attach(0)),r.uniform1f($.uniforms.aspectRatio,R.width/R.height),r.uniform2f($.uniforms.point,i,s),r.uniform3f($.uniforms.color,a,f,0),r.uniform1f($.uniforms.radius,xe(_.SPLAT_RADIUS/100)),O(x.write.fbo),x.swap(),r.viewport(0,0,E.width,E.height),r.uniform1i($.uniforms.uTarget,E.read.attach(0)),r.uniform3f($.uniforms.color,p.r,p.g,p.b),O(E.write.fbo),E.swap()}function xe(i){const s=R.width/R.height;return s>1&&(i*=s),i}R.addEventListener("mousedown",i=>{const s=ne(i.offsetX),a=ne(i.offsetY);let f=T.find(p=>p.id===-1);f||(f=new J),it(f,-1,s,a)}),setTimeout(()=>{R.addEventListener("mousemove",i=>{const s=ne(i.offsetX),a=ne(i.offsetY);rt(T[0],s,a)})},500),window.addEventListener("mouseup",()=>{ot(T[0])}),R.addEventListener("touchstart",i=>{i.preventDefault();const s=i.targetTouches;for(;s.length>=T.length;)T.push(new J);for(let a=0;a<s.length;a++){const f=ne(s[a].pageX),p=ne(s[a].pageY);it(T[a+1],s[a].identifier,f,p)}}),R.addEventListener("touchmove",i=>{i.preventDefault();const s=i.targetTouches;for(let a=0;a<s.length;a++){const f=ne(s[a].pageX),p=ne(s[a].pageY);rt(T[a+1],f,p)}},!1),window.addEventListener("touchend",i=>{const s=i.changedTouches;for(let a=0;a<s.length;a++){const f=T.find(p=>p.id===s[a].identifier);ot(f)}}),window.addEventListener("keydown",i=>{i.code==="KeyP"&&(_.PAUSED=!_.PAUSED),i.key===" "&&k.push(Number.parseInt(Math.random()*20)+5)});function it(i,s,a,f){i.id=s,i.down=!0,i.moved=!1,i.texcoordX=a/R.width,i.texcoordY=1-f/R.height,i.prevTexcoordX=i.texcoordX,i.prevTexcoordY=i.texcoordY,i.deltaX=0,i.deltaY=0,i.color=tt()}function rt(i,s,a){_.TRIGGER==="click"&&(i.moved=i.down),i.prevTexcoordX=i.texcoordX,i.prevTexcoordY=i.texcoordY,i.texcoordX=s/R.width,i.texcoordY=1-a/R.height,i.deltaX=st(i.texcoordX-i.prevTexcoordX),i.deltaY=lt(i.texcoordY-i.prevTexcoordY),_.TRIGGER==="hover"&&(i.moved=Math.abs(i.deltaX)>0||Math.abs(i.deltaY)>0)}function ot(i){i.down=!1}function st(i){const s=R.width/R.height;return s<1&&(i*=s),i}function lt(i){const s=R.width/R.height;return s>1&&(i/=s),i}function tt(){const i=ut(Math.random(),1,1);return i.r*=.15,i.g*=.15,i.b*=.15,i}function ut(i,s,a){let f,p,S;const y=Math.floor(i*6),N=i*6-y,L=a*(1-s),se=a*(1-N*s),Ce=a*(1-(1-N)*s);switch(y%6){case 0:f=a,p=Ce,S=L;break;case 1:f=se,p=a,S=L;break;case 2:f=L,p=a,S=Ce;break;case 3:f=L,p=se,S=a;break;case 4:f=Ce,p=L,S=a;break;case 5:f=a,p=L,S=se;break}return{r:f,g:p,b:S}}function ct(i){return{r:i.r/255,g:i.g/255,b:i.b/255}}function dt(i,s,a){const f=a-s;return f===0?s:(i-s)%f+s}function We(i){let s=r.drawingBufferWidth/r.drawingBufferHeight;s<1&&(s=1/s);const a=Math.round(i),f=Math.round(i*s);return r.drawingBufferWidth>r.drawingBufferHeight?{width:f,height:a}:{width:a,height:f}}function ft(i,s,a){return{x:s/i.width,y:a/i.height}}function ne(i){const s=window.devicePixelRatio||1;return Math.floor(i*s)}function ht(i){if(i.length===0)return 0;let s=0;for(let a=0;a<i.length;a++)s=(s<<5)-s+i.charCodeAt(a),s|=0;return s}}_t(document.querySelector("canvas"),{TRIGGER:"hover",IMMEDIATE:!0,AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:256,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:256,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.2,PRESSURE_ITERATIONS:10,CURL:30,SPLAT_RADIUS:.1,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(Math.random()*20)+5,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!1,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1})});export default pt();
