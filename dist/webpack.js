/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/*! exports used: Color, Rgb, brighter, darker, default, rgbConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return darker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return brighter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return rgbConvert; });\n/* unused harmony export rgb */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return Rgb; });\n/* unused harmony export hslConvert */\n/* unused harmony export hsl */\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n\n\nfunction Color() {}\n\nvar darker = 0.7;\nvar brighter = 1 / darker;\n\nvar reI = \"\\\\s*([+-]?\\\\d+)\\\\s*\",\n    reN = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*\",\n    reP = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*\",\n    reHex3 = /^#([0-9a-f]{3})$/,\n    reHex6 = /^#([0-9a-f]{6})$/,\n    reRgbInteger = new RegExp(\"^rgb\\\\(\" + [reI, reI, reI] + \"\\\\)$\"),\n    reRgbPercent = new RegExp(\"^rgb\\\\(\" + [reP, reP, reP] + \"\\\\)$\"),\n    reRgbaInteger = new RegExp(\"^rgba\\\\(\" + [reI, reI, reI, reN] + \"\\\\)$\"),\n    reRgbaPercent = new RegExp(\"^rgba\\\\(\" + [reP, reP, reP, reN] + \"\\\\)$\"),\n    reHslPercent = new RegExp(\"^hsl\\\\(\" + [reN, reP, reP] + \"\\\\)$\"),\n    reHslaPercent = new RegExp(\"^hsla\\\\(\" + [reN, reP, reP, reN] + \"\\\\)$\");\n\nvar named = {\n  aliceblue: 0xf0f8ff,\n  antiquewhite: 0xfaebd7,\n  aqua: 0x00ffff,\n  aquamarine: 0x7fffd4,\n  azure: 0xf0ffff,\n  beige: 0xf5f5dc,\n  bisque: 0xffe4c4,\n  black: 0x000000,\n  blanchedalmond: 0xffebcd,\n  blue: 0x0000ff,\n  blueviolet: 0x8a2be2,\n  brown: 0xa52a2a,\n  burlywood: 0xdeb887,\n  cadetblue: 0x5f9ea0,\n  chartreuse: 0x7fff00,\n  chocolate: 0xd2691e,\n  coral: 0xff7f50,\n  cornflowerblue: 0x6495ed,\n  cornsilk: 0xfff8dc,\n  crimson: 0xdc143c,\n  cyan: 0x00ffff,\n  darkblue: 0x00008b,\n  darkcyan: 0x008b8b,\n  darkgoldenrod: 0xb8860b,\n  darkgray: 0xa9a9a9,\n  darkgreen: 0x006400,\n  darkgrey: 0xa9a9a9,\n  darkkhaki: 0xbdb76b,\n  darkmagenta: 0x8b008b,\n  darkolivegreen: 0x556b2f,\n  darkorange: 0xff8c00,\n  darkorchid: 0x9932cc,\n  darkred: 0x8b0000,\n  darksalmon: 0xe9967a,\n  darkseagreen: 0x8fbc8f,\n  darkslateblue: 0x483d8b,\n  darkslategray: 0x2f4f4f,\n  darkslategrey: 0x2f4f4f,\n  darkturquoise: 0x00ced1,\n  darkviolet: 0x9400d3,\n  deeppink: 0xff1493,\n  deepskyblue: 0x00bfff,\n  dimgray: 0x696969,\n  dimgrey: 0x696969,\n  dodgerblue: 0x1e90ff,\n  firebrick: 0xb22222,\n  floralwhite: 0xfffaf0,\n  forestgreen: 0x228b22,\n  fuchsia: 0xff00ff,\n  gainsboro: 0xdcdcdc,\n  ghostwhite: 0xf8f8ff,\n  gold: 0xffd700,\n  goldenrod: 0xdaa520,\n  gray: 0x808080,\n  green: 0x008000,\n  greenyellow: 0xadff2f,\n  grey: 0x808080,\n  honeydew: 0xf0fff0,\n  hotpink: 0xff69b4,\n  indianred: 0xcd5c5c,\n  indigo: 0x4b0082,\n  ivory: 0xfffff0,\n  khaki: 0xf0e68c,\n  lavender: 0xe6e6fa,\n  lavenderblush: 0xfff0f5,\n  lawngreen: 0x7cfc00,\n  lemonchiffon: 0xfffacd,\n  lightblue: 0xadd8e6,\n  lightcoral: 0xf08080,\n  lightcyan: 0xe0ffff,\n  lightgoldenrodyellow: 0xfafad2,\n  lightgray: 0xd3d3d3,\n  lightgreen: 0x90ee90,\n  lightgrey: 0xd3d3d3,\n  lightpink: 0xffb6c1,\n  lightsalmon: 0xffa07a,\n  lightseagreen: 0x20b2aa,\n  lightskyblue: 0x87cefa,\n  lightslategray: 0x778899,\n  lightslategrey: 0x778899,\n  lightsteelblue: 0xb0c4de,\n  lightyellow: 0xffffe0,\n  lime: 0x00ff00,\n  limegreen: 0x32cd32,\n  linen: 0xfaf0e6,\n  magenta: 0xff00ff,\n  maroon: 0x800000,\n  mediumaquamarine: 0x66cdaa,\n  mediumblue: 0x0000cd,\n  mediumorchid: 0xba55d3,\n  mediumpurple: 0x9370db,\n  mediumseagreen: 0x3cb371,\n  mediumslateblue: 0x7b68ee,\n  mediumspringgreen: 0x00fa9a,\n  mediumturquoise: 0x48d1cc,\n  mediumvioletred: 0xc71585,\n  midnightblue: 0x191970,\n  mintcream: 0xf5fffa,\n  mistyrose: 0xffe4e1,\n  moccasin: 0xffe4b5,\n  navajowhite: 0xffdead,\n  navy: 0x000080,\n  oldlace: 0xfdf5e6,\n  olive: 0x808000,\n  olivedrab: 0x6b8e23,\n  orange: 0xffa500,\n  orangered: 0xff4500,\n  orchid: 0xda70d6,\n  palegoldenrod: 0xeee8aa,\n  palegreen: 0x98fb98,\n  paleturquoise: 0xafeeee,\n  palevioletred: 0xdb7093,\n  papayawhip: 0xffefd5,\n  peachpuff: 0xffdab9,\n  peru: 0xcd853f,\n  pink: 0xffc0cb,\n  plum: 0xdda0dd,\n  powderblue: 0xb0e0e6,\n  purple: 0x800080,\n  rebeccapurple: 0x663399,\n  red: 0xff0000,\n  rosybrown: 0xbc8f8f,\n  royalblue: 0x4169e1,\n  saddlebrown: 0x8b4513,\n  salmon: 0xfa8072,\n  sandybrown: 0xf4a460,\n  seagreen: 0x2e8b57,\n  seashell: 0xfff5ee,\n  sienna: 0xa0522d,\n  silver: 0xc0c0c0,\n  skyblue: 0x87ceeb,\n  slateblue: 0x6a5acd,\n  slategray: 0x708090,\n  slategrey: 0x708090,\n  snow: 0xfffafa,\n  springgreen: 0x00ff7f,\n  steelblue: 0x4682b4,\n  tan: 0xd2b48c,\n  teal: 0x008080,\n  thistle: 0xd8bfd8,\n  tomato: 0xff6347,\n  turquoise: 0x40e0d0,\n  violet: 0xee82ee,\n  wheat: 0xf5deb3,\n  white: 0xffffff,\n  whitesmoke: 0xf5f5f5,\n  yellow: 0xffff00,\n  yellowgreen: 0x9acd32\n};\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Color, color, {\n  displayable: function() {\n    return this.rgb().displayable();\n  },\n  hex: function() {\n    return this.rgb().hex();\n  },\n  toString: function() {\n    return this.rgb() + \"\";\n  }\n});\n\nfunction color(format) {\n  var m;\n  format = (format + \"\").trim().toLowerCase();\n  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00\n      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000\n      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)\n      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)\n      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)\n      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)\n      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)\n      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)\n      : named.hasOwnProperty(format) ? rgbn(named[format])\n      : format === \"transparent\" ? new Rgb(NaN, NaN, NaN, 0)\n      : null;\n}\n\nfunction rgbn(n) {\n  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);\n}\n\nfunction rgba(r, g, b, a) {\n  if (a <= 0) r = g = b = NaN;\n  return new Rgb(r, g, b, a);\n}\n\nfunction rgbConvert(o) {\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Rgb;\n  o = o.rgb();\n  return new Rgb(o.r, o.g, o.b, o.opacity);\n}\n\nfunction rgb(r, g, b, opacity) {\n  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n}\n\nfunction Rgb(r, g, b, opacity) {\n  this.r = +r;\n  this.g = +g;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__[/* extend */ \"b\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  rgb: function() {\n    return this;\n  },\n  displayable: function() {\n    return (-0.5 <= this.r && this.r < 255.5)\n        && (-0.5 <= this.g && this.g < 255.5)\n        && (-0.5 <= this.b && this.b < 255.5)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  hex: function() {\n    return \"#\" + hex(this.r) + hex(this.g) + hex(this.b);\n  },\n  toString: function() {\n    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n    return (a === 1 ? \"rgb(\" : \"rgba(\")\n        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + \", \"\n        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + \", \"\n        + Math.max(0, Math.min(255, Math.round(this.b) || 0))\n        + (a === 1 ? \")\" : \", \" + a + \")\");\n  }\n}));\n\nfunction hex(value) {\n  value = Math.max(0, Math.min(255, Math.round(value) || 0));\n  return (value < 16 ? \"0\" : \"\") + value.toString(16);\n}\n\nfunction hsla(h, s, l, a) {\n  if (a <= 0) h = s = l = NaN;\n  else if (l <= 0 || l >= 1) h = s = NaN;\n  else if (s <= 0) h = NaN;\n  return new Hsl(h, s, l, a);\n}\n\nfunction hslConvert(o) {\n  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Hsl;\n  if (o instanceof Hsl) return o;\n  o = o.rgb();\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      min = Math.min(r, g, b),\n      max = Math.max(r, g, b),\n      h = NaN,\n      s = max - min,\n      l = (max + min) / 2;\n  if (s) {\n    if (r === max) h = (g - b) / s + (g < b) * 6;\n    else if (g === max) h = (b - r) / s + 2;\n    else h = (r - g) / s + 4;\n    s /= l < 0.5 ? max + min : 2 - max - min;\n    h *= 60;\n  } else {\n    s = l > 0 && l < 1 ? 0 : h;\n  }\n  return new Hsl(h, s, l, o.opacity);\n}\n\nfunction hsl(h, s, l, opacity) {\n  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hsl(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__[/* extend */ \"b\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = this.h % 360 + (this.h < 0) * 360,\n        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,\n        l = this.l,\n        m2 = l + (l < 0.5 ? l : 1 - l) * s,\n        m1 = 2 * l - m2;\n    return new Rgb(\n      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n      hsl2rgb(h, m1, m2),\n      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n      this.opacity\n    );\n  },\n  displayable: function() {\n    return (0 <= this.s && this.s <= 1 || isNaN(this.s))\n        && (0 <= this.l && this.l <= 1)\n        && (0 <= this.opacity && this.opacity <= 1);\n  }\n}));\n\n/* From FvD 13.37, CSS Color Module Level 3 */\nfunction hsl2rgb(h, m1, m2) {\n  return (h < 60 ? m1 + (m2 - m1) * h / 60\n      : h < 180 ? m2\n      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60\n      : m1) * 255;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* unused harmony export Cubehelix */\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\nvar A = -0.14861,\n    B = +1.78277,\n    C = -0.29227,\n    D = -0.90649,\n    E = +1.97294,\n    ED = E * D,\n    EB = E * B,\n    BC_DA = B * C - D * A;\n\nfunction cubehelixConvert(o) {\n  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__[/* Rgb */ \"b\"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__[/* rgbConvert */ \"f\"])(o);\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),\n      bl = b - l,\n      k = (E * (g - l) - C * bl) / D,\n      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1\n      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__[/* rad2deg */ \"b\"] - 120 : NaN;\n  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);\n}\n\nfunction cubehelix(h, s, l, opacity) {\n  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Cubehelix(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__[/* extend */ \"b\"])(_color__WEBPACK_IMPORTED_MODULE_1__[/* Color */ \"a\"], {\n  brighter: function(k) {\n    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__[/* brighter */ \"c\"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__[/* brighter */ \"c\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__[/* darker */ \"d\"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__[/* darker */ \"d\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__[/* deg2rad */ \"a\"],\n        l = +this.l,\n        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),\n        cosh = Math.cos(h),\n        sinh = Math.sin(h);\n    return new _color__WEBPACK_IMPORTED_MODULE_1__[/* Rgb */ \"b\"](\n      255 * (l + a * (A * cosh + B * sinh)),\n      255 * (l + a * (C * cosh + D * sinh)),\n      255 * (l + a * (E * cosh)),\n      this.opacity\n    );\n  }\n}));\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/cubehelix.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/*! exports used: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return extend; });\n/* harmony default export */ __webpack_exports__[\"a\"] = (function(constructor, factory, prototype) {\n  constructor.prototype = factory.prototype = prototype;\n  prototype.constructor = constructor;\n});\n\nfunction extend(parent, definition) {\n  var prototype = Object.create(parent.prototype);\n  for (var key in definition) prototype[key] = definition[key];\n  return prototype;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/define.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/*! exports used: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"e\"]; });\n\n/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ \"./node_modules/d3-color/src/lab.js\");\n/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ \"./node_modules/d3-color/src/cubehelix.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export gray */\n/* unused harmony export default */\n/* unused harmony export Lab */\n/* unused harmony export lch */\n/* unused harmony export hcl */\n/* unused harmony export Hcl */\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\n// https://observablehq.com/@mbostock/lab-and-rgb\nvar K = 18,\n    Xn = 0.96422,\n    Yn = 1,\n    Zn = 0.82521,\n    t0 = 4 / 29,\n    t1 = 6 / 29,\n    t2 = 3 * t1 * t1,\n    t3 = t1 * t1 * t1;\n\nfunction labConvert(o) {\n  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);\n  if (o instanceof Hcl) return hcl2lab(o);\n  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__[/* Rgb */ \"b\"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__[/* rgbConvert */ \"f\"])(o);\n  var r = rgb2lrgb(o.r),\n      g = rgb2lrgb(o.g),\n      b = rgb2lrgb(o.b),\n      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;\n  if (r === g && g === b) x = z = y; else {\n    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);\n    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);\n  }\n  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);\n}\n\nfunction gray(l, opacity) {\n  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);\n}\n\nfunction lab(l, a, b, opacity) {\n  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);\n}\n\nfunction Lab(l, a, b, opacity) {\n  this.l = +l;\n  this.a = +a;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__[/* extend */ \"b\"])(_color__WEBPACK_IMPORTED_MODULE_1__[/* Color */ \"a\"], {\n  brighter: function(k) {\n    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  darker: function(k) {\n    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  rgb: function() {\n    var y = (this.l + 16) / 116,\n        x = isNaN(this.a) ? y : y + this.a / 500,\n        z = isNaN(this.b) ? y : y - this.b / 200;\n    x = Xn * lab2xyz(x);\n    y = Yn * lab2xyz(y);\n    z = Zn * lab2xyz(z);\n    return new _color__WEBPACK_IMPORTED_MODULE_1__[/* Rgb */ \"b\"](\n      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),\n      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),\n      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),\n      this.opacity\n    );\n  }\n}));\n\nfunction xyz2lab(t) {\n  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;\n}\n\nfunction lab2xyz(t) {\n  return t > t1 ? t * t * t : t2 * (t - t0);\n}\n\nfunction lrgb2rgb(x) {\n  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);\n}\n\nfunction rgb2lrgb(x) {\n  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);\n}\n\nfunction hclConvert(o) {\n  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);\n  if (!(o instanceof Lab)) o = labConvert(o);\n  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);\n  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__[/* rad2deg */ \"b\"];\n  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);\n}\n\nfunction lch(l, c, h, opacity) {\n  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction hcl(h, c, l, opacity) {\n  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hcl(h, c, l, opacity) {\n  this.h = +h;\n  this.c = +c;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nfunction hcl2lab(o) {\n  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);\n  var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__[/* deg2rad */ \"a\"];\n  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__[/* extend */ \"b\"])(_color__WEBPACK_IMPORTED_MODULE_1__[/* Color */ \"a\"], {\n  brighter: function(k) {\n    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);\n  },\n  darker: function(k) {\n    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);\n  },\n  rgb: function() {\n    return hcl2lab(this).rgb();\n  }\n}));\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/lab.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/*! exports used: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return deg2rad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return rad2deg; });\nvar deg2rad = Math.PI / 180;\nvar rad2deg = 180 / Math.PI;\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/math.js?");

