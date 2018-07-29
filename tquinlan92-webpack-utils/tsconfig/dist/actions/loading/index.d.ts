import * as exportTypes from './exportTypes';
declare const _default: {
    reducer: (state: boolean | undefined, incomingAction: exportTypes.makeActionCreatorTypes.Action<exportTypes.makeActionCreatorTypes.AnyAction>) => boolean;
    actions: {
        loadApp: typeof import("./thunkActions/loadApp").default;
        setValue: exportTypes.makeActionCreatorTypes.ActionCreator<exportTypes.SetValueAction>;
    };
};
export default _default;
