import { makeActionCreatorWithReducer } from "tquinlan92-typescript-redux-utils";
import { TagsFolders, SelectedTags, TreeViewState } from "../../types";
import { getTagsFolderAtLevel } from "../../utils";

interface SetRootStateAction {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
}

export default makeActionCreatorWithReducer<TreeViewState | null, SetRootStateAction>(
    'SET_ROOT_STATE',
    (state, { tagsFolders, selectedTags }): TreeViewState => {
        return {
            currentlySelectedTags: selectedTags,
            currentParent: null,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders, parent: null }),
            path: []
        };
    }
);
