import * as React from "react";
interface SelectedTags extends Array<string> {
}
export interface TreeViewProps {
    tags: any[];
    selectedTags: SelectedTags;
    onTagSelectionChange: (selectedTags: SelectedTags) => void;
}
export declare class TreeView extends React.Component<TreeViewProps> {
    render(): JSX.Element;
}
export {};
