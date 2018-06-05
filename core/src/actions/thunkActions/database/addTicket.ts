import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { getRemoteDB } from "../../../database/pouch";
import { AnyAction } from "redux";
import fetchTickets from './fetchTickets';

export default function addTicket(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        const db = await getRemoteDB();
        const state = getState();
        await db.addTicket(state.core.addTicket);
        await dispatch(fetchTickets());
    };
}
