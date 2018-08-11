import simpleActions from './simpleActions';
import { Label } from '../../store/AppState';
import { createReducer, getCreators as getActions } from 'tquinlan92-typescript-redux-utils';

const initialState = {
    label: 'testLabel'
};

const namedActionReducers = simpleActions('TAG-PICKER');

export default {
    reducer: createReducer<Label>(initialState, namedActionReducers),
    actions: {
        ...getActions(namedActionReducers),
    }
};
