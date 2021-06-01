this.wc=this.wc||{},this.wc.betaFeaturesTrackingModal=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=578)}({0:function(e,t){e.exports=window.wp.element},124:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},131:function(e,t,n){var r=n(124);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},134:function(e,t){function n(e,t,n,r,o,c,a){try{var i=e[c](a),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var a=e.apply(t,r);function i(e){n(a,o,c,i,u,"next",e)}function u(e){n(a,o,c,i,u,"throw",e)}i(void 0)}))}}},16:function(e,t){e.exports=window.regeneratorRuntime},182:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},183:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}},184:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},2:function(e,t){e.exports=window.wp.i18n},26:function(e,t){e.exports=window.wp.data},4:function(e,t){e.exports=window.wp.components},43:function(e,t,n){var r=n(182),o=n(183),c=n(131),a=n(184);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()}},569:function(e,t,n){},578:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(16),c=n.n(o),a=n(134),i=n.n(a),u=n(43),s=n.n(u),l=n(2),f=n(4),d=n(26),m=n(65),p=n(59),b=n(92),w=Object(m.compose)(Object(d.withDispatch)((function(e){return{updateOptions:e(p.OPTIONS_STORE_NAME).updateOptions}})))((function(e){var t=e.updateOptions,n=Object(r.useState)(!1),o=s()(n,2),a=o[0],u=o[1],d=Object(r.useState)(!1),m=s()(d,2),p=m[0],w=m[1],v=Object(r.useRef)(document.querySelector("#woocommerce_navigation_enabled")),y=function(){var e=i()(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"function"==typeof window.wcTracks.enable&&(n?window.wcTracks.enable():window.wcTracks.isEnabled=!1),n&&Object(b.recordEvent)("settings_features_tracking_enabled"),e.abrupt("return",t({woocommerce_allow_tracking:n?"yes":"no"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(v.current){var e=function(e){e.target.checked&&(e.target.checked=!1,u(!0))},t=v.current;return t.addEventListener("change",e,!1),function(){return t.removeEventListener("change",e)}}}),[]),v.current&&a?Object(r.createElement)(f.Modal,{title:Object(l.__)("Build a Better WooCommerce",'woocommerce'),onRequestClose:function(){return u(!1)},className:"woocommerce-beta-features-tracking-modal"},Object(r.createElement)("p",null,Object(l.__)("Testing new features requires sharing non-sensitive data via ",'woocommerce'),Object(r.createElement)("a",{href:"https://woocommerce.com/usage-tracking"},Object(l.__)("usage tracking",'woocommerce')),Object(l.__)(". Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.",'woocommerce')),Object(r.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__checkbox"},Object(r.createElement)(f.CheckboxControl,{label:"Enable usage tracking",onChange:w,checked:p})),Object(r.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__actions"},Object(r.createElement)(f.Button,{isPrimary:!0,onClick:i()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=6;break}return e.next=3,y(!0);case 3:v.current.checked=!0,e.next=8;break;case 6:return e.next=8,y(!1);case 8:u(!1);case 9:case"end":return e.stop()}}),e)})))},Object(l.__)("Save",'woocommerce')))):null})),v=(n(569),document.createElement("div"));v.setAttribute("id","beta-features-tracking"),Object(r.render)(Object(r.createElement)(w,null),document.body.appendChild(v))},59:function(e,t){e.exports=window.wc.data},65:function(e,t){e.exports=window.wp.compose},92:function(e,t){e.exports=window.wc.tracks}});