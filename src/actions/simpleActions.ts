import { simpleActions as ticketListSimpleActions } from './ticketList';
import addTicketSimpleActions from './addTicket/simpleActions';
import { getCreators } from './util';

export default getCreators({
    ...ticketListSimpleActions,
    ...addTicketSimpleActions
});
