import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppState } from '../store/AppState';
import navigationActions from './navigation';
import addTicketReducer, { actions as addTicketActions } from './addTicket';
import { reducer as ticketListReducer, actions as ticketListActions } from '../actions/ticketList';
import loadingReducer, { actions as loadingActions } from '../actions/loading';

export default {
    navigation: navigationActions,
    addTicket: addTicketActions,
    ticketList: ticketListActions,
    loading: loadingActions
};

export const reducers = combineReducers<AppState>({
    routing: routerReducer,
    ticketList: ticketListReducer,
    addTicket: addTicketReducer,
    loading: loadingReducer
});
