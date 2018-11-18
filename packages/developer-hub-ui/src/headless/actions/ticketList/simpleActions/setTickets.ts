import { Ticket, TicketList } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
makeActionCreatorTypes;

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
