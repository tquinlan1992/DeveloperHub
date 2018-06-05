import { AddTicketState } from "../../store";
import * as exports from './exportTypes';
declare const _default: {
    reducer: (state: AddTicketState | undefined, incomingAction: exports.makeActionCreatorTypes.Action<exports.makeActionCreatorTypes.AnyAction>) => AddTicketState;
    actions: {
        setStoryPoint: {
            (payload: exports.SetStoryPointsAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetStoryPointsAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetStoryPointsAction>;
        };
        setDescription: {
            (payload: exports.SetDescriptionAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetDescriptionAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetDescriptionAction>;
        };
        setTitle: {
            (payload: exports.SetTitleAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetTitleAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetTitleAction>;
        };
    };
};
export default _default;
