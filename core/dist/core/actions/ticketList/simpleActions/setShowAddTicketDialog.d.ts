import { TicketList } from '../../../store';
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetShowAddTicketDialogParams {
    value: boolean;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetShowAddTicketDialogParams>;
    reducer: makeActionCreatorTypes.StateTypeReducer<TicketList, SetShowAddTicketDialogParams>;
};
export default _default;
