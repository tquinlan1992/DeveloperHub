import * as React from "react";
interface SelectedTags extends Array<string> {
}
interface BaseFolderTag {
    _id: string;
    name: string;
    isFolder: boolean;
    parent: string;
    ancestors: string[];
}
interface Folder extends BaseFolderTag {
    isFolder: true;
}
interface Tag extends BaseFolderTag {
    isFolder: false;
}
interface TagsFolders extends Array<Tag | Folder> {
}
export interface TreeViewProps {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
    onTagSelectionChange: (selectedTags: SelectedTags) => void;
}
interface TreeViewState {
    currentlySelectedTags: string[];
}
interface OnTagClick {
    _id: string;
    checked: boolean;
}
export declare class TreeView extends React.Component<TreeViewProps, TreeViewState> {
    currentTagsFolder: TagsFolders;
    currentParent: string | null;
    constructor(props: any);
    onTagClick({ _id, checked }: OnTagClick): void;
    render(): JSX.Element;
}
export {};
