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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Montserrat:wght@600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Import Google Fonts */\n\n/* Reset and base styles */\nbody, h1, h2, h3, h4, h5, h6, p, div, input, button {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n/* General body styles */\nbody {\n  display: flex;\n  height: 100vh;\n  background-color: #f5f7fa;\n  color: #333;\n  font-size: 16px;\n  line-height: 1.6;\n  overflow: hidden;\n}\n\n/* Sidebar styles */\n.sidebar {\n  width: 300px;\n  background-color: #1e272e;\n  color: #f5f7fa;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  transition: width 0.3s;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n\n.sidebar:hover {\n  width: 320px;\n}\n\n.sidebar h1 {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n\n.add-project, .add-task {\n  background-color: #1abc9c;\n  color: white;\n  border: none;\n  padding: 12px;\n  margin: 12px 0;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 6px;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\n.add-project:hover, .add-task:hover {\n  background-color: #16a085;\n  transform: scale(1.05);\n}\n\n.projects-container {\n  flex: 1;\n  margin-top: 20px;\n}\n\n.project-button {\n  background-color: #34495e;\n  color: white;\n  border: none;\n  padding: 12px;\n  margin: 6px 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  border-radius: 6px;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\n.project-button:hover {\n  background-color: #2c3e50;\n  transform: scale(1.05);\n}\n\n/* Main content styles */\n.content {\n  flex: 1;\n  padding: 40px;\n  overflow-y: auto;\n  background-color: #ecf0f1;\n  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);\n}\n\n.tasks-header {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #2c3e50;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n/* Task styles */\n.task-container {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: box-shadow 0.3s;\n}\n\n.task-container:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n\n.task-title, .task-description, .task-deadline {\n  font-size: 18px;\n  color: #2c3e50;\n}\n\n.task-delete {\n  background-color: #e74c3c;\n  color: white;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: background-color 0.3s, transform 0.3s;\n  align-self: flex-end;\n}\n\n.task-delete:hover {\n  background-color: #c0392b;\n  transform: scale(1.1);\n}\n\n/* Modal styles */\ndialog {\n  width: 100%;\n  max-width: 500px;\n  background-color: white;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  transition: transform 0.3s;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\nlabel, input[type=\"text\"], input[type=\"date\"] {\n  display: block;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\ninput[type=\"text\"], input[type=\"date\"] {\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  transition: border-color 0.3s;\n}\n\ninput[type=\"text\"]:focus, input[type=\"date\"]:focus {\n  border-color: #1abc9c;\n}\n\ninput[type=\"submit\"] {\n  background-color: #1abc9c;\n  color: white;\n  border: none;\n  padding: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 6px;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #16a085;\n  transform: scale(1.05);\n}\n\nbutton.close-modal1, button.close-modal2 {\n  background: none;\n  border: none;\n  font-size: 20px;\n  float: right;\n  cursor: pointer;\n  color: #333;\n}\n\nbutton.close-modal1:hover, button.close-modal2:hover {\n  color: #e74c3c;\n}\n\n/* Accessibility improvements */\nbutton:focus, input:focus {\n  outline: 2px solid #1abc9c;\n  outline-offset: 2px;\n}\n\n/* Smooth scroll */\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* Transitions for elements */\n.sidebar, .add-project, .add-task, .project-button, .task-container, .task-delete, input[type=\"text\"], input[type=\"date\"], input[type=\"submit\"] {\n  transition: all 0.3s ease;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _misc_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc-functions */ \"./src/misc-functions.js\");\n\n\n\n\nlet addProjectButton = document.querySelector(\".add-project\");\nlet projects = (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.checkIfProjectsExist)();\n(0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(projects);\n\nlet projectModal = document.querySelector(\".project-modal\");\nlet projectNameInput = document.querySelector(\"#project-name\");\nlet taskModal = document.querySelector(\".task-modal\");\n\naddProjectButton.addEventListener(\"click\", function() {\n  projectModal.showModal(); \n})\n\ndocument.querySelector(\".close-modal1\").addEventListener(\"click\", function() { \n  projectModal.close(); \n  projectNameInput.value = \"\"; \n});\n\ndocument.querySelector(\"#submit-button1\").addEventListener(\"click\", function() {\n  let newProject = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectNameInput.value);\n  projects = (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.addProjectToArray)(newProject, projects);\n  \n  let projectStorage = JSON.stringify(projects);\n  localStorage.setItem('projects', projectStorage);\n\n  projectModal.close();\n  projectNameInput.value = \"\";\n  (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(projects);\n})\n\nlet addTaskButton = document.querySelector(\".add-task\");\n\naddTaskButton.addEventListener(\"click\", function() {\n  if (!_misc_functions__WEBPACK_IMPORTED_MODULE_2__.currentProjectObject) {\n    alert(\"Please select a project first.\");\n    return;\n  }  \n  \n  taskModal.showModal();\n})\n\ndocument.querySelector(\".close-modal2\").addEventListener(\"click\", function() {\n  ;(0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.clearTaskForm)();\n  taskModal.close();\n})\n\ndocument.querySelector(\"#submit-button2\").addEventListener(\"click\", function() {\n  let newTask = (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.getTaskInfo)();\n  projects = (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)(newTask, projects);\n\n  let projectStorage = JSON.stringify(projects);\n  localStorage.setItem('projects', projectStorage);\n\n  (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_misc_functions__WEBPACK_IMPORTED_MODULE_2__.currentProjectObject, projects);\n  (0,_misc_functions__WEBPACK_IMPORTED_MODULE_2__.clearTaskForm)();\n  taskModal.close();\n})\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/misc-functions.js":
/*!*******************************!*\
  !*** ./src/misc-functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToArray: () => (/* binding */ addProjectToArray),\n/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),\n/* harmony export */   checkIfProjectsExist: () => (/* binding */ checkIfProjectsExist),\n/* harmony export */   clearTaskForm: () => (/* binding */ clearTaskForm),\n/* harmony export */   currentProjectObject: () => (/* binding */ currentProjectObject),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   getTaskInfo: () => (/* binding */ getTaskInfo)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\nfunction addProjectToArray(project, projectArray) {\n  projectArray.push(project);\n  return projectArray;\n}\n\nfunction addTaskToProject(newTask, projectArray) {\n  for (let project of projectArray) {\n    if (project.name === newTask.projectName) {\n      project.tasks.push(newTask);\n      return projectArray;\n    }\n  }\n}\n\nlet currentProject;\nlet currentProjectObject;\n\nfunction displayProjects(projects) {\n  let projectsContainer = document.querySelector(\".projects-container\");\n  projectsContainer.innerHTML = \"\";\n\n  for (let project of projects) {\n    let projectButton = document.createElement(\"button\");\n    projectButton.textContent = project.name;\n    projectButton.className = \"project-button\";\n\n    projectButton.addEventListener(\"click\", function() {\n      currentProject = project.name;\n      currentProjectObject = project;\n      displayTasks(project);\n    })\n\n    projectsContainer.appendChild(projectButton);\n  }\n}\n\nfunction displayTasks(project, projectArray) {\n  let tasksContainer = document.querySelector(\".tasks-container\");\n  tasksContainer.innerHTML = \"\";\n\n  for (let task of project.tasks) {\n    let taskContainer = document.createElement(\"div\");\n    taskContainer.className = \"task-container\";\n\n    let taskTitle = document.createElement(\"div\");\n    taskTitle.className = \"task-title\";\n    taskTitle.textContent = `${task.title}`;\n\n    let taskDescription = document.createElement(\"div\");\n    taskDescription.className = \"task-description\";\n    taskDescription.textContent = `${task.description}`;\n\n    let taskDeadline = document.createElement(\"div\");\n    taskDeadline.className = \"task-deadline\";\n    taskDeadline.textContent = `${task.dueDate};`\n\n    let taskChecklist = document.createElement(\"input\");\n    taskChecklist.id = \"task-checklist\";\n    taskChecklist.type = \"checkbox\";\n\n    let taskDelete = document.createElement(\"button\");\n    taskDelete.className = \"task-delete\";\n    taskDelete.textContent = \"Delete\";\n\n\n    taskDelete.addEventListener(\"click\", function() {\n      project.tasks.splice(project.tasks.indexOf(task, 1));\n      displayTasks(project);\n\n      let projectStorage = JSON.stringify(projectArray);\n      localStorage.setItem('projects', projectStorage);\n\n      if (!(localStorage.getItem('projects'))) {\n        localStorage.removeItem('projects');\n      }\n    })\n\n    taskContainer.append(taskTitle, taskDescription, taskDeadline, taskChecklist, taskDelete);\n\n    tasksContainer.appendChild(taskContainer);\n  }\n}\n\nfunction getTaskInfo() {\n  let title = document.querySelector(\"#task-title\").value;\n  let description = document.querySelector(\"#task-description\").value;\n  let deadline = document.querySelector(\"#task-deadline\").value;\n  let notes = document.querySelector(\"#task-notes\").value;\n  let projectName = currentProject;\n  return (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createTask)(title, description, deadline, notes, projectName);\n}\n\nfunction clearTaskForm() {\n  document.querySelector(\"#task-title\").value = \"\";\n  document.querySelector(\"#task-description\").value = \"\";\n  document.querySelector(\"#task-deadline\").value = \"\";\n  document.querySelector(\"#task-notes\").value = \"\";\n}\n\nfunction checkIfProjectsExist() {\n  if (localStorage.getItem('projects')) {\n    return JSON.parse(localStorage.getItem('projects'));\n  } else {\n    return [];\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/misc-functions.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\nlet createProject = function(name) {\n  let project = {};\n  project.name = name;\n  project.tasks = [];\n  return project;\n}\n\nlet createTask = function(title, description, dueDate, notes, projectName) {\n  let task = {};\n  task.title = title;\n  task.description = description;\n  task.dueDate = dueDate;\n  task.notes = notes;\n  task.projectName = projectName;\n  return task;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/objects.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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