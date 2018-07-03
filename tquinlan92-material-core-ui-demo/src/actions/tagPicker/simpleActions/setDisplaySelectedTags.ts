import { TagPicker } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface OnTagSelectionChangeAction {
    value: boolean;
}

export default makeActionCreatorWithReducerWithPrefix<TagPicker, OnTagSelectionChangeAction>(
    'SET_DISPLAY_SELECTED_TAGS',
    (state, { value }): TagPicker => {
        return {
            ...state,
            displaySelectedTags: value
        };
    }
);
