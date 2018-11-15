"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTagsFolderAtLevel(_a) {
    var tagsFolders = _a.tagsFolders, parent = _a.parent;
    return tagsFolders.filter(function (tagFolder) {
        return tagFolder.parent === parent;
    });
}
exports.getTagsFolderAtLevel = getTagsFolderAtLevel;
