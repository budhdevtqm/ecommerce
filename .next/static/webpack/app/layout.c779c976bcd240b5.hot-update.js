"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"dee5a172d2f5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZTRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImRlZTVhMTcyZDJmNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux/authSlice.ts":
/*!************************************!*\
  !*** ./src/app/redux/authSlice.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleLogin: function() { return /* binding */ handleLogin; },\n/* harmony export */   handleSignup: function() { return /* binding */ handleSignup; },\n/* harmony export */   toggleAuthMode: function() { return /* binding */ toggleAuthMode; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    isLoggedIn: false,\n    token: \"\",\n    authMode: \"login\"\n};\nconst handleLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/login\", async (values)=>{\n    try {} catch (er) {}\n});\nconst handleSignup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/signup\", async (values)=>{\n    try {} catch (er) {}\n});\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        toggleAuthMode: (state, action)=>{\n            state.authMode = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{}\n});\nconst { toggleAuthMode } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvYXV0aFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFtQmpFLE1BQU1FLGVBQTZCO0lBQ2pDQyxZQUFZO0lBQ1pDLE9BQU87SUFDUEMsVUFBVTtBQUNaO0FBRU8sTUFBTUMsY0FBY04sa0VBQWdCQSxDQUFDLFVBQVUsT0FBT087SUFDM0QsSUFBSSxDQUNKLEVBQUUsT0FBT0MsSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFFSSxNQUFNQyxlQUFlVCxrRUFBZ0JBLENBQUMsV0FBVyxPQUFPTztJQUM3RCxJQUFJLENBQ0osRUFBRSxPQUFPQyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUVILE1BQU1FLFlBQVlULDZEQUFXQSxDQUFDO0lBQzVCVSxNQUFNO0lBQ05UO0lBQ0FVLFVBQVU7UUFDUkMsZ0JBQWdCLENBQUNDLE9BQU9DO1lBQ3RCRCxNQUFNVCxRQUFRLEdBQUdVLE9BQU9DLE9BQU87UUFDakM7SUFDRjtJQUNBQyxlQUFlLENBQUNDLFdBQWE7QUFDL0I7QUFFTyxNQUFNLEVBQUVMLGNBQWMsRUFBRSxHQUFHSCxVQUFVUyxPQUFPLENBQUM7QUFDcEQsK0RBQWVULFVBQVVVLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZHV4L2F1dGhTbGljZS50cz9kNTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dpblZhbHVlcyB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQXV0aEluaXRpYWxzIHtcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgdG9rZW46IHN0cmluZztcbiAgYXV0aE1vZGU6IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBdXRoSW5pdGlhbHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB0b2tlbjogXCJcIixcbiAgYXV0aE1vZGU6IFwibG9naW5cIixcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVMb2dpbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXCIvbG9naW5cIiwgYXN5bmMgKHZhbHVlcykgPT4ge1xuICB0cnkge1xuICB9IGNhdGNoIChlcikge31cbn0pO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlU2lnbnVwID0gY3JlYXRlQXN5bmNUaHVuayhcIi9zaWdudXBcIiwgYXN5bmMgKHZhbHVlcykgPT4ge1xuICB0cnkge1xuICB9IGNhdGNoIChlcikge31cbn0pO1xuXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXV0aFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgdG9nZ2xlQXV0aE1vZGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5hdXRoTW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB0b2dnbGVBdXRoTW9kZSB9ID0gYXV0aFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidG9rZW4iLCJhdXRoTW9kZSIsImhhbmRsZUxvZ2luIiwidmFsdWVzIiwiZXIiLCJoYW5kbGVTaWdudXAiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ0b2dnbGVBdXRoTW9kZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/authSlice.ts\n"));

/***/ })

});