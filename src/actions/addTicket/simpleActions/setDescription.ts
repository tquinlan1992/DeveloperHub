import { AddTicketState } from "../../../store/AppState";
import { makeActionCreatorWithReducer } from "tquinlan1992-typescript-react-redux-utils";

export interface SetDescriptionAction {
    value: string;
}

export default makeActionCreatorWithReducer<AddTicketState, SetDescriptionAction>(
    'SET_DESCRIPTION',
    (state, { value }: SetDescriptionAction) => {
        return {
            ...state,
            description: value
        };
    }
);
