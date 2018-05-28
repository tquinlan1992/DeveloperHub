import { getCreators } from 'tquinlan1992-typescript-react-redux-utils';

import { simpleActions as ticketListSimpleActions } from './ticketList';
import addTicketSimpleActions from './addTicket/simpleActions';

export default getCreators({
    ...ticketListSimpleActions,
    ...addTicketSimpleActions
});