/***/ }),

/***/ "./node_modules/rgb/index.js":
/*!***********************************!*\
  !*** ./node_modules/rgb/index.js ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\ncolor\n*/\n\nvar colors = {\n    maroon      : \"#800000\",\n    red         : \"#ff0000\",\n    orange      : \"#ffA500\",\n    yellow      : \"#ffff00\",\n    olive       : \"#808000\",\n    purple      : \"#800080\",\n    fuchsia     : \"#ff00ff\",\n    white       : \"#ffffff\",\n    lime        : \"#00ff00\",\n    green       : \"#008000\",\n    navy        : \"#000080\",\n    blue        : \"#0000ff\",\n    aqua        : \"#00ffff\",\n    teal        : \"#008080\",\n    black       : \"#000000\",\n    silver      : \"#c0c0c0\",\n    gray        : \"#808080\",\n    transparent : \"#0000\"\n}\n\nvar RGBtoRGB = function(r, g, b, a){\n    if (a == null || a === \"\") a = 1\n    r = parseFloat(r)\n    g = parseFloat(g)\n    b = parseFloat(b)\n    a = parseFloat(a)\n    if (!(r <= 255 && r >= 0 && g <= 255 && g >= 0 && b <= 255 && b >= 0 && a <= 1 && a >= 0)) return null\n\n    return [Math.round(r), Math.round(g), Math.round(b), a]\n}\n\nvar HEXtoRGB = function(hex){\n    if (hex.length === 3) hex += \"f\"\n    if (hex.length === 4){\n        var h0 = hex.charAt(0),\n            h1 = hex.charAt(1),\n            h2 = hex.charAt(2),\n            h3 = hex.charAt(3)\n\n        hex = h0 + h0 + h1 + h1 + h2 + h2 + h3 + h3\n    }\n    if (hex.length === 6) hex += \"ff\"\n    var rgb = []\n    for (var i = 0, l = hex.length; i < l; i += 2) rgb.push(parseInt(hex.substr(i, 2), 16) / (i === 6 ? 255 : 1))\n    return rgb\n}\n\n// HSL to RGB conversion from:\n// http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript\n// thank you!\n\nvar HUEtoRGB = function(p, q, t){\n    if (t < 0) t += 1\n    if (t > 1) t -= 1\n    if (t < 1 / 6) return p + (q - p) * 6 * t\n    if (t < 1 / 2) return q\n    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6\n    return p\n}\n\nvar HSLtoRGB = function(h, s, l, a){\n    var r, b, g\n    if (a == null || a === \"\") a = 1\n    h = parseFloat(h) / 360\n    s = parseFloat(s) / 100\n    l = parseFloat(l) / 100\n    a = parseFloat(a) / 1\n    if (h > 1 || h < 0 || s > 1 || s < 0 || l > 1 || l < 0 || a > 1 || a < 0) return null\n    if (s === 0){\n        r = b = g = l\n    } else {\n        var q = l < 0.5 ? l * (1 + s) : l + s - l * s\n        var p = 2 * l - q\n        r = HUEtoRGB(p, q, h + 1 / 3)\n        g = HUEtoRGB(p, q, h)\n        b = HUEtoRGB(p, q, h - 1 / 3)\n    }\n    return [r * 255, g * 255, b * 255, a]\n}\n\nvar keys = []\nfor (var c in colors) keys.push(c)\n\nvar shex  = \"(?:#([a-f0-9]{3,8}))\",\n    sval  = \"\\\\s*([.\\\\d%]+)\\\\s*\",\n    sop   = \"(?:,\\\\s*([.\\\\d]+)\\\\s*)?\",\n    slist = \"\\\\(\" + [sval, sval, sval] + sop + \"\\\\)\",\n    srgb  = \"(?:rgb)a?\",\n    shsl  = \"(?:hsl)a?\",\n    skeys = \"(\" + keys.join(\"|\") + \")\"\n\n\nvar xhex   = RegExp(shex, \"i\"),\n    xrgb   = RegExp(srgb + slist, \"i\"),\n    xhsl   = RegExp(shsl + slist, \"i\")\n\nvar color = function(input, array){\n    if (input == null) return null\n    input = (input + \"\").replace(/\\s+/, \"\")\n\n    var match = colors[input]\n    if (match){\n        return color(match, array)\n    } else if (match = input.match(xhex)){\n        input = HEXtoRGB(match[1])\n    } else if (match = input.match(xrgb)){\n        input = match.slice(1)\n    } else if (match = input.match(xhsl)){\n        input = HSLtoRGB.apply(null, match.slice(1))\n    } else return null\n\n    if (!(input && (input = RGBtoRGB.apply(null, input)))) return null\n    if (array) return input\n    if (input[3] === 1) input.splice(3, 1)\n    return \"rgb\" + (input.length === 4 ? \"a\" : \"\") + \"(\" + input + \")\"\n}\n\nvar regexp = RegExp([skeys, shex, srgb + slist, shsl + slist].join(\"|\"), \"gi\")\n\ncolor.replace = function(string, method){\n    if (!method) method = function(match){\n        return color(match)\n    }\n    return (string + \"\").replace(regexp, method)\n}\n\ncolor.matches = function(string){\n    return !!(string + \"\").match(regexp)\n}\n\nmodule.exports = color\n\n\n//# sourceURL=webpack:///./node_modules/rgb/index.js?");

