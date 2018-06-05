import simpleActions from './simpleActions';
import { AddTicketState } from "../../store";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import * as exports from './exportTypes';
exports;

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
    }
};
