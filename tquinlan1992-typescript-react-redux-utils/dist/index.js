module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: createReducer, makeActionCreatorWithReducer, getCreators, makeActionCreatorWithReducerWithPrefix, getReducersFromCombinedActionReducer, getActionsFromCombinedActionReducer, getActionsAndReducersFromCombinedActionReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeActionCreatorWithReducer", function() { return makeActionCreatorWithReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreators", function() { return getCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeActionCreatorWithReducerWithPrefix", function() { return makeActionCreatorWithReducerWithPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReducersFromCombinedActionReducer", function() { return getReducersFromCombinedActionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsFromCombinedActionReducer", function() { return getActionsFromCombinedActionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsAndReducersFromCombinedActionReducer", function() { return getActionsAndReducersFromCombinedActionReducer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa */ "typescript-fsa");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_1__);


function createReducer(initialState, actions) {
    return function (state, incomingAction) {
        if (state === void 0) {
            state = initialState;
        }
        var actionMatch = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(actions, function (action) {
            return Object(typescript_fsa__WEBPACK_IMPORTED_MODULE_1__["isType"])(incomingAction, action.actionCreator);
        });
        if (actionMatch) {
            return actionMatch.reducer(state, incomingAction.payload);
        } else {
            return state;
        }
    };
}
function makeActionCreatorWithReducer(name, reducer) {
    var SimpleActionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_1___default()();
    return {
        actionCreator: SimpleActionCreator(name),
        reducer: reducer
    };
}
function getCreators(creators) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(creators, "actionCreator");
}
function makeActionCreatorWithReducerWithPrefix(actionName, reducer) {
    return function (reducerName) {
        return makeActionCreatorWithReducer(JSON.stringify({ reducerName: reducerName, actionName: actionName }), reducer);
    };
}
function getReducersFromCombinedActionReducer(creators) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(creators, "reducer");
}
function getActionsFromCombinedActionReducer(creators) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(creators, "actions");
}
function getActionsAndReducersFromCombinedActionReducer(creators) {
    return {
        actions: getActionsFromCombinedActionReducer(creators),
        reducers: getReducersFromCombinedActionReducer(creators)
    };
}
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "typescript-fsa":
/*!*********************************!*\
  !*** external "typescript-fsa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typescript-fsa");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map