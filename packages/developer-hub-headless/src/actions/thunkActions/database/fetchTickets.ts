import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { getRemoteDB } from "../../../database/pouch";
import { AnyAction } from "redux";

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        console.log('fetch tickets');
        try {
            const db = await getRemoteDB();
            const tickets = await db.getTickets();
            return tickets;
        } catch (e) {
            console.log('error');
            throw e;
        }
    };
}
