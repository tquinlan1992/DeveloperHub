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
export declare class TreeView extends React.Component<TreeViewProps> {
    currentTagsFolder: TagsFolders;
    constructor(props: any);
    render(): JSX.Element;
}
export {};
