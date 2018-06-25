import simpleActions from './simpleActions';
import { Loading } from "../../store/AppState";
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';
import * as exportTypes from './exportTypes';
exportTypes;

const initialState = true;

const loadingSimpleActions = simpleActions('Loading');

export default {
    reducer: createReducer<Loading>(initialState, loadingSimpleActions),
    actions: {
        ...getCreators(loadingSimpleActions),
        ...thunkActions
    }
};
