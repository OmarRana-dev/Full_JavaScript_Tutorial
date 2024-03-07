(()=>{var e={393:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(973),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([e.id,'*{box-sizing:border-box}body{background-color:#2fa8cc;font-family:"Roboto",sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;overflow:hidden;margin:0;padding:20px}.container{background-color:#f4f4f4;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:50px 20px;text-align:center;max-width:100%;width:800px}h3{margin:0;opacity:.5;letter-spacing:2px}img{width:100px;margin-bottom:20px}.joke{font-size:30px;letter-spacing:1px;line-height:40px;margin:50px auto;max-width:600px}.btn{background-color:#2fa8cc;color:#f4f4f4;border:0;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.btn:active{transform:scale(0.98)}.btn:focus{outline:0}',"",{version:3,sources:["webpack://./src/style/main.scss"],names:[],mappings:"AAMA,EACE,qBAAA,CAGF,KACE,wBATc,CAUd,+BAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,YAAA,CAGF,WACE,wBArBgB,CAsBhB,kBAAA,CACA,8DAtBW,CAuBX,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CAGF,GACE,QAAA,CACA,UAAA,CACA,kBAAA,CAGF,IACE,WAAA,CACA,kBAAA,CAGF,MACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,eAAA,CAGF,KACE,wBAnDc,CAoDd,aAnDgB,CAoDhB,QAAA,CACA,kBAAA,CACA,6DAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAEA,YACE,qBAAA,CAGF,WACE,SAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n$primary-color: #2fa8cc;\n$secondary-color: #f4f4f4;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: $primary-color;\n  font-family: 'Roboto', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px;\n}\n\n.container {\n  background-color: $secondary-color;\n  border-radius: 10px;\n  box-shadow: $box-shadow;\n  padding: 50px 20px;\n  text-align: center;\n  max-width: 100%;\n  width: 800px;\n}\n\nh3 {\n  margin: 0;\n  opacity: 0.5;\n  letter-spacing: 2px;\n}\n\nimg {\n  width: 100px;\n  margin-bottom: 20px;\n}\n\n.joke {\n  font-size: 30px;\n  letter-spacing: 1px;\n  line-height: 40px;\n  margin: 50px auto;\n  max-width: 600px;\n}\n\n.btn {\n  background-color: $primary-color;\n  color: $secondary-color;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 14px 40px;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n}"],sourceRoot:""}]);const s=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},973:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},92:(e,t,n)=>{"use strict";var o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("unable to locate global object")}();e.exports=t=o.fetch,o.fetch&&(t.default=o.fetch.bind(o)),t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response},923:(e,t,n)=>{const{getDadjoke:o,getPunchLine:r,getRandomCHNJoke:a,getCategoryCHNJoke:i,matchChuckJoke:s,matchJoke:c,getRandomJoke:p}=n(354),{getRandomTrumpQuote:u,getFact:l}=n(572);e.exports={getDadjoke:o,getPunchLine:r,getRandomTrumpQuote:u,getFact:l,getRandomCHNJoke:a,getCategoryCHNJoke:i,matchChuckJoke:s,matchJoke:c,getRandomJoke:p}},572:(e,t,n)=>{const{get:o}=n(563),{trump:r,fact:a}=n(268);e.exports={getRandomTrumpQuote:async function(){const e=await o(r);return{quote:e.value,target:e.tags.length>0?e.tags[0]:"Unknown"}},getFact:async function(){return(await o(a)).text}}},354:(e,t,n)=>{const{get:o}=n(563),{dadjoke:r,punchlines:a,chuckNorris:i,v2jokeapi:s}=n(268);function c(e,t){if("chnjoke"===e){if(!i.Categories.includes(t))throw new TypeError(`An Invalid option was provided for Category of Chuck Norris Joke\nOptions are: ${i.Categories.join(", ")}`)}else if("match"===e){if(null==t)throw new Error("Please provide a query for the match");if("string"!=typeof t)throw new TypeError("Query for match must be a string")}else if("joke"===e)if("string"==typeof t){if(!s.blacklistsOptions.includes(t))throw new TypeError(`An Invalid option was provided for the joke blacklist\nOptions are: ${s.blacklistsOptions.join(", ")}`)}else{if(!Array.isArray(t))throw new Error("An Invalid param was provided for the vote blacklist, it must either be an Array or String.");for(const e of t)if(!s.blacklistsOptions.includes(e))throw new TypeError(`An Invalid option was provided for the joke blacklist\nOptions are: ${s.blacklistsOptions.join(", ")}`)}}e.exports={getDadjoke:async function(){return(await o(r)).joke},getPunchLine:async function(){const e=await o(a);return{setup:e.setup,punchline:e.punchline}},getRandomCHNJoke:async function(){return(await o(i.random)).value},getCategoryCHNJoke:async function(e="dev"){return c("chnjoke",e),(await o(i.category.replace("{category}",e))).value},matchChuckJoke:async function(e=null){c("match",e);const t=await o(i.query.replace("{string}",e));if(0===t.total)return[];const n=[];for(const e of t.result)n.push({joke:e.value});return n},matchJoke:async function(e=null){c("match",e);const t=await o(s.jokeMatch.replace("{string}",e));return t.error&&"No matching joke found"===t.message?null:{safe:t.safe,setup:t.setup,delivery:t.delivery}},getRandomJoke:async function(e=[]){if(Array.isArray(e)&&!e.length){const e=await o(s.any);return{safe:e.safe,joke:e.joke}}{let t;c("joke",e),t=Array.isArray(e)?e.join(", "):e;const n=await o(s.blacklists.replace("{arraylist}",t));return{safe:n.safe,joke:n.joke}}}}},563:(e,t,n)=>{const o=n(92);e.exports={get:async function(e){const t=await o(e,{headers:{Accept:"application/json","User-Agent":"random-jokes (https://github.com/Drxckzyz/random-jokes)"}});return await t.json()}}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],p=o.base?c[0]+o.base:c[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=n(l),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(A);else{var f=r(A,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),p=0;p<a.length;p++){var u=n(a[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},268:e=>{"use strict";e.exports=JSON.parse('{"v2jokeapi":{"any":"https://v2.jokeapi.dev/joke/Any","blacklists":"https://v2.jokeapi.dev/joke/Any?blacklistFlags={arraylist}","blacklistsOptions":["nsfw","religious","political","racist","sexist","explicit"],"jokeMatch":"https://v2.jokeapi.dev/joke/Any?contains={string}"},"chuckNorris":{"random":"https://api.chucknorris.io/jokes/random","category":"https://api.chucknorris.io/jokes/random?category={category}","query":"https://api.chucknorris.io/jokes/search?query={string}","Categories":["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]},"dadjoke":"https://icanhazdadjoke.com/","punchlines":"https://official-joke-api.appspot.com/random_joke","fact":"https://uselessfacts.jsph.pl/random.json?language=en","trump":"https://tronalddump.io/random/quote"}')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(923);var t=n(72),o=n.n(t),r=n(825),a=n.n(r),i=n(659),s=n.n(i),c=n(56),p=n.n(c),u=n(540),l=n.n(u),d=n(113),A=n.n(d),f=n(393),h={};h.styleTagTransform=A(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals,document.querySelector(".btn").addEventListener("click",void(0,e.getDadjoke)().then((e=>{document.querySelector("#joke").innerHTML=e})))})()})();
//# sourceMappingURL=index.94a5f53a732531682929.js.map