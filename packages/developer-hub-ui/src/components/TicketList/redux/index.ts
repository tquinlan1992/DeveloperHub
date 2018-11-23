import thunkActions from './thunkActions';
import { Ticket } from '@database/PouchWrapper';
import { makeSimpleReducer } from 'tquinlan92-typescript-redux-utils';

export type Tickets = Ticket[];

export interface TicketList {
    showAddTicketDialog: boolean;
    tickets: Ticket[];
}

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

const { actions: simpleActions, reducer } = makeSimpleReducer<TicketList>('TicketList', initialState);

export const actions = {
    ...simpleActions,
    ...thunkActions
};

export default reducer;
