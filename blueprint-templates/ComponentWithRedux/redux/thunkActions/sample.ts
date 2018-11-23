import { ThunkAction } from "redux-thunk";
import { AppStateCore } from "@headless/store";
import { AnyAction } from "redux";

export default function(): ThunkAction<void, AppStateCore, void, AnyAction> {
    return async function (dispatch, getState) {
        const state = getState();
    };
}
