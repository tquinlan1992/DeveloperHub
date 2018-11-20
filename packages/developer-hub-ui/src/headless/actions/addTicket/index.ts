import simpleActions from './simpleActions';
import { AppStateCore } from "../../store";
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import * as exportTypes from './exportTypes';
import thunkActions from './thunkActions';
export { exportTypes, AppStateCore };

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
