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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_bg_pattern_intro_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/bg-pattern-intro.svg */ \"./src/assets/images/bg-pattern-intro.svg\");\n/* harmony import */ var _assets_images_illustration_editor_desktop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/illustration-editor-desktop.svg */ \"./src/assets/images/illustration-editor-desktop.svg\");\n/* harmony import */ var _assets_images_illustration_laptop_desktop_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/illustration-laptop-desktop.svg */ \"./src/assets/images/illustration-laptop-desktop.svg\");\n/* harmony import */ var _assets_images_bg_pattern_circles_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/bg-pattern-circles.svg */ \"./src/assets/images/bg-pattern-circles.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_bg_pattern_intro_svg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_illustration_editor_desktop_svg__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_illustration_laptop_desktop_svg__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_bg_pattern_circles_svg__WEBPACK_IMPORTED_MODULE_5__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n  font-size: 62.5%;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  box-sizing: inherit;\\n  padding: 0;\\n  margin: 0;\\n  line-height: 1.2;\\n  font-size: inherit;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n}\\n\\nmain {\\n  overflow: hidden;\\n}\\n\\nul,\\nol {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: black;\\n}\\n\\nh1,\\nh2,\\nh3 {\\n  line-height: 1.4;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  display: inline-block;\\n}\\n\\n.header {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 35% 40%/325%, linear-gradient(180deg, #ff8f70, #ff3d54);\\n  border-bottom-left-radius: 100px;\\n  min-height: 40vh;\\n  padding: 4rem 0;\\n}\\n@media screen and (min-width: 900px) {\\n  .header {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 35% 40%/150%, linear-gradient(180deg, #ff8f70, #ff3d54);\\n  }\\n}\\n.header__content {\\n  text-align: center;\\n  font-family: \\\"Overpass\\\";\\n  color: white;\\n  padding-top: 6rem;\\n  min-height: 30vh;\\n}\\n.header__content > * {\\n  margin-bottom: 1.5rem;\\n}\\n.header__content__title {\\n  font-size: clamp(3.2rem, 2.5vw, 4rem);\\n}\\n.header__content__subtitle {\\n  font-weight: lighter;\\n}\\n.header__content__action {\\n  margin-top: 3.5rem;\\n}\\n.header__content__action > *:first-child {\\n  margin-right: 1.5rem;\\n}\\n\\n.nav-bar {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 2rem;\\n  grid-template-areas: \\\"logo menu\\\" \\\"nav-menu nav-menu\\\";\\n  position: relative;\\n  z-index: 1;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar {\\n    grid-template-columns: auto 1fr;\\n    grid-template-areas: \\\"logo nav-menu\\\";\\n  }\\n}\\n.nav-bar .site-logo {\\n  grid-area: logo;\\n  align-self: center;\\n}\\n.nav-bar__open-menu {\\n  grid-area: menu;\\n  justify-self: end;\\n  align-self: center;\\n  cursor: pointer;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__open-menu {\\n    display: none;\\n  }\\n}\\n.nav-bar__content {\\n  grid-area: nav-menu;\\n  background-color: white;\\n  text-align: center;\\n  border-radius: 5px;\\n  padding: 2.5em 2em;\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  display: none;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__content {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: transparent;\\n    position: relative;\\n    padding: 0;\\n    border-radius: 0;\\n    text-align: left;\\n  }\\n}\\n.nav-bar__content--display {\\n  display: block;\\n}\\n.nav-bar__nav {\\n  font-family: \\\"Overpass\\\";\\n  color: #25252d;\\n  font-weight: bold;\\n}\\n.nav-bar__nav__list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list {\\n    flex-direction: row;\\n    gap: 3rem;\\n  }\\n}\\n.nav-bar__nav__list__option {\\n  position: relative;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list__option {\\n    width: 10rem;\\n  }\\n}\\n.nav-bar__nav__list__option .nav-arrow {\\n  padding-left: 0.4rem;\\n  cursor: pointer;\\n}\\n.nav-bar__nav__list__option .nav-arrow__img {\\n  transition: transform 0.5s ease;\\n}\\n.nav-bar__nav__list__option .nav-arrow__img--display {\\n  transform: rotate(180deg);\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list__option .nav-arrow__img {\\n    filter: brightness(0) invert(1);\\n  }\\n}\\n.nav-bar__nav__list__option .nav-arrow img:last-child {\\n  display: none;\\n}\\n.nav-bar__nav__list__option:not(:first-child) {\\n  margin-top: 2.3rem;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list__option {\\n    color: white;\\n  }\\n  .nav-bar__nav__list__option:not(:first-child) {\\n    margin-top: 0;\\n  }\\n}\\n.nav-bar__nav__list__option__items {\\n  background-color: #ededed;\\n  padding: 1em 0;\\n  border-radius: 5px;\\n  margin-top: 1.5rem;\\n  display: none;\\n}\\n.nav-bar__nav__list__option__items--display {\\n  display: block;\\n}\\n.nav-bar__nav__list__option__items__item:not(:last-child) {\\n  margin-bottom: 1.5rem;\\n}\\n.nav-bar__nav__list__option__items__item__text {\\n  font-family: \\\"Ubuntu\\\";\\n  color: #4b5862;\\n  font-weight: 400;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list__option__items__item__text {\\n    color: #000;\\n  }\\n}\\n.nav-bar__nav__list__option__items__item__text:hover {\\n  font-weight: bold;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__nav__list__option__items {\\n    background-color: white;\\n    position: absolute;\\n    margin-top: 0;\\n    top: 150%;\\n    left: -10%;\\n    width: 11rem;\\n    padding-left: 1rem;\\n  }\\n}\\n.nav-bar__login {\\n  border-top: 1px solid #d9d9d9;\\n  margin-top: 2rem;\\n  padding-top: 2.5rem;\\n}\\n.nav-bar__login .btn {\\n  display: block;\\n  margin: 0 auto;\\n}\\n.nav-bar__login .btn:first-child {\\n  margin-bottom: 1rem;\\n}\\n@media screen and (min-width: 900px) {\\n  .nav-bar__login {\\n    margin: 0;\\n    padding: 0;\\n    border-top: transparent;\\n  }\\n  .nav-bar__login .btn {\\n    display: inline-block;\\n    padding: 0.5em 1em;\\n  }\\n  .nav-bar__login .btn:first-child {\\n    margin-bottom: 0;\\n  }\\n}\\n\\n.container {\\n  width: 90%;\\n  max-width: 1400px;\\n  margin: 0 auto;\\n}\\n\\n.page-section {\\n  padding-top: 5rem;\\n  padding: 10rem 0;\\n}\\n@media screen and (min-width: 1200px) {\\n  .page-section {\\n    padding: 18rem 0;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat 110% center/42%;\\n  }\\n  .page-section--reverse {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat -5% center/40%;\\n  }\\n}\\n@media screen and (min-width: 2000px) {\\n  .page-section {\\n    padding: 25rem 0;\\n    border: 1px solid black;\\n  }\\n}\\n.page-section .section-title {\\n  font-size: 2.4rem;\\n  font-family: \\\"Overpass\\\";\\n  color: #1f3f5b;\\n  text-align: center;\\n  padding-bottom: 3.5rem;\\n}\\n@media screen and (min-width: 1200px) {\\n  .page-section .section-title {\\n    padding-bottom: 10rem;\\n  }\\n}\\n.page-section:nth-child(2) {\\n  padding-top: 15rem;\\n}\\n.page-section .section-information {\\n  position: relative;\\n}\\n.page-section .section-information__content {\\n  margin: 2rem 0;\\n}\\n.page-section .section-information__content__title {\\n  font-size: 2.4rem;\\n  font-family: \\\"Overpass\\\";\\n  color: #1f3f5b;\\n  text-align: center;\\n  width: 75%;\\n  margin: 0 auto;\\n  padding-bottom: 1.5rem;\\n}\\n.page-section .section-information__content__title:not(:first-child) {\\n  padding-top: 3rem;\\n}\\n.page-section .section-information__content__text {\\n  color: #4b5862;\\n  font-family: \\\"Overpass\\\";\\n  line-height: 1.8;\\n  text-align: center;\\n  font-weight: 400;\\n}\\n.page-section .section-information__picture {\\n  margin: 0 auto;\\n  display: block;\\n}\\n@media screen and (min-width: 1200px) {\\n  .page-section .section-information {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas: \\\"text space\\\";\\n  }\\n  .page-section .section-information__content {\\n    grid-area: text;\\n  }\\n  .page-section .section-information__content__text, .page-section .section-information__content__title {\\n    text-align: left;\\n    margin: 0;\\n  }\\n  .page-section .section-information__picture {\\n    display: none;\\n  }\\n  .page-section .section-information--reverse {\\n    grid-template-areas: \\\"space text\\\";\\n  }\\n}\\n.page-section--blue {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat 50% -30rem/150%, linear-gradient(90deg, #2c2d3f, #3f4164);\\n  border-radius: 0 20% 0 20%;\\n  min-height: 50rem;\\n}\\n@media screen and (min-width: 900px) {\\n  .page-section--blue {\\n    padding: 0;\\n    min-height: 40rem;\\n  }\\n}\\n.page-section--blue .section-information {\\n  grid-template-areas: \\\"space text\\\";\\n}\\n.page-section--blue .section-information__content__text,\\n.page-section--blue .section-information .section-title {\\n  color: #ededed;\\n}\\n.page-section--blue .section-information .section-title {\\n  padding-top: 17rem;\\n}\\n@media screen and (min-width: 1200px) {\\n  .page-section--blue .section-information .section-title {\\n    padding: 0;\\n    padding-bottom: 1rem;\\n    text-align: left;\\n  }\\n}\\n.page-section--blue .section-information__picture {\\n  position: absolute;\\n  top: -60%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  max-width: 350px;\\n}\\n@media screen and (min-width: 1200px) {\\n  .page-section--blue .section-information__picture {\\n    display: block;\\n    top: -130%;\\n    left: 0;\\n    transform: translate(0);\\n    max-width: 100%;\\n  }\\n}\\n\\nfooter {\\n  background-color: #25252d;\\n  color: white;\\n  border-radius: 0 25% 0 0;\\n  padding: 5rem 0;\\n  text-align: center;\\n}\\n@media screen and (min-width: 900px) {\\n  footer {\\n    text-align: left;\\n    padding: 8rem 0;\\n  }\\n}\\nfooter .site-logo {\\n  margin: 3.5rem;\\n}\\n@media screen and (min-width: 900px) {\\n  footer .site-logo {\\n    margin: 0;\\n  }\\n}\\nfooter .footer-content {\\n  display: grid;\\n  place-content: center;\\n  gap: 4rem;\\n}\\n@media screen and (min-width: 900px) {\\n  footer .footer-content {\\n    grid-template-columns: repeat(4, 1fr);\\n    place-content: start;\\n  }\\n}\\nfooter .footer-nav__title {\\n  margin-bottom: 1.5rem;\\n  font-weight: bold;\\n  font-family: Overpass, Helvetica, sans-serif;\\n}\\nfooter .footer-nav__nav-list__item:not(:last-child) {\\n  margin-bottom: 0.8rem;\\n}\\nfooter .footer-nav__nav-list__item__text {\\n  color: #c8c8cb;\\n  font-family: Ubuntu;\\n}\\nfooter .footer-nav__nav-list__item__text:hover {\\n  text-decoration: underline;\\n}\\n\\n.btn {\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: 1px solid black;\\n  border-radius: 30px;\\n  min-width: 14 ch;\\n  padding: 0.8em;\\n  font-family: \\\"Overpass\\\", sans-serif;\\n  font-weight: bold;\\n  color: #25252d;\\n  border: none;\\n}\\n.btn--clear {\\n  border: transparent;\\n}\\n.btn--primary {\\n  border: transparent;\\n  background: linear-gradient(90deg, #ff8f70, #ff3d54);\\n  color: white;\\n}\\n.btn--primary:hover {\\n  color: white;\\n  background-color: rgba(255, 255, 255, 0.4);\\n}\\n.btn--action {\\n  background-color: white;\\n  color: #ff525d;\\n  font-family: \\\"Ubuntu\\\";\\n}\\n.btn--action:hover {\\n  color: white;\\n  background-color: rgba(255, 255, 255, 0.4);\\n}\\n.btn--border-transparent {\\n  font-family: \\\"Ubuntu\\\";\\n  border: 1px solid #fff;\\n  color: #fff;\\n}\\n.btn--border-transparent:hover {\\n  color: #ff525d;\\n  background-color: white;\\n}\\n@media screen and (min-width: 900px) {\\n  .btn {\\n    color: white;\\n  }\\n  .btn--primary {\\n    background: white;\\n    color: #ff525d;\\n  }\\n  .btn--action {\\n    background-color: white;\\n    color: #ff525d;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://blogr-landing-page/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://blogr-landing-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://blogr-landing-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://blogr-landing-page/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://blogr-landing-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/bg-pattern-circles.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/bg-pattern-circles.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/bae804b8cc1519f26c94..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/bg-pattern-circles.svg?");

/***/ }),

/***/ "./src/assets/images/bg-pattern-intro.svg":
/*!************************************************!*\
  !*** ./src/assets/images/bg-pattern-intro.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/bf6b3e1b727eabeffdc5..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/bg-pattern-intro.svg?");

/***/ }),

/***/ "./src/assets/images/icon-close.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-close.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/c6580312401807bc9f98..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/icon-close.svg?");

/***/ }),

/***/ "./src/assets/images/icon-hamburger.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-hamburger.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/68867946847c3249542e..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/icon-hamburger.svg?");

/***/ }),

/***/ "./src/assets/images/illustration-editor-desktop.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/illustration-editor-desktop.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/c6c8050aa4dcf0c64b44..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/illustration-editor-desktop.svg?");

/***/ }),

/***/ "./src/assets/images/illustration-laptop-desktop.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/illustration-laptop-desktop.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/799209c2628b1f244e15..svg\";\n\n//# sourceURL=webpack://blogr-landing-page/./src/assets/images/illustration-laptop-desktop.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _navbar_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-toggle */ \"./src/navbar-toggle.js\");\n\r\n\r\n\r\n(0,_navbar_toggle__WEBPACK_IMPORTED_MODULE_1__.navbarToggle)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://blogr-landing-page/./src/index.js?");

