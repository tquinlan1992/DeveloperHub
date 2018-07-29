import * as exportTypes from '../exportTypes';
declare const _default: (prefix: string) => {
    setShowAddTicketDialog: {
        actionCreator: exportTypes.makeActionCreatorTypes.ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        reducer: exportTypes.makeActionCreatorTypes.StateTypeReducer<exportTypes.TicketList, exportTypes.SetShowAddTicketDialogParams>;
    };
    setTickets: {
        actionCreator: exportTypes.makeActionCreatorTypes.ActionCreator<exportTypes.SetTicketsAction>;
        reducer: exportTypes.makeActionCreatorTypes.StateTypeReducer<exportTypes.TicketList, exportTypes.SetTicketsAction>;
    };
};
export default _default;
