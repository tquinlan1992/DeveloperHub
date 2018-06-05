import { TicketList } from '../../store';
import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import * as exportTypes from './exportTypes';
exportTypes;

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

// export const simpleActions = {
//     setShowAddTicketDialog,
//     setTickets
// };

// export const reducer = createReducer<TicketList>(initialState, simpleActions);

// export const thunkActions = {
// };

// export default {
//     reducer: createReducer<TicketList>(initialState, simpleActions),
//     actions: {
//         ...getCreators(simpleActions),
//         ...thunkActions
//     }
// };

const ticketListActions = simpleActions('TicketList');

export default {
    reducer: createReducer<TicketList>(initialState, ticketListActions),
    actions: {
        ...getCreators(ticketListActions),
    }
};
