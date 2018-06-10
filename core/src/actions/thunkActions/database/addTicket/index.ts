import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../../store";
import { getRemoteDB } from "../../../../database/pouch";
import { AnyAction } from "redux";

export interface AddTicketParams { 
    title: string; 
    storyPoint: number | null; 
    description: string; 
}

export default function addTicket(params: AddTicketParams): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        try {
        const db = await getRemoteDB();
        await db.addTicket(params);
        } catch(e) {
            console.log('error adding ticket to db');
            throw e;
        }
    };
}
