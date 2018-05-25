import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/AppState";
import { getRemoteDB } from "../../../database/pouch";
import setTickets from "../simpleActions/setTickets";

export function fetchProducts(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        const tickets = await db.getTickets();
        dispatch(setTickets.actionCreator({ tickets: tickets as any }));
    };
}
