"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./src/app/auth/page.tsx":
/*!*******************************!*\
  !*** ./src/app/auth/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ \"(app-pages-browser)/./src/app/auth/Login.tsx\");\n/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup */ \"(app-pages-browser)/./src/app/auth/Signup.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthPage() {\n    _s();\n    const { authMode } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.auth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center h-[100vh] w-[100vw] bg-primary\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex  justify-center rounded-lg shadow-xl p-[50px] border w-[70vw] mx-auto bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-start w-[50%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/images/auth.jpg\",\n                        width: 400,\n                        height: 400,\n                        alt: \"image\",\n                        className: \"p-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[50%]\",\n                    children: authMode === \"login\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 35\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 47\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/auth/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthPage, \"1xy8laQI83Uh1SMo3lVjy5eih1c=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = AuthPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);\nvar _c;\n$RefreshReg$(_c, \"AuthPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQjtBQUNLO0FBQ0g7QUFDRTtBQUNrQjtBQUVoRCxTQUFTSzs7SUFDUCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRiw0REFBY0EsQ0FBQyxDQUFDRyxRQUFVQSxNQUFNQyxJQUFJO0lBRXpELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNULG1EQUFLQTt3QkFDSlUsS0FBSzt3QkFDTEMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSkosV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaSixhQUFhLHdCQUFVLDhEQUFDSiw4Q0FBS0E7Ozs7NkNBQU0sOERBQUNDLCtDQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JEO0dBckJTRTs7UUFDY0Qsd0RBQWNBOzs7S0FENUJDO0FBdUJULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9wYWdlLnRzeD9lYzJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4vU2lnbnVwXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi9yZWR1eC9ob29rc1wiO1xuXG5mdW5jdGlvbiBBdXRoUGFnZSgpIHtcbiAgY29uc3QgeyBhdXRoTW9kZSB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKSBhcyBzdHJpbmc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtWzEwMHZoXSB3LVsxMDB2d10gYmctcHJpbWFyeVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIHNoYWRvdy14bCBwLVs1MHB4XSBib3JkZXIgdy1bNzB2d10gbXgtYXV0byBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdy1bNTAlXVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvYXV0aC5qcGdcIn1cbiAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAlXVwiPlxuICAgICAgICAgIHthdXRoTW9kZSA9PT0gXCJsb2dpblwiID8gPExvZ2luIC8+IDogPFNpZ251cCAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkxvZ2luIiwiU2lnbnVwIiwidXNlQXBwU2VsZWN0b3IiLCJBdXRoUGFnZSIsImF1dGhNb2RlIiwic3RhdGUiLCJhdXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/page.tsx\n"));

/***/ })

});