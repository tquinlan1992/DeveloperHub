import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils';
export interface SetTitleAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetTitleAction, meta?: {
            [key: string]: any;
        } | null | undefined): makeActionCreatorTypes.Action<SetTitleAction>;
        type: string;
        match: (action: makeActionCreatorTypes.AnyAction) => action is makeActionCreatorTypes.Action<SetTitleAction>;
    };
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetTitleAction>;
};
export default _default;
