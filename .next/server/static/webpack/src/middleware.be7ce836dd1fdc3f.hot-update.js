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

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\n\nasync function middleware(request) {\n    const { url, nextUrl, cookies } = request;\n    const { pathname } = nextUrl;\n    try {\n        const token = cookies.get(\"token\")?.value;\n        // console.log(\"toekn\", token);\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/auth\", url));\n        }\n        const secret = new TextEncoder().encode(\"ab7a3de3ac0d63336ce98315661611122168743addab37cc27282351c6417bf0\");\n        const { payload } = await jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify(token, secret);\n        const { userRole, userEmail } = payload;\n        const requestHeaders = new Headers(request.headers);\n        requestHeaders.set(\"userEmail\", userEmail);\n        if (pathname.includes(\"/users\") && userRole === \"admin\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n        }\n        if (pathname.includes(\"/categories\") && userRole !== \"user\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n        }\n        if (pathname.includes(\"/products\") && userRole !== \"user\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n        }\n        if (pathname === \"/\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n        }\n        if (pathname === \"/cart\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", url));\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/auth\", url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/users/:path*\",\n        \"/categories/:path*\",\n        \"/products/:path*\",\n        \"/\",\n        \"/cart\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUMzQjtBQWV0QixlQUFlRSxXQUFXQyxPQUFvQjtJQUNuRCxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7SUFDbEMsTUFBTSxFQUFFSSxRQUFRLEVBQUUsR0FBR0Y7SUFDckIsSUFBSTtRQUNGLE1BQU1HLFFBQVFGLFFBQVFHLEdBQUcsQ0FBQyxVQUFVQztRQUNwQywrQkFBK0I7UUFDL0IsSUFBSSxDQUFDRixPQUFPO1lBQ1YsT0FBT1Isa0ZBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNSO1FBQ2hEO1FBRUEsTUFBTVMsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLGtFQUErQjtRQUN2RSxNQUFNLEVBQUVHLE9BQU8sRUFBRSxHQUFHLE1BQU1sQiwyQ0FBYyxDQUFDTyxPQUFPSztRQUNoRCxNQUFNLEVBQUVRLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdIO1FBRWhDLE1BQU1JLGlCQUFpQixJQUFJQyxRQUFRckIsUUFBUXNCLE9BQU87UUFDbERGLGVBQWVHLEdBQUcsQ0FBQyxhQUFhSjtRQUVoQyxJQUFJZixTQUFTb0IsUUFBUSxDQUFDLGFBQWFOLGFBQWEsU0FBUztZQUN2RCxPQUFPckIsa0ZBQVlBLENBQUM0QixJQUFJO1FBQzFCO1FBRUEsSUFBSXJCLFNBQVNvQixRQUFRLENBQUMsa0JBQWtCTixhQUFhLFFBQVE7WUFDM0QsT0FBT3JCLGtGQUFZQSxDQUFDNEIsSUFBSTtRQUMxQjtRQUVBLElBQUlyQixTQUFTb0IsUUFBUSxDQUFDLGdCQUFnQk4sYUFBYSxRQUFRO1lBQ3pELE9BQU9yQixrRkFBWUEsQ0FBQzRCLElBQUk7UUFDMUI7UUFFQSxJQUFJckIsYUFBYSxLQUFLO1lBQ3BCLE9BQU9QLGtGQUFZQSxDQUFDNEIsSUFBSTtRQUMxQjtRQUVBLElBQUlyQixhQUFhLFNBQVM7WUFDeEIsT0FBT1Asa0ZBQVlBLENBQUM0QixJQUFJO1FBQzFCO1FBRUEsT0FBTzVCLGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLUjtJQUM1QyxFQUFFLE9BQU95QixPQUFPO1FBQ2QsT0FBTzdCLGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxTQUFTUjtJQUNoRDtBQUNGO0FBRU8sTUFBTTBCLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFpQjtRQUFzQjtRQUFvQjtRQUFLO0tBQVE7QUFDcEYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCAqIGFzIGpvc2UgZnJvbSBcImpvc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBKd3RFcnJvciB7XG4gIGNvZGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjbGFpbTogc3RyaW5nO1xuICByZWFzb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBKd3RVc2VySW5mbyB7XG4gIHVzZXJFbWFpbDogc3RyaW5nO1xuICB1c2VyUm9sZTogc3RyaW5nO1xuICBleHA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgeyB1cmwsIG5leHRVcmwsIGNvb2tpZXMgfSA9IHJlcXVlc3Q7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG5leHRVcmw7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpPy52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRvZWtuXCIsIHRva2VuKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYXV0aFwiLCB1cmwpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNyZXQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCEpO1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgam9zZS5qd3RWZXJpZnkodG9rZW4sIHNlY3JldCk7XG4gICAgY29uc3QgeyB1c2VyUm9sZSwgdXNlckVtYWlsIH0gPSBwYXlsb2FkO1xuXG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpO1xuICAgIHJlcXVlc3RIZWFkZXJzLnNldChcInVzZXJFbWFpbFwiLCB1c2VyRW1haWwgYXMgc3RyaW5nKTtcblxuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi91c2Vyc1wiKSAmJiB1c2VyUm9sZSA9PT0gXCJhZG1pblwiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvY2F0ZWdvcmllc1wiKSAmJiB1c2VyUm9sZSAhPT0gXCJ1c2VyXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9wcm9kdWN0c1wiKSAmJiB1c2VyUm9sZSAhPT0gXCJ1c2VyXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvY2FydFwiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHVybCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hdXRoXCIsIHVybCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcIi91c2Vycy86cGF0aCpcIiwgXCIvY2F0ZWdvcmllcy86cGF0aCpcIiwgXCIvcHJvZHVjdHMvOnBhdGgqXCIsIFwiL1wiLCAnL2NhcnQnXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiam9zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwidXJsIiwibmV4dFVybCIsImNvb2tpZXMiLCJwYXRobmFtZSIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJyZWRpcmVjdCIsIlVSTCIsInNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJwYXlsb2FkIiwiand0VmVyaWZ5IiwidXNlclJvbGUiLCJ1c2VyRW1haWwiLCJyZXF1ZXN0SGVhZGVycyIsIkhlYWRlcnMiLCJoZWFkZXJzIiwic2V0IiwiaW5jbHVkZXMiLCJuZXh0IiwiZXJyb3IiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});