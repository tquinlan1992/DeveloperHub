import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "@headless/store";
import { actions as ticketListActions } from "../";
import { AnyAction } from "redux";
import fetchTicketsThunk from '@headless/actions/thunkActions/database/fetchTickets';

export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
            const tickets = await dispatch(fetchTicketsThunk());
            dispatch(ticketListActions.tickets(tickets));
        } catch (e) {
            console.log('error');
            throw e;
        }
    };
}
