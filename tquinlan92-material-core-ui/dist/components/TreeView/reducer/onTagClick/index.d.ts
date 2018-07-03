import { TreeViewState } from "../../types";
interface OnTagClickAction {
    _id: string;
    checked: boolean;
}
declare const _default: {
    actionCreator: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnTagClickAction>;
    reducer: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnTagClickAction>;
};
export default _default;
