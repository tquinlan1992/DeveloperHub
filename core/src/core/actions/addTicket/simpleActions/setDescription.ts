import { AddTicketState } from "../../../store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";
import * as makeActionCreatorTypes from '../../utils'; 
makeActionCreatorTypes;

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
