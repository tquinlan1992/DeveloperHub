webpackHotUpdate("main",{

/***/ "./core/actions/loading/index.ts":
/*!***************************************!*\
  !*** ./core/actions/loading/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simpleActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simpleActions */ "./core/actions/loading/simpleActions/index.ts");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thunkActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunkActions */ "./core/actions/loading/thunkActions/index.ts");
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exportTypes */ "./core/actions/loading/exportTypes.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};




_exportTypes__WEBPACK_IMPORTED_MODULE_3__;
var initialState = true;
var loadingSimpleActions = Object(_simpleActions__WEBPACK_IMPORTED_MODULE_0__["default"])('Loading');
/* harmony default export */ __webpack_exports__["default"] = ({
    reducer: Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, loadingSimpleActions),
    actions: __assign({}, Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__["getCreators"])(loadingSimpleActions), _thunkActions__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ })

})
//# sourceMappingURL=main.88f9ebf27d3b59ea7021.hot-update.js.map