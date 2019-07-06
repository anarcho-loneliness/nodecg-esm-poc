parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yTxc":[function(require,module,exports) {
"use strict";var r={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080",transparent:"#0000"},e=function(r,e,a,n){return null!=n&&""!==n||(n=1),r=parseFloat(r),e=parseFloat(e),a=parseFloat(a),n=parseFloat(n),r<=255&&r>=0&&e<=255&&e>=0&&a<=255&&a>=0&&n<=1&&n>=0?[Math.round(r),Math.round(e),Math.round(a),n]:null},a=function(r){if(3===r.length&&(r+="f"),4===r.length){var e=r.charAt(0),a=r.charAt(1),n=r.charAt(2),l=r.charAt(3);r=e+e+a+a+n+n+l+l}6===r.length&&(r+="ff");for(var t=[],f=0,u=r.length;f<u;f+=2)t.push(parseInt(r.substr(f,2),16)/(6===f?255:1));return t},n=function(r,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?r+6*(e-r)*a:a<.5?e:a<2/3?r+(e-r)*(2/3-a)*6:r},l=function(r,e,a,l){var t,f,u;if(null!=l&&""!==l||(l=1),r=parseFloat(r)/360,e=parseFloat(e)/100,a=parseFloat(a)/100,l=parseFloat(l)/1,r>1||r<0||e>1||e<0||a>1||a<0||l>1||l<0)return null;if(0===e)t=f=u=a;else{var i=a<.5?a*(1+e):a+e-a*e,s=2*a-i;t=n(s,i,r+1/3),u=n(s,i,r),f=n(s,i,r-1/3)}return[255*t,255*u,255*f,l]},t=[];for(var f in r)t.push(f);var u="(?:#([a-f0-9]{3,8}))",i="\\s*([.\\d%]+)\\s*",s="(?:,\\s*([.\\d]+)\\s*)?",o="\\("+[i,i,i]+s+"\\)",c="(?:rgb)a?",p="(?:hsl)a?",h="("+t.join("|")+")",g=RegExp(u,"i"),v=RegExp(c+o,"i"),m=RegExp(p+o,"i"),F=function(n,t){if(null==n)return null;n=(n+"").replace(/\s+/,"");var f=r[n];if(f)return F(f,t);if(f=n.match(g))n=a(f[1]);else if(f=n.match(v))n=f.slice(1);else{if(!(f=n.match(m)))return null;n=l.apply(null,f.slice(1))}return n&&(n=e.apply(null,n))?t?n:(1===n[3]&&n.splice(3,1),"rgb"+(4===n.length?"a":"")+"("+n+")"):null},d=RegExp([h,u,c+o,p+o].join("|"),"gi");F.replace=function(r,e){return e||(e=function(r){return F(r)}),(r+"").replace(d,e)},F.matches=function(r){return!!(r+"").match(d)},module.exports=F;
},{}],"8fV2":[function(require,module,exports) {
"use strict";function t(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function e(t,e){var r=Object.create(t.prototype);for(var o in e)r[o]=e[o];return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,exports.extend=e;
},{}],"3/LI":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Color=r,exports.default=f,exports.rgbConvert=k,exports.rgb=x,exports.Rgb=v,exports.hslConvert=q,exports.hsl=O,exports.brighter=exports.darker=void 0;var e=t(require("./define"));function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function r(){}var n=.7;exports.darker=n;var i=1/n;exports.brighter=i;var a="\\s*([+-]?\\d+)\\s*",o="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3})$/,h=/^#([0-9a-f]{6})$/,u=new RegExp("^rgb\\("+[a,a,a]+"\\)$"),g=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),d=new RegExp("^rgba\\("+[a,a,a,o]+"\\)$"),c=new RegExp("^rgba\\("+[s,s,s,o]+"\\)$"),p=new RegExp("^hsl\\("+[o,s,s]+"\\)$"),b=new RegExp("^hsla\\("+[o,s,s,o]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function f(e){var t;return e=(e+"").trim().toLowerCase(),(t=l.exec(e))?new v((t=parseInt(t[1],16))>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):(t=h.exec(e))?w(parseInt(t[1],16)):(t=u.exec(e))?new v(t[1],t[2],t[3],1):(t=g.exec(e))?new v(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=d.exec(e))?m(t[1],t[2],t[3],t[4]):(t=c.exec(e))?m(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=p.exec(e))?M(t[1],t[2]/100,t[3]/100,1):(t=b.exec(e))?M(t[1],t[2]/100,t[3]/100,t[4]):y.hasOwnProperty(e)?w(y[e]):"transparent"===e?new v(NaN,NaN,NaN,0):null}function w(e){return new v(e>>16&255,e>>8&255,255&e,1)}function m(e,t,r,n){return n<=0&&(e=t=r=NaN),new v(e,t,r,n)}function k(e){return e instanceof r||(e=f(e)),e?new v((e=e.rgb()).r,e.g,e.b,e.opacity):new v}function x(e,t,r,n){return 1===arguments.length?k(e):new v(e,t,r,null==n?1:n)}function v(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}function N(e){return((e=Math.max(0,Math.min(255,Math.round(e)||0)))<16?"0":"")+e.toString(16)}function M(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new E(e,t,r,n)}function q(e){if(e instanceof E)return new E(e.h,e.s,e.l,e.opacity);if(e instanceof r||(e=f(e)),!e)return new E;if(e instanceof E)return e;var t=(e=e.rgb()).r/255,n=e.g/255,i=e.b/255,a=Math.min(t,n,i),o=Math.max(t,n,i),s=NaN,l=o-a,h=(o+a)/2;return l?(s=t===o?(n-i)/l+6*(n<i):n===o?(i-t)/l+2:(t-n)/l+4,l/=h<.5?o+a:2-o-a,s*=60):l=h>0&&h<1?0:s,new E(s,l,h,e.opacity)}function O(e,t,r,n){return 1===arguments.length?q(e):new E(e,t,r,null==n?1:n)}function E(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}function $(e,t,r){return 255*(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)}(0,e.default)(r,f,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),(0,e.default)(v,x,(0,e.extend)(r,{brighter:function(e){return e=null==e?i:Math.pow(i,e),new v(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=null==e?n:Math.pow(n,e),new v(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+N(this.r)+N(this.g)+N(this.b)},toString:function(){var e=this.opacity;return(1===(e=isNaN(e)?1:Math.max(0,Math.min(1,e)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===e?")":", "+e+")")}})),(0,e.default)(E,O,(0,e.extend)(r,{brighter:function(e){return e=null==e?i:Math.pow(i,e),new E(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?n:Math.pow(n,e),new E(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new v($(e>=240?e-240:e+120,i,n),$(e,i,n),$(e<120?e+240:e-120,i,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));
},{"./define":"8fV2"}],"8XzI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rad2deg=exports.deg2rad=void 0;var e=Math.PI/180;exports.deg2rad=e;var r=180/Math.PI;exports.rad2deg=r;
},{}],"2f7A":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gray=p,exports.default=b,exports.Lab=w,exports.lch=x,exports.hcl=M,exports.Hcl=O;var t=e(require("./define")),n=require("./color"),r=require("./math");function e(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var e=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};e.get||e.set?Object.defineProperty(n,r,e):n[r]=t[r]}return n.default=t,n}var i=18,o=.96422,a=1,u=.82521,c=4/29,s=6/29,h=3*s*s,l=s*s*s;function f(t){if(t instanceof w)return new w(t.l,t.a,t.b,t.opacity);if(t instanceof O)return j(t);t instanceof n.Rgb||(t=(0,n.rgbConvert)(t));var r,e,i=v(t.r),c=v(t.g),s=v(t.b),h=y((.2225045*i+.7168786*c+.0606169*s)/a);return i===c&&c===s?r=e=h:(r=y((.4360747*i+.3850649*c+.1430804*s)/o),e=y((.0139322*i+.0971045*c+.7141733*s)/u)),new w(116*h-16,500*(r-h),200*(h-e),t.opacity)}function p(t,n){return new w(t,0,0,null==n?1:n)}function b(t,n,r,e){return 1===arguments.length?f(t):new w(t,n,r,null==e?1:e)}function w(t,n,r,e){this.l=+t,this.a=+n,this.b=+r,this.opacity=+e}function y(t){return t>l?Math.pow(t,1/3):t/h+c}function d(t){return t>s?t*t*t:h*(t-c)}function g(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function v(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function N(t){if(t instanceof O)return new O(t.h,t.c,t.l,t.opacity);if(t instanceof w||(t=f(t)),0===t.a&&0===t.b)return new O(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*r.rad2deg;return new O(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function x(t,n,r,e){return 1===arguments.length?N(t):new O(r,n,t,null==e?1:e)}function M(t,n,r,e){return 1===arguments.length?N(t):new O(t,n,r,null==e?1:e)}function O(t,n,r,e){this.h=+t,this.c=+n,this.l=+r,this.opacity=+e}function j(t){if(isNaN(t.h))return new w(t.l,0,0,t.opacity);var n=t.h*r.deg2rad;return new w(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}(0,t.default)(w,b,(0,t.extend)(n.Color,{brighter:function(t){return new w(this.l+i*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new w(this.l-i*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,r=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return r=o*d(r),t=a*d(t),e=u*d(e),new n.Rgb(g(3.1338561*r-1.6168667*t-.4906146*e),g(-.9787684*r+1.9161415*t+.033454*e),g(.0719453*r-.2289914*t+1.4052427*e),this.opacity)}})),(0,t.default)(O,M,(0,t.extend)(n.Color,{brighter:function(t){return new O(this.h,this.c,this.l+i*(null==t?1:t),this.opacity)},darker:function(t){return new O(this.h,this.c,this.l-i*(null==t?1:t),this.opacity)},rgb:function(){return j(this).rgb()}}));
},{"./define":"8fV2","./color":"3/LI","./math":"8XzI"}],"CMX9":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=p,exports.Cubehelix=d;var t=i(require("./define")),e=require("./color"),r=require("./math");function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e.default=t,e}var n=-.14861,s=1.78277,o=-.29227,a=-.90649,h=1.97294,u=h*a,c=h*s,l=s*o-a*n;function f(t){if(t instanceof d)return new d(t.h,t.s,t.l,t.opacity);t instanceof e.Rgb||(t=(0,e.rgbConvert)(t));var i=t.r/255,n=t.g/255,s=t.b/255,f=(l*s+u*i-c*n)/(l+u-c),p=s-f,b=(h*(n-f)-o*p)/a,g=Math.sqrt(b*b+p*p)/(h*f*(1-f)),y=g?Math.atan2(b,p)*r.rad2deg-120:NaN;return new d(y<0?y+360:y,g,f,t.opacity)}function p(t,e,r,i){return 1===arguments.length?f(t):new d(t,e,r,null==i?1:i)}function d(t,e,r,i){this.h=+t,this.s=+e,this.l=+r,this.opacity=+i}(0,t.default)(d,p,(0,t.extend)(e.Color,{brighter:function(t){return t=null==t?e.brighter:Math.pow(e.brighter,t),new d(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?e.darker:Math.pow(e.darker,t),new d(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*r.deg2rad,i=+this.l,u=isNaN(this.s)?0:this.s*i*(1-i),c=Math.cos(t),l=Math.sin(t);return new e.Rgb(255*(i+u*(n*c+s*l)),255*(i+u*(o*c+a*l)),255*(i+u*(h*c)),this.opacity)}}));
},{"./define":"8fV2","./color":"3/LI","./math":"8XzI"}],"Peej":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"color",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"rgb",{enumerable:!0,get:function(){return e.rgb}}),Object.defineProperty(exports,"hsl",{enumerable:!0,get:function(){return e.hsl}}),Object.defineProperty(exports,"lab",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"hcl",{enumerable:!0,get:function(){return r.hcl}}),Object.defineProperty(exports,"lch",{enumerable:!0,get:function(){return r.lch}}),Object.defineProperty(exports,"gray",{enumerable:!0,get:function(){return r.gray}}),Object.defineProperty(exports,"cubehelix",{enumerable:!0,get:function(){return t.default}});var e=o(require("./color")),r=o(require("./lab")),t=n(require("./cubehelix"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}
},{"./color":"3/LI","./lab":"2f7A","./cubehelix":"CMX9"}],"Ow6M":[function(require,module,exports) {
"use strict";var e=o(require("rgb")),r=t(require("d3-color"));function t(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}function o(e){return e&&e.__esModule?e:{default:e}}function n(){var e=document.createElement("div");return e.innerHTML="Hello bundler",e}console.log("cjs deps work if this prints an rgb string:",(0,e.default)("maroon")),console.log("esm deps work if this prints an rgb object:",r.color("steelblue")),document.body.appendChild(n()),window.NodeCGLib.log();
},{"rgb":"yTxc","d3-color":"Peej"}]},{},["Ow6M"], null)
//# sourceMappingURL=/parcel.7e4b3942.js.map