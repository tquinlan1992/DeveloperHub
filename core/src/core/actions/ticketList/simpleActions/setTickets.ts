import { Ticket, TicketList } from "../../../store/AppState";
import { makeActionCreatorWithReducer } from "tquinlan1992-typescript-react-redux-utils";

export interface SetTicketsAction {
    tickets: Ticket[];
}

export default makeActionCreatorWithReducer<TicketList, SetTicketsAction>(
    'SET_TICKETS',
    (state, { tickets }: SetTicketsAction) => {
        return {
            ...state,
            tickets: tickets
        };
    }
);
