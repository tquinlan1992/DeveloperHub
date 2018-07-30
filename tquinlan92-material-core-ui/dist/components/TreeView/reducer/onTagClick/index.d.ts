import { TreeViewState } from "../../types";
interface OnTagClickAction {
    _id: string;
    checked: boolean;
}
declare const _default: {
    actionCreator: import("tquinlan92-typescript-redux-utils/node_modules/typescript-fsa").ActionCreator<OnTagClickAction>;
    reducer: import("tquinlan92-typescript-redux-utils").StateTypeReducer<TreeViewState, OnTagClickAction>;
};
export default _default;
