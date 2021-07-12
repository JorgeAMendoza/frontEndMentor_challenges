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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n  margin: 0;\\n  padding: 0;\\n  line-height: 1.6;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  font-family: \\\"Spartan\\\", sans-serif;\\n  font-weight: bold;\\n  min-height: 100vh;\\n  padding: 3rem 0;\\n  display: grid;\\n  grid-template-rows: auto 1fr;\\n}\\n@media screen and (min-width: 900px) {\\n  body {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n}\\n\\n.container {\\n  width: 90%;\\n  max-width: 60rem;\\n  margin: 0 auto;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-bottom: 3.2rem;\\n}\\nheader .app-title {\\n  font-size: 3.2rem;\\n}\\nheader .theme-select {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nheader .theme-select__tab {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  position: absolute;\\n  transform-origin: center;\\n  transition: transform 0.3s ease-in-out;\\n}\\nheader .theme-select__text {\\n  padding-right: 2rem;\\n  text-transform: uppercase;\\n  align-self: flex-end;\\n}\\nheader .theme-select__labels {\\n  display: flex;\\n  justify-content: space-around;\\n  padding-bottom: 0.1rem;\\n}\\nheader .theme-select__row {\\n  width: 8rem;\\n  height: 3rem;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  border-radius: 25px;\\n  position: relative;\\n}\\nheader .theme-select__option {\\n  opacity: 0;\\n}\\nheader .theme-select__theme {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  position: relative;\\n}\\n\\nmain {\\n  display: grid;\\n  gap: 2.5rem;\\n  grid-template-rows: auto 1fr;\\n}\\n@media screen and (min-width: 900px) {\\n  main {\\n    height: 60rem;\\n  }\\n}\\n\\n.input-display {\\n  border-radius: 10px;\\n  height: 10rem;\\n  padding: 0 1em;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n.input-display__text {\\n  text-align: right;\\n  font-size: clamp(3.2rem, 3vw, 4rem);\\n}\\n\\n.calc-input {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  padding: 2.5rem;\\n  gap: 1.6rem;\\n  border-radius: 10px;\\n}\\n@media screen and (min-width: 900px) {\\n  .calc-input {\\n    gap: 3rem;\\n  }\\n}\\n.calc-input__option--reset, .calc-input__option--equal {\\n  grid-column: span 2;\\n}\\n\\n.theme-1 {\\n  background: #3a4764;\\n}\\n.theme-1 .app-title {\\n  color: white;\\n}\\n.theme-1 .theme-select__text {\\n  color: white;\\n}\\n.theme-1 .theme-select__tab {\\n  background-color: #d03f2f;\\n}\\n.theme-1 .theme-select__labels {\\n  color: white;\\n}\\n.theme-1 .theme-select__row {\\n  background-color: #232c43;\\n}\\n.theme-1 .theme-select__tab {\\n  transform: translateX(-120%);\\n}\\n.theme-1 .input-display {\\n  background-color: #182034;\\n}\\n.theme-1 .input-display__text {\\n  color: white;\\n}\\n.theme-1 .calc-input {\\n  background-color: #232c43;\\n}\\n.theme-1 .calc-input__option {\\n  background-color: #eae3dc;\\n  box-shadow: 0 5px #b4a597;\\n  color: #3a4764;\\n}\\n.theme-1 .calc-input__option:active {\\n  background-color: #e0d6cc;\\n}\\n.theme-1 .calc-input__option--delete, .theme-1 .calc-input__option--reset {\\n  background-color: #637097;\\n  box-shadow: 0 5px #404e72;\\n  color: white;\\n}\\n.theme-1 .calc-input__option--delete:active, .theme-1 .calc-input__option--reset:active {\\n  background-color: #596488;\\n}\\n.theme-1 .calc-input__option--equal {\\n  background-color: #d03f2f;\\n  box-shadow: 0 5px #93261a;\\n  color: white;\\n}\\n.theme-1 .calc-input__option--equal:active {\\n  background-color: #bb392a;\\n}\\n\\n.theme-2 {\\n  background: #e6e6e6;\\n}\\n.theme-2 .app-title {\\n  color: #35352c;\\n}\\n.theme-2 .theme-select__text {\\n  color: #35352c;\\n}\\n.theme-2 .theme-select__tab {\\n  background-color: #ca5502;\\n}\\n.theme-2 .theme-select__labels {\\n  color: #35352c;\\n}\\n.theme-2 .theme-select__row {\\n  background-color: #d1cccc;\\n}\\n.theme-2 .theme-select__tab {\\n  transform: translateX(0);\\n}\\n.theme-2 .input-display {\\n  background-color: #ededed;\\n}\\n.theme-2 .input-display__text {\\n  color: #35352c;\\n}\\n.theme-2 .calc-input {\\n  background-color: #d1cccc;\\n}\\n.theme-2 .calc-input__option {\\n  background-color: #e5e4e1;\\n  box-shadow: 0 5px #a69d91;\\n  color: #35352c;\\n}\\n.theme-2 .calc-input__option:active {\\n  background-color: #d9d8d3;\\n}\\n.theme-2 .calc-input__option--delete, .theme-2 .calc-input__option--reset {\\n  background-color: #377f86;\\n  box-shadow: 0 5px #1b5f65;\\n  color: white;\\n}\\n.theme-2 .calc-input__option--delete:active, .theme-2 .calc-input__option--reset:active {\\n  background-color: #2f6e74;\\n}\\n.theme-2 .calc-input__option--equal {\\n  background-color: #ca5502;\\n  box-shadow: 0 5px #893901;\\n  color: white;\\n}\\n.theme-2 .calc-input__option--equal:active {\\n  background-color: #b14b02;\\n}\\n\\n.theme-3 {\\n  background: #160628;\\n}\\n.theme-3 .app-title {\\n  color: #ffe53d;\\n}\\n.theme-3 .theme-select__text {\\n  color: #ffe53d;\\n}\\n.theme-3 .theme-select__tab {\\n  background-color: #00e0d1;\\n}\\n.theme-3 .theme-select__labels {\\n  color: #ffe53d;\\n}\\n.theme-3 .theme-select__row {\\n  background-color: #1d0934;\\n}\\n.theme-3 .theme-select__tab {\\n  transform: translateX(120%);\\n}\\n.theme-3 .input-display {\\n  background-color: #1d0934;\\n}\\n.theme-3 .input-display__text {\\n  color: #ffe53d;\\n}\\n.theme-3 .calc-input {\\n  background-color: #1d0934;\\n}\\n.theme-3 .calc-input__option {\\n  background-color: #341c4f;\\n  box-shadow: 0 5px #871c9c;\\n  color: #ffe53d;\\n}\\n.theme-3 .calc-input__option:active {\\n  background-color: #28163c;\\n}\\n.theme-3 .calc-input__option--delete, .theme-3 .calc-input__option--reset {\\n  background-color: #58077d;\\n  box-shadow: 0 5px #bc15f4;\\n  color: white;\\n}\\n.theme-3 .calc-input__option--delete:active, .theme-3 .calc-input__option--reset:active {\\n  background-color: #470665;\\n}\\n.theme-3 .calc-input__option--equal {\\n  background-color: #00e0d1;\\n  box-shadow: 0 5px #6cf9f2;\\n  color: #1b2428;\\n}\\n.theme-3 .calc-input__option--equal:active {\\n  background-color: #00c7ba;\\n}\\n\\n.calc-input__option {\\n  border-radius: 5px;\\n  font-family: \\\"Spartan\\\", sans-serif;\\n  border: none;\\n  font-size: 2.4rem;\\n  cursor: pointer;\\n}\\n.calc-input__option--reset, .calc-input__option--delete, .calc-input__option--equal {\\n  font-size: 1.6rem;\\n}\\n.calc-input__option:active {\\n  box-shadow: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator-app/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://calculator-app/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-switch */ \"./src/app/theme-switch.js\");\n/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-input */ \"./src/app/number-input.js\");\n\r\n\r\n// Instructions to start App\r\n(() => {\r\n  (0,_theme_switch__WEBPACK_IMPORTED_MODULE_0__.themeSwitch)();\r\n  (0,_number_input__WEBPACK_IMPORTED_MODULE_1__.numberInput)();\r\n})();\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/app.js?");

