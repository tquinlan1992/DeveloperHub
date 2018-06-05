import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils';
export interface SetDescriptionAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetDescriptionAction, meta?: {
            [key: string]: any;
        } | null | undefined): makeActionCreatorTypes.Action<SetDescriptionAction>;
        type: string;
        match: (action: makeActionCreatorTypes.AnyAction) => action is makeActionCreatorTypes.Action<SetDescriptionAction>;
    };
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetDescriptionAction>;
};
export default _default;
