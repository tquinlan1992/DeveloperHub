import { makeActionCreatorWithReducer } from "tquinlan1992-typescript-react-redux-utils";
import { AddTicketState } from "../../../store/AppState";

export interface SetTitleAction {
    value: string;
}

export default makeActionCreatorWithReducer<AddTicketState, SetTitleAction>(
    'SET_TITLE',
    (state, { value }) => {
        return {
            ...state,
            title: value
        };
    }
);
