"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/helpers/customMiddlewares.ts":
/*!******************************************!*\
  !*** ./src/helpers/customMiddlewares.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAuth: () => (/* binding */ isAuth)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(middleware)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isAuth = async (token)=>{\n    try {\n        const secret = \"ab7a3de3ac0d63336ce98315661611122168743addab37cc27282351c6417bf0\";\n        console.log(\"secret--->\", secret);\n        const isValidToken = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, secret, (result)=>{\n            console.log(\"isValidToken\", result);\n        });\n    } catch (er) {\n        console.log(\"isValidToken---er\", er);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2hlbHBlcnMvY3VzdG9tTWlkZGxld2FyZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQy9CLE1BQU1DLFNBQVMsT0FBT0M7SUFDM0IsSUFBSTtRQUNGLE1BQU1DLFNBQVNDLGtFQUErQjtRQUM5Q0csUUFBUUMsR0FBRyxDQUFDLGNBQWFMO1FBQ3pCLE1BQU1NLGVBQWVULG9EQUFNQSxDQUFDRSxPQUFPQyxRQUFPLENBQUNPO1lBQ3pDSCxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRTtRQUM5QjtJQUVGLEVBQUUsT0FBT0MsSUFBSTtRQUNYSixRQUFRQyxHQUFHLENBQUMscUJBQXFCRztJQUNuQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlcnMvY3VzdG9tTWlkZGxld2FyZXMudHM/MmE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XG5leHBvcnQgY29uc3QgaXNBdXRoID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUITtcbiAgICBjb25zb2xlLmxvZygnc2VjcmV0LS0tPicsc2VjcmV0KTtcbiAgICBjb25zdCBpc1ZhbGlkVG9rZW4gPSB2ZXJpZnkodG9rZW4sIHNlY3JldCwocmVzdWx0KT0+e1xuICAgICAgY29uc29sZS5sb2coXCJpc1ZhbGlkVG9rZW5cIiwgcmVzdWx0KTtcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcikge1xuICAgIGNvbnNvbGUubG9nKFwiaXNWYWxpZFRva2VuLS0tZXJcIiwgZXIpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInZlcmlmeSIsImlzQXV0aCIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZFRva2VuIiwicmVzdWx0IiwiZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/helpers/customMiddlewares.ts\n");

/***/ })

});