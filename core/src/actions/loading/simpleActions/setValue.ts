import { Loading } from "../../../store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-redux-utils";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
makeActionCreatorTypes;
export interface SetValueAction {
    value: boolean;
}

export default makeActionCreatorWithReducerWithPrefix<Loading, SetValueAction>(
    'SET_VALUE',
    (state, { value }): Loading => {
        return value;
    }
);
