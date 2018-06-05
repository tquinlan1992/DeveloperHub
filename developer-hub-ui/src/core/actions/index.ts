import { combineReducers } from 'redux';
import { 
    ticketListActionsReducers as ticketList, 
    routingActionsReducers as routing, 
    addTicketActionsReducers as addTicket, 
    loadingActionsReducers as loading,
    thunkActions,
    AppStateCore, 
    AppState
} from 'core';
import { getReducersFromCombinedActionReducer, getActionsFromCombinedActionReducer } from 'tquinlan1992-typescript-react-redux-utils';

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

export const reducers = combineReducers<AppStateCore>(getReducersFromCombinedActionReducer(appActionReducersTree));

export default {
    ...coreActions,
    thunkActions
};
