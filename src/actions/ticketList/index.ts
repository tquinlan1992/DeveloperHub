import { SimpleActionCreator } from '../util';
import { AppState, Ticket } from '../../store/AppState';
import { ThunkAction } from 'redux-thunk';
import { getRemoteDB } from '../../database/pouch';

export const actionTypes = {
    setShowAddTicketDialog: 'SET_SHOW_ADD_TICKET_DIALOG',
    setTickets: 'SET_TICKETS'
};

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

const setShowAddTicketDialog = SimpleActionCreator<SetShowAddTicketDialogParams>(actionTypes.setShowAddTicketDialog);

export interface SetTicketsAction {
    tickets: Ticket[];
}

const setTickets = SimpleActionCreator<SetTicketsAction>(actionTypes.setTickets);

export function fetchProducts(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        const tickets = await db.getTickets();
        dispatch(setTickets({ tickets: tickets as any }));
    };
}

export const simpleActions = {
    setShowAddTicketDialog,
    setTickets
};

export default {
    ...simpleActions,
    fetchProducts
};
