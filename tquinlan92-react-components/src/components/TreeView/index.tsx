import * as React from "react";
import { Button } from "@material-ui/core";

interface SelectedTags extends Array<string> {

}

export interface TreeViewProps {
    tags: any[];
    selectedTags: SelectedTags;
    onTagSelectionChange: (selectedTags: SelectedTags) => void;
}

export class TreeView extends React.Component<TreeViewProps> {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.onTagSelectionChange(["tag1"])}>
                    Test Button 
                </Button>
            <h1>
                Tree View
            </h1>
            </div>
        );
    }
}
