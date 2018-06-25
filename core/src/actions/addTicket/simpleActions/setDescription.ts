import { AddTicketState } from "../../../store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";
import * as makeActionCreatorTypes from '../../utils/exportTypes'; 
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
