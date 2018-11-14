"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var tquinlan92_typescript_redux_utils_1 = require("tquinlan92-typescript-redux-utils");
var utils_1 = require("../../utils");
exports.default = tquinlan92_typescript_redux_utils_1.makeActionCreatorWithReducer('ON_PARENT_CLICK', function (state, _a) {
    var _id = _a._id, tagsFolders = _a.tagsFolders;
    return __assign({}, state, { currentParent: _id, currentTagsFolder: utils_1.getTagsFolderAtLevel({ tagsFolders: tagsFolders, parent: _id }), path: [_id].concat(state.path) });
});
