webpackHotUpdate("main",{

/***/ "./core/actions/thunkActions/database/fetchTickets.ts":
/*!************************************************************!*\
  !*** ./core/actions/thunkActions/database/fetchTickets.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchTickets; });
/* harmony import */ var _database_pouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/pouch */ "./core/database/pouch.ts");
/* harmony import */ var _ticketList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ticketList */ "./core/actions/ticketList/index.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function fetchTickets() {
    return function (dispatch) {
        return __awaiter(this, void 0, void 0, function () {
            var db, tickets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, Object(_database_pouch__WEBPACK_IMPORTED_MODULE_0__["getRemoteDB"])()];
                    case 1:
                        db = _a.sent();
                        return [4, db.getTickets()];
                    case 2:
                        tickets = _a.sent();
                        dispatch(_ticketList__WEBPACK_IMPORTED_MODULE_1__["default"].actions.setTickets({ tickets: tickets }));
                        return [2];
                }
            });
        });
    };
}

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: addTicketActionsReducers, loadingActionsReducers, routingActionsReducers, ticketListActionsReducers, thunkActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/store */ "./core/store/index.ts");
/* harmony import */ var _core_actions_addTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/actions/addTicket */ "./core/actions/addTicket/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTicketActionsReducers", function() { return _core_actions_addTicket__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_actions_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/actions/loading */ "./core/actions/loading/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadingActionsReducers", function() { return _core_actions_loading__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_actions_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/actions/routing */ "./core/actions/routing/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routingActionsReducers", function() { return _core_actions_routing__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_actions_ticketList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/actions/ticketList */ "./core/actions/ticketList/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketListActionsReducers", function() { return _core_actions_ticketList__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _core_actions_thunkActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/actions/thunkActions */ "./core/actions/thunkActions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thunkActions", function() { return _core_actions_thunkActions__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/* harmony default export */ __webpack_exports__["default"] = (_core_store__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=main.ecf2357ff958718243dc.hot-update.js.map