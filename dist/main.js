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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    padding:0;\\n    margin:0;\\n    font-family: 'Roboto', sans-serif;\\n}\\n\\nh1{\\n    color: red;\\n}\\n\\n#content{\\n    display: flex;\\n    height: 100vh;\\n    justify-content: flex-start;\\n    align-items: stretch;\\n}\\n\\n.mainWindow{\\n    background-color: #fafbfe;\\n    flex:auto;\\n    padding: 1em;\\n}\\n\\ntable{\\n    width:50%;\\n    margin: auto;\\n}\\n\\nth, td {\\n    border-bottom: 1px solid #ddd;\\n  }\\n\\n  th, td {\\n    padding: 1em;\\n    text-align: left;\\n  }\\n\\n.sideBar{\\n    background-color: #313a45;\\n    min-width: 200px;\\n    max-width: 15%;\\n    color: #768393;\\n    padding-left: 1em;\\n    padding-right: 1em;\\n}\\n\\n.sideBarLogo{\\n    font-size: 1.5em;\\n    font-family: 'Montserrat', sans-serif;\\n    text-align: center;\\n    margin: 0.75em;\\n    color:#a2f493;\\n}\\n.sideBarTopLevelHeader{\\n    font-size: 0.8em;\\n    font-weight: 700;\\n    cursor: pointer;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.sideBarListElement{\\n    font-size: 0.7em;\\n    font-weight: 500;\\n    cursor: pointer;\\n}\\n\\n.sideBarPlusButton, .todoEditButton{\\n    color:white;\\n    background-color: #48ac4d;\\n    border: none;\\n    font-size: 1.2em;\\n    border-radius: 0.25em;\\n    cursor: pointer;\\n}\\n\\n.todoEditButton{\\n    font-size: 1em;\\n}\\n/* ModalStuff */\\n\\n.modalBackground{\\n    display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgb(0,0,0); /* Fallback color */\\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n}\\n\\n.modal{\\n    background-color: #fefefe;\\n    margin: 15% 25%;\\n    padding: 20px;\\n    border: 1px solid #888;\\n    border-radius: 0.8em;\\n    width: 60%;\\n    max-width:900px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toptodo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://toptodo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://toptodo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://toptodo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://toptodo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sideBarComponentConstructor\": () => (/* binding */ sideBarComponentConstructor),\n/* harmony export */   \"mainWindowConstructor\": () => (/* binding */ mainWindowConstructor),\n/* harmony export */   \"todoListConstructor\": () => (/* binding */ todoListConstructor),\n/* harmony export */   \"editTodoModal\": () => (/* binding */ editTodoModal)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/*jshint esversion: 6 */\n\nfunction sideBarComponentConstructor(projectDataBase){\n    function sideBarLogo(){\n        const logo = document.createElement(\"div\");\n        logo.textContent = \"topToDo\";\n        logo.classList.add(\"sideBarLogo\");\n        return logo;\n    }\n\n    function sideBarTopLevelHeader(text,plusButton){\n        const header = document.createElement(\"div\");\n        const headerText = document.createElement(\"p\");\n        const headerPlusButton = document.createElement(\"button\");\n        \n        headerText.textContent = text;\n        header.classList.add(\"sideBarTopLevelHeader\");\n\n        header.appendChild(headerText);\n\n        headerPlusButton.classList.add(\"sideBarPlusButton\");\n        headerPlusButton.textContent = \"+\";\n\n        if(plusButton){\n            header.appendChild(headerPlusButton);\n        }\n\n        return header;\n    }\n    \n    function projectSideBarElementConstructor(project){\n        const projectSideBarElement = document.createElement(\"p\");\n        projectSideBarElement.textContent = project.name + \" \" + project.projectID;\n        projectSideBarElement.classList.add(\"sideBarListElement\");\n        \n        projectSideBarElement.onclick = function(){\n            mainWindowProjectTodoList(project);\n        };\n\n        return projectSideBarElement;\n        \n    }\n\n\n    const sideBarElement = document.createElement(\"div\");\n    sideBarElement.classList.add(\"sideBar\");\n    sideBarElement.appendChild(sideBarLogo());\n    sideBarElement.appendChild(sideBarTopLevelHeader(\"PROJECTS\",true));\n    \n    projectDataBase.projectArray.forEach(project =>{\n        sideBarElement.appendChild(projectSideBarElementConstructor(project));\n    });\n\n\n    return sideBarElement;\n}\n\n\n\n\nfunction mainWindowConstructor(){\n    const mainWindow = document.createElement('div');\n    mainWindow.classList.add(\"mainWindow\");\n    return mainWindow;\n}\n\nfunction todoListConstructor(){\n\n}\n\nfunction mainWindowProjectTodoList(project){\n    const mainWindow = document.querySelector(\".mainWindow\");\n    mainWindow.innerHTML = \"\";\n\n    const title = document.createElement(\"h2\");\n\n    title.textContent=project.name;\n\n    mainWindow.appendChild(title);\n\n    const todoTable = document.createElement(\"table\");\n\n    const tableHeaderRow = document.createElement(\"tr\");\n\n    const tableHeaderTodoName = document.createElement(\"th\");\n    tableHeaderTodoName.textContent = \"Todo Name\";\n\n    const tableHeaderTodoDate = document.createElement(\"th\");\n    tableHeaderTodoDate.textContent = \"Due Date\";\n\n    const tableHeaderTodoCompleted = document.createElement(\"th\");\n    tableHeaderTodoCompleted.textContent = \"Completed\";\n\n\n\n    tableHeaderRow.appendChild(tableHeaderTodoName);\n    tableHeaderRow.appendChild(tableHeaderTodoDate);\n    tableHeaderRow.appendChild(tableHeaderTodoCompleted);\n    tableHeaderRow.appendChild(document.createElement(\"th\"));\n    todoTable.appendChild(tableHeaderRow);\n\n    const projectTodos = project.projectTodos();\n\n    projectTodos.forEach(todo =>{\n        todoTable.appendChild(todoTableRow(todo));\n    });\n\n    mainWindow.appendChild(todoTable);\n}\n\nfunction todoTableRow(todo){\n    const tableRow = document.createElement(\"tr\");\n\n    const nameCell = document.createElement(\"td\");\n    nameCell.textContent = todo.name;\n    tableRow.appendChild(nameCell);\n\n    const dateCell = document.createElement(\"td\");\n    dateCell.textContent = todo.date;\n    tableRow.appendChild(dateCell);\n\n    const completedCell = document.createElement(\"td\");\n    completedCell.textContent = todo.completed;\n    tableRow.appendChild(completedCell);\n\n    const editButtonCell = document.createElement(\"td\");\n    editButtonCell.appendChild(editTodoButton(todo));\n    tableRow.appendChild(editButtonCell);\n    \n    return tableRow;\n}\n\nfunction editTodoButton(todo){\n    function showEditTodoButtonModal(todo){\n        const modalBackground = document.getElementById(\"todoModalBackground\");\n        modalBackground.style.display = \"block\";\n    }\n\n    const editButton = document.createElement(\"button\");\n    editButton.textContent = \"Edit\";\n    editButton.classList.add(\"todoEditButton\");\n    editButton.onclick = function(todo){\n        showEditTodoButtonModal(todo);\n    };\n\n    return editButton;\n\n}\n\nfunction editTodoModal(){\n    const modalBackground = document.createElement(\"div\");\n    const modal = document.createElement(\"div\");\n\n\n    modal.classList.add(\"modal\");\n    modalBackground.classList.add(\"modalBackground\");\n    modalBackground.setAttribute(\"id\",\"todoModalBackground\");\n\n\n\n\n\n    modalBackground.appendChild(modal);\n\n    return modalBackground;\n}\n\n\n//# sourceURL=webpack://toptodo/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n/*jshint esversion: 6 */\n\n\n\n\n\nconst todoDataBase = (function(){\n    let todoIDCounter = 0;\n    \n    const todoFactory = function(todoName,todoDate,todoDesc){\n        let name = todoName;\n        let date = todoDate;\n        \n        let desc = todoDesc;\n        let completed = false;\n        let todoID = todoIDCounter;\n        let projectID = 0;\n        \n        todoIDCounter ++;\n       \n        return{\n            name: name,\n            date: date,\n            desc: desc,\n            completed: completed,\n            todoID: todoID,\n            projectID: projectID,\n            \n        };\n       };\n       \n    \n    \n    const todoArray = [];\n\n    const addTodo = function(todoName,todoDate,todoDesc){\n        const todo = todoFactory(todoName,todoDate,todoDesc);\n        todoArray.push(todo);\n    };\n\n    const projectIDFilter = function(projectID){\n        const filteredTodoArray = todoArray.filter(todo => todo.projectID == projectID);\n        return filteredTodoArray;\n    };\n\n    const assignProjectID = function(projectIDToAssign,todoID){\n    \n        if(projectDataBase.projectArray.some(project => project.projectID == projectIDToAssign)){\n            const todoToEdit = todoArray.filter(todo => todo.todoID == todoID)[0];\n            todoToEdit.projectID = projectIDToAssign;\n        }\n        else{\n            console.log(\"ProjectID not found\");\n        }\n    };\n\n    return{\n        addTodo: addTodo,\n        todoArray:todoArray,\n        projectIDFilter: projectIDFilter,\n        assignProjectID: assignProjectID        \n    };\n\n})();\n\nconst projectDataBase = (function(){\n    let projectIDcounter = 0;\n    \n    function sortProjectArray(){\n        projectArray = projectArray.sort((a,b) =>{\n            return a.projectID - b.projectID;\n        });\n    }\n\n    const projectFactory = function(projectName){\n        \n        let name = projectName;\n        let projectID = projectIDcounter;\n\n        projectIDcounter ++;\n\n\n        const projectTodos = function(){\n        return todoDataBase.projectIDFilter(projectID);\n        };\n\n        return{\n            name: name,\n            projectID: projectID,\n            projectTodos: projectTodos\n        };\n    };\n    \n    let projectArray = [];\n\n    const addProject = function(projectName){\n        const project = projectFactory(projectName);\n        projectArray.push(project);\n        sortProjectArray();\n    };\n\n    addProject(\"Tasks not in a project\");\n    // projectArray[0].projectID = 99;\n    // projectIDcounter = 0;\n\n\n   return{\n       addProject: addProject,\n       projectArray: projectArray\n   } ;\n})();\n\nconst screenController = (function(){\n    const contentDiv = document.getElementById(\"content\");\n    \n    \n\n    const buildPage = function(){\n        \n        contentDiv.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_1__.sideBarComponentConstructor)(projectDataBase));\n        contentDiv.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_1__.mainWindowConstructor)());\n        contentDiv.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_1__.editTodoModal)());\n    };\n\n    return {\n        buildPage: buildPage\n    };\n\n})();\n\nprojectDataBase.addProject(\"Projekt1\");\nprojectDataBase.addProject(\"Projekt2\");\n\nscreenController.buildPage();\n\n\n\n\ntodoDataBase.addTodo(\"namn0\",\"datum0\",\"beskrivning0\");\ntodoDataBase.addTodo(\"namn1\",\"datum1\",\"beskrivning1\");\ntodoDataBase.addTodo(\"namn2\",\"datum2\",\"beskrivning2\");\ntodoDataBase.addTodo(\"namn3\",\"datum3\",\"beskrivning3\");\ntodoDataBase.addTodo(\"namn4\",\"datum4\",\"beskrivning4\");\ntodoDataBase.addTodo(\"namn5\",\"datum5\",\"beskrivning5\");\ntodoDataBase.addTodo(\"namn6\",\"datum6\",\"beskrivning6\");\ntodoDataBase.addTodo(\"namn7\",\"datum8\",\"beskrivning9\");\n\n\ntodoDataBase.assignProjectID(1,5);\ntodoDataBase.assignProjectID(1,2);\ntodoDataBase.assignProjectID(2,4);\ntodoDataBase.assignProjectID(2,4);\n\nconsole.table(todoDataBase.todoArray);\n\nconsole.table(projectDataBase.projectArray);\n\n\n//# sourceURL=webpack://toptodo/./src/index.js?");

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