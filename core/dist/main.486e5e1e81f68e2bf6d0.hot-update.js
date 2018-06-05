webpackHotUpdate("main",{

/***/ "./core/actions/index.ts":
/*!*******************************!*\
  !*** ./core/actions/index.ts ***!
  \*******************************/
/*! exports provided: coreReducer, reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreReducer", function() { return coreReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing */ "./core/actions/routing/index.ts");
/* harmony import */ var _addTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTicket */ "./core/actions/addTicket/index.ts");
/* harmony import */ var _actions_ticketList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/ticketList */ "./core/actions/ticketList/index.ts");
/* harmony import */ var _actions_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/loading */ "./core/actions/loading/index.ts");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _thunkActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thunkActions */ "./core/actions/thunkActions/index.ts");
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exportTypes */ "./core/actions/exportTypes.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};








_exportTypes__WEBPACK_IMPORTED_MODULE_7__;
var coreActionsReducersTree = {
    ticketList: _actions_ticketList__WEBPACK_IMPORTED_MODULE_3__["default"],
    addTicket: _addTicket__WEBPACK_IMPORTED_MODULE_2__["default"],
    loading: _actions_loading__WEBPACK_IMPORTED_MODULE_4__["default"],
    routing: _routing__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var coreReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5__["getReducersFromCombinedActionReducer"])(coreActionsReducersTree));
var coreActions = Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5__["getActionsFromCombinedActionReducer"])(coreActionsReducersTree);
var appActionReducersTree = {
    core: {
        reducer: coreReducer,
        actions: coreActions
    }
};
var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_5__["getReducersFromCombinedActionReducer"])(appActionReducersTree));
/* harmony default export */ __webpack_exports__["default"] = (__assign({ thunkActions: _thunkActions__WEBPACK_IMPORTED_MODULE_6__["default"] }, coreActions));

/***/ })

})
//# sourceMappingURL=main.486e5e1e81f68e2bf6d0.hot-update.js.map