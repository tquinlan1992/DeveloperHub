import { TreeViewState, TagsFolders } from "../../types";
interface OnBackClickAction {
    tagsFolders: TagsFolders;
}
declare const _default: {
    actionCreator: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnBackClickAction>;
    reducer: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnBackClickAction>;
};
export default _default;
