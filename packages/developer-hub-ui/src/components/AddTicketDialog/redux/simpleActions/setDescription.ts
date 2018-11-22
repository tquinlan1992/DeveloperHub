import { AddTicketState } from "@headless/store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface SetDescriptionAction {
    value: string;
}

export default makeActionCreatorWithReducerWithPrefix<AddTicketState, SetDescriptionAction>(
    'SET_DESCRIPTION',
    (state, { value }: SetDescriptionAction) => {
        return {
            ...state,
            description: value
        };
    }
);
