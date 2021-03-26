/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_pattern_hills_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pattern-hills.svg */ \"./src/assets/pattern-hills.svg\");\n/* harmony import */ var _assets_bg_stars_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bg-stars.svg */ \"./src/assets/bg-stars.svg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_pattern_hills_svg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_bg_stars_svg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  line-height: 1.5;\\n  min-height: 100vh;\\n  font-family: \\\"Red Hat Text\\\", sans-serif;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat bottom right/250%, url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center center, linear-gradient(#191a24 30%, #211a28);\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.launch-header {\\n  color: white;\\n  display: flex;\\n  align-items: center;\\n  padding-top: 15rem;\\n}\\n.launch-header .launch-header__title {\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-size: 3.2rem;\\n  letter-spacing: 4px;\\n  word-spacing: 5px;\\n  width: 100%;\\n}\\n\\n.container {\\n  width: 90%;\\n  margin: 0 auto;\\n}\\n\\n.launch-footer {\\n  margin-top: auto;\\n}\\n.launch-footer .launch-footer__icons {\\n  min-height: 10vh;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: start;\\n  gap: 2em;\\n}\\n\\n.countdown-clock {\\n  background-color: transparent;\\n  display: grid;\\n  grid-template-columns: repeat(4, minmax(5rem, 11rem));\\n  gap: 1.5rem;\\n  justify-content: center;\\n  margin-top: 5rem;\\n}\\n.countdown-clock .countdown-clock__time {\\n  perspective: 1000px;\\n  background-color: #191a24;\\n  text-align: center;\\n  position: relative;\\n}\\n.countdown-clock .countdown-clock__time__card {\\n  width: 100%;\\n  height: 4.5rem;\\n  border-radius: 5px;\\n  position: absolute;\\n  text-align: center;\\n  transform-origin: bottom center;\\n  transition: transform 0.2s;\\n  transform-style: preserve-3d;\\n}\\n.countdown-clock .countdown-clock__time__card::after, .countdown-clock .countdown-clock__time__card::before {\\n  content: \\\"\\\";\\n  width: 15px;\\n  height: 15px;\\n  background-color: #191a24;\\n  z-index: 1;\\n  position: absolute;\\n  bottom: 0;\\n  border-radius: 100%;\\n}\\n.countdown-clock .countdown-clock__time__card::after {\\n  left: 0;\\n  transform: translate(-50%, 50%);\\n}\\n.countdown-clock .countdown-clock__time__card::before {\\n  right: 0;\\n  transform: translate(50%, 50%);\\n}\\n.countdown-clock .countdown-clock__time__card__front, .countdown-clock .countdown-clock__time__card__back {\\n  position: absolute;\\n  color: #fb6087;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n  overflow: hidden;\\n  font-size: 4.5rem;\\n  font-weight: bold;\\n  border-radius: inherit;\\n}\\n.countdown-clock .countdown-clock__time__card__front {\\n  background-color: #343650;\\n}\\n.countdown-clock .countdown-clock__time__card__back {\\n  background-color: #494b6f;\\n  transform: rotateY(180deg);\\n}\\n.countdown-clock .countdown-clock__time__card__front p {\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translate(-50%, 50%);\\n}\\n.countdown-clock .countdown-clock__time__card__back p {\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translate(-50%, 50%) rotateX(0.5turn) scale(-1, 1);\\n}\\n.countdown-clock .countdown-clock__time__card.flip {\\n  transform: rotateX(-180deg);\\n}\\n.countdown-clock .countdown-clock__time__card.flipped {\\n  transition: transform -1s ease;\\n  transform: rotateX(-180deg);\\n}\\n.countdown-clock .countdown-clock__time__card:nth-child(3) {\\n  z-index: -1;\\n}\\n.countdown-clock .countdown-clock__time__type {\\n  font-weight: bold;\\n  font-size: 1.2rem;\\n  color: #8486a9;\\n  text-transform: uppercase;\\n  letter-spacing: 4px;\\n  padding-top: 11.5rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://launch-countdown-timer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://launch-countdown-timer/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://launch-countdown-timer/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://launch-countdown-timer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/clock-dom.js":
/*!******************************!*\
  !*** ./src/app/clock-dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create-clock-part */ \"./src/app/utils/create-clock-part.js\");\n\r\n\r\nconst clockDOM = () => {\r\n  const _timeDisplayDOM = {\r\n    dayTime: document.querySelector(\"#dayTime\"),\r\n    hourTime: document.querySelector(\"#hourTime\"),\r\n    minuteTime: document.querySelector(\"#minuteTime\"),\r\n    secondTime: document.querySelector(\"#secondTime\"),\r\n  };\r\n\r\n  const checkTime = (timeType, timeValue, nextTimeValue) => {\r\n    switch (timeType) {\r\n      case \"second\":\r\n        changeTime(\r\n          _timeDisplayDOM.secondTime,\r\n          (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(timeValue, nextTimeValue)\r\n        );\r\n        break;\r\n      case \"minute\":\r\n        changeTime(\r\n          _timeDisplayDOM.minuteTime,\r\n          (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(timeValue, nextTimeValue)\r\n        );\r\n        break;\r\n      case \"hour\":\r\n        changeTime(\r\n          _timeDisplayDOM.hourTime,\r\n          (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(timeValue, nextTimeValue)\r\n        );\r\n        break;\r\n      case \"day\":\r\n        changeTime(\r\n          _timeDisplayDOM.dayTime,\r\n          (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(timeValue, nextTimeValue)\r\n        );\r\n        break;\r\n    }\r\n  };\r\n\r\n  const changeTime = (domObject, clockPartDOM) => {\r\n    const currentPart = domObject.querySelector(\".countdown-clock__time__card\");\r\n    domObject.insertAdjacentElement(\"afterbegin\", clockPartDOM);\r\n    currentPart.classList.add(\"flip\");\r\n  };\r\n\r\n  // Most likely public. called when inital date is created.\r\n  const setInitialSecond = (second, nextSecond) => {\r\n    _timeDisplayDOM.secondTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(second, second, \"flipped\")\r\n    );\r\n    _timeDisplayDOM.secondTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(second, nextSecond)\r\n    );\r\n  };\r\n\r\n  const setInitialMinute = (minute, nextMinute) => {\r\n    _timeDisplayDOM.minuteTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(minute, minute, \"flipped\")\r\n    );\r\n    _timeDisplayDOM.minuteTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(minute, nextMinute)\r\n    );\r\n  };\r\n\r\n  const setInitialHour = (hour, nextHour) => {\r\n    _timeDisplayDOM.hourTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(hour, hour, \"flipped\")\r\n    );\r\n    _timeDisplayDOM.hourTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(hour, nextHour)\r\n    );\r\n  };\r\n\r\n  const setInitialDay = (day, nextDay) => {\r\n    _timeDisplayDOM.dayTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(day, day, \"flipped\")\r\n    );\r\n    _timeDisplayDOM.dayTime.insertAdjacentElement(\r\n      \"afterbegin\",\r\n      (0,_utils_create_clock_part__WEBPACK_IMPORTED_MODULE_0__.createClockPart)(day, nextDay)\r\n    );\r\n  };\r\n\r\n  // Set Event listeners for deleting last clock part\r\n  for (let timeBlock in _timeDisplayDOM) {\r\n    _timeDisplayDOM[timeBlock].addEventListener(\"transitionend\", function () {\r\n      const clockParts = this.querySelectorAll(\".countdown-clock__time__card\");\r\n      this.removeChild(clockParts[clockParts.length - 1]);\r\n    });\r\n  }\r\n  return {\r\n    checkTime,\r\n    setInitialSecond,\r\n    setInitialMinute,\r\n    setInitialHour,\r\n    setInitialDay,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clockDOM);\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/clock-dom.js?");

