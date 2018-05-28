import simpleActions from './simpleActions';
import { AddTicketState } from "../../store/AppState";
import { createReducer } from 'tquinlan1992-typescript-react-redux-utils';

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

export default createReducer<AddTicketState>(initialState, simpleActions);
