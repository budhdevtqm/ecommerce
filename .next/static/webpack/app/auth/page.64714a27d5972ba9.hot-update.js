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

/***/ "(app-pages-browser)/./src/app/redux/authSlice.ts":
/*!************************************!*\
  !*** ./src/app/redux/authSlice.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleLogin: function() { return /* binding */ handleLogin; },\n/* harmony export */   handleSignup: function() { return /* binding */ handleSignup; },\n/* harmony export */   toggleAuthMode: function() { return /* binding */ toggleAuthMode; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    isLoggedIn: false,\n    token: \"\",\n    authMode: \"login\"\n};\nconst handleLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/login\", async (values)=>{\n    try {} catch (er) {}\n});\nconst handleSignup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"/signup\", async (values)=>{\n    try {} catch (er) {}\n});\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        toggleAuthMode: (state, action)=>{\n            if (state.authMode === \"login\") {\n                state.authMode = \"signup\";\n            }\n            state.authMode = \"login\";\n        }\n    },\n    extraReducers: (builder)=>{}\n});\nconst { toggleAuthMode } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvYXV0aFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFtQmpFLE1BQU1FLGVBQTZCO0lBQ2pDQyxZQUFZO0lBQ1pDLE9BQU87SUFDUEMsVUFBVTtBQUNaO0FBRU8sTUFBTUMsY0FBY04sa0VBQWdCQSxDQUFDLFVBQVUsT0FBT087SUFDM0QsSUFBSSxDQUNKLEVBQUUsT0FBT0MsSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFFSSxNQUFNQyxlQUFlVCxrRUFBZ0JBLENBQUMsV0FBVyxPQUFPTztJQUM3RCxJQUFJLENBQ0osRUFBRSxPQUFPQyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUVILE1BQU1FLFlBQVlULDZEQUFXQSxDQUFDO0lBQzVCVSxNQUFNO0lBQ05UO0lBQ0FVLFVBQVU7UUFDUkMsZ0JBQWdCLENBQUNDLE9BQU9DO1lBQ3RCLElBQUlELE1BQU1ULFFBQVEsS0FBSyxTQUFTO2dCQUM5QlMsTUFBTVQsUUFBUSxHQUFHO1lBQ25CO1lBQ0FTLE1BQU1ULFFBQVEsR0FBRztRQUNuQjtJQUNGO0lBQ0FXLGVBQWUsQ0FBQ0MsV0FBYTtBQUMvQjtBQUVPLE1BQU0sRUFBRUosY0FBYyxFQUFFLEdBQUdILFVBQVVRLE9BQU8sQ0FBQztBQUNwRCwrREFBZVIsVUFBVVMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVkdXgvYXV0aFNsaWNlLnRzP2Q1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luVmFsdWVzIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWdudXBWYWx1ZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBdXRoSW5pdGlhbHMge1xuICBpc0xvZ2dlZEluOiBib29sZWFuO1xuICB0b2tlbjogc3RyaW5nO1xuICBhdXRoTW9kZTogc3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEF1dGhJbml0aWFscyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHRva2VuOiBcIlwiLFxuICBhdXRoTW9kZTogXCJsb2dpblwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvZ2luID0gY3JlYXRlQXN5bmNUaHVuayhcIi9sb2dpblwiLCBhc3luYyAodmFsdWVzKSA9PiB7XG4gIHRyeSB7XG4gIH0gY2F0Y2ggKGVyKSB7fVxufSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTaWdudXAgPSBjcmVhdGVBc3luY1RodW5rKFwiL3NpZ251cFwiLCBhc3luYyAodmFsdWVzKSA9PiB7XG4gIHRyeSB7XG4gIH0gY2F0Y2ggKGVyKSB7fVxufSk7XG5cbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhdXRoXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICB0b2dnbGVBdXRoTW9kZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGlmIChzdGF0ZS5hdXRoTW9kZSA9PT0gXCJsb2dpblwiKSB7XG4gICAgICAgIHN0YXRlLmF1dGhNb2RlID0gXCJzaWdudXBcIjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmF1dGhNb2RlID0gXCJsb2dpblwiO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB0b2dnbGVBdXRoTW9kZSB9ID0gYXV0aFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidG9rZW4iLCJhdXRoTW9kZSIsImhhbmRsZUxvZ2luIiwidmFsdWVzIiwiZXIiLCJoYW5kbGVTaWdudXAiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ0b2dnbGVBdXRoTW9kZSIsInN0YXRlIiwiYWN0aW9uIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/authSlice.ts\n"));

/***/ })

});