import { Ticket, TicketList } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetTicketsAction {
    tickets: Ticket[];
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetTicketsAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<TicketList, SetTicketsAction>;
};
export default _default;
