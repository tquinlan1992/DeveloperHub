import * as exports from '../exportTypes';
declare const _default: (prefix: string) => {
    setStoryPoint: {
        actionCreator: exports.utilExportTypes.ActionCreator<exports.SetStoryPointsAction>;
        reducer: exports.utilExportTypes.StateTypeReducer<exports.AddTicketState, exports.SetStoryPointsAction>;
    };
    setDescription: {
        actionCreator: exports.utilExportTypes.ActionCreator<exports.SetDescriptionAction>;
        reducer: exports.utilExportTypes.StateTypeReducer<exports.AddTicketState, exports.SetDescriptionAction>;
    };
    setTitle: {
        actionCreator: exports.utilExportTypes.ActionCreator<exports.SetTitleAction>;
        reducer: exports.utilExportTypes.StateTypeReducer<exports.AddTicketState, exports.SetTitleAction>;
    };
};
export default _default;
