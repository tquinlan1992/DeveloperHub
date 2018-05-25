import { createReducer, getGenericActionCreatorWithReducerMethod } from '../util';
import { TicketList } from '../../store/AppState';
import setTickets from './simpleActions/setTickets';
import setShowAddTicketDialog from './simpleActions/setShowAddTicketDialog';
import { fetchProducts } from './thunkActions/fetchProducts';

export function getMakeStateTypeActionCreatorWithReducer(){ 
    return getGenericActionCreatorWithReducerMethod<TicketList>();
}

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

const actions = {
    setShowAddTicketDialog,
    setTickets
};

export const reducer = createReducer<TicketList>(initialState, actions);

export const simpleActions = {
    setShowAddTicketDialog: setShowAddTicketDialog.actionCreator,
    setTickets: setTickets.actionCreator,
};

export default {
    ...simpleActions,
    fetchProducts
};
