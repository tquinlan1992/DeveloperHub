import { TagPicker } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface OnTagSelectionChangeAction {
    selectedTags: string[];
}

export default makeActionCreatorWithReducerWithPrefix<TagPicker, OnTagSelectionChangeAction>(
    'ON-TAG-SELECTION-CHANGE-ACTION',
    (state, { selectedTags }): TagPicker => {
        console.log('selectedTags', selectedTags);
        return {
            ...state,
            selectedTags
        };
    }
);