/***/ }),

/***/ "./nodecg.js":
/*!****************************!*\
  !*** external "NodeCGLib" ***!
  \****************************/
/*! no static exports found */
/*! exports used: log */
/***/ (function(module, exports) {

eval("module.exports = NodeCGLib;\n\n//# sourceURL=webpack:///external_%22NodeCGLib%22?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rgb */ \"./node_modules/rgb/index.js\");\n/* harmony import */ var rgb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rgb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _nodecg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodecg.js */ \"./nodecg.js\");\n/* harmony import */ var _nodecg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nodecg_js__WEBPACK_IMPORTED_MODULE_2__);\n // CJS dep from npm\r\n // ESM dep from npm\r\n // external ESM\r\n\r\nconsole.log('cjs deps work if this prints an rgb string:', rgb__WEBPACK_IMPORTED_MODULE_0___default()('maroon'));\r\nconsole.log('esm deps work if this prints an rgb object:', d3_color__WEBPACK_IMPORTED_MODULE_1__[/* color */ \"a\"](\"steelblue\"));\r\n\r\nfunction component() {\r\n\tconst element = document.createElement('div');\r\n\telement.innerHTML = 'Hello bundler';\r\n\treturn element;\r\n}\r\n\r\ndocument.body.appendChild(component());\r\nObject(_nodecg_js__WEBPACK_IMPORTED_MODULE_2__[\"log\"])();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });