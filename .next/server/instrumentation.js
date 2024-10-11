"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(instrument)/./lib/db.js\");\n\nasync function register() {\n    console.log(\"API Endpoint:\", \"http://localhost:3000/api\");\n    console.log(\"Connecting to database...\");\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRXhCLGVBQWVDO0lBQ3BCQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCQywyQkFBK0I7SUFDNURGLFFBQVFDLEdBQUcsQ0FBQztJQUNaLE1BQU1ILG1EQUFPQTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tb25nby8uL2luc3RydW1lbnRhdGlvbi5qcz8wN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiQVBJIEVuZHBvaW50OlwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMKVxyXG4gIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZyB0byBkYXRhYmFzZS4uLlwiKTtcclxuICBhd2FpdCBjb25uZWN0KCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ }),

/***/ "(instrument)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, opts).then((mongoose)=>{\n            console.log(\"DB connected\");\n        // console.debug(mongoose)\n        // return mongoose\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFFdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ1osTUFBTSxJQUFJRyxNQUNOO0FBRVI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNUQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDM0Q7QUFFQSxlQUFlQztJQUNYLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNiLE9BQU9GLE9BQU9FLElBQUk7SUFDdEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNqQixNQUFNRSxPQUFPO1lBQ1RDLGdCQUFnQjtRQUNwQjtRQUNBTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxXQUFXUyxNQUM1Q0csSUFBSSxDQUFDYixDQUFBQTtZQUNGYyxRQUFRQyxHQUFHLENBQUM7UUFDWiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ3RCO0lBQ0o7SUFDQSxJQUFJO1FBQ0FWLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3RDLEVBQUUsT0FBT1EsR0FBRztRQUNSWCxPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTVE7SUFDVjtJQUVBLE9BQU9YLE9BQU9FLElBQUk7QUFDdEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbW9uZ28vLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBNT05HT19VUkkgPSBwcm9jZXNzLmVudi5NT05HT19VUklcclxuXHJcbmlmICghTU9OR09fVVJJKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudicsXHJcbiAgICApXHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkLmNvbm5cclxuICAgIH1cclxuICAgIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgICAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICAgICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkksIG9wdHMpXHJcbiAgICAgICAgLnRoZW4obW9uZ29vc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREIgY29ubmVjdGVkJylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zyhtb25nb29zZSlcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG1vbmdvb3NlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxyXG4gICAgICAgIHRocm93IGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
module.exports = __webpack_exports__;

})();