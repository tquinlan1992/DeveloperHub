import * as exports from '../exportTypes';
declare const _default: (prefix: string) => {
    setStoryPoint: {
        actionCreator: {
            (payload: exports.SetStoryPointsAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetStoryPointsAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetStoryPointsAction>;
        };
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetStoryPointsAction>;
    };
    setDescription: {
        actionCreator: {
            (payload: exports.SetDescriptionAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetDescriptionAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetDescriptionAction>;
        };
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetDescriptionAction>;
    };
    setTitle: {
        actionCreator: {
            (payload: exports.SetTitleAction, meta?: {
                [key: string]: any;
            } | null | undefined): exports.makeActionCreatorTypes.Action<exports.SetTitleAction>;
            type: string;
            match: (action: exports.makeActionCreatorTypes.AnyAction) => action is exports.makeActionCreatorTypes.Action<exports.SetTitleAction>;
        };
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetTitleAction>;
    };
};
export default _default;
