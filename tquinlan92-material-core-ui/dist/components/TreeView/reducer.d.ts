import { TreeViewState, TagsFolders, SelectedTags } from './types';
interface OnParentClickAction {
    _id: string;
    tagsFolders: TagsFolders;
}
export declare const onParentClickActionReducer: {
    actionCreator: import("../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnParentClickAction>;
    reducer: import("../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnParentClickAction>;
};
interface OnBackClickAction {
    tagsFolders: TagsFolders;
}
export declare const onBackClickActionReducer: {
    actionCreator: import("../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnBackClickAction>;
    reducer: import("../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnBackClickAction>;
};
interface OnTagClickAction {
    _id: string;
    checked: boolean;
}
export declare const onTagClickActionReducer: {
    actionCreator: import("../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<OnTagClickAction>;
    reducer: import("../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState, OnTagClickAction>;
};
interface SetRootStateAction {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
}
export declare const setRootStateActionReducer: {
    actionCreator: import("../../../node_modules/tquinlan92-typescript-redux-utils/node_modules/typescript-fsa/lib").ActionCreator<SetRootStateAction>;
    reducer: import("../../../node_modules/tquinlan92-typescript-redux-utils/dist").StateTypeReducer<TreeViewState | null, SetRootStateAction>;
};
export {};