/***/ }),

/***/ "./src/app/number-input.js":
/*!*********************************!*\
  !*** ./src/app/number-input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberInput\": () => (/* binding */ numberInput)\n/* harmony export */ });\n/* harmony import */ var _utils_evaluate_postfix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/evaluate-postfix */ \"./src/app/utils/evaluate-postfix.js\");\n/* harmony import */ var _utils_get_postfix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-postfix */ \"./src/app/utils/get-postfix.js\");\n\r\n\r\n\r\nconst numberInput = () => {\r\n  const _staticDOM = {\r\n    inputDisplay: document.querySelector(\".input-display__text\"),\r\n    keyInput: document.querySelectorAll(\".calc-input__option\"),\r\n  };\r\n\r\n  const _keyFunction = (e) => {\r\n    const keyInput = e.target.dataset.value;\r\n    switch (keyInput) {\r\n      case \"del\":\r\n        _deleteCharacter();\r\n        break;\r\n      case \"reset\":\r\n        _resetInput();\r\n        break;\r\n      case \"=\":\r\n        _calculateAnswer(_staticDOM.inputDisplay.textContent);\r\n        break;\r\n      case \"+\":\r\n      case \"-\":\r\n      case \"/\":\r\n      case \".\":\r\n      case \"*\":\r\n        _inputOperator(keyInput);\r\n        break;\r\n      default:\r\n        _inputCharacter(keyInput);\r\n    }\r\n  };\r\n\r\n  const _inputCharacter = (char) => {\r\n    _staticDOM.inputDisplay.textContent += char;\r\n    console.log(\r\n      _staticDOM.inputDisplay.textContent.replace(/(\\d)(\\d\\d\\d)/g, \"$1,$2\")\r\n    );\r\n  };\r\n\r\n  const _inputOperator = (char) => {\r\n    const currentInputLength = _staticDOM.inputDisplay.textContent.length;\r\n    const lastInput = _staticDOM.inputDisplay.textContent.charAt(\r\n      currentInputLength - 1\r\n    );\r\n\r\n    if (\r\n      lastInput !== \"*\" &&\r\n      lastInput !== \"+\" &&\r\n      lastInput !== \"-\" &&\r\n      lastInput !== \"/\" &&\r\n      lastInput !== \".\"\r\n    ) {\r\n      _staticDOM.inputDisplay.textContent += char;\r\n    }\r\n  };\r\n\r\n  const _deleteCharacter = () => {\r\n    const currentContent = _staticDOM.inputDisplay.textContent;\r\n    _staticDOM.inputDisplay.textContent = currentContent.slice(\r\n      0,\r\n      currentContent.length - 1\r\n    );\r\n  };\r\n\r\n  const _resetInput = () => {\r\n    _staticDOM.inputDisplay.textContent = \"\";\r\n  };\r\n\r\n  const _displayAnswser = (answer) => {\r\n    _staticDOM.inputDisplay.textContent = answer;\r\n  };\r\n\r\n  const _calculateAnswer = (input) => {\r\n    const firstChar = input.charAt(0);\r\n    if (\r\n      firstChar === \"+\" ||\r\n      firstChar === \"-\" ||\r\n      firstChar === \"/\" ||\r\n      firstChar === \"*\" ||\r\n      firstChar === \".\"\r\n    )\r\n      return;\r\n\r\n    // Have it check if the last character is a number as well.\r\n\r\n    const currentDisplay = _staticDOM.inputDisplay.textContent;\r\n    const infixExpression = currentDisplay\r\n      .replace(/([+-])/gi, \" $1 \")\r\n      .replace(/([/*])/gi, \" $1 \")\r\n      .split(\" \");\r\n\r\n    const postFixExpression = (0,_utils_get_postfix__WEBPACK_IMPORTED_MODULE_1__.getPostFix)(infixExpression);\r\n    _displayAnswser((0,_utils_evaluate_postfix__WEBPACK_IMPORTED_MODULE_0__.evaluatePostfix)(postFixExpression));\r\n  };\r\n\r\n  _staticDOM.keyInput.forEach((key) =>\r\n    key.addEventListener(\"click\", _keyFunction)\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/number-input.js?");

