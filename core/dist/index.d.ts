import reduxStore, { AppStateCore, Ticket, AppState } from './core/store';
import addTicketActionsReducers from './core/actions/addTicket';
import loadingActionsReducers from './core/actions/loading';
import routingActionsReducers from './core/actions/routing';
import ticketListActionsReducers from './core/actions/ticketList';
import thunkActions from './core/actions/thunkActions';
export { addTicketActionsReducers, loadingActionsReducers, routingActionsReducers, ticketListActionsReducers, thunkActions, AppStateCore, Ticket, AppState };
export default reduxStore;
