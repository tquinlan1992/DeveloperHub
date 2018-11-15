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
var lodash_1 = require("lodash");
var utils_1 = require("../../utils");
exports.default = tquinlan92_typescript_redux_utils_1.makeActionCreatorWithReducer('ON_BACK_CLICK', function (state, _a) {
    var tagsFolders = _a.tagsFolders;
    var newPath = lodash_1.tail(state.path);
    var newParent = lodash_1.head(newPath) || null;
    return __assign({}, state, { currentParent: newParent, currentTagsFolder: utils_1.getTagsFolderAtLevel({ tagsFolders: tagsFolders, parent: newParent }), path: newPath });
});
