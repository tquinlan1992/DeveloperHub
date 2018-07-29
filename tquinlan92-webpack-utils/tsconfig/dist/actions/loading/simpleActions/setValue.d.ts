import * as makeActionCreatorTypes from '../../utils/exportTypes';
export interface SetValueAction {
    value: boolean;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: makeActionCreatorTypes.ActionCreator<SetValueAction>;
    reducer: makeActionCreatorTypes.StateTypeReducer<boolean, SetValueAction>;
};
export default _default;
