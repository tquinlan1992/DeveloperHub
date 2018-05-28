import { AddTicketState } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";

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
