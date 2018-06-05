import * as exports from '../exportTypes';
declare const _default: (prefix: string) => {
    setStoryPoint: {
        actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetStoryPointsAction>;
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetStoryPointsAction>;
    };
    setDescription: {
        actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetDescriptionAction>;
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetDescriptionAction>;
    };
    setTitle: {
        actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetTitleAction>;
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<exports.AddTicketState, exports.SetTitleAction>;
    };
};
export default _default;
