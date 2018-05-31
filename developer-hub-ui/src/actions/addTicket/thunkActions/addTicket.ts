import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/AppState";
import { getRemoteDB } from "../../../database/pouch";
import { fetchProducts } from "../../ticketList/thunkActions/fetchProducts";
import { AnyAction } from "redux";

export default function addTicket(): ThunkAction<void, AppState, void, AnyAction> {
    return async function (dispatch, getState) {
        const db = await getRemoteDB();
        const state = getState();
        await db.addTicket(state.addTicket);
        await dispatch(fetchProducts());
    };
}
