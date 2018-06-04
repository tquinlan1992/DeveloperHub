import simpleActions from './simpleActions';
import { AddTicketState } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';

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
