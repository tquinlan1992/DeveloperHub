import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import routing from './routing';
import addTicket from '@components/AddTicketDialog/redux';
import ticketList from '../../components/TicketList/redux';
import loading from '@components/Loading/redux';
import { getActionsAndReducersFromCombinedActionReducer } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';

const coreActionsReducersTree = {
    loading,
    routing
};

const { actions: coreActions, reducers: reducerNotCombined } = getActionsAndReducersFromCombinedActionReducer(coreActionsReducersTree);

const coreReducer = combineReducers<AppState>({
    ...reducerNotCombined,
    addTicket,
    ticketList
});

const reducer = combineReducers<AppStateCore>({
    core: coreReducer
});

export { coreReducer, reducer };

export default {
    thunkActions,
    ...coreActions
};
