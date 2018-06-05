import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetDescriptionAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetDescriptionAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetDescriptionAction>;
};
export default _default;