/***/ }),

/***/ "./src/navbar-toggle.js":
/*!******************************!*\
  !*** ./src/navbar-toggle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbarToggle\": () => (/* binding */ navbarToggle)\n/* harmony export */ });\n/* harmony import */ var _assets_images_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/icon-close.svg */ \"./src/assets/images/icon-close.svg\");\n/* harmony import */ var _assets_images_icon_hamburger_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/icon-hamburger.svg */ \"./src/assets/images/icon-hamburger.svg\");\n\r\n\r\n\r\nconst navbarToggle = () => {\r\n  const navMenuButton = document.querySelector(\"#navMenuButton\");\r\n  const navbarContent = document.querySelector(\"#navbarContent\");\r\n  const navbarOptions = document.querySelectorAll(\r\n    \".nav-bar__nav__list__option\"\r\n  );\r\n  let navOpen = false;\r\n\r\n  const toggleNav = (e) => {\r\n    if (!navOpen) {\r\n      e.target.setAttribute(\"src\", _assets_images_icon_close_svg__WEBPACK_IMPORTED_MODULE_0__);\r\n      navOpen = true;\r\n\r\n      navbarContent.classList.add(\"nav-bar__content--display\");\r\n    } else {\r\n      e.target.setAttribute(\"src\", _assets_images_icon_hamburger_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n      navOpen = false;\r\n\r\n      navbarContent.classList.remove(\"nav-bar__content--display\");\r\n    }\r\n  };\r\n\r\n  const toggleNavItems = (e) => {\r\n    const navOption = e.currentTarget;\r\n\r\n    const navArrowImage = navOption.querySelector(\".nav-arrow__img\");\r\n    navArrowImage.classList.toggle(\"nav-arrow__img--display\");\r\n\r\n    const navOptionlist = navOption.querySelector(\r\n      \".nav-bar__nav__list__option__items\"\r\n    );\r\n    navOptionlist.classList.toggle(\r\n      \"nav-bar__nav__list__option__items--display\"\r\n    );\r\n  };\r\n\r\n  //   set event listeners\r\n  navMenuButton.addEventListener(\"click\", toggleNav);\r\n  navbarOptions.forEach((option) =>\r\n    option.addEventListener(\"click\", toggleNavItems)\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://blogr-landing-page/./src/navbar-toggle.js?");

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