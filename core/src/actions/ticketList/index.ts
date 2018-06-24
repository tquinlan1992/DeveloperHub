import { TicketList, AppStateCore } from '../../store';
import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan1992-typescript-redux-utils';
import * as exportTypes from './exportTypes';
import thunkActions from './thunkActions';

export {
    exportTypes, AppStateCore
};

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

const ticketListActions = simpleActions('TicketList');

export default {
    reducer: createReducer<TicketList>(initialState, ticketListActions),
    actions: {
        ...getCreators(ticketListActions),
        ...thunkActions
    }
};
