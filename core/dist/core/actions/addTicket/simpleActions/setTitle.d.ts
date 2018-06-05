import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetTitleAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetTitleAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetTitleAction>;
};
export default _default;
