import * as exports from '../exportTypes';
declare const _default: (prefix: string) => {
    setValue: {
        actionCreator: exports.makeActionCreatorTypes.ActionCreator<exports.SetValueAction>;
        reducer: exports.makeActionCreatorTypes.StateTypeReducer<boolean, exports.SetValueAction>;
    };
};
export default _default;
