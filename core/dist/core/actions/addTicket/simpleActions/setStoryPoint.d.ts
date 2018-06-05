import { AddTicketState } from "../../../store";
import * as makeActionCreatorTypes from '../../utils';
export interface SetStoryPointsAction {
    value: string | number;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetStoryPointsAction, meta?: {
            [key: string]: any;
        } | null | undefined): makeActionCreatorTypes.Action<SetStoryPointsAction>;
        type: string;
        match: (action: makeActionCreatorTypes.AnyAction) => action is makeActionCreatorTypes.Action<SetStoryPointsAction>;
    };
    reducer: makeActionCreatorTypes.StateTypeReducer<AddTicketState, SetStoryPointsAction>;
};
export default _default;
