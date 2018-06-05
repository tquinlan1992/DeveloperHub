import { TicketList } from '../../../store';
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
makeActionCreatorTypes;

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

export default makeActionCreatorWithReducerWithPrefix<TicketList, SetShowAddTicketDialogParams>(
    'SET_SHOW_ADD_TICKET_DIALOG',
    (state, { value }: SetShowAddTicketDialogParams) => {
        return {
            ...state,
            showAddTicketDialog: value
        };
    }
);
