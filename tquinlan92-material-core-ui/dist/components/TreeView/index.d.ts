import * as React from "react";
import { TreeViewState, OnTagClick, OnFolderClick, TreeViewProps } from "./types";
import * as exportTypes from './exportTypes';
export { exportTypes };
export declare class TreeView extends React.Component<TreeViewProps, TreeViewState> {
    constructor(props: any);
    onTagClick({ _id, checked }: OnTagClick): void;
    onParentClick({ _id }: OnFolderClick): void;
    onBackClick(): void;
    render(): JSX.Element;
}
