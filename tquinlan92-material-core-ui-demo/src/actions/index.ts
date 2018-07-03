import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import AppState from '../store/AppState';
import tagPicker from './tagPicker';
import { getActionsAndReducersFromCombinedActionReducer } from 'tquinlan92-typescript-redux-utils';

const actionsReducersTree = {
    tagPicker
};

const { actions, reducers } = getActionsAndReducersFromCombinedActionReducer(actionsReducersTree);

export const rootReducer = combineReducers<AppState>(reducers);

export default actions;
