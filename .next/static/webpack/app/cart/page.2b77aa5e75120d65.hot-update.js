"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/app/custom-hooks/useDelete.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-hooks/useDelete.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n/* harmony import */ var _useNotifty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNotifty */ \"(app-pages-browser)/./src/app/custom-hooks/useNotifty.ts\");\n\n\n\nconst useDelete = ()=>{\n    const disptach = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { checkStatus } = (0,_useNotifty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const handleDelete = async (fn, id)=>{\n        const response = await disptach(fn(id));\n        if (response.type.includes(\"fulfilled\")) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__[\"default\"].success(response.payload.data.message, {\n                position: \"top-right\"\n            });\n            return;\n        }\n        return;\n    };\n    return handleDelete;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDelete);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZURlbGV0ZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQW9DO0FBQ1k7QUFDWDtBQUVyQyxNQUFNRyxZQUFZO0lBQ2hCLE1BQU1DLFdBQVdILDREQUFjQTtJQUMvQixNQUFNLEVBQUVJLFdBQVcsRUFBRSxHQUFHSCx1REFBU0E7SUFFakMsTUFBTUksZUFBZSxPQUFPQyxJQUFTQztRQUNuQyxNQUFNQyxXQUFnQixNQUFNTCxTQUFTRyxHQUFHQztRQUN4QyxJQUFJQyxTQUFTQyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxjQUFjO1lBQ3ZDWCx1REFBS0EsQ0FBQ1ksT0FBTyxDQUFDSCxTQUFTSSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFQyxVQUFVO1lBQVk7WUFDckU7UUFDRjtRQUNBO0lBQ0Y7SUFDQSxPQUFPVjtBQUNUO0FBRUEsK0RBQWVILFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jdXN0b20taG9va3MvdXNlRGVsZXRlLnRzP2QwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgdXNlTm90aWZ5IGZyb20gXCIuL3VzZU5vdGlmdHlcIjtcblxuY29uc3QgdXNlRGVsZXRlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwdGFjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHsgY2hlY2tTdGF0dXMgfSA9IHVzZU5vdGlmeSgpO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChmbjogYW55LCBpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IGRpc3B0YWNoKGZuKGlkKSk7XG4gICAgaWYgKHJlc3BvbnNlLnR5cGUuaW5jbHVkZXMoXCJmdWxmaWxsZWRcIikpIHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzcG9uc2UucGF5bG9hZC5kYXRhLm1lc3NhZ2UsIHsgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcbiAgcmV0dXJuIGhhbmRsZURlbGV0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlbGV0ZTtcbiJdLCJuYW1lcyI6WyJ0b2FzdCIsInVzZUFwcERpc3BhdGNoIiwidXNlTm90aWZ5IiwidXNlRGVsZXRlIiwiZGlzcHRhY2giLCJjaGVja1N0YXR1cyIsImhhbmRsZURlbGV0ZSIsImZuIiwiaWQiLCJyZXNwb25zZSIsInR5cGUiLCJpbmNsdWRlcyIsInN1Y2Nlc3MiLCJwYXlsb2FkIiwiZGF0YSIsIm1lc3NhZ2UiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useDelete.ts\n"));

/***/ })

});