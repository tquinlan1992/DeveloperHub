import { TagsFolders, SelectedTags, TreeViewState } from "../../types";
interface SetRootStateAction {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
}
declare const _default: {
    actionCreator: import("tquinlan92-typescript-redux-utils/node_modules/typescript-fsa").ActionCreator<SetRootStateAction>;
    reducer: import("tquinlan92-typescript-redux-utils").StateTypeReducer<TreeViewState | null, SetRootStateAction>;
};
export default _default;
