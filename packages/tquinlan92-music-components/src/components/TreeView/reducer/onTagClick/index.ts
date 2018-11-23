import { makeActionCreatorWithReducer } from "tquinlan92-typescript-redux-utils";
import { TreeViewState } from "../../types";

interface OnTagClickAction {
    _id: string;
    checked: boolean;
}

export default makeActionCreatorWithReducer<TreeViewState, OnTagClickAction>(
    'ON_TAG_CLICK',
    (state, { _id, checked }): TreeViewState => {
        if (checked && !state.currentlySelectedTags.includes(_id)) {
            const newCurrentlySelectedTags = [...state.currentlySelectedTags, _id];
            return {
                ...state,
                currentlySelectedTags: newCurrentlySelectedTags
            };
        } else if (!checked) {
            const newCurrentlySelectedTags = state.currentlySelectedTags.filter(tag => {
                return tag !== _id;
            });
            return {
                ...state,
                currentlySelectedTags: newCurrentlySelectedTags
            };
        } else {
            return state;
        }
    }
);
