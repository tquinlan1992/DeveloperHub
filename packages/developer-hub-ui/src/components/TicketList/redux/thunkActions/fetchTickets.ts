import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "@headless/store";
import { actions as ticketListActions } from "../";
import { AnyAction } from "redux";
import { getRemoteDB } from "@headless/database/pouch";

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
            const db = await getRemoteDB();
            const tickets = await db.getTickets();
            dispatch(ticketListActions.set({tickets}));
        } catch (e) {
            console.log('error');
            throw e;
        }
    };
}
