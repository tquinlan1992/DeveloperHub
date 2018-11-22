import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import routing from './routing';
import addTicket from '@components/AddTicketDialog/redux';
import ticketList from '../../components/TicketList/redux';
import loading from '@components/Loading/redux';
import { getReducersFromCombinedActionReducer, getActionsAndReducersFromCombinedActionReducer } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';

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
const appActionReducersTree = {
    core: {
        reducer: coreReducer,
        actions: coreActions
    }
};

const reducers = combineReducers<AppStateCore>(getReducersFromCombinedActionReducer(appActionReducersTree));

export { coreReducer, reducers };

export default {
    thunkActions,
    ...coreActions
};
