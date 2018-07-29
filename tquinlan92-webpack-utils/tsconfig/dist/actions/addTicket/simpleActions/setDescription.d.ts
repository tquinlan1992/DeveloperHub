import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetDescriptionAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetDescriptionAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetDescriptionAction>;
};
export default _default;
