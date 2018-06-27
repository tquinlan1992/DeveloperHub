import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import ticketListActionReducers from "../";
import { AnyAction } from "redux";
import fetchTicketsThunk from '../../thunkActions/database/fetchTickets';

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
            const tickets = await dispatch(fetchTicketsThunk());
            dispatch(ticketListActionReducers.actions.setTickets({ tickets: tickets as any }));
        } catch (e) {
            console.log('error');
            throw e;
        }
    };
}
