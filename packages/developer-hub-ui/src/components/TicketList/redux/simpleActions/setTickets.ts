import { TicketList } from "../";
import { Ticket } from '@database/PouchWrapper';
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface SetTicketsAction {
    tickets: Ticket[];
}

export default makeActionCreatorWithReducerWithPrefix<TicketList, SetTicketsAction>(
    'SET_TICKETS',
    (state, { tickets }: SetTicketsAction) => {
        console.log('setting tickets');
        return {
            ...state,
            tickets: tickets
        };
    }
);
