import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { AnyAction } from "redux";
import fetchTickets from "./fetchTickets";
import closetTicketDb from '../../thunkActions/database/closeTicket';

export default function closeTicket(id: string): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
        await dispatch(closetTicketDb(id));
        await dispatch(fetchTickets());
        } catch(e) {
            console.log('error closing ticket');
            throw e;
        }
    };
}
