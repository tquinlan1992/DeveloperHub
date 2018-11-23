import { Label } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface OnTagSelectionChangeAction {
    value: string;
}

export default makeActionCreatorWithReducerWithPrefix<Label, OnTagSelectionChangeAction>(
    'ON-TAG-SELECTION-CHANGE-ACTION',
    (state, { value }): Label => {
        return {
            ...state,
            label: value
        };
    }
);
