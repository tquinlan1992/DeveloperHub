import { ThunkAction } from "redux-thunk";
import AppState from "../../../store/AppState";
import { AnyAction } from "redux";
export default function fetchTickets(): ThunkAction<void, AppState, void, AnyAction>;
