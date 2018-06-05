import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { getRemoteDB } from "../../../database/pouch";
import ticketList from "../../ticketList";
import { AnyAction } from "redux";

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        const tickets = await db.getTickets();
        dispatch(ticketList.actions.setTickets({ tickets: tickets as any }));
    };
}