/***/ }),

/***/ "./src/app/theme-switch.js":
/*!*********************************!*\
  !*** ./src/app/theme-switch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themeSwitch\": () => (/* binding */ themeSwitch)\n/* harmony export */ });\nconst themeSwitch = () => {\r\n  const _staticDOM = {\r\n    pageBody: document.querySelector(\"body\"),\r\n    themeSelect: document.querySelectorAll(\"input[type='radio']\"),\r\n    themeTab: document.querySelector(\".theme-select__tab\"),\r\n  };\r\n\r\n  const _changeTheme = (e) => {\r\n    const themeSelection = e.target.dataset.theme;\r\n    _staticDOM.pageBody.classList.remove(\"theme-1\", \"theme-2\", \"theme-3\");\r\n\r\n    switch (themeSelection) {\r\n      case \"1\":\r\n        _staticDOM.pageBody.classList.add(\"theme-1\");\r\n        break;\r\n      case \"2\":\r\n        _staticDOM.pageBody.classList.add(\"theme-2\");\r\n        break;\r\n      case \"3\":\r\n        _staticDOM.pageBody.classList.add(\"theme-3\");\r\n        break;\r\n    }\r\n  };\r\n\r\n  _staticDOM.themeSelect.forEach((input) =>\r\n    input.addEventListener(\"change\", _changeTheme)\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/theme-switch.js?");

/***/ }),

