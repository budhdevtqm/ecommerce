"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[id]/page",{

/***/ "(app-pages-browser)/./src/app/custom-hooks/useFetch.ts":
/*!******************************************!*\
  !*** ./src/app/custom-hooks/useFetch.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/hooks */ \"(app-pages-browser)/./src/app/redux/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst useFetch = ()=>{\n    const disptach = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_0__.useAppDispatch)();\n    const handleFetch = async (fn)=>{\n        await disptach(fn());\n    };\n    const fetchById = async (fn, id)=>{\n        await disptach(fn(id));\n    };\n    return {\n        handleFetch,\n        fetchById\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetch);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tLWhvb2tzL3VzZUZldGNoLnRzIiwibWFwcGluZ3MiOiI7OzZEQUNnRDtBQUVoRCxNQUFNQyxXQUFXO0lBQ2YsTUFBTUMsV0FBV0YsNERBQWNBO0lBRS9CLE1BQU1HLGNBQWMsT0FBT0M7UUFDekIsTUFBTUYsU0FBU0U7SUFDakI7SUFFQSxNQUFNQyxZQUFZLE9BQU9ELElBQVNFO1FBQ2hDLE1BQU1KLFNBQVNFLEdBQUdFO0lBQ3BCO0lBRUEsT0FBTztRQUFFSDtRQUFhRTtJQUFVO0FBQ2xDO0FBRUEsK0RBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jdXN0b20taG9va3MvdXNlRmV0Y2gudHM/MmIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL3JlZHV4L2hvb2tzXCI7XG5cbmNvbnN0IHVzZUZldGNoID0gKCkgPT4ge1xuICBjb25zdCBkaXNwdGFjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoZm46IGFueSkgPT4ge1xuICAgIGF3YWl0IGRpc3B0YWNoKGZuKCkpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoQnlJZCA9IGFzeW5jIChmbjogYW55LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZGlzcHRhY2goZm4oaWQpKTtcbiAgfTtcblxuICByZXR1cm4geyBoYW5kbGVGZXRjaCwgZmV0Y2hCeUlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaDtcbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUZldGNoIiwiZGlzcHRhY2giLCJoYW5kbGVGZXRjaCIsImZuIiwiZmV0Y2hCeUlkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/custom-hooks/useFetch.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/product/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/product/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Wrapper */ \"(app-pages-browser)/./src/app/components/Wrapper.tsx\");\n/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageSlider */ \"(app-pages-browser)/./src/app/product/[id]/ImageSlider.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_MdShoppingCart_react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MdShoppingCart!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/custom-hooks/useFetch */ \"(app-pages-browser)/./src/app/custom-hooks/useFetch.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst product = {\n    _id: \"lakdjsfl;ajd;lkfajdfk\",\n    name: \"Watch\",\n    images: [\n        \"/images/user.png\",\n        \"/images/watch.jpeg\"\n    ],\n    price: 999,\n    status: true,\n    description: \"TIMEWEAR New Track Number Dial, Day & Date, Brown Leather Strap Analog Watch - For Men 305WDTG\",\n    createdAt: new Date().getTime(),\n    updatedAt: new Date().getTime(),\n    discount: 10\n};\nconst images = [\n    \"/images/user.png\",\n    \"/images/watch.jpeg\",\n    \"/images/watch.jpeg\",\n    \"/images/watch.jpeg\",\n    \"/images/user.png\",\n    \"/images/watch.jpeg\",\n    \"/images/watch.jpeg\",\n    \"/images/watch.jpeg\"\n];\nconst ViewProduct = ()=>{\n    _s();\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(images[0]);\n    const { fetchById } = (0,_app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams)().id;\n    const addToCartHandler = (id)=>{\n        console.log(\"add-to-cart-id\", id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"  bg-white p-4 rounded w-[80%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setImg: setImg,\n                            images: images\n                        }, void 0, false, {\n                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full mt-4 w-[80%] mx-auto border-t-2 border-primary py-2  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: img,\n                                        width: 150,\n                                        height: 150,\n                                        alt: img,\n                                        className: \"h-[150px] w-[150px] p-2 border rounded-xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>addToCartHandler(product._id),\n                                            className: \"text-center flex items-center justify-center bg-primary p-1 rounded text-white gap-2 px-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-[20px]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdShoppingCart_react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdShoppingCart, {}, void 0, false, {\n                                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-semibold text-[14px]\",\n                                                    children: \"ADD TO CART\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col px-8 py-2 shadow w-[800px] border ml-4 rounded-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"font-bold text-gray-600\",\n                                                children: product.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex gap-2 items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-gray-500\",\n                                                        children: \"₹\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        className: \"font-semibold text-[20px] m-0 text-primary\",\n                                                        children: product.price\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-center font-thin\",\n                                                children: product.description\n                                            }, void 0, false, {\n                                                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end mt-4 pr-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>router.push(\"/product/place-order/\".concat(product._id)),\n                                            className: \"px-3 py-1 border rounded  font-normal text-primary hover:bg-primary hover:text-white\",\n                                            children: \"ORDER\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/user/Budhdev Kaushik/ecommerce/src/app/product/[id]/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ViewProduct, \"M1W16QLW8HDefjWIl6x3nBRyUTY=\", false, function() {\n    return [\n        _app_custom_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams\n    ];\n});\n_c = ViewProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewProduct);\nvar _c;\n$RefreshReg$(_c, \"ViewProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0o7QUFDUDtBQUNUO0FBQ2lCO0FBQ087QUFDSjtBQUVuRCxNQUFNVSxVQUFVO0lBQ2RDLEtBQUs7SUFDTEMsTUFBTTtJQUNOQyxRQUFRO1FBQUM7UUFBb0I7S0FBcUI7SUFDbERDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxhQUNFO0lBQ0ZDLFdBQVcsSUFBSUMsT0FBT0MsT0FBTztJQUM3QkMsV0FBVyxJQUFJRixPQUFPQyxPQUFPO0lBQzdCRSxVQUFVO0FBQ1o7QUFFQSxNQUFNUixTQUFTO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTVMsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUd2QiwrQ0FBUUEsQ0FBQ1ksTUFBTSxDQUFDLEVBQUU7SUFDeEMsTUFBTSxFQUFFWSxTQUFTLEVBQUUsR0FBR2hCLHNFQUFRQTtJQUM5QixNQUFNaUIsU0FBU2xCLDBEQUFTQTtJQUN4QixNQUFNbUIsS0FBS3BCLDBEQUFTQSxHQUFHb0IsRUFBRTtJQUV6QixNQUFNQyxtQkFBbUIsQ0FBQ0Q7UUFDeEJFLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JIO0lBQ2hDO0lBRUF6QixnREFBU0EsQ0FBQyxLQUFPLEdBQUcsRUFBRTtJQUV0QixxQkFDRSw4REFBQ0MsK0RBQU9BO2tCQUNOLDRFQUFDNEI7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzVCLG9EQUFXQTs0QkFBQ29CLFFBQVFBOzRCQUFRWCxRQUFRQTs7Ozs7Ozs7Ozs7a0NBRXZDLDhEQUFDa0I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUMzQixtREFBS0E7d0NBQ0o0QixLQUFLVjt3Q0FDTFcsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBS2I7d0NBQ0xTLFdBQVU7Ozs7OztrREFFWiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNLOzRDQUNDQyxNQUFLOzRDQUNMQyxTQUFTLElBQU1YLGlCQUFpQmxCLFFBQVFDLEdBQUc7NENBQzNDcUIsV0FBVTs7OERBRVYsOERBQUNRO29EQUFLUixXQUFVOzhEQUNkLDRFQUFDMUIsZ0dBQWNBOzs7Ozs7Ozs7OzhEQUVqQiw4REFBQ2tDO29EQUFLUixXQUFVOzhEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWxELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ1M7Z0RBQUdULFdBQVU7MERBQTJCdEIsUUFBUUUsSUFBSTs7Ozs7OzBEQUNyRCw4REFBQ21CO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ1E7d0RBQUtSLFdBQVU7a0VBQWdCOzs7Ozs7a0VBQ2hDLDhEQUFDVTt3REFBR1YsV0FBVTtrRUFDWHRCLFFBQVFJLEtBQUs7Ozs7Ozs7Ozs7OzswREFHbEIsOERBQUM2QjtnREFBRVgsV0FBVTswREFBeUJ0QixRQUFRTSxXQUFXOzs7Ozs7Ozs7Ozs7a0RBRTNELDhEQUFDZTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0s7NENBQ0NDLE1BQUs7NENBQ0xDLFNBQVMsSUFDUGIsT0FBT2tCLElBQUksQ0FBQyx3QkFBb0MsT0FBWmxDLFFBQVFDLEdBQUc7NENBRWpEcUIsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBckVNVjs7UUFFa0JiLGtFQUFRQTtRQUNmRCxzREFBU0E7UUFDYkQsc0RBQVNBOzs7S0FKaEJlO0FBdUVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UudHN4P2FiZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gXCIuL0ltYWdlU2xpZGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IE1kU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiQC9hcHAvY3VzdG9tLWhvb2tzL3VzZUZldGNoXCI7XG5cbmNvbnN0IHByb2R1Y3QgPSB7XG4gIF9pZDogXCJsYWtkanNmbDthamQ7bGtmYWpkZmtcIixcbiAgbmFtZTogXCJXYXRjaFwiLFxuICBpbWFnZXM6IFtcIi9pbWFnZXMvdXNlci5wbmdcIiwgXCIvaW1hZ2VzL3dhdGNoLmpwZWdcIl0sXG4gIHByaWNlOiA5OTksXG4gIHN0YXR1czogdHJ1ZSxcbiAgZGVzY3JpcHRpb246XG4gICAgXCJUSU1FV0VBUiBOZXcgVHJhY2sgTnVtYmVyIERpYWwsIERheSAmIERhdGUsIEJyb3duIExlYXRoZXIgU3RyYXAgQW5hbG9nIFdhdGNoIC0gRm9yIE1lbiAzMDVXRFRHXCIsXG4gIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIGRpc2NvdW50OiAxMCxcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgXCIvaW1hZ2VzL3VzZXIucG5nXCIsXG4gIFwiL2ltYWdlcy93YXRjaC5qcGVnXCIsXG4gIFwiL2ltYWdlcy93YXRjaC5qcGVnXCIsXG4gIFwiL2ltYWdlcy93YXRjaC5qcGVnXCIsXG4gIFwiL2ltYWdlcy91c2VyLnBuZ1wiLFxuICBcIi9pbWFnZXMvd2F0Y2guanBlZ1wiLFxuICBcIi9pbWFnZXMvd2F0Y2guanBlZ1wiLFxuICBcIi9pbWFnZXMvd2F0Y2guanBlZ1wiLFxuXTtcblxuY29uc3QgVmlld1Byb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbWcsIHNldEltZ10gPSB1c2VTdGF0ZShpbWFnZXNbMF0pO1xuICBjb25zdCB7IGZldGNoQnlJZCB9ID0gdXNlRmV0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlkID0gdXNlUGFyYW1zKCkuaWQgYXMgc3RyaW5nO1xuXG4gIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYWRkLXRvLWNhcnQtaWRcIiwgaWQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBiZy13aGl0ZSBwLTQgcm91bmRlZCB3LVs4MCVdXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxJbWFnZVNsaWRlciBzZXRJbWc9e3NldEltZ30gaW1hZ2VzPXtpbWFnZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtdC00IHctWzgwJV0gbXgtYXV0byBib3JkZXItdC0yIGJvcmRlci1wcmltYXJ5IHB5LTIgIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAgICAgYWx0PXtpbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMTUwcHhdIHctWzE1MHB4XSBwLTIgYm9yZGVyIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRvQ2FydEhhbmRsZXIocHJvZHVjdC5faWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcHJpbWFyeSBwLTEgcm91bmRlZCB0ZXh0LXdoaXRlIGdhcC0yIHB4LTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZFNob3BwaW5nQ2FydCAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsxNHB4XVwiPkFERCBUTyBDQVJUPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTggcHktMiBzaGFkb3cgdy1bODAwcHhdIGJvcmRlciBtbC00IHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj7igrk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVsyMHB4XSBtLTAgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXRoaW5cIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIG10LTQgcHItOFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0L3BsYWNlLW9yZGVyLyR7cHJvZHVjdC5faWR9YClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMSBib3JkZXIgcm91bmRlZCAgZm9udC1ub3JtYWwgdGV4dC1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgT1JERVJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3UHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV3JhcHBlciIsIkltYWdlU2xpZGVyIiwiSW1hZ2UiLCJNZFNob3BwaW5nQ2FydCIsInVzZVBhcmFtcyIsInVzZVJvdXRlciIsInVzZUZldGNoIiwicHJvZHVjdCIsIl9pZCIsIm5hbWUiLCJpbWFnZXMiLCJwcmljZSIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImdldFRpbWUiLCJ1cGRhdGVkQXQiLCJkaXNjb3VudCIsIlZpZXdQcm9kdWN0IiwiaW1nIiwic2V0SW1nIiwiZmV0Y2hCeUlkIiwicm91dGVyIiwiaWQiLCJhZGRUb0NhcnRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIiwiaDIiLCJoMSIsInAiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.tsx\n"));

/***/ })

});