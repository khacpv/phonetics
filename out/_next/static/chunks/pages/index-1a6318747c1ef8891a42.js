_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var s,r=(s=n("q1tI"))&&s.__esModule?s:{default:s},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,s=e.hybrid,r=void 0!==s&&s,i=e.hasQuery,o=void 0!==i&&i;return n||r&&o}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var s,r=n("q1tI");var i=new(((s=n("SevZ"))&&s.__esModule?s:{default:s}).default),o=function(e){var t,n;function s(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,s.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var r=s.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){i.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},s}(r.Component);t.default=o},"7W2i":function(e,t,n){var s=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var s,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=s?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(s=n("Xuae"))&&s.__esModule?s:{default:s},o=n("lwAK"),a=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,s={};return function(r){var i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=r.props[u],p=s[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),s[u]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),s=(0,r.useContext)(a.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:p,headManager:s,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},"8oxB":function(e,t){var n,s,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{s="function"===typeof clearTimeout?clearTimeout:o}catch(e){s=o}}();var c,l=[],u=!1,d=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===o||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var s;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((s=n("q1tI"))&&s.__esModule?s:{default:s}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var s=n("WkPL");e.exports=function(e){if(Array.isArray(e))return s(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var s=Object.assign.bind(Object);e.exports=s,e.exports.default=e.exports},RIqP:function(e,t,n){var s=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return s(e)||r(e)||i(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var s=n("nKUr"),r=n("MX0m"),i=n.n(r),o=n("g4pe"),a=n.n(o);function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=n("q1tI"),u=function(e){var t=e.ipa,n=e.sound,r=e.children,o=(c(e,["ipa","sound","children"]),Object(l.useRef)(null)),a=Object(l.useCallback)((function(){o.current.play()}),[n]);return Object(s.jsxs)("div",{className:"jsx-673576631 phonetic",children:[Object(s.jsx)("span",{className:"jsx-673576631",children:t}),Object(s.jsx)("div",{onClick:a,className:"jsx-673576631 sound",children:Object(s.jsx)("img",{src:"/img/sound.png",className:"jsx-673576631"})}),Object(s.jsxs)("div",{className:"jsx-673576631 popup",children:[Object(s.jsx)("div",{className:"jsx-673576631 popup-content",children:r}),Object(s.jsx)("audio",{ref:o,src:n,className:"jsx-673576631 audio",children:"Your browser does not support the audio element."})]}),Object(s.jsx)(i.a,{id:"673576631",children:[".phonetic.jsx-673576631{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;margin-right:8px;}",".phonetic.jsx-673576631:hover{background:#dbdbdb;}",".sound.jsx-673576631{position:absolute;right:0;top:0;opacity:0;padding:8px;width:100%;height:100%;z-index:1;cursor:pointer;background:#797979;}",".sound.jsx-673576631 img.jsx-673576631{width:100%;height:100%;object-fit:contain;}",".popup.jsx-673576631{position:absolute;bottom:0px;left:-200px;display:none;}",".popup-content.jsx-673576631{margin-bottom:44px;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:0.5px solid #797979;box-shadow:3px 3px 8px #efefef;overflow-y:auto;width:auto;height:auto;min-width:400px;min-height:100px;pointer-events:all;text-align:left;vertical-align:top;font-size:14px;line-height:16px;}",".audio.jsx-673576631{display:none;}",".phonetic.jsx-673576631:hover .popup.jsx-673576631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".phonetic.jsx-673576631:hover .sound.jsx-673576631{opacity:1;}"]})]})};function d(){return Object(s.jsxs)("div",{className:"jsx-374878972 container",children:[Object(s.jsxs)(a.a,{children:[Object(s.jsx)("title",{className:"jsx-374878972",children:"Phonetics"}),Object(s.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-374878972"})]}),Object(s.jsxs)("main",{className:"jsx-374878972",children:[Object(s.jsx)("h1",{className:"jsx-374878972 title",children:Object(s.jsx)("a",{href:"https://tophonetics.com/",className:"jsx-374878972",children:"Phonetics"})}),Object(s.jsxs)("p",{className:"jsx-374878972 description",children:["Inspired by ",Object(s.jsx)("a",{href:"http://moonesl.vn/",className:"jsx-374878972",children:"MoonESL class"})]}),Object(s.jsx)("h3",{className:"jsx-374878972",children:"1. Nguy\xean \xe2m (vowel)"}),Object(s.jsxs)("div",{className:"jsx-374878972 grid",children:[Object(s.jsxs)(u,{ipa:"/\u028c/",sound:"/audio/a-bus.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"Schwa \u0111\u01b0\u1ee3c nh\u1ea5n: /\u028c/"}),"Gi\u1ed1ng nh\u01b0 \xe2m /uh/ c\u1ee7a ti\u1ebfng vi\u1ec7t",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Bus, But, Bug"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. My brother school has bus"})]}),Object(s.jsxs)(u,{ipa:"/\u0259/",sound:"/audio/a-about.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"Schwa Kh\xf4ng \u0111\u01b0\u1ee3c nh\u1ea5n: /\u0259/"}),"Ch\u1ec9 gi\u1ed1ng nh\u01b0 \xe2m /\u1edd/ c\u1ee7a ti\u1ebfng vi\u1ec7t nh\u01b0ng nh\u1eb9 h\u01a1n",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. About"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. Pronunciation is important"})]}),Object(s.jsxs)(u,{ipa:"/i/",sound:"/audio/i-fill.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"i l\u1ecfng mi\u1ec7ng: /i/"}),"Ch\u1ec9 h\u01a1i nh\u1ebfch m\xe9p 2 b\xean 1 ch\xfat, nh\u1eb9 h\u01a1n \xe2m /i/ c\u1ee7a ti\u1ebfng vi\u1ec7t",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Hit, Bit"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. a seed on seat"})]}),Object(s.jsxs)(u,{ipa:"/i:/",sound:"/audio/i-feel.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"i c\u0103ng mi\u1ec7ng: /i:/ ho\u1eb7c /\u026a/"}),"Mi\u1ec7ng k\xe9o sang 2 b\xean nhi\u1ec1u h\u01a1n so v\u1edbi \xe2m /i/ l\u1ecfng mi\u1ec7ng",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Seat, Seed, Heat, Week"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. A seed on seat"})]}),Object(s.jsxs)(u,{ipa:"/e/",sound:"/audio/e-set.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"E l\u1ecfng mi\u1ec7ng: /\u025c/ ho\u1eb7c /e/"}),"K\xe9o mi\u1ec7ng v\u1ec1 2 b\xean v\xe0 h\u1ea1 h\xe0m 1 ch\xfat",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Set, Met, Get, Left"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. A set of pencil on the left of table"})]}),Object(s.jsxs)(u,{ipa:"/\xe6/",sound:"/audio/ae-map.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"A C\u0103ng mi\u1ec7ng: /\xe6/"}),"M\u1edf mi\u1ec7ng \u0111\u1ec1u v\u1ec1 4 ph\xeda",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Can, map"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. A map in the can"})]}),Object(s.jsxs)(u,{ipa:"/\u0252/",sound:"/audio/o-god.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"O h\u1ea1 h\xe0m: /\u0252/"}),"Ch\u1ec9 k\xe9o h\xe0m xu\u1ed1ng d\u01b0\u1edbi th\xf4i.",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. God, Nod, Hot, Shop"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. A God in a shop will very hot"})]}),Object(s.jsxs)(u,{ipa:"/\u0254:/",sound:"/audio/o-fork.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"O tr\xf2n mi\u1ec7ng: /\u0254:/"}),"\xc2m O c\u0103ng & chu m\u1ecf ra",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Fork, Ball, All, Call, Mall, Hall "}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. A ball in the mall on the hall"})]}),Object(s.jsxs)(u,{ipa:"/\u028a/",sound:"/audio/u-put.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"U nh\u1eb9: /\u028a/"}),"Gi\u1ed1ng ch\u1eef U c\u1ee7a ti\u1ebfng vi\u1ec7t nh\u01b0ng ch\u1ec9 h\u01a1i cong m\xf4i 1 ch\xfat",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Put, Good, Pull"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. I put a budding in the hut"})]}),Object(s.jsxs)(u,{ipa:"/u:/",sound:"/audio/u-boot.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"U c\u0103ng mi\u1ec7ng: /u:/"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Boot, Moon, Sure"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. I have a boot"})]})]}),Object(s.jsx)("h3",{className:"jsx-374878972",children:"2. Nguy\xean \xe2m Anh M\u1ef9 (Diphthong vowels)"}),Object(s.jsxs)("div",{className:"jsx-374878972 grid",children:[Object(s.jsxs)(u,{ipa:"/e\u026a/",sound:"/audio/ei-they.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"\xca nh\u1eb9: /e\u026a/"}),"G\u1ea7n gi\u1ed1ng \xe2m \xca c\u1ee7a ti\u1ebfng vi\u1ec7t, nh\u01b0ng ng\u1eafn h\u01a1n. N\u1ebfu theo sau l\xe0 \xe2m /l/ th\xec ph\xe1t \xe2m gi\u1ed1ng v\u1edbi \xcaU. vd: mail /meil/",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. They, Made, Date, Day"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. They make a bake"})]}),Object(s.jsxs)(u,{ipa:"/o\u028a/",sound:"/audio/ou-goal.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"\xc2U : /o\u028a/"}),"Nghe gi\u1ed1ng nh\u01b0 \xe2m /\xc2U/ c\u1ee7a ti\u1ebfng vi\u1ec7t",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Row, Goal, Soul, Cold, Goat, Note, Known, Know"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. How old are you?"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"3. I see a goat on the road"})]}),Object(s.jsxs)(u,{ipa:"/a\u028a/",sound:"/audio/au-sound.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"AU: /a\u028a/"}),"Nghe nh\u01b0 \xe2m A+U c\u1ee7a ti\u1ebfng vi\u1ec7t. Ch\xfa \xfd khi k\u1ebft h\u1ee3p v\u1edbi \xe2m /l/.",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Sound, How, Count, Cows"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. How to count the cows?"})]}),Object(s.jsxs)(u,{ipa:"/\u0254\u026a/",sound:"/audio/oi-coin.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"OI: /\u0254\u026a/"}),"Gi\u1ed1ng \xe2m OI c\u1ee7a ti\u1ebfng vi\u1ec7t",Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Coin, Boy, Boil, Join, Annoy"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. The boy boils a coin"})]}),Object(s.jsxs)(u,{ipa:"/a\u026a/",sound:"/audio/ai-find.mp3",children:[Object(s.jsx)("span",{className:"jsx-374878972 strong",children:"AI: /a\u026a/"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"1. Find, Ice, I'm, Eye"}),Object(s.jsx)("br",{className:"jsx-374878972"}),Object(s.jsx)("span",{className:"jsx-374878972",children:"2. Find my iphone"})]})]})]}),Object(s.jsxs)("footer",{className:"jsx-374878972",children:["Powered by \xa0",Object(s.jsx)("a",{href:"https://facebook.com/khacpv",target:"_blank",rel:"noopener noreferrer",className:"jsx-374878972",children:"Kh\u1eafc Ph\u1ea1m"})]}),Object(s.jsx)(i.a,{id:"3133120382",children:[".container.jsx-374878972{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-374878972{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-374878972{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-374878972 img.jsx-374878972{margin-left:0.5rem;}","footer.jsx-374878972 a.jsx-374878972{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-374878972{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-374878972 a.jsx-374878972{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".description.jsx-374878972 a.jsx-374878972{color:#ff4e48;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-374878972 a.jsx-374878972:hover,.title.jsx-374878972 a.jsx-374878972:focus,.title.jsx-374878972 a.jsx-374878972:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-374878972{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-374878972,.description.jsx-374878972{text-align:center;}",".description.jsx-374878972{line-height:1.5;font-size:1.5rem;}","code.jsx-374878972{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}","h3.jsx-374878972{margin-top:50px;}",".grid.jsx-374878972{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}",".card.jsx-374878972{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-374878972:hover,.card.jsx-374878972:focus,.card.jsx-374878972:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-374878972 h3.jsx-374878972{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-374878972 p.jsx-374878972{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-374878972{height:1em;}",".strong.jsx-374878972{font-size:16px;line-height:16px;font-weight:bold;display:block;}","@media (max-width:600px){.grid.jsx-374878972{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(s.jsx)(i.a,{id:"3379920139",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var s=i(n("9kyW")),r=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,s=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=s||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),s=n.styleId,r=n.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var i=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[s]=i,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var s=this._fromServer&&this._fromServer[n];s?(s.parentNode.removeChild(s),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,s.default)(t+"-"+r)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var r=n+s;return t[r]||(t[r]=s.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,s=e.dynamic,r=e.id;if(s){var i=this.computeId(r,s);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},SksO:function(e,t){function n(t,s){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,s)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}e.exports=function(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}},Xuae:function(e,t,n){"use strict";var s=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(s(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},ZhPi:function(e,t,n){var s=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}},a1gu:function(e,t,n){var s=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?r(e):t}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?s:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(r(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(s,n):i.appendChild(s),s},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var s;t.__esModule=!0,t.AmpStateContext=void 0;var r=((s=n("q1tI"))&&s.__esModule?s:{default:s}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);