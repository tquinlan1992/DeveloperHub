import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';

export interface AddTicketState {
    storyPoint: null | number;
    description: string;
    title: string;
}

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

const addTicketSimpleActions = simpleActions('ADD_TICKET');

export default {
    reducer: createReducer<AddTicketState>(initialState, addTicketSimpleActions),
    actions: {
        ...getCreators(addTicketSimpleActions),
        ...thunkActions
    }
};