/***/ }),

/***/ "./src/app/clock.js":
/*!**************************!*\
  !*** ./src/app/clock.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_get_currnet_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/get-currnet-time */ \"./src/app/utils/get-currnet-time.js\");\n/* harmony import */ var _timeChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeChange */ \"./src/app/timeChange.js\");\n/* harmony import */ var _clock_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock-dom */ \"./src/app/clock-dom.js\");\n\r\n\r\n\r\n\r\n// Set Clock DOM;\r\nconst dom = (0,_clock_dom__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\nconst clock = () => {\r\n  // Set up target Date Object\r\n  const _targetDate = new Date(\"January 01, 2022\");\r\n  const _targetDay = Math.floor((_targetDate - new Date()) / 1000 / 86400);\r\n  const _targeDateData = {\r\n    days: _targetDay,\r\n    hours: 0,\r\n    minutes: 0,\r\n    seconds: 0,\r\n  };\r\n\r\n  //   Set up current Date object\r\n  const _currentDate = (0,_utils_get_currnet_time__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)();\r\n\r\n  // Set inital state of clock\r\n  dom.setInitialSecond(\r\n    _currentDate.seconds,\r\n    _currentDate.seconds - 1 === -1 ? 59 : _currentDate.seconds - 1\r\n  );\r\n  dom.setInitialMinute(\r\n    _currentDate.minutes,\r\n    _currentDate.minutes - 1 === -1 ? 59 : _currentDate.minutes - 1\r\n  );\r\n  dom.setInitialHour(\r\n    _currentDate.hours,\r\n    _currentDate.hours - 1 === -1 ? 59 : _currentDate.hours - 1\r\n  );\r\n  dom.setInitialDay(\r\n    _currentDate.days,\r\n    _currentDate.days - 1 === -1 ? 59 : _currentDate.days - 1\r\n  );\r\n\r\n  setInterval(() => {\r\n    const _currentCheck = (0,_utils_get_currnet_time__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)();\r\n    const { secondChange, minuteChange, hourChange, dayChange } = (0,_timeChange__WEBPACK_IMPORTED_MODULE_1__.timeChange)(\r\n      _currentDate,\r\n      _currentCheck\r\n    );\r\n    _currentDate.hours = _currentCheck.hours;\r\n    if (secondChange) {\r\n      const nextSecond =\r\n        _currentCheck.seconds - 1 === -1 ? 59 : _currentCheck.seconds - 1;\r\n      _currentDate.seconds = _currentDate.seconds;\r\n      dom.checkTime(\"second\", _currentCheck.seconds, nextSecond);\r\n    }\r\n    if (minuteChange) {\r\n      const nextMinte =\r\n        _currentCheck.minutes - 1 === -1 ? 59 : _currentCheck.minutes - 1;\r\n      _currentDate.minutes = _currentCheck.minutes;\r\n      dom.checkTime(\"minute\", _currentCheck.minutes, nextMinte);\r\n    } else return;\r\n    if (hourChange) {\r\n      const nextHour =\r\n        _currentCheck.hours - 1 === -1 ? 59 : _currentCheck.hours - 1;\r\n      _currentDate.hours = _currentCheck.hours;\r\n      dom.changeHour(_currentCheck.hours, nextHour);\r\n    } else return;\r\n    if (dayChange) {\r\n      const nextDay =\r\n        _currentCheck.days - 1 === -1 ? 59 : _currentCheck.hours - 1;\r\n      _currentDate.days = _currentCheck.hours;\r\n      dom.checkTime(\"hour\", _currentCheck.days, nextDay);\r\n    }\r\n  }, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clock);\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/clock.js?");

