import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "../../../store";
import { AnyAction } from "redux";
export default function fetchTickets(): ThunkAction<void, AppStateCore, void, AnyAction>;
