import { combineReducers } from 'redux';
import CoreAppState, { AppState } from '../store/AppState';
import routing from './routing';
import addTicket from './addTicket';
import ticketList from '../actions/ticketList';
import loading from '../actions/loading';
import { getReducersFromCombinedActionReducer, getActionsFromCombinedActionReducer } from 'tquinlan1992-typescript-react-redux-utils';
import thunkActions from './thunkActions';

const coreActionsReducersTree = {
    ticketList,
    routing,
    addTicket,
    loading
};

export const coreReducer = combineReducers<AppState>(getReducersFromCombinedActionReducer(coreActionsReducersTree));
const coreActions = getActionsFromCombinedActionReducer(coreActionsReducersTree);

const appActionReducersTree = {
    core: {
        reducer: coreReducer,
        actions: coreActions
    }
};

export const reducers = combineReducers<CoreAppState>(getReducersFromCombinedActionReducer(appActionReducersTree));

export default {
    ...coreActions,
    thunkActions
};
