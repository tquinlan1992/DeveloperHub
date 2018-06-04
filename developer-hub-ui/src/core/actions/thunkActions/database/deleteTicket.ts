import { ThunkAction } from "redux-thunk";
import AppState from "../../../store/AppState";
import { getRemoteDB } from "../../../database/pouch";
import { AnyAction } from "redux";
import fetchTickets from "./fetchTickets";

export default function deleteTicket(id: string): ThunkAction<void, AppState, void, AnyAction> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.deleteTicket(id);
        await dispatch(fetchTickets());
    };
}
