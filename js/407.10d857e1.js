(self.webpackChunkvideo_call_github_io=self.webpackChunkvideo_call_github_io||[]).push([[407],{32:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var r=n(294),o=n(682),a=n(51),c=n(555),i=n(754),u=n(894),l=n(828),s=n.n(l);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return s().createClient(m({mode:"rtc",codec:"vp8"},e))}function b(e,t,n){return new Promise((function(r,o){e.join(t,n,null,(function(e){r(e)}),(function(e){o(e)}))}))}function v(e){return s().createStream(m({video:!0,audio:!0,screen:!1},e))}function y(e){return new Promise((function(t,n){e.init((function(){t()}),(function(e){n(e)}))}))}function h(e){return new Promise((function(t,n){e.leave((function(){t()}),(function(e){n(e)}))}))}function g(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){g(a,r,o,c,i,"next",e)}function i(e){g(a,r,o,c,i,"throw",e)}c(void 0)}))}}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={client:null,stream:null,uid:null,loading:!1,joined:!1,published:!1,muteAudio:!1,muteVideo:!1,error:""},S=(0,u.Z)((function(e,t){return w(w({},A),{},{init:(r=E(regeneratorRuntime.mark((function t(n){var r,o,a,c,i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w(w({},A),{},{loading:!0})),r=n.key,o=n.token,a=n.channel,(c=p()).init(r),e({client:c}),t.prev=5,t.next=8,b(c,o,a);case 8:return i=t.sent,c.enableDualStream(),u=v({streamID:i}),t.next=13,y(u);case 13:c.publish(u),e({stream:u,uid:i,joined:!0}),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),console.log("catch error",t.t0),e({error:t.t0.info||t.t0});case 21:return t.prev=21,e({loading:!1}),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[5,17,21,24]])}))),function(e){return r.apply(this,arguments)}),handleLeave:(n=E(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t(),o=r.client,a=r.stream,o.unpublish(a),a.close(),n.next=5,h(o);case 5:e(w({},A));case 6:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)}),handleAudioMute:function(){var n=t();n.stream[n.muteAudio?"unmuteAudio":"muteAudio"](),e((function(e){return{muteAudio:!e.muteAudio}}))},handleVideoMute:function(){var n=t();n.stream[n.muteVideo?"unmuteVideo":"muteVideo"](),e((function(e){return{muteVideo:!e.muteVideo}}))}});var n,r})),x=n(814);function P(){var e=S(),t=e.uid,n=e.init,o=e.loading,u=e.error;return r.createElement(a.Z,{className:"client-status justify-content-center py-3 text-light"},u&&r.createElement(c.Z,{xs:12,className:"text-danger text-center"},u),t?r.createElement("div",null,"Your UID: ",t):r.createElement(i.Z,{variant:"primary",onClick:function(){n({key:"c68b1ccf95454e6a92b411ade4422452",token:"006c68b1ccf95454e6a92b411ade4422452IAClBlfa7smGRZWIrTHBkCqDUKSzIyOnaVKAD4TRvSLcli9ZgFUAAAAAEADGU1aHb+23XwEAAQBv7bdf",channel:"AGORATEST"})},disabled:o,className:"client-status__join"},o?r.createElement(x.G,{className:"fa-spin",icon:"spinner"}):"Join the channel!"))}function k(e){var t=e.stream,n=t?"stream-video-".concat(t.getId()):"";return(0,r.useEffect)((function(){n&&t.play(n,{fit:"contain"})}),[n]),r.createElement("div",{className:"stream-video"},n&&r.createElement("div",{className:"w-100 h-100 stream-video__content",id:n}))}const I=(0,r.memo)(k);function N(){var e=S(),t=e.muteAudio,n=e.handleAudioMute,o=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return r.createElement(i.Z,{className:o,onClick:n,variant:"secondary"},t?r.createElement(x.G,{icon:"microphone"}):r.createElement(x.G,{icon:"microphone-slash"}))}function D(){var e=S(),t=e.uid,n=e.handleLeave,o=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return r.createElement(i.Z,{onClick:n,className:o,variant:"secondary"},r.createElement(x.G,{icon:"phone-slash"}))}function _(){var e=S(),t=e.muteVideo,n=e.handleVideoMute,o=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return r.createElement(i.Z,{className:o,onClick:n,variant:"secondary"},t?r.createElement(x.G,{icon:"video"}):r.createElement(x.G,{icon:"video-slash"}))}function Z(){var e=S(),t=e.stream,n=e.uid;return r.createElement(r.Fragment,null,r.createElement(I,{stream:t}),n&&r.createElement("div",{className:"py-2 text-center"},r.createElement(D,null),r.createElement(N,null),r.createElement(_,null)))}function C(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(){var e,t,n,o,i,u,l=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((e=S().client,t=(0,r.useState)([]),n=2,o=function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(t,n)||C(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],u=o[1],(0,r.useEffect)((function(){var t=function(e){var t=e.stream;u((function(e){return[].concat(function(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),[t])}))},n=function(e){var t=e.stream;if(t){var n=t.getId();t.close(),u((function(e){return e.filter((function(e){return e.getId()!==n}))}))}},r=function(e){switch(e.curState){case"DISCONNECTED":u([])}};return e&&(e.on("stream-added",(function(t){var n=t.stream;e.subscribe(n)})),e.on("stream-subscribed",t),e.on("stream-removed",n),e.on("peer-leave",n),e.on("connection-state-change",r)),function(){e&&(e.off("stream-subscribed",t),e.off("peer-leave",n),e.off("stream-removed",n),e.off("connection-state-change",r))}}),[e]),[i]),1)[0];return l.length?r.createElement(a.Z,{xs:1,md:l.length>2?2:1,className:"m-0 px-sm-1"},l.map((function(e){return r.createElement(c.Z,{key:e.getId(),className:"p-1"},r.createElement(I,{stream:e}))}))):r.createElement(c.Z,{className:"p-1"},r.createElement(I,null))}function R(){return r.createElement(o.Z,{className:"min-vw-100 min-vh-100 bg-dark"},r.createElement(P,null),r.createElement(a.Z,{xs:1,sm:2,className:"m-0 p-5"},r.createElement(c.Z,{className:"p-1"},r.createElement(Z,null)),r.createElement(T,null)))}}}]);
//# sourceMappingURL=407.10d857e1.js.map