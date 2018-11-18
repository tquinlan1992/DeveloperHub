import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { AnyAction } from "redux";
import fetchTickets from "./fetchTickets";
import addTicketToSprintThunk from '../../thunkActions/database/addTicketToSprint';

export default function addTicketToSprint(id: string): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch) {
        try {
        await dispatch(addTicketToSprintThunk(id));
        await dispatch(fetchTickets());
        } catch(e) {
            console.log('error adding ticket');
            throw e;
        }
    };
}