/***/ }),

/***/ "./src/app/timeChange.js":
/*!*******************************!*\
  !*** ./src/app/timeChange.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeChange\": () => (/* binding */ timeChange)\n/* harmony export */ });\n/* harmony import */ var _utils_get_currnet_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/get-currnet-time */ \"./src/app/utils/get-currnet-time.js\");\n/* harmony import */ var _utils_timeConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/timeConvert */ \"./src/app/utils/timeConvert.js\");\n\r\n\r\nconst timeChange = (lastTime, currentTime) => {\r\n  const secondChange = lastTime.seconds !== currentTime.seconds ? true : false;\r\n  const minuteChange = lastTime.minutes !== currentTime.minutes ? true : false;\r\n  const hourChange = lastTime.hours !== currentTime.hours ? true : false;\r\n  const dayChange = lastTime.days !== currentTime.days ? true : false;\r\n\r\n  return {\r\n    secondChange,\r\n    minuteChange,\r\n    hourChange,\r\n    dayChange,\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/timeChange.js?");

/***/ }),

/***/ "./src/app/utils/create-clock-part.js":
/*!********************************************!*\
  !*** ./src/app/utils/create-clock-part.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createClockPart\": () => (/* binding */ createClockPart)\n/* harmony export */ });\nconst createClockPart = (timeValue, nextTimeValue, className = \"\") => {\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.setAttribute(\r\n    \"class\",\r\n    `countdown-clock__time__card ${className}`\r\n  );\r\n\r\n  const frontCard = document.createElement(\"div\");\r\n  frontCard.setAttribute(\"class\", \"countdown-clock__time__card__front\");\r\n\r\n  const backCard = document.createElement(\"div\");\r\n  backCard.setAttribute(\"class\", \"countdown-clock__time__card__back\");\r\n\r\n  const frontText = document.createElement(\"p\");\r\n  frontText.textContent = `${timeValue}`;\r\n\r\n  const backText = document.createElement(\"p\");\r\n  backText.textContent = `${nextTimeValue}`;\r\n\r\n  // Put it all together\r\n  frontCard.append(frontText);\r\n  backCard.append(backText);\r\n\r\n  \r\n  cardContainer.append(frontCard);\r\n  cardContainer.append(backCard);\r\n\r\n  return cardContainer;\r\n};\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/utils/create-clock-part.js?");

