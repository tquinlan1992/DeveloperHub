import { Ticket, TicketList } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetTicketsAction {
    tickets: Ticket[];
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetTicketsAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<TicketList, SetTicketsAction>;
};
export default _default;
