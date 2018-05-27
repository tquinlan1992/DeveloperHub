import { thunkActions as ticketListThunkActions } from './ticketList';
import addTicketThunkActions from './addTicket/thunkActions';

export default {
    ...ticketListThunkActions,
    ...addTicketThunkActions
};
