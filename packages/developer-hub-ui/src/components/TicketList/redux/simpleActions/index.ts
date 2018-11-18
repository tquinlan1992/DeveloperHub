import setShowAddTicketDialog from "./setShowAddTicketDialog";
import setTickets from './setTickets';

export default (prefix: string) => {
    return {
        setShowAddTicketDialog: setShowAddTicketDialog(prefix),
        setTickets: setTickets(prefix),
    };
};
