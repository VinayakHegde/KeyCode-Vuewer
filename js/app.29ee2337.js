(function(e){function t(t){for(var a,i,c=t[0],s=t[1],d=t[2],u=0,f=[];u<c.length;u++)i=c[u],r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"287b":function(e,t,n){},"506c":function(e,t,n){"use strict";var a=n("b0ea"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main"),n("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header"},[n("h2",[e._v("Javascript Keycodes")])])}],s={name:"Header"},d=s,l=(n("8baf"),n("2877")),u=Object(l["a"])(d,i,c,!1,null,null,null),f=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content card",class:{"nothing-registerd":!e.data.isReady}},[n("h2",{class:{"card-header":e.data.isReady}},[e._v(e._s(e.data.caption))]),n("Codecanvas",{attrs:{code:e.data.keyCode}}),e.data.isReady?n("div",{staticClass:"app-content-event-details"},[n("Card",{attrs:{caption:"event.key",data:e.data.key}}),n("Card",{attrs:{caption:"event.code",data:e.data.code}}),n("Card",{attrs:{caption:"event.location",data:e.data.location}})],1):e._e()],1)},v=[],y=n("d225"),h=n("b0b4"),b=function(){function e(t){return Object(y["a"])(this,e),this.keyCode=this.getKeyCode(t),this.key=this.getKey(t),this.code=this.getCode(t),this.location=this.getLocation(t),this.caption="Keycode",this.isReady=!0,this}return Object(h["a"])(e,[{key:"getKeyCode",value:function(e){return e.keyCode}},{key:"getKey",value:function(e){var t="";return t=null!=e.key&&"Unidentified"===e.key?'<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>':" "==e.key?"(Space character)":e.key||"",t}},{key:"getCode",value:function(e){var t="";return t=null!=e.code&&"Unidentified"===e.code?'<a href="https://w3c.github.io/uievents-code/#table-key-code-special" target="_blank" rel="noopener">Unidentified</a>':e.code||"",t}},{key:"getLocation",value:function(e){var t={0:"General keys",1:"Left-side modifier keys",2:"Right-side modifier keys",3:"Numpad"},n="",a="";return a=null==e.location?"Unknown":e.location in t?t[e.location]:'<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location" target="_blank" rel="noopener">Other</a>',n="Unknown"!=a?"".concat(e.location,' <span class="text-muted">(').concat(a,")</span>"):a,n}}]),e}(),m=b,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keycode-card code-canvas"},[n("canvas",{attrs:{id:"keycode-card-canvas",width:"128",height:"128"}},[e._v("\r\n        Your browser does not support the HTML5 canvas tag.\r\n    ")]),n("span",{class:{dummy:e.draw}})])},k=[],_=(n("c5f6"),{name:"Codecanvas",props:{code:Number},computed:{draw:function(){var e=this.code,t=document.getElementById("keycode-card-canvas");if(t){var n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.textBaseline="middle",n.textAlign="center",n.font='6em "Montserrat", "sans-serif"',n.fillStyle="#000",n.fillText(e,t.width/2,t.height/2,t.width);var a=document.querySelector("link[rel*='icon']");a.type="image/x-icon",a.href=t.toDataURL("image/png")}return this.code}}}),C=_,w=(n("506c"),Object(l["a"])(C,g,k,!1,null,null,null)),x=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v(e._s(e.caption))]),n("div",{staticClass:"card-main"},[n("div",{staticClass:"main-description",domProps:{innerHTML:e._s(e.data)}})])])},j=[],S={name:"Card",props:{caption:String,data:String}},M=S,E=Object(l["a"])(M,O,j,!1,null,null,null),K=E.exports,P={keyCode:0,key:"",code:"",location:"",isReady:!1,caption:"Press any key in you keyboard"},U={name:"Main",components:{Codecanvas:x,Card:K},data:function(){return{data:P}},created:function(){var e=this,t=document.querySelector("body");t.onkeydown=function(t){t.metaKey||(t.preventDefault(),e.data=P),e.data=new m(t)}}},R=U,$=(n("c266"),Object(l["a"])(R,p,v,!1,null,null,null)),L=$.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[e._v("\n    Made with Vue by Vinnie\n")])},H=[],A={name:"Footer"},F=A,I=(n("760c"),Object(l["a"])(F,T,H,!1,null,null,null)),J=I.exports,V={name:"app",components:{Header:f,Main:L,Footer:J}},q=V,z=(n("034f"),Object(l["a"])(q,r,o,!1,null,null,null)),B=z.exports;n("db43");a["a"].config.productionTip=!0,new a["a"]({render:function(e){return e(B)}}).$mount("#app")},"64a9":function(e,t,n){},"760c":function(e,t,n){"use strict";var a=n("b675"),r=n.n(a);r.a},"782e":function(e,t,n){},"8baf":function(e,t,n){"use strict";var a=n("782e"),r=n.n(a);r.a},b0ea:function(e,t,n){},b675:function(e,t,n){},c266:function(e,t,n){"use strict";var a=n("287b"),r=n.n(a);r.a},db43:function(e,t,n){}});
//# sourceMappingURL=app.29ee2337.js.map