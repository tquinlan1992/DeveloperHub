import { TicketList } from '../../store/AppState';
import setTickets from './simpleActions/setTickets';
import setShowAddTicketDialog from './simpleActions/setShowAddTicketDialog';
import { fetchProducts } from './thunkActions/fetchProducts';
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';

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

export const actions = {
    ...getCreators(simpleActions),
    ...thunkActions
};
