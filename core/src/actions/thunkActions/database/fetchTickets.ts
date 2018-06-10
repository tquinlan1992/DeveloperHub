import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { getRemoteDB } from "../../../database/pouch";
import ticketList from "../../ticketList";
import { AnyAction } from "redux";

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        console.log('fetch tickets');
        try {
            const db = await getRemoteDB();
            const tickets = await db.getTickets();
            console.log('tickets', tickets);
            dispatch(ticketList.actions.setTickets({ tickets: tickets as any }));
        } catch (e) {
            console.log('error');
            throw e;
        }
    };
}
