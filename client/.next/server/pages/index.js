module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\n\nvar _jsxFileName = \"/home/tiago.almeida/Documents/www/Github/won/client/src/components/Main/index.tsx\";\n\n\nconst Main = ({\n  title = 'Boilerplate Project',\n  description = 'TypeScript, ReactJS, NextJS and Styled Components'\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Logo\"], {\n    src: \"/img/webpack-512.png\",\n    alt: \"Imagem da logo do webpack.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    children: title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Description\"], {\n    children: description\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Illustration\"], {\n    src: \"/img/hero-illustration.svg\",\n    alt: \"Um desenvolvedor de frente para uma tela com c\\xF3digo.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 7,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbIk1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUNaQyxPQUFLLEdBQUcscUJBREk7QUFFWkMsYUFBVyxHQUFHO0FBRkYsQ0FBRCxrQkFJWCxxRUFBQywrQ0FBRDtBQUFBLDBCQUNFLHFFQUFDLDRDQUFEO0FBQVEsT0FBRyxFQUFDLHNCQUFaO0FBQW1DLE9BQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyw2Q0FBRDtBQUFBLGNBQVVEO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsbURBQUQ7QUFBQSxjQUFnQkM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUscUVBQUMsb0RBQUQ7QUFDRSxPQUFHLEVBQUMsNEJBRE47QUFFRSxPQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7O0FBZWVGLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBNYWluID0gKHtcbiAgdGl0bGUgPSAnQm9pbGVycGxhdGUgUHJvamVjdCcsXG4gIGRlc2NyaXB0aW9uID0gJ1R5cGVTY3JpcHQsIFJlYWN0SlMsIE5leHRKUyBhbmQgU3R5bGVkIENvbXBvbmVudHMnXG59KSA9PiAoXG4gIDxTLldyYXBwZXI+XG4gICAgPFMuTG9nbyBzcmM9XCIvaW1nL3dlYnBhY2stNTEyLnBuZ1wiIGFsdD1cIkltYWdlbSBkYSBsb2dvIGRvIHdlYnBhY2suXCIgLz5cbiAgICA8Uy5UaXRsZT57dGl0bGV9PC9TLlRpdGxlPlxuICAgIDxTLkRlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb24+XG4gICAgPFMuSWxsdXN0cmF0aW9uXG4gICAgICBzcmM9XCIvaW1nL2hlcm8taWxsdXN0cmF0aW9uLnN2Z1wiXG4gICAgICBhbHQ9XCJVbSBkZXNlbnZvbHZlZG9yIGRlIGZyZW50ZSBwYXJhIHVtYSB0ZWxhIGNvbSBjw7NkaWdvLlwiXG4gICAgLz5cbiAgPC9TLldyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Wrapper, Logo, Title, Description, Illustration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Illustration\", function() { return Illustration; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({\n  displayName: \"styles__Wrapper\",\n  componentId: \"sc-1cs6c8-0\"\n})([\"background-color:#06092b;color:#fff;width:100%;height:100%;padding:3rem;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;\"]);\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"styles__Logo\",\n  componentId: \"sc-1cs6c8-1\"\n})([\"width:25rem;margin-bottom:2rem;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-1cs6c8-2\"\n})([\"font-size:2.5rem;\"]);\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-1cs6c8-3\"\n})([\"font-size:2rem;font-weight:400;\"]);\nconst Illustration = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"styles__Illustration\",\n  componentId: \"sc-1cs6c8-4\"\n})([\"margin-top:3rem;width:min(30rem,100%);\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlcy50cz82MzA0Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJtYWluIiwiTG9nbyIsImltZyIsIlRpdGxlIiwiaDEiLCJEZXNjcmlwdGlvbiIsImgyIiwiSWxsdXN0cmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsK0tBQWI7QUFjQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQVY7QUFLQSxNQUFNQyxLQUFLLEdBQUdKLHdEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEseUJBQVg7QUFJQSxNQUFNQyxXQUFXLEdBQUdOLHdEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQWpCO0FBS0EsTUFBTUMsWUFBWSxHQUFHUix3REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFsQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4vc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubWFpbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDkyYjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuYFxuXG5leHBvcnQgY29uc3QgSWxsdXN0cmF0aW9uID0gc3R5bGVkLmltZ2BcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgd2lkdGg6IG1pbigzMHJlbSwgMTAwJSk7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/styles.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Main */ \"./src/components/Main/index.tsx\");\n\nvar _jsxFileName = \"/home/tiago.almeida/Documents/www/Github/won/client/src/pages/index.tsx\";\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFBTyxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbiBmcm9tICdjb21wb25lbnRzL01haW4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiA8TWFpbiAvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });