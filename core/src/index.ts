import reduxStore from './core/store';
import addTicketActionsReducers from './core/actions/addTicket';
import loadingActionsReducers from './core/actions/loading';
import routingActionsReducers from './core/actions/routing';
import ticketListActionsReducers from './core/actions/ticketList';

export { addTicketActionsReducers, loadingActionsReducers, routingActionsReducers, ticketListActionsReducers };
// export * from './core/actions';

export default reduxStore;
