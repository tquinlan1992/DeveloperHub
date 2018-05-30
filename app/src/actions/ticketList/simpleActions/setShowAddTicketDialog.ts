import { TicketList } from '../../../store/AppState.d';
import { makeActionCreatorWithReducer } from "tquinlan1992-typescript-react-redux-utils";

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

export default makeActionCreatorWithReducer<TicketList, SetShowAddTicketDialogParams>(
    'SET_SHOW_ADD_TICKET_DIALOG',
    (state, { value }: SetShowAddTicketDialogParams) => {
        return {
            ...state,
            showAddTicketDialog: value
        };
    }
);
