import { combineReducers, AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import addTicket from '@components/AddTicketDialog/redux';
import ticketList from '../../components/TicketList/redux';
import loading from '@components/Loading/redux';
import { routerReducer } from 'react-router-redux';

const coreReducer = combineReducers<AppState>({
    routing: routerReducer,
    addTicket,
    ticketList,
    loading
});

export const reducer = combineReducers<AppStateCore>({
    core: coreReducer
});
