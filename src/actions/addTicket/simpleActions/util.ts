import { getGenericActionCreatorWithReducerMethod } from "../../util";
import { AddTicketState } from "../../../store/AppState";

export function getMakeStateTypeActionCreatorWithReducer<ActionParams>() {
    return getGenericActionCreatorWithReducerMethod<AddTicketState>();
}
