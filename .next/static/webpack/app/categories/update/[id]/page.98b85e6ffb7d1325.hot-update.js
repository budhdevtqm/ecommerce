"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/categories/update/[id]/page",{

/***/ "(app-pages-browser)/./src/app/categories/update/[id]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/categories/update/[id]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FormCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormCard */ \"(app-pages-browser)/./src/components/FormCard.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button.tsx\");\n/* harmony import */ var _components_FormError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormError */ \"(app-pages-browser)/./src/components/FormError.tsx\");\n/* harmony import */ var _common_utils_validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common-utils/validations */ \"(app-pages-browser)/./src/common-utils/validations.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UpdateCategory = ()=>{\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormValues({\n            ...formValues,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const validationResults = (0,_common_utils_validations__WEBPACK_IMPORTED_MODULE_5__.validateCategory)(formValues);\n        if (Object.keys(validationResults).length > 0) {\n            setErrors(validationResults);\n            return;\n        }\n        console.log(\"add-cat-no err\");\n    };\n    var _errors_name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Update Category\",\n        navigate: \"/categories\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-1 my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"ml-1 text-gray-500 \",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            placeholder: \"Category name!\",\n                            className: \"border-2 py-1 px-2 outline-primary text-black rounded-lg\",\n                            onChange: handleChange,\n                            value: formValues.name\n                        }, void 0, false, {\n                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormError__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            message: (_errors_name = errors.name) !== null && _errors_name !== void 0 ? _errors_name : \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: \"submit\",\n                        variant: \"primary\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/categories/update/[id]/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpdateCategory, \"qjChqoFfbP/R4Qa7HB7HAHuV2lk=\");\n_c = UpdateCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateCategory);\nvar _c;\n$RefreshReg$(_c, \"UpdateCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0ZWdvcmllcy91cGRhdGUvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0s7QUFDSjtBQUNNO0FBRWU7QUFFOUQsTUFBTU0saUJBQTJCOztJQUMvQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQWlCO1FBQUVRLE1BQU07SUFBRztJQUN4RSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQTBCO1FBQUVRLE1BQU07SUFBRztJQUV6RSxNQUFNRyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUosSUFBSSxFQUFFSyxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTTtRQUNoQ1AsY0FBYztZQUFFLEdBQUdELFVBQVU7WUFBRSxDQUFDRSxLQUFLLEVBQUVLO1FBQU07SUFDL0M7SUFFQSxNQUFNRSxlQUFlLENBQUNIO1FBQ3BCQSxFQUFFSSxjQUFjO1FBRWhCLE1BQU1DLG9CQUFvQmIsMkVBQWdCQSxDQUFDRTtRQUMzQyxJQUFJWSxPQUFPQyxJQUFJLENBQUNGLG1CQUFtQkcsTUFBTSxHQUFHLEdBQUc7WUFDN0NWLFVBQVVPO1lBQ1Y7UUFDRjtRQUNBSSxRQUFRQyxHQUFHLENBQUM7SUFDZDtRQWM0QmI7SUFiNUIscUJBQ0UsOERBQUNSLDREQUFRQTtRQUFDc0IsT0FBTTtRQUFrQkMsVUFBUztrQkFDekMsNEVBQUNDO1lBQUtDLFVBQVVYOzs4QkFDZCw4REFBQ1k7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBTUQsV0FBVTtzQ0FBc0I7Ozs7OztzQ0FDdkMsOERBQUNFOzRCQUNDQyxNQUFLOzRCQUNMdkIsTUFBSzs0QkFDTHdCLGFBQVk7NEJBQ1pKLFdBQVU7NEJBQ1ZLLFVBQVV0Qjs0QkFDVkUsT0FBT1AsV0FBV0UsSUFBSTs7Ozs7O3NDQUV4Qiw4REFBQ0wsNkRBQVNBOzRCQUFDK0IsU0FBU3pCLENBQUFBLGVBQUFBLE9BQU9ELElBQUksY0FBWEMsMEJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs4QkFFckMsOERBQUNrQjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQzFCLDBEQUFNQTt3QkFBQzZCLE1BQUs7d0JBQVNJLFNBQVE7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEQ7R0ExQ005QjtLQUFBQTtBQTRDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NhdGVnb3JpZXMvdXBkYXRlL1tpZF0vcGFnZS50c3g/NGIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUNhcmRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtRXJyb3JcIjtcbmltcG9ydCB7IENhdGVnb3J5VmFsdWVzIH0gZnJvbSBcIkAvYXBwL3JlZHV4L2NhdGVnb3J5U2xpY2VcIjtcbmltcG9ydCB7IHZhbGlkYXRlQ2F0ZWdvcnkgfSBmcm9tIFwiQC9jb21tb24tdXRpbHMvdmFsaWRhdGlvbnNcIjtcblxuY29uc3QgVXBkYXRlQ2F0ZWdvcnk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZTxDYXRlZ29yeVZhbHVlcz4oeyBuYW1lOiBcIlwiIH0pO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8UGFydGlhbDxDYXRlZ29yeVZhbHVlcz4+KHsgbmFtZTogXCJcIiB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0cyA9IHZhbGlkYXRlQ2F0ZWdvcnkoZm9ybVZhbHVlcyk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRpb25SZXN1bHRzKS5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRFcnJvcnModmFsaWRhdGlvblJlc3VsdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImFkZC1jYXQtbm8gZXJyXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxGb3JtQ2FyZCB0aXRsZT1cIlVwZGF0ZSBDYXRlZ29yeVwiIG5hdmlnYXRlPVwiL2NhdGVnb3JpZXNcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC0xIHRleHQtZ3JheS01MDAgXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IG5hbWUhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHB5LTEgcHgtMiBvdXRsaW5lLXByaW1hcnkgdGV4dC1ibGFjayByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1FcnJvciBtZXNzYWdlPXtlcnJvcnMubmFtZSA/PyBcIlwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Gb3JtQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUNhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtQ2FyZCIsIkJ1dHRvbiIsIkZvcm1FcnJvciIsInZhbGlkYXRlQ2F0ZWdvcnkiLCJVcGRhdGVDYXRlZ29yeSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwibmFtZSIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGlvblJlc3VsdHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmF2aWdhdGUiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtZXNzYWdlIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/categories/update/[id]/page.tsx\n"));

/***/ })

});