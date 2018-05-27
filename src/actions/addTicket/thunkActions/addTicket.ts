import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/AppState";
import { getRemoteDB } from "../../../database/pouch";
import { fetchProducts } from "../../ticketList/thunkActions/fetchProducts";

export default function addTicket(): ThunkAction<void, AppState, void> {
    return async function (dispatch) {
        const db = await getRemoteDB();
        await db.addTicket({ title: 'new ticket' });
        await dispatch(fetchProducts());
    };
}
