import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { AnyAction } from "redux";
import addTicket from '../../thunkActions/database/addTicket';
import fetchTickets from '../../thunkActions/database/fetchTickets';

export default function(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        const state = getState();
        try {
            await dispatch(addTicket(state.core.addTicket));
            await dispatch(fetchTickets());
        } catch (e) {
            throw e;
        }
    };
}
