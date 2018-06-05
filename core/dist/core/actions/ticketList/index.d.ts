import { TicketList } from '../../store';
import * as exportTypes from './exportTypes';
declare const _default: {
    reducer: (state: TicketList | undefined, incomingAction: exportTypes.makeActionCreatorTypes.Action<exportTypes.makeActionCreatorTypes.AnyAction>) => TicketList;
    actions: {
        setShowAddTicketDialog: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        setTickets: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exportTypes.SetTicketsAction>;
    };
};
export default _default;