/***/ }),

/***/ "./src/app/utils/get-currnet-time.js":
/*!*******************************************!*\
  !*** ./src/app/utils/get-currnet-time.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentTime\": () => (/* binding */ getCurrentTime)\n/* harmony export */ });\n/* harmony import */ var _timeConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeConvert */ \"./src/app/utils/timeConvert.js\");\n\r\nconst getCurrentTime = () => {\r\n  const currentTime = new Date();\r\n  return {\r\n    days: Math.floor(\r\n      (new Date(\"January 01, 2022\") - currentTime) / 1000 / 86400\r\n    ),\r\n    hours: _timeConvert__WEBPACK_IMPORTED_MODULE_0__.default.convertHours(currentTime.getHours()),\r\n    minutes: _timeConvert__WEBPACK_IMPORTED_MODULE_0__.default.convertMinutes(currentTime.getMinutes()),\r\n    seconds: _timeConvert__WEBPACK_IMPORTED_MODULE_0__.default.convertSeconds(currentTime.getSeconds()),\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/utils/get-currnet-time.js?");

/***/ }),

/***/ "./src/app/utils/timeConvert.js":
/*!**************************************!*\
  !*** ./src/app/utils/timeConvert.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timeConvert = {\r\n  convertHours(hours) {\r\n    return 24 - (hours + 1);\r\n  },\r\n  convertMinutes(minutes) {\r\n    return 60 - (minutes + 1);\r\n  },\r\n  convertSeconds(seconds) {\r\n    return 60 - (seconds + 1);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeConvert);\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/app/utils/timeConvert.js?");

/***/ }),

/***/ "./src/assets/bg-stars.svg":
/*!*********************************!*\
  !*** ./src/assets/bg-stars.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/166881a1c03d6b1239f5..svg\";\n\n//# sourceURL=webpack://launch-countdown-timer/./src/assets/bg-stars.svg?");

/***/ }),

/***/ "./src/assets/pattern-hills.svg":
/*!**************************************!*\
  !*** ./src/assets/pattern-hills.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/815d688fd937623063b5..svg\";\n\n//# sourceURL=webpack://launch-countdown-timer/./src/assets/pattern-hills.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _app_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/clock */ \"./src/app/clock.js\");\n\r\n\r\n\r\n(0,_app_clock__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\n\n//# sourceURL=webpack://launch-countdown-timer/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;