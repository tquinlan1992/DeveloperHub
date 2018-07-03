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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./src/components/TreeView/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/TreeView/index.tsx ***!
  \*******************************************/
/*! exports provided: TreeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return TreeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Folder */ "@material-ui/icons/Folder");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();



function getTagsFolderAtLevel(_a) {
    var tagsFolders = _a.tagsFolders,
        parent = _a.parent;
    return tagsFolders.filter(function (tagFolder) {
        return tagFolder.parent === parent;
    });
}
function getFolderListItem(folder) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { key: folder._id }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: "Single-line item" }));
}
function getTagListItem(_a) {
    var tag = _a.tag,
        onTagClick = _a.onTagClick,
        checked = _a.checked;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { key: tag._id, button: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { checked: checked, tabIndex: -1, disableRipple: true, onChange: function (event, checked) {
            return onTagClick({ _id: tag._id, checked: checked });
        } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: "Checked" }));
}
function getListForTagsFolders(_a) {
    var tagsFolders = _a.tagsFolders,
        parent = _a.parent,
        onTagClick = _a.onTagClick,
        currentlySelectedTags = _a.currentlySelectedTags;
    var folders = tagsFolders.filter(function (tagFolder) {
        return tagFolder.isFolder;
    });
    var folderListItems = folders.map(function (folder) {
        return getFolderListItem(folder);
    });
    var tags = tagsFolders.filter(function (tagFolder) {
        return !tagFolder.isFolder;
    });
    console.log('folders', folders);
    var tagListItems = tags.map(function (tag) {
        var checked = currentlySelectedTags.includes(tag._id);
        return getTagListItem({ tag: tag, onTagClick: onTagClick, checked: checked });
    });
    var subheaderText = parent ? parent : 'Root:';
    var subheader = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListSubheader"], { component: "div" }, subheaderText);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], { component: "nav", subheader: subheader }, folderListItems, tagListItems);
}
var TreeView = function (_super) {
    __extends(TreeView, _super);
    function TreeView(props) {
        var _this = _super.call(this, props) || this;
        _this.currentTagsFolder = getTagsFolderAtLevel({ tagsFolders: _this.props.tagsFolders, parent: null });
        _this.currentParent = null;
        _this.state = {
            currentlySelectedTags: _this.props.selectedTags
        };
        return _this;
    }
    TreeView.prototype.onTagClick = function (_a) {
        var _id = _a._id,
            checked = _a.checked;
        if (checked && !this.state.currentlySelectedTags.includes(_id)) {
            var newCurrentlySelectedTags = this.state.currentlySelectedTags.concat([_id]);
            this.setState({
                currentlySelectedTags: this.state.currentlySelectedTags.concat([_id])
            });
            this.props.onTagSelectionChange(newCurrentlySelectedTags);
        } else if (!checked) {
            var newCurrentlySelectedTags = this.state.currentlySelectedTags.filter(function (tag) {
                return tag !== _id;
            });
            this.props.onTagSelectionChange(newCurrentlySelectedTags);
            this.setState({
                currentlySelectedTags: newCurrentlySelectedTags
            });
        }
    };
    TreeView.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, getListForTagsFolders({ tagsFolders: this.currentTagsFolder, parent: this.currentParent, onTagClick: this.onTagClick.bind(this), currentlySelectedTags: this.state.currentlySelectedTags }));
    };
    return TreeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: TreeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeView */ "./src/components/TreeView/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _TreeView__WEBPACK_IMPORTED_MODULE_0__["TreeView"]; });



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: TreeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["TreeView"]; });



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Folder":
/*!********************************************!*\
  !*** external "@material-ui/icons/Folder" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Folder");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map