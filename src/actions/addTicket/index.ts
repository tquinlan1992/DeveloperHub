import simpleActions from './simpleActions';
import { AddTicketState } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

const addTicketSimpleActions = simpleActions('ADD_TICKET');

export default createReducer<AddTicketState>(initialState, addTicketSimpleActions);

export const actions = {
    ...getCreators(addTicketSimpleActions),
    ...thunkActions
};
