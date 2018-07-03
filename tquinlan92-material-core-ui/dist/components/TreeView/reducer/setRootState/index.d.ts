import { TagsFolders, SelectedTags, TreeViewState } from "../../types";
interface SetRootStateAction {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
}
declare const _default: {
    actionCreator: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<SetRootStateAction>;
    reducer: import("../../../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState | null, SetRootStateAction>;
};
export default _default;
