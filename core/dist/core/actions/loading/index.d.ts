import * as exportTypes from './exportTypes';
declare const _default: {
    reducer: (state: boolean | undefined, incomingAction: exportTypes.makeActionCreatorTypes.Action<exportTypes.makeActionCreatorTypes.AnyAction>) => boolean;
    actions: {
        loadApp: typeof import("./thunkActions/loadApp").default;
        setValue: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exportTypes.SetValueAction>;
    };
};
export default _default;
