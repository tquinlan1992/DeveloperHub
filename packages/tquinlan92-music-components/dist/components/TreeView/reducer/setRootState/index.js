"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tquinlan92_typescript_redux_utils_1 = require("tquinlan92-typescript-redux-utils");
var utils_1 = require("../../utils");
exports.default = tquinlan92_typescript_redux_utils_1.makeActionCreatorWithReducer('SET_ROOT_STATE', function (state, _a) {
    var tagsFolders = _a.tagsFolders, selectedTags = _a.selectedTags;
    return {
        currentlySelectedTags: selectedTags,
        currentParent: null,
        currentTagsFolder: utils_1.getTagsFolderAtLevel({ tagsFolders: tagsFolders, parent: null }),
        path: []
    };
});
