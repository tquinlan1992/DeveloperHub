import simpleActions from './simpleActions';
import { AddTicketState } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

export default createReducer<AddTicketState>(initialState, simpleActions);

export const actions = {
    ...getCreators(simpleActions),
    ...thunkActions
};
