import { ThunkAction } from "redux-thunk";
import AppState from "../../../store/AppState";
import { AnyAction } from "redux";
export default function loadApp(): ThunkAction<void, AppState, void, AnyAction>;
