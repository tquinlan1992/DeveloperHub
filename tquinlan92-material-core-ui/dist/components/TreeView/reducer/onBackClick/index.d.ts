import { TreeViewState, TagsFolders } from "../../types";
interface OnBackClickAction {
    tagsFolders: TagsFolders;
}
declare const _default: {
    actionCreator: import("tquinlan92-typescript-redux-utils/node_modules/typescript-fsa").ActionCreator<OnBackClickAction>;
    reducer: import("tquinlan92-typescript-redux-utils").StateTypeReducer<TreeViewState, OnBackClickAction>;
};
export default _default;
