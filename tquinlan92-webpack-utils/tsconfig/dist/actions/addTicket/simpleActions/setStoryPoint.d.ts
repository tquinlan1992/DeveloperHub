import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetStoryPointsAction {
    value: string | number;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetStoryPointsAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetStoryPointsAction>;
};
export default _default;
