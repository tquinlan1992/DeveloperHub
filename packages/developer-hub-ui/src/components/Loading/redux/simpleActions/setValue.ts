import { LoadingState } from "../";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";
export interface SetValueAction {
    value: boolean;
}

export default makeActionCreatorWithReducerWithPrefix<LoadingState, SetValueAction>(
    'SET_VALUE',
    (state, { value }): LoadingState => {
        return value;
    }
);
