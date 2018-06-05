import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";
import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils';
makeActionCreatorTypes;

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
