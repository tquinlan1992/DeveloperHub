import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import AppState from '../store/AppState';
import label from './label';
import { getActionsAndReducersFromCombinedActionReducer } from '../../../tquinlan92-typescript-redux-utils/dist';

const actionsReducersTree = {
    label
};

const { actions, reducers } = getActionsAndReducersFromCombinedActionReducer(actionsReducersTree);

export const rootReducer = combineReducers<AppState>(reducers);

export default actions;
