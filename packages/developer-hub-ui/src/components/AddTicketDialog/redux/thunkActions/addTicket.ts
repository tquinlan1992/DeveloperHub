import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "@headless/store";
import { AnyAction } from "redux";
import addTicket from '@headless/actions/thunkActions/database/addTicket';
import { actions as ticketListActions } from '@components/TicketList/redux';

export default function(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        const state = getState();
        try {
            await dispatch(addTicket(state.core.addTicket));
            await dispatch(ticketListActions.fetchTickets());
        } catch (e) {
            console.log('error adding ticket');
            throw e;
        }
    };
}
