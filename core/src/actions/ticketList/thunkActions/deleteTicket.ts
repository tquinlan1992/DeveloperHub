import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { AnyAction } from "redux";
import fetchTickets from "./fetchTickets";
import deleteTicketThunk from '../../thunkActions/database/deleteTicket';

export default function deleteTicket(id: string): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
        await dispatch(deleteTicketThunk(id));
        await dispatch(fetchTickets());
        } catch(e) {
            console.log('error deleting ticket');
            throw e;
        }
    };
}