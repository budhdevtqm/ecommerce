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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n\n\nconst useDelete = ()=>{\n    const disptach = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const handleDelete = async (fn, id)=>{\n        const response = await disptach(fn(id));\n        if (response.type.includes(\"fulfilled\")) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__[\"default\"].success(response.payload.data.message, {\n                position: \"top-right\"\n            });\n            return;\n        }\n        return;\n    };\n    return handleDelete;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDelete);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZURlbGV0ZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBb0M7QUFDWTtBQUdoRCxNQUFNRSxZQUFZO0lBQ2hCLE1BQU1DLFdBQVdGLDREQUFjQTtJQUUvQixNQUFNRyxlQUFlLE9BQU9DLElBQVNDO1FBQ25DLE1BQU1DLFdBQWdCLE1BQU1KLFNBQVNFLEdBQUdDO1FBQ3hDLElBQUlDLFNBQVNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDLGNBQWM7WUFDdkNULHVEQUFLQSxDQUFDVSxPQUFPLENBQUNILFNBQVNJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7Z0JBQUVDLFVBQVU7WUFBWTtZQUNyRTtRQUNGO1FBQ0E7SUFDRjtJQUNBLE9BQU9WO0FBQ1Q7QUFFQSwrREFBZUYsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2N1c3RvbS1ob29rcy91c2VEZWxldGUudHM/ZDBkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vcmVkdXgvaG9va3NcIjtcbmltcG9ydCB1c2VOb3RpZnkgZnJvbSBcIi4vdXNlTm90aWZ0eVwiO1xuXG5jb25zdCB1c2VEZWxldGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3B0YWNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZm46IGFueSwgaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCBkaXNwdGFjaChmbihpZCkpO1xuICAgIGlmIChyZXNwb25zZS50eXBlLmluY2x1ZGVzKFwiZnVsZmlsbGVkXCIpKSB7XG4gICAgICB0b2FzdC5zdWNjZXNzKHJlc3BvbnNlLnBheWxvYWQuZGF0YS5tZXNzYWdlLCB7IHBvc2l0aW9uOiBcInRvcC1yaWdodFwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG4gIHJldHVybiBoYW5kbGVEZWxldGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWxldGU7XG4iXSwibmFtZXMiOlsidG9hc3QiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZURlbGV0ZSIsImRpc3B0YWNoIiwiaGFuZGxlRGVsZXRlIiwiZm4iLCJpZCIsInJlc3BvbnNlIiwidHlwZSIsImluY2x1ZGVzIiwic3VjY2VzcyIsInBheWxvYWQiLCJkYXRhIiwibWVzc2FnZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useDelete.ts\n"));

/***/ })

});