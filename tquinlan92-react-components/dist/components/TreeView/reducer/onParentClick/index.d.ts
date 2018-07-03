import { TreeViewState, TagsFolders } from '../../types';
interface OnParentClickAction {
    _id: string;
    tagsFolders: TagsFolders;
}
declare const _default: {
    actionCreator: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnParentClickAction>;
    reducer: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnParentClickAction>;
};
export default _default;
