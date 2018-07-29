import { TicketList, AppStateCore } from '../../store';
import * as exportTypes from './exportTypes';
export { exportTypes, AppStateCore };
declare const _default: {
    reducer: (state: TicketList | undefined, incomingAction: exportTypes.makeActionCreatorTypes.Action<exportTypes.makeActionCreatorTypes.AnyAction>) => TicketList;
    actions: {
        fetchTickets: typeof import("./thunkActions/fetchTickets").default;
        deleteTicket: typeof import("./thunkActions/deleteTicket").default;
        setShowAddTicketDialog: exportTypes.makeActionCreatorTypes.ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        setTickets: exportTypes.makeActionCreatorTypes.ActionCreator<exportTypes.SetTicketsAction>;
    };
};
export default _default;
