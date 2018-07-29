import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store";
import { AnyAction } from "tquinlan92-typescript-redux-utils";
export default function loadApp(): ThunkAction<void, AppState, void, AnyAction>;
