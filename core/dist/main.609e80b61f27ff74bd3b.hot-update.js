webpackHotUpdate("main",{

/***/ "./core/actions/routing/index.ts":
/*!***************************************!*\
  !*** ./core/actions/routing/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-redux */ "../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunkActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunkActions */ "./core/actions/routing/thunkActions/index.ts");
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exportTypes */ "./core/actions/exportTypes.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};



_exportTypes__WEBPACK_IMPORTED_MODULE_2__;
/* harmony default export */ __webpack_exports__["default"] = ({
    reducer: react_router_redux__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    actions: __assign({}, _thunkActions__WEBPACK_IMPORTED_MODULE_1__["default"])
});

/***/ }),

/***/ "./core/actions/routing/thunkActions/index.ts":
/*!****************************************************!*\
  !*** ./core/actions/routing/thunkActions/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigateToFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigateToFeed */ "./core/actions/routing/thunkActions/navigateToFeed.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    navigateToFeed: _navigateToFeed__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./core/actions/routing/thunkActions/navigateToFeed.ts":
/*!*************************************************************!*\
  !*** ./core/actions/routing/thunkActions/navigateToFeed.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigateToFeed; });
function navigateToFeed(history, urlToNavigateTo) {
    return function (dispatch) {
        history.push("/feed/" + urlToNavigateTo);
    };
}

/***/ })

})
//# sourceMappingURL=main.609e80b61f27ff74bd3b.hot-update.js.map