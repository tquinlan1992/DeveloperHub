import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/AppState";
import { getRemoteDB } from "../../../database/pouch";
import { fetchProducts } from "../../ticketList/thunkActions/fetchProducts";

export default function deleteTicket(id: string): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.deleteTicket(id);
        await dispatch(fetchProducts());
    };
}
