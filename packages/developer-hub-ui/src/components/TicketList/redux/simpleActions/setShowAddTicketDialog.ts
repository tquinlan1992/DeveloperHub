import { TicketList } from '../';
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

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
