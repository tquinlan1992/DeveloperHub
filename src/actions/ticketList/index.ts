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

export const simpleActions = {
    setShowAddTicketDialog,
    setTickets
};

export const reducer = createReducer<TicketList>(initialState, simpleActions);

export const thunkActions = {
    fetchProducts
};
