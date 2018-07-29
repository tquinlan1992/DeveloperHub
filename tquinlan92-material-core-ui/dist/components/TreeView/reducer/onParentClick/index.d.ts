import { TreeViewState, TagsFolders } from '../../types';
interface OnParentClickAction {
    _id: string;
    tagsFolders: TagsFolders;
}
declare const _default: {
    actionCreator: import("tquinlan92-typescript-redux-utils/node_modules/typescript-fsa").ActionCreator<OnParentClickAction>;
    reducer: import("tquinlan92-typescript-redux-utils").StateTypeReducer<TreeViewState, OnParentClickAction>;
};
export default _default;
