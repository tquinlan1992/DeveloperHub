import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetTitleAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetTitleAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetTitleAction>;
};
export default _default;
