import { makeActionCreatorWithReducer } from "tquinlan92-typescript-redux-utils";
import { TreeViewState, TagsFolders } from "../../types";
import { tail, head } from "lodash";
import { getTagsFolderAtLevel } from "../../utils";

interface OnBackClickAction {
    tagsFolders: TagsFolders;
}

export default makeActionCreatorWithReducer<TreeViewState, OnBackClickAction>(
    'ON_BACK_CLICK',
    (state, { tagsFolders }): TreeViewState => {
        const newPath = tail(state.path);
        const newParent = head(newPath) || null;
        return {
            ...state,
            currentParent: newParent,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders, parent: newParent }),
            path: newPath
        };
    }
);
