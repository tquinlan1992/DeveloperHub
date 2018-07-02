import TagPicker from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface OnTagSelectionChangeAction {
    value: [string];
}

export default makeActionCreatorWithReducerWithPrefix<TagPicker, OnTagSelectionChangeAction>(
    'ON-TAG-SELECTION-CHANGE-ACTION',
    (state, { value }: OnTagSelectionChangeAction) => {
        return {
            ...state,
            description: value
        };
    }
);
