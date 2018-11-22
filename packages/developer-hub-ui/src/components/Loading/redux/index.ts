import simpleActions from './simpleActions';
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';

export type LoadingState = boolean;

const initialState = true;

const loadingSimpleActions = simpleActions('Loading');

export default {
    reducer: createReducer<LoadingState>(initialState, loadingSimpleActions),
    actions: {
        ...getCreators(loadingSimpleActions),
        ...thunkActions
    }
};
