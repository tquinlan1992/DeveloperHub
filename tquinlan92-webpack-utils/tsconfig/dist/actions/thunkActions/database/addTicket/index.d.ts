import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../../store";
import { AnyAction } from "redux";
export interface AddTicketParams {
    title: string;
    storyPoint: number | null;
    description: string;
}
export default function addTicket(params: AddTicketParams): ThunkAction<void, AppStateCore, void, AnyAction>;
