import { TicketList } from '../../../store';
import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetShowAddTicketDialogParams {
    value: boolean;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetShowAddTicketDialogParams>;
    reducer: makeActionCreatorTypes.StateTypeReducer<TicketList, SetShowAddTicketDialogParams>;
};
export default _default;
