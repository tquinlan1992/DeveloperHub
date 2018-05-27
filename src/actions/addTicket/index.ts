import { createReducer } from "../util";
import simpleActions from './simpleActions';
import { AddTicketState } from "../../store/AppState";

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

export default createReducer<AddTicketState>(initialState, simpleActions);
