import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppState } from '../store/AppState';
import navigationActions from './navigation';
import addTicketReducer, { actions as addTicketActions } from './addTicket';
import { reducer as ticketListReducer, actions as ticketListActions } from '../actions/ticketList';

const actions = {
    navigation: navigationActions,
    addTicket: {
        ...addTicketActions
    },
    ticketList: {
        ...ticketListActions
    }
};

export const reducers = combineReducers<AppState>({
    router: routerReducer,
    ticketList: ticketListReducer,
    addTicket: addTicketReducer
});

export default actions;
