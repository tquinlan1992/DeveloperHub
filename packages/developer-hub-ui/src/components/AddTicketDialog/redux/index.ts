import { makeActionsFromState } from 'tquinlan92-typescript-redux-utils';
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

const creatorsReducers = makeActionsFromState<AddTicketState>('AddTicketDialog', initialState);

const { actions: simpleActions, reducer } = creatorsReducers;

export const actions = {
    ...simpleActions,
    ...thunkActions
};

export default reducer;
