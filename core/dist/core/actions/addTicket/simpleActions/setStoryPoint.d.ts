import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetStoryPointsAction {
    value: string | number;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetStoryPointsAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetStoryPointsAction>;
};
export default _default;