/***/ "./src/app/utils/evaluate-postfix.js":
/*!*******************************************!*\
  !*** ./src/app/utils/evaluate-postfix.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"evaluatePostfix\": () => (/* binding */ evaluatePostfix)\n/* harmony export */ });\n/* harmony import */ var _math_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-functions */ \"./src/app/utils/math-functions.js\");\n\r\nconst evaluatePostfix = (expressionArray) => {\r\n  const answerStack = [];\r\n  let numOne, numTwo, interAns;\r\n\r\n  for (let i = 0; i < expressionArray.length; i++) {\r\n    const ch = expressionArray[i];\r\n    if (!isNaN(ch)) {\r\n      answerStack.push(ch);\r\n      continue;\r\n    }\r\n\r\n    numTwo = +answerStack.pop();\r\n    numOne = +answerStack.pop();\r\n\r\n    switch (ch) {\r\n      case \"+\":\r\n        interAns = _math_functions__WEBPACK_IMPORTED_MODULE_0__.add(numOne, numTwo);\r\n        break;\r\n      case \"-\":\r\n        interAns = _math_functions__WEBPACK_IMPORTED_MODULE_0__.subtract(numOne, numTwo);\r\n        break;\r\n      case \"*\":\r\n        interAns = _math_functions__WEBPACK_IMPORTED_MODULE_0__.multiply(numOne, numTwo);\r\n        break;\r\n      case \"/\":\r\n        interAns = _math_functions__WEBPACK_IMPORTED_MODULE_0__.divide(numOne, numTwo);\r\n        break;\r\n      default:\r\n        interAns = 0;\r\n        break;\r\n    }\r\n\r\n    answerStack.push(interAns);\r\n  }\r\n\r\n  const answer = answerStack.pop();\r\n  return answer % 1 === 0 ? answer : answer.toFixed(3);\r\n};\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/utils/evaluate-postfix.js?");

/***/ }),

/***/ "./src/app/utils/get-operand.js":
/*!**************************************!*\
  !*** ./src/app/utils/get-operand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOperand\": () => (/* binding */ getOperand)\n/* harmony export */ });\nconst getOperand = (opThis, precOne, opStack, postStack) => {\r\n  while (opStack.length !== 0) {\r\n    let opTop = opStack.pop();\r\n    let precTwo = opTop === \"+\" || opTop === \"-\" ? 1 : 2;\r\n\r\n    if (precTwo < precOne) {\r\n      opStack.push(opTop);\r\n      break;\r\n    } else {\r\n      postStack.push(opTop);\r\n    }\r\n  }\r\n  opStack.push(opThis);\r\n};\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/utils/get-operand.js?");

/***/ }),

/***/ "./src/app/utils/get-postfix.js":
/*!**************************************!*\
  !*** ./src/app/utils/get-postfix.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostFix\": () => (/* binding */ getPostFix)\n/* harmony export */ });\n/* harmony import */ var _get_operand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-operand */ \"./src/app/utils/get-operand.js\");\n\r\n\r\nconst getPostFix = (infix) => {\r\n  const postFix = [];\r\n  const operandStack = [];\r\n\r\n  for (let char of infix) {\r\n    switch (char) {\r\n      case \"+\":\r\n      case \"-\":\r\n        (0,_get_operand__WEBPACK_IMPORTED_MODULE_0__.getOperand)(char, 1, operandStack, postFix);\r\n        break;\r\n      case \"*\":\r\n      case \"/\":\r\n        (0,_get_operand__WEBPACK_IMPORTED_MODULE_0__.getOperand)(char, 2, operandStack, postFix);\r\n        break;\r\n      default:\r\n        postFix.push(char);\r\n    }\r\n  }\r\n\r\n  while (operandStack.length !== 0) {\r\n    postFix.push(operandStack.pop());\r\n  }\r\n  return postFix;\r\n};\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/utils/get-postfix.js?");

/***/ }),

/***/ "./src/app/utils/math-functions.js":
/*!*****************************************!*\
  !*** ./src/app/utils/math-functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"subtract\": () => (/* binding */ subtract),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"divide\": () => (/* binding */ divide)\n/* harmony export */ });\nconst add = (a, b) => a + b;\r\nconst subtract = (a, b) => a - b;\r\nconst multiply = (a, b) => a * b;\r\nconst divide = (a, b) => a / b;\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculator-app/./src/app/utils/math-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://calculator-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;