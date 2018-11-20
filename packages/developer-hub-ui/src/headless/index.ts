import reduxStore, { AppStateCore, AppState } from './store';
import { Ticket } from '@database/PouchWrapper';
import actions from './actions';

export { AppStateCore, Ticket, AppState, actions };

export default reduxStore;
