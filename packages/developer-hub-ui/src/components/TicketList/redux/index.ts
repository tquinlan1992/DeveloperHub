import { TicketList, AppStateCore } from '../../../headless/store';
import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';

export {
    AppStateCore
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
