import simpleActions from './simpleActions';
import { AddTicketState, AppStateCore } from "../../store";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import * as exportTypes from './exportTypes';
import thunkActions from './thunkActions';
export { exportTypes, AppStateCore };

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
