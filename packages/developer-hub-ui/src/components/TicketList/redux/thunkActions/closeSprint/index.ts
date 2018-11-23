import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "@headless/store";
import { AnyAction } from "redux";
import { getRemoteDB } from "@headless/database/pouch";
import fetchTickets from "../fetchTickets";

function closeSprintTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        try {
            const db = await getRemoteDB();
            const state = getState();
            const closedSprintTickets = state.core.ticketList.sprintTickets.filter(sprintTicket => {
                return sprintTicket.closed;
            });
            const ids = closedSprintTickets.map(ticket => {
                return ticket._id;
            });
            await db.closeTicketsWithSprintID({ids, sprintId: 'sprintIdNew'});
            return;
        } catch (e) {
            console.log('error closing sprint');
            throw e;
        }
    };
}

export default function closeSprint(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        try {
            await dispatch(closeSprintTickets());
            await dispatch(fetchTickets());
        } catch (e) {
            console.log('error closing sprint');
            throw e;
        }
    };
}
