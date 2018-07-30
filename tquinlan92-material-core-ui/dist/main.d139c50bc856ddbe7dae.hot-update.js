webpackHotUpdate("main",{

/***/ "./components/TreeView/index.tsx":
/*!***************************************!*\
  !*** ./components/TreeView/index.tsx ***!
  \***************************************/
/*! exports provided: exportTypes, TreeView */
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
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./components/TreeView/reducer/index.ts");
/* harmony import */ var _exportTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exportTypes */ "./components/TreeView/exportTypes.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "exportTypes", function() { return _exportTypes__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();







function getFolderListItem(_a) {
    var folder = _a.folder,
        onParentClick = _a.onParentClick;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { key: folder._id, onClick: function () {
            return onParentClick({ _id: folder._id });
        }, button: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: folder.name }));
}
function getTagListItem(_a) {
    var tag = _a.tag,
        onTagClick = _a.onTagClick,
        checked = _a.checked;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { key: tag._id, button: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { checked: checked, tabIndex: -1, disableRipple: true, onChange: function (event, checked) {
            return onTagClick({ _id: tag._id, checked: checked });
        } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: tag.name }));
}
function getTagListItems(_a) {
    var tagsFolders = _a.tagsFolders,
        currentlySelectedTags = _a.currentlySelectedTags,
        onTagClick = _a.onTagClick;
    var tags = tagsFolders.filter(function (tagFolder) {
        return !tagFolder.isFolder;
    });
    return tags.map(function (tag) {
        var checked = currentlySelectedTags.includes(tag._id);
        return getTagListItem({ tag: tag, onTagClick: onTagClick, checked: checked });
    });
}
function getFolderListItems(_a) {
    var tagsFolders = _a.tagsFolders,
        onParentClick = _a.onParentClick;
    var folders = tagsFolders.filter(function (tagFolder) {
        return tagFolder.isFolder;
    });
    return folders.map(function (folder) {
        return getFolderListItem({ folder: folder, onParentClick: onParentClick });
    });
}
function getParentName(_a) {
    var tagsFolders = _a.tagsFolders,
        parent = _a.parent;
    if (!parent) {
        return "Root:";
    }
    var parentInfo = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(tagsFolders, function (tagFolder) {
        return tagFolder._id === parent;
    });
    console.log('parentInfo', parentInfo);
    return parentInfo ? parentInfo.name : "no folder name";
}
function getListForTagsFolders(_a) {
    var tagsFolders = _a.tagsFolders,
        parent = _a.parent,
        onTagClick = _a.onTagClick,
        currentlySelectedTags = _a.currentlySelectedTags,
        onParentClick = _a.onParentClick;
    var folderListItems = getFolderListItems({ tagsFolders: tagsFolders, onParentClick: onParentClick });
    var tagListItems = getTagListItems({ tagsFolders: tagsFolders, currentlySelectedTags: currentlySelectedTags, onTagClick: onTagClick });
    var subheader = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListSubheader"], { component: "div" }, parent);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], { component: "nav", subheader: subheader }, folderListItems, tagListItems);
}
var TreeView = function (_super) {
    __extends(TreeView, _super);
    function TreeView(props) {
        var _this = _super.call(this, props) || this;
        var action = _reducer__WEBPACK_IMPORTED_MODULE_3__["setRootStateActionReducer"].actionCreator({ tagsFolders: _this.props.tagsFolders, selectedTags: _this.props.selectedTags }).payload;
        var newState = _reducer__WEBPACK_IMPORTED_MODULE_3__["setRootStateActionReducer"].reducer(null, action);
        _this.state = newState;
        return _this;
    }
    TreeView.prototype.onTagClick = function (_a) {
        var _id = _a._id,
            checked = _a.checked;
        var action = _reducer__WEBPACK_IMPORTED_MODULE_3__["onTagClickActionReducer"].actionCreator({ _id: _id, checked: checked }).payload;
        var newState = _reducer__WEBPACK_IMPORTED_MODULE_3__["onTagClickActionReducer"].reducer(this.state, action);
        this.props.onTagSelectionChange(newState.currentlySelectedTags);
        this.setState(newState);
    };
    TreeView.prototype.onParentClick = function (_a) {
        var _id = _a._id;
        var action = _reducer__WEBPACK_IMPORTED_MODULE_3__["onParentClickActionReducer"].actionCreator({ _id: _id, tagsFolders: this.props.tagsFolders }).payload;
        var newState = _reducer__WEBPACK_IMPORTED_MODULE_3__["onParentClickActionReducer"].reducer(this.state, action);
        this.setState(newState);
    };
    TreeView.prototype.onBackClick = function () {
        var action = _reducer__WEBPACK_IMPORTED_MODULE_3__["onBackClickActionReducer"].actionCreator({ tagsFolders: this.props.tagsFolders }).payload;
        var newState = _reducer__WEBPACK_IMPORTED_MODULE_3__["onBackClickActionReducer"].reducer(this.state, action);
        this.setState(newState);
    };
    TreeView.prototype.render = function () {
        var backButton = !this.state.currentParent ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: this.onBackClick.bind(this) }, "Back");
        var parent = getParentName({ tagsFolders: this.props.tagsFolders, parent: this.state.currentParent });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, backButton, getListForTagsFolders({
            tagsFolders: this.state.currentTagsFolder,
            parent: parent,
            onTagClick: this.onTagClick.bind(this),
            onParentClick: this.onParentClick.bind(this),
            currentlySelectedTags: this.state.currentlySelectedTags
        }));
    };
    return TreeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


/***/ })

})
//# sourceMappingURL=main.d139c50bc856ddbe7dae.hot-update.js.map