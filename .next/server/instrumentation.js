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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, opts).then((mongoose)=>{\n            console.log(\"DB connected\");\n        // console.debug(mongoose)\n        // return mongoose\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtBQUVuRCxJQUFJLENBQUNILFdBQVc7SUFDWixNQUFNLElBQUlJLE1BQ047QUFFUjtBQUVBLElBQUlDLFNBQVNDLE9BQU9QLFFBQVE7QUFFNUIsSUFBSSxDQUFDTSxRQUFRO0lBQ1RBLFNBQVNDLE9BQU9QLFFBQVEsR0FBRztRQUFFUSxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUMzRDtBQUVBLGVBQWVDO0lBQ1gsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2IsT0FBT0YsT0FBT0UsSUFBSTtJQUN0QjtJQUNBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ2pCLE1BQU1FLE9BQU87WUFDVEMsZ0JBQWdCO1FBQ3BCO1FBQ0FOLE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNDLFdBQVdVLE1BQzVDRyxJQUFJLENBQUNkLENBQUFBO1lBQ0ZlLFFBQVFDLEdBQUcsQ0FBQztRQUNaLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDdEI7SUFDSjtJQUNBLElBQUk7UUFDQVYsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDdEMsRUFBRSxPQUFPUSxHQUFHO1FBQ1JYLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNUTtJQUNWO0lBRUEsT0FBT1gsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tb25nby8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IE1PTkdPX1VSSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX1VSSVxyXG5cclxuaWYgKCFNT05HT19VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52JyxcclxuICAgIClcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICAgIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICAgIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ublxyXG4gICAgfVxyXG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSSSwgb3B0cylcclxuICAgICAgICAudGhlbihtb25nb29zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQiBjb25uZWN0ZWQnKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKG1vbmdvb3NlKVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gbW9uZ29vc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBudWxsXHJcbiAgICAgICAgdGhyb3cgZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWNoZWQuY29ublxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09fVVJJIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./lib/db.js\n");

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