webpackHotUpdate("main",{

/***/ "../node_modules/argsarray/index.js":
false,

/***/ "../node_modules/component-emitter/index.js":
false,

/***/ "../node_modules/events/events.js":
false,

/***/ "../node_modules/immediate/lib/browser.js":
false,

/***/ "../node_modules/inherits/inherits_browser.js":
false,

/***/ "../node_modules/lie/lib/browser.js":
false,

/***/ "../node_modules/ms/index.js":
false,

/***/ "../node_modules/node-libs-browser/node_modules/process/browser.js":
false,

/***/ "../node_modules/pouchdb-abstract-mapreduce/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-binary-utils/lib/index-browser.es.js":
false,

/***/ "../node_modules/pouchdb-browser/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-browser/node_modules/debug/src/browser.js":
false,

/***/ "../node_modules/pouchdb-browser/node_modules/debug/src/debug.js":
false,

/***/ "../node_modules/pouchdb-collate/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-collections/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-errors/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-find/lib/index-browser.es.js":
false,

/***/ "../node_modules/pouchdb-mapreduce-utils/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-md5/lib/index-browser.es.js":
false,

/***/ "../node_modules/pouchdb-promise/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-selector-core/lib/index.es.js":
false,

/***/ "../node_modules/pouchdb-utils/lib/index-browser.es.js":
false,

/***/ "../node_modules/spark-md5/spark-md5.js":
false,

/***/ "../node_modules/superagent/lib/agent-base.js":
false,

/***/ "../node_modules/superagent/lib/client.js":
false,

/***/ "../node_modules/superagent/lib/is-object.js":
false,

/***/ "../node_modules/superagent/lib/request-base.js":
false,

/***/ "../node_modules/superagent/lib/response-base.js":
false,

/***/ "../node_modules/superagent/lib/utils.js":
false,

/***/ "../node_modules/url-join/lib/url-join.js":
false,

/***/ "../node_modules/uuid/index.js":
false,

/***/ "../node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "../node_modules/uuid/lib/rng-browser.js":
false,

/***/ "../node_modules/uuid/v1.js":
false,

/***/ "../node_modules/uuid/v4.js":
false,

/***/ "../node_modules/vuvuzela/index.js":
false,

/***/ "./core/actions/addTicket/exportTypes.ts":
/*!***********************************************!*\
  !*** ./core/actions/addTicket/exportTypes.ts ***!
  \***********************************************/
/*! exports provided: makeActionCreatorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./core/actions/utils/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "makeActionCreatorTypes", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__; });



/***/ }),

/***/ "./core/actions/addTicket/index.ts":
/*!*****************************************!*\
  !*** ./core/actions/addTicket/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simpleActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simpleActions */ "./core/actions/addTicket/simpleActions/index.ts");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exportTypes */ "./core/actions/addTicket/exportTypes.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};



_exportTypes__WEBPACK_IMPORTED_MODULE_2__;
var initialState = {
    storyPoint: null,
    description: '',
    title: ''
};
var addTicketSimpleActions = Object(_simpleActions__WEBPACK_IMPORTED_MODULE_0__["default"])('ADD_TICKET');
/* harmony default export */ __webpack_exports__["default"] = ({
    reducer: Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, addTicketSimpleActions),
    actions: __assign({}, Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_1__["getCreators"])(addTicketSimpleActions))
});

/***/ }),

/***/ "./core/actions/addTicket/simpleActions/index.ts":
/*!*******************************************************!*\
  !*** ./core/actions/addTicket/simpleActions/index.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setStoryPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setStoryPoint */ "./core/actions/addTicket/simpleActions/setStoryPoint.ts");
/* harmony import */ var _setDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDescription */ "./core/actions/addTicket/simpleActions/setDescription.ts");
/* harmony import */ var _setTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setTitle */ "./core/actions/addTicket/simpleActions/setTitle.ts");
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exportTypes */ "./core/actions/addTicket/exportTypes.ts");




_exportTypes__WEBPACK_IMPORTED_MODULE_3__;
/* harmony default export */ __webpack_exports__["default"] = (function (prefix) {
    return {
        setStoryPoint: Object(_setStoryPoint__WEBPACK_IMPORTED_MODULE_0__["default"])(prefix),
        setDescription: Object(_setDescription__WEBPACK_IMPORTED_MODULE_1__["default"])(prefix),
        setTitle: Object(_setTitle__WEBPACK_IMPORTED_MODULE_2__["default"])(prefix)
    };
});

/***/ }),

/***/ "./core/actions/addTicket/simpleActions/setDescription.ts":
/*!****************************************************************!*\
  !*** ./core/actions/addTicket/simpleActions/setDescription.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./core/actions/utils/index.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};


_utils__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__["makeActionCreatorWithReducerWithPrefix"])('SET_DESCRIPTION', function (state, _a) {
    var value = _a.value;
    return __assign({}, state, { description: value });
}));

/***/ }),

/***/ "./core/actions/addTicket/simpleActions/setStoryPoint.ts":
/*!***************************************************************!*\
  !*** ./core/actions/addTicket/simpleActions/setStoryPoint.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./core/actions/utils/index.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};


_utils__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__["makeActionCreatorWithReducerWithPrefix"])('SET_STORY_POINTS', function (state, _a) {
    var value = _a.value;
    return __assign({}, state, { storyPoint: Number(value) });
}));

/***/ }),

/***/ "./core/actions/addTicket/simpleActions/setTitle.ts":
/*!**********************************************************!*\
  !*** ./core/actions/addTicket/simpleActions/setTitle.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./core/actions/utils/index.ts");
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};


_utils__WEBPACK_IMPORTED_MODULE_1__;
/* harmony default export */ __webpack_exports__["default"] = (Object(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__["makeActionCreatorWithReducerWithPrefix"])('SET_TITLE', function (state, _a) {
    var value = _a.value;
    return __assign({}, state, { title: value });
}));

/***/ }),

/***/ "./core/actions/index.ts":
/*!*******************************!*\
  !*** ./core/actions/index.ts ***!
  \*******************************/
/*! exports provided: coreReducer, reducers, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (16:14)\n\n\u001b[0m \u001b[90m 14 | \u001b[39m\u001b[36mimport\u001b[39m { getReducersFromCombinedActionReducer\u001b[33m,\u001b[39m getActionsFromCombinedActionReducer } from \u001b[32m'tquinlan1992-typescript-react-redux-utils'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 15 | \u001b[39m\u001b[36mimport\u001b[39m thunkActions from \u001b[32m'./thunkActions'\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[33m*\u001b[39m from \u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 17 | \u001b[39m\u001b[36mvar\u001b[39m coreActionsReducersTree \u001b[33m=\u001b[39m {\n \u001b[90m 18 | \u001b[39m    ticketList\u001b[33m:\u001b[39m ticketList\u001b[33m,\u001b[39m\n \u001b[90m 19 | \u001b[39m    routing\u001b[33m:\u001b[39m routing\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./core/actions/loading/index.ts":
false,

/***/ "./core/actions/loading/simpleActions/index.ts":
false,

/***/ "./core/actions/loading/simpleActions/setValue.ts":
false,

/***/ "./core/actions/loading/thunkActions/index.ts":
false,

/***/ "./core/actions/loading/thunkActions/loadApp.ts":
false,

/***/ "./core/actions/routing/index.ts":
false,

/***/ "./core/actions/thunkActions/database/addTicket.ts":
false,

/***/ "./core/actions/thunkActions/database/deleteTicket.ts":
false,

/***/ "./core/actions/thunkActions/database/fetchTickets.ts":
false,

/***/ "./core/actions/thunkActions/database/index.ts":
false,

/***/ "./core/actions/thunkActions/index.ts":
false,

/***/ "./core/actions/ticketList/index.ts":
false,

/***/ "./core/actions/ticketList/simpleActions/setShowAddTicketDialog.ts":
false,

/***/ "./core/actions/ticketList/simpleActions/setTickets.ts":
false,

/***/ "./core/actions/utils/index.ts":
/*!*************************************!*\
  !*** ./core/actions/utils/index.ts ***!
  \*************************************/
/*! exports provided: makeActionCreatorWithReducerWithPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tquinlan1992-typescript-react-redux-utils */ "../../tquinlan1992-typescript-react-redux-utils/dist/index.js");
/* harmony import */ var tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeActionCreatorWithReducerWithPrefix", function() { return tquinlan1992_typescript_react_redux_utils__WEBPACK_IMPORTED_MODULE_0__["makeActionCreatorWithReducerWithPrefix"]; });




/***/ }),

/***/ "./core/database/PouchWrapper.ts":
false,

/***/ "./core/database/pouch.ts":
false,

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: addTicketActionsReducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/store */ "./core/store/index.ts");
/* harmony import */ var _core_actions_addTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/actions/addTicket */ "./core/actions/addTicket/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTicketActionsReducers", function() { return _core_actions_addTicket__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_core_store__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=main.26d8a8f50e7725c6e258.hot-update.js.map