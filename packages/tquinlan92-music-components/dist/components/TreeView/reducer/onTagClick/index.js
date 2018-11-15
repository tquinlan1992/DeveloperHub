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
exports.default = tquinlan92_typescript_redux_utils_1.makeActionCreatorWithReducer('ON_TAG_CLICK', function (state, _a) {
    var _id = _a._id, checked = _a.checked;
    if (checked && !state.currentlySelectedTags.includes(_id)) {
        var newCurrentlySelectedTags = state.currentlySelectedTags.concat([_id]);
        return __assign({}, state, { currentlySelectedTags: newCurrentlySelectedTags });
    }
    else if (!checked) {
        var newCurrentlySelectedTags = state.currentlySelectedTags.filter(function (tag) {
            return tag !== _id;
        });
        return __assign({}, state, { currentlySelectedTags: newCurrentlySelectedTags });
    }
    else {
        return state;
    }
});
