import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import routing from './routing';
import addTicket from './addTicket';
import ticketList from './ticketList';
import loading from './loading';
import { getReducersFromCombinedActionReducer, getActionsAndReducersFromCombinedActionReducer } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';
import * as exportTypes from './exportTypes';
exportTypes;

const coreActionsReducersTree = {
    ticketList,
    addTicket,
    loading,
    routing
};

// export const coreReducer = combineReducers<AppState>(getReducersFromCombinedActionReducer(coreActionsReducersTree));
// const coreActions = getActionsFromCombinedActionReducer(coreActionsReducersTree);

const { actions: coreActions, reducers: coreReducerNotCombined } = getActionsAndReducersFromCombinedActionReducer(coreActionsReducersTree);

const coreReducer = combineReducers<AppState>(coreReducerNotCombined);

export { coreReducer };

const appActionReducersTree = {
    core: {
        reducer: coreReducer,
        actions: coreActions
    }
};

export const reducers = combineReducers<AppStateCore>(getReducersFromCombinedActionReducer(appActionReducersTree));

export default {
    thunkActions,
    ...coreActions
};
