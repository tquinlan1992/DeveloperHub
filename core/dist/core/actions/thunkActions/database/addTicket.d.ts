import { ThunkAction } from "redux-thunk";
import AppStateCore from "../../../store/AppState";
import { AnyAction } from "redux";
export default function addTicket(): ThunkAction<void, AppStateCore, void, AnyAction>;
