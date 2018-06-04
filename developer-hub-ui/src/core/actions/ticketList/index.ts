import { TicketList } from '../../store/AppState';
import setTickets from './simpleActions/setTickets';
import setShowAddTicketDialog from './simpleActions/setShowAddTicketDialog';
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
};

export default {
    reducer: createReducer<TicketList>(initialState, simpleActions),
    actions: {
        ...getCreators(simpleActions),
        ...thunkActions
    }
};
