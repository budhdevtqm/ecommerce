"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[id]/page",{

/***/ "(app-pages-browser)/./src/app/custom-hooks/useFetch.ts":
/*!******************************************!*\
  !*** ./src/app/custom-hooks/useFetch.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst useFetch = ()=>{\n    const disptach = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_0__.useAppDispatch)();\n    const handleFetch = async (fn)=>{\n        await disptach(fn());\n    };\n    const fetchById = async (fn, id)=>{\n        await disptach(fn(id));\n    };\n    return {\n        handleFetch,\n        fetchById\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetch);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZUZldGNoLnRzIiwibWFwcGluZ3MiOiI7OzZEQUNnRDtBQUVoRCxNQUFNQyxXQUFXO0lBQ2YsTUFBTUMsV0FBV0YsNERBQWNBO0lBRS9CLE1BQU1HLGNBQWMsT0FBT0M7UUFDekIsTUFBTUYsU0FBU0U7SUFDakI7SUFFQSxNQUFNQyxZQUFZLE9BQU9ELElBQVNFO1FBQ2hDLE1BQU1KLFNBQVNFLEdBQUdFO0lBQ3BCO0lBRUEsT0FBTztRQUFFSDtRQUFhRTtJQUFVO0FBQ2xDO0FBRUEsK0RBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jdXN0b20taG9va3MvdXNlRmV0Y2gudHM/MmIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5cbmNvbnN0IHVzZUZldGNoID0gKCkgPT4ge1xuICBjb25zdCBkaXNwdGFjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoZm46IGFueSkgPT4ge1xuICAgIGF3YWl0IGRpc3B0YWNoKGZuKCkpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoQnlJZCA9IGFzeW5jIChmbjogYW55LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZGlzcHRhY2goZm4oaWQpKTtcbiAgfTtcblxuICByZXR1cm4geyBoYW5kbGVGZXRjaCwgZmV0Y2hCeUlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaDtcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUZldGNoIiwiZGlzcHRhY2giLCJoYW5kbGVGZXRjaCIsImZuIiwiZmV0Y2hCeUlkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useFetch.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/products/[id]/page.tsx":
/*!****************************************!*\
  !*** ./src/app/products/[id]/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/ImageSlider */ \"(app-pages-browser)/./src/app/components/ImageSlider.tsx\");\n/* harmony import */ var _app_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/PageHeader */ \"(app-pages-browser)/./src/app/components/PageHeader.tsx\");\n/* harmony import */ var _app_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Wrapper */ \"(app-pages-browser)/./src/app/components/Wrapper.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/custom-hooks/useFetch */ \"(app-pages-browser)/./src/app/custom-hooks/useFetch.ts\");\n/* harmony import */ var _app_redux_productSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/redux/productSlice */ \"(app-pages-browser)/./src/app/redux/productSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ViewProduct = ()=>{\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams)();\n    const { fetchById } = (0,_app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const productId = params.id;\n    const product = {\n        _id: 1,\n        name: \"Watch\",\n        price: \"999\",\n        images: [\n            \"/images/watch.jpeg\",\n            \"/images/watch.jpeg\",\n            \"/images/user.png\"\n        ],\n        quantity: 100,\n        createdAt: new Date().getTime(),\n        updatedAt: new Date().getTime(),\n        category: \"Watches\",\n        storeId: {\n            name: \"DM Store\",\n            id: \"123498203840923840\"\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (productId) {\n            fetchById(_app_redux_productSlice__WEBPACK_IMPORTED_MODULE_7__.getProduct, productId);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: product.name,\n                navigate: \"/products\"\n            }, void 0, false, {\n                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/products/[id]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex bg-white my-8 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        images: product.images\n                    }, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/products/[id]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-l border-gray-200\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/products/[id]/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/products/[id]/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/products/[id]/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ViewProduct, \"mISpMo97FgMKi1kXZs/Lmg2r170=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams,\n        _app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = ViewProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewProduct);\nvar _c;\n$RefreshReg$(_c, \"ViewProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ2M7QUFDRjtBQUNOO0FBQ0g7QUFDTztBQUNHO0FBRXRELE1BQU1RLGNBQXdCOztJQUM1QixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxTQUFTLEVBQUUsR0FBR0osc0VBQVFBO0lBQzlCLE1BQU1LLFlBQVlGLE9BQU9HLEVBQUU7SUFFM0IsTUFBTUMsVUFBVTtRQUNkQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1lBQUM7WUFBc0I7WUFBc0I7U0FBbUI7UUFDeEVDLFVBQVU7UUFDVkMsV0FBVyxJQUFJQyxPQUFPQyxPQUFPO1FBQzdCQyxXQUFXLElBQUlGLE9BQU9DLE9BQU87UUFDN0JFLFVBQVU7UUFDVkMsU0FBUztZQUFFVCxNQUFNO1lBQVlILElBQUk7UUFBcUI7SUFDeEQ7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxXQUFXO1lBQ2JELFVBQVVILCtEQUFVQSxFQUFFSTtRQUN4QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUCwrREFBT0E7OzBCQUNOLDhEQUFDRCxrRUFBVUE7Z0JBQUNzQixPQUFPWixRQUFRRSxJQUFJO2dCQUFFVyxVQUFTOzs7Ozs7MEJBQzFDLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUMxQixtRUFBV0E7d0JBQUNlLFFBQVFKLFFBQVFJLE1BQU07Ozs7OztrQ0FDbkMsOERBQUNVO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FoQ01wQjs7UUFDV0gsc0RBQVNBO1FBQ0ZDLGtFQUFRQTs7O0tBRjFCRTtBQWtDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL1tpZF0vcGFnZS50c3g/NDJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9JbWFnZVNsaWRlclwiO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gXCJAL2FwcC9jdXN0b20taG9va3MvdXNlRmV0Y2hcIjtcbmltcG9ydCB7IGdldFByb2R1Y3QgfSBmcm9tIFwiQC9hcHAvcmVkdXgvcHJvZHVjdFNsaWNlXCI7XG5cbmNvbnN0IFZpZXdQcm9kdWN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCkgYXMgeyBpZDogc3RyaW5nIH07XG4gIGNvbnN0IHsgZmV0Y2hCeUlkIH0gPSB1c2VGZXRjaCgpO1xuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMuaWQ7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBfaWQ6IDEsXG4gICAgbmFtZTogXCJXYXRjaFwiLFxuICAgIHByaWNlOiBcIjk5OVwiLFxuICAgIGltYWdlczogW1wiL2ltYWdlcy93YXRjaC5qcGVnXCIsIFwiL2ltYWdlcy93YXRjaC5qcGVnXCIsIFwiL2ltYWdlcy91c2VyLnBuZ1wiXSxcbiAgICBxdWFudGl0eTogMTAwLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBjYXRlZ29yeTogXCJXYXRjaGVzXCIsXG4gICAgc3RvcmVJZDogeyBuYW1lOiBcIkRNIFN0b3JlXCIsIGlkOiBcIjEyMzQ5ODIwMzg0MDkyMzg0MFwiIH0sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZHVjdElkKSB7XG4gICAgICBmZXRjaEJ5SWQoZ2V0UHJvZHVjdCwgcHJvZHVjdElkKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9e3Byb2R1Y3QubmFtZX0gbmF2aWdhdGU9XCIvcHJvZHVjdHNcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXdoaXRlIG15LTggcm91bmRlZC1sZ1wiPlxuICAgICAgICA8SW1hZ2VTbGlkZXIgaW1hZ2VzPXtwcm9kdWN0LmltYWdlc30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItbCBib3JkZXItZ3JheS0yMDBcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSW1hZ2VTbGlkZXIiLCJQYWdlSGVhZGVyIiwiV3JhcHBlciIsInVzZVBhcmFtcyIsInVzZUZldGNoIiwiZ2V0UHJvZHVjdCIsIlZpZXdQcm9kdWN0IiwicGFyYW1zIiwiZmV0Y2hCeUlkIiwicHJvZHVjdElkIiwiaWQiLCJwcm9kdWN0IiwiX2lkIiwibmFtZSIsInByaWNlIiwiaW1hZ2VzIiwicXVhbnRpdHkiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZ2V0VGltZSIsInVwZGF0ZWRBdCIsImNhdGVnb3J5Iiwic3RvcmVJZCIsInRpdGxlIiwibmF2aWdhdGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux/productSlice.ts":
/*!***************************************!*\
  !*** ./src/app/redux/productSlice.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProduct: function() { return /* binding */ addProduct; },\n/* harmony export */   allCategory: function() { return /* binding */ allCategory; },\n/* harmony export */   getAllProducts: function() { return /* binding */ getAllProducts; },\n/* harmony export */   getProduct: function() { return /* binding */ getProduct; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    loading: false,\n    products: [],\n    categories: []\n};\nconst getAllProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/get-all-products\", async (_, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/product\");\n        return response;\n    } catch (er) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(er)) {\n            var _er_response;\n            return rejectWithValue((_er_response = er.response) === null || _er_response === void 0 ? void 0 : _er_response.data);\n        } else {\n            return rejectWithValue(\"An error occurred\");\n        }\n    }\n});\nconst allCategory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/all-category\", async (_, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/product/category\");\n        return response;\n    } catch (er) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(er)) {\n            var _er_response;\n            return rejectWithValue((_er_response = er.response) === null || _er_response === void 0 ? void 0 : _er_response.data);\n        } else {\n            return rejectWithValue(\"An error occurred\");\n        }\n    }\n});\nconst addProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/create-product\", async (values, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/product\", values, {\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        console.log(\"add-product-response\", response);\n        return response;\n    } catch (er) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(er)) {\n            var _er_response;\n            return rejectWithValue((_er_response = er.response) === null || _er_response === void 0 ? void 0 : _er_response.data);\n        } else {\n            return rejectWithValue(\"An error occurred\");\n        }\n    }\n});\nconst getProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/get-product\", async (id, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/product/\".concat(id));\n        return response;\n    } catch (er) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(er)) {\n            var _er_response;\n            return rejectWithValue((_er_response = er.response) === null || _er_response === void 0 ? void 0 : _er_response.data);\n        } else {\n            return rejectWithValue(\"An error occurred\");\n        }\n    }\n});\nconst productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"product\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(addProduct.pending, (param)=>{\n            let { loading } = param;\n            loading = true;\n        }).addCase(addProduct.fulfilled, (state, param)=>{\n            let { payload } = param;\n            state.loading = false;\n        });\n        builder.addCase(allCategory.pending, (state)=>{\n            state.loading = true;\n        }).addCase(allCategory.fulfilled, (state, param)=>{\n            let { payload } = param;\n            state.loading = false;\n            state.categories = payload.data.data;\n        });\n        builder.addCase(getAllProducts.pending, (state)=>{\n            state.loading = true;\n        }).addCase(getAllProducts.fulfilled, (state, param)=>{\n            let { payload } = param;\n            state.loading = false;\n            state.products = payload.data.data;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvcHJvZHVjdFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRTtBQUN2QztBQTZDMUIsTUFBTUcsZUFBNkI7SUFDakNDLFNBQVM7SUFDVEMsVUFBVSxFQUFFO0lBQ1pDLFlBQVksRUFBRTtBQUNoQjtBQUVPLE1BQU1DLGlCQUFpQlAsa0VBQWdCQSxDQUM1QyxxQkFDQSxPQUFPUTtRQUFHLEVBQUVDLGVBQWUsRUFBRTtJQUMzQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDO1FBQ2pDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxJQUFJO1FBQ1gsSUFBSVYsNkNBQUtBLENBQUNXLFlBQVksQ0FBQ0QsS0FBSztnQkFDSEE7WUFBdkIsT0FBT0gsaUJBQWdCRyxlQUFBQSxHQUFHRixRQUFRLGNBQVhFLG1DQUFBQSxhQUFhRSxJQUFJO1FBQzFDLE9BQU87WUFDTCxPQUFPTCxnQkFBZ0I7UUFDekI7SUFDRjtBQUNGLEdBQ0E7QUFFSyxNQUFNTSxjQUFjZixrRUFBZ0JBLENBQ3pDLGlCQUNBLE9BQU9RO1FBQUcsRUFBRUMsZUFBZSxFQUFFO0lBQzNCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQUM7UUFDakMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLElBQUk7UUFDWCxJQUFJViw2Q0FBS0EsQ0FBQ1csWUFBWSxDQUFDRCxLQUFLO2dCQUNIQTtZQUF2QixPQUFPSCxpQkFBZ0JHLGVBQUFBLEdBQUdGLFFBQVEsY0FBWEUsbUNBQUFBLGFBQWFFLElBQUk7UUFDMUMsT0FBTztZQUNMLE9BQU9MLGdCQUFnQjtRQUN6QjtJQUNGO0FBQ0YsR0FDQTtBQUVLLE1BQU1PLGFBQWFoQixrRUFBZ0JBLENBQ3hDLG1CQUNBLE9BQU9pQjtRQUFhLEVBQUVSLGVBQWUsRUFBRTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyxnQkFBZ0JELFFBQVE7WUFDeERFLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQXNCO1FBQ25EO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JYO1FBQ3BDLE9BQU9BO0lBQ1QsRUFBRSxPQUFPRSxJQUFJO1FBQ1gsSUFBSVYsNkNBQUtBLENBQUNXLFlBQVksQ0FBQ0QsS0FBSztnQkFDSEE7WUFBdkIsT0FBT0gsaUJBQWdCRyxlQUFBQSxHQUFHRixRQUFRLGNBQVhFLG1DQUFBQSxhQUFhRSxJQUFJO1FBQzFDLE9BQU87WUFDTCxPQUFPTCxnQkFBZ0I7UUFDekI7SUFDRjtBQUNGLEdBQ0E7QUFFSyxNQUFNYSxhQUFhdEIsa0VBQWdCQSxDQUN4QyxnQkFDQSxPQUFPdUI7UUFBWSxFQUFFZCxlQUFlLEVBQUU7SUFDcEMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxnQkFBbUIsT0FBSFk7UUFDakQsT0FBT2I7SUFDVCxFQUFFLE9BQU9FLElBQUk7UUFDWCxJQUFJViw2Q0FBS0EsQ0FBQ1csWUFBWSxDQUFDRCxLQUFLO2dCQUNIQTtZQUF2QixPQUFPSCxpQkFBZ0JHLGVBQUFBLEdBQUdGLFFBQVEsY0FBWEUsbUNBQUFBLGFBQWFFLElBQUk7UUFDMUMsT0FBTztZQUNMLE9BQU9MLGdCQUFnQjtRQUN6QjtJQUNGO0FBQ0YsR0FDQTtBQUVGLE1BQU1lLGVBQWV2Qiw2REFBV0EsQ0FBQztJQUMvQndCLE1BQU07SUFDTnRCO0lBQ0F1QixVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQUNiLFdBQVdjLE9BQU8sRUFBRTtnQkFBQyxFQUFFMUIsT0FBTyxFQUFFO1lBQ3ZDQSxVQUFVO1FBQ1osR0FDQ3lCLE9BQU8sQ0FBQ2IsV0FBV2UsU0FBUyxFQUFFLENBQUNDO2dCQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNoREQsTUFBTTVCLE9BQU8sR0FBRztRQUNsQjtRQUVGd0IsUUFDR0MsT0FBTyxDQUFDZCxZQUFZZSxPQUFPLEVBQUUsQ0FBQ0U7WUFDN0JBLE1BQU01QixPQUFPLEdBQUc7UUFDbEIsR0FDQ3lCLE9BQU8sQ0FBQ2QsWUFBWWdCLFNBQVMsRUFBRSxDQUFDQztnQkFBTyxFQUFFQyxPQUFPLEVBQUU7WUFDakRELE1BQU01QixPQUFPLEdBQUc7WUFDaEI0QixNQUFNMUIsVUFBVSxHQUFHMkIsUUFBUW5CLElBQUksQ0FBQ0EsSUFBSTtRQUN0QztRQUNGYyxRQUNHQyxPQUFPLENBQUN0QixlQUFldUIsT0FBTyxFQUFFLENBQUNFO1lBQ2hDQSxNQUFNNUIsT0FBTyxHQUFHO1FBQ2xCLEdBQ0N5QixPQUFPLENBQUN0QixlQUFld0IsU0FBUyxFQUFFLENBQUNDO2dCQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNwREQsTUFBTTVCLE9BQU8sR0FBRztZQUNoQjRCLE1BQU0zQixRQUFRLEdBQUc0QixRQUFRbkIsSUFBSSxDQUFDQSxJQUFJO1FBQ3BDO0lBQ0o7QUFDRjtBQUVBLCtEQUFlVSxhQUFhVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWR1eC9wcm9kdWN0U2xpY2UudHM/ZDQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5IH0gZnJvbSBcIi4vY2F0ZWdvcnlTbGljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGUge1xuICBsYXN0TW9kaWZpZWQ6IG51bWJlcjtcbiAgbGFzdE1vZGlmaWVkRGF0ZTogRGF0ZTtcbiAgbmFtZTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgd2Via2l0UmVsYXRpdmVQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2U6IHN0cmluZztcbiAgcXVhbnRpdHk6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VzOiBBcnJheTxGaWxlPiB8IFtdIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZldGNoZWRQcm9kdWN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjcmVhdGVkX2J5OiBudW1iZXI7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgaW1hZ2VzOiBzdHJpbmdbXSB8IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RGb3JtQ2F0ZWdvcmllcyB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEluaXRpYWxUeXBlcyB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHByb2R1Y3RzOiBGZXRjaGVkUHJvZHVjdFtdIHwgW107XG4gIGNhdGVnb3JpZXM6IFByb2R1Y3RGb3JtQ2F0ZWdvcmllc1tdIHwgW107XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFR5cGVzID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgcHJvZHVjdHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiL2dldC1hbGwtcHJvZHVjdHNcIixcbiAgYXN5bmMgKF8sIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RcIik7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXIpKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXIucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShcIkFuIGVycm9yIG9jY3VycmVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGFsbENhdGVnb3J5ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCIvYWxsLWNhdGVnb3J5XCIsXG4gIGFzeW5jIChfLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0L2NhdGVnb3J5XCIpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVyKSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVyLnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoXCJBbiBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCIvY3JlYXRlLXByb2R1Y3RcIixcbiAgYXN5bmMgKHZhbHVlczogYW55LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcHJvZHVjdFwiLCB2YWx1ZXMsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImFkZC1wcm9kdWN0LXJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcikpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlci5yZXNwb25zZT8uZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKFwiQW4gZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiL2dldC1wcm9kdWN0XCIsXG4gIGFzeW5jIChpZDogc3RyaW5nLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3QvJHtpZH1gKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcikpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlci5yZXNwb25zZT8uZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKFwiQW4gZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCBwcm9kdWN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicHJvZHVjdFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShhZGRQcm9kdWN0LnBlbmRpbmcsICh7IGxvYWRpbmcgfSkgPT4ge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShhZGRQcm9kdWN0LmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKGFsbENhdGVnb3J5LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShhbGxDYXRlZ29yeS5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5jYXRlZ29yaWVzID0gcGF5bG9hZC5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShnZXRBbGxQcm9kdWN0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoZ2V0QWxsUHJvZHVjdHMuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBwYXlsb2FkLmRhdGEuZGF0YTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsImdldEFsbFByb2R1Y3RzIiwiXyIsInJlamVjdFdpdGhWYWx1ZSIsInJlc3BvbnNlIiwiZ2V0IiwiZXIiLCJpc0F4aW9zRXJyb3IiLCJkYXRhIiwiYWxsQ2F0ZWdvcnkiLCJhZGRQcm9kdWN0IiwidmFsdWVzIiwicG9zdCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZHVjdCIsImlkIiwicHJvZHVjdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInN0YXRlIiwicGF5bG9hZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/productSlice.ts\n"));

/***/ })

});