import { ThunkAction } from "redux-thunk";
import AppState from "../../../store/AppState";
import { AnyAction } from "redux";
export default function deleteTicket(id: string): ThunkAction<void, AppState, void, AnyAction>;
