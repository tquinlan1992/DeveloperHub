import { TicketList } from '../../store';
import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import * as exportTypes from './exportTypes';
exportTypes;

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

const ticketListActions = simpleActions('TicketList');

export default {
    reducer: createReducer<TicketList>(initialState, ticketListActions),
    actions: {
        ...getCreators(ticketListActions),
    }
};
