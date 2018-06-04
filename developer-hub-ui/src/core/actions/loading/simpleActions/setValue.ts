import { Loading } from "../../../store/AppState";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";

export interface SetValueAction {
    value: boolean;
}

export default makeActionCreatorWithReducerWithPrefix<Loading, SetValueAction>(
    'SET_VALUE',
    (state, { value }): Loading => {
        return value;
    }
);
