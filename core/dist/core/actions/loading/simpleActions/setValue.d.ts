import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetValueAction {
    value: boolean;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<SetValueAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<boolean, SetValueAction>;
};
export default _default;
