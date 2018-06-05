import setShowAddTicketDialog from "./setShowAddTicketDialog";
import setTickets from './setTickets';
import * as exportTypes from '../exportTypes';
exportTypes;

export default (prefix: string) => {
    return {
        setShowAddTicketDialog: setShowAddTicketDialog(prefix),
        setTickets: setTickets(prefix),
    };
};
