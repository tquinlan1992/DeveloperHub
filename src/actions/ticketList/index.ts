import { createReducer, getGenericActionCreatorWithReducerMethod } from '../util';
import { AppState, TicketList } from '../../store/AppState';
import { ThunkAction } from 'redux-thunk';
import { getRemoteDB } from '../../database/pouch';
import setTickets from './setTickets';
import setShowAddTicketDialog from './setShowAddTicketDialog';

export function getMakeStateTypeActionCreatorWithReducer(){ 
    return getGenericActionCreatorWithReducerMethod<TicketList>();
}

export function fetchProducts(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        const tickets = await db.getTickets();
        dispatch(setTickets.actionCreator({ tickets: tickets as any }));
    };
}

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

export const reducer = createReducer<TicketList>(initialState, [
    setShowAddTicketDialog,
    setTickets
]);

export const simpleActions = {
    setShowAddTicketDialog: setShowAddTicketDialog.actionCreator,
    setTickets: setTickets.actionCreator,

};

export default {
    ...simpleActions,
    fetchProducts
};
