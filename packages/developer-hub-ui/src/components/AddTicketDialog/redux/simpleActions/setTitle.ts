import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";
import { AddTicketState } from "@headless/store";

export interface SetTitleAction {
    value: string;
}

export default makeActionCreatorWithReducerWithPrefix<AddTicketState, SetTitleAction>(
    'SET_TITLE',
    (state, { value }) => {
        return {
            ...state,
            title: value
        };
    }
);
