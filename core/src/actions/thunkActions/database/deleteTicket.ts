import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { getRemoteDB } from "../../../database/pouch";
import { AnyAction } from "redux";

export default function deleteTicket(id: string): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.deleteTicket(id);
    };
}
