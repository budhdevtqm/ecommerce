"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/page",{

/***/ "(app-pages-browser)/./src/app/custom-hooks/useDelete.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-hooks/useDelete.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n/* harmony import */ var _useNotifty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useNotifty */ \"(app-pages-browser)/./src/app/custom-hooks/useNotifty.ts\");\n\n\nconst useDelete = ()=>{\n    const disptach = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_0__.useAppDispatch)();\n    const { checkStatus } = (0,_useNotifty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const handleDelete = async (fn, id)=>{\n        const response = await disptach(fn(id));\n        checkStatus(response, path, prefix, \"added\");\n    };\n    return handleDelete;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDelete);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZURlbGV0ZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBZ0Q7QUFDWDtBQUVyQyxNQUFNRSxZQUFZO0lBQ2hCLE1BQU1DLFdBQVdILDREQUFjQTtJQUMvQixNQUFNLEVBQUVJLFdBQVcsRUFBRSxHQUFHSCx1REFBU0E7SUFFakMsTUFBTUksZUFBZSxPQUFPQyxJQUFTQztRQUNuQyxNQUFNQyxXQUFXLE1BQU1MLFNBQVNHLEdBQUdDO1FBQ25DSCxZQUFZSSxVQUFVQyxNQUFNQyxRQUFRO0lBQ3RDO0lBQ0EsT0FBT0w7QUFDVDtBQUVBLCtEQUFlSCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZURlbGV0ZS50cz9kMGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgdXNlTm90aWZ5IGZyb20gXCIuL3VzZU5vdGlmdHlcIjtcblxuY29uc3QgdXNlRGVsZXRlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwdGFjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHsgY2hlY2tTdGF0dXMgfSA9IHVzZU5vdGlmeSgpO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChmbjogYW55LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwdGFjaChmbihpZCkpO1xuICAgIGNoZWNrU3RhdHVzKHJlc3BvbnNlLCBwYXRoLCBwcmVmaXgsIFwiYWRkZWRcIik7XG4gIH07XG4gIHJldHVybiBoYW5kbGVEZWxldGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWxldGU7XG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJ1c2VOb3RpZnkiLCJ1c2VEZWxldGUiLCJkaXNwdGFjaCIsImNoZWNrU3RhdHVzIiwiaGFuZGxlRGVsZXRlIiwiZm4iLCJpZCIsInJlc3BvbnNlIiwicGF0aCIsInByZWZpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useDelete.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/custom-hooks/useNotifty.ts":
/*!********************************************!*\
  !*** ./src/app/custom-hooks/useNotifty.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_utils_common_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-utils/common-fns */ \"(app-pages-browser)/./src/app/common-utils/common-fns.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst useNotify = ()=>{\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const checkStatus = (response, operationType, path, prefix)=>{\n        if (response.type.includes(\"rejected\")) {\n            const stautsResult = (0,_common_utils_common_fns__WEBPACK_IMPORTED_MODULE_2__.verifyStatus)(response.payload.status);\n            if (Object.keys(stautsResult).length > 0) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.error(stautsResult === null || stautsResult === void 0 ? void 0 : stautsResult.message, {\n                    position: \"top-right\"\n                });\n                path && setTimeout(()=>router.push(stautsResult === null || stautsResult === void 0 ? void 0 : stautsResult.path), 1000);\n                return;\n            }\n            if (response.payload.status === 409) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.error(response.payload.message, {\n                    position: \"top-right\"\n                });\n                return;\n            }\n        }\n        if (response.type.includes(\"fulfilled\")) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.success(\"\".concat(prefix, \" \").concat(operationType, \".\"), {\n                position: \"top-right\"\n            });\n            return;\n        }\n    };\n    return {\n        checkStatus\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNotify);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZU5vdGlmdHkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7NkRBQ3dDO0FBQ0k7QUFDYztBQUUxRCxNQUFNRyxZQUFZO0lBQ2hCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxjQUFjLENBQ2xCQyxVQUNBQyxlQUNBQyxNQUNBQztRQUVBLElBQUlILFNBQVNJLElBQUksQ0FBQ0MsUUFBUSxDQUFDLGFBQWE7WUFDdEMsTUFBTUMsZUFBZVYsc0VBQVlBLENBQUNJLFNBQVNPLE9BQU8sQ0FBQ0MsTUFBTTtZQUV6RCxJQUFJQyxPQUFPQyxJQUFJLENBQUNKLGNBQWNLLE1BQU0sR0FBRyxHQUFHO2dCQUN4Q2pCLGtEQUFLQSxDQUFDa0IsS0FBSyxDQUFDTix5QkFBQUEsbUNBQUFBLGFBQWNPLE9BQU8sRUFBRztvQkFBRUMsVUFBVTtnQkFBWTtnQkFDNURaLFFBQVFhLFdBQVcsSUFBTWpCLE9BQU9rQixJQUFJLENBQUNWLHlCQUFBQSxtQ0FBQUEsYUFBY0osSUFBSSxHQUFJO2dCQUMzRDtZQUNGO1lBRUEsSUFBSUYsU0FBU08sT0FBTyxDQUFDQyxNQUFNLEtBQUssS0FBSztnQkFDbkNkLGtEQUFLQSxDQUFDa0IsS0FBSyxDQUFDWixTQUFTTyxPQUFPLENBQUNNLE9BQU8sRUFBRTtvQkFBRUMsVUFBVTtnQkFBWTtnQkFDOUQ7WUFDRjtRQUNGO1FBRUEsSUFBSWQsU0FBU0ksSUFBSSxDQUFDQyxRQUFRLENBQUMsY0FBYztZQUN2Q1gsa0RBQUtBLENBQUN1QixPQUFPLENBQUMsR0FBYWhCLE9BQVZFLFFBQU8sS0FBaUIsT0FBZEYsZUFBYyxNQUFJO2dCQUFFYSxVQUFVO1lBQVk7WUFDckU7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUFFZjtJQUFZO0FBQ3ZCO0FBRUEsK0RBQWVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jdXN0b20taG9va3MvdXNlTm90aWZ0eS50cz8xZjk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGF0dXMgfSBmcm9tIFwiLi4vY29tbW9uLXV0aWxzL2NvbW1vbi1mbnNcIjtcblxuY29uc3QgdXNlTm90aWZ5ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjaGVja1N0YXR1cyA9IChcbiAgICByZXNwb25zZTogYW55LFxuICAgIG9wZXJhdGlvblR5cGU6IHN0cmluZyxcbiAgICBwYXRoPzogc3RyaW5nLFxuICAgIHByZWZpeD86IHN0cmluZ1xuICApID0+IHtcbiAgICBpZiAocmVzcG9uc2UudHlwZS5pbmNsdWRlcyhcInJlamVjdGVkXCIpKSB7XG4gICAgICBjb25zdCBzdGF1dHNSZXN1bHQgPSB2ZXJpZnlTdGF0dXMocmVzcG9uc2UucGF5bG9hZC5zdGF0dXMpO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdXRzUmVzdWx0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKHN0YXV0c1Jlc3VsdD8ubWVzc2FnZSEsIHsgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIgfSk7XG4gICAgICAgIHBhdGggJiYgc2V0VGltZW91dCgoKSA9PiByb3V0ZXIucHVzaChzdGF1dHNSZXN1bHQ/LnBhdGghKSwgMTAwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLnBheWxvYWQuc3RhdHVzID09PSA0MDkpIHtcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UucGF5bG9hZC5tZXNzYWdlLCB7IHBvc2l0aW9uOiBcInRvcC1yaWdodFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnR5cGUuaW5jbHVkZXMoXCJmdWxmaWxsZWRcIikpIHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cHJlZml4fSAke29wZXJhdGlvblR5cGV9LmAsIHsgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGNoZWNrU3RhdHVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VOb3RpZnk7XG4iXSwibmFtZXMiOlsidG9hc3QiLCJ1c2VSb3V0ZXIiLCJ2ZXJpZnlTdGF0dXMiLCJ1c2VOb3RpZnkiLCJyb3V0ZXIiLCJjaGVja1N0YXR1cyIsInJlc3BvbnNlIiwib3BlcmF0aW9uVHlwZSIsInBhdGgiLCJwcmVmaXgiLCJ0eXBlIiwiaW5jbHVkZXMiLCJzdGF1dHNSZXN1bHQiLCJwYXlsb2FkIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImVycm9yIiwibWVzc2FnZSIsInBvc2l0aW9uIiwic2V0VGltZW91dCIsInB1c2giLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useNotifty.ts\n"));

/***/ })

});