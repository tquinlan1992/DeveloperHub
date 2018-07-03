import * as React from "react";
import { TreeView } from 'tquinlan92-material-core-ui';
import actions from '../../actions';
import AppState from "../../store/AppState";
import { connect } from "react-redux";
import { List, ListItem, ListItemText, ListSubheader, Button } from "@material-ui/core";
interface Props {
    tagsFolders: any[];
    selectedTags: string[];
    displaySelectedTags: boolean;
}

interface Actions {
    onTagSelectionChange: typeof actions.tagPicker.onTagSelectionChange;
    setDisplaySelectedTags: typeof actions.tagPicker.setDisplaySelectedTags;
}

export class TreeViewDemo extends React.Component<Props & Actions> {
    onTagSelectionChange: (selectedTags: string[]) => void;

    constructor(props: any) {
        super(props);
        this.onTagSelectionChange = (selectedTags: string[]) => {
            this.props.onTagSelectionChange({ selectedTags });
        };
    }

    onToggleDisplaySelectedTags() {
        this.props.setDisplaySelectedTags({value: !this.props.displaySelectedTags });
    }

    render() {
        const TreeViewProps = {
            ...this.props,
            onTagSelectionChange: this.onTagSelectionChange
        };

        const tagListItems = this.props.selectedTags.map(tag => {
            return (
                <ListItem key={tag}>
                    <ListItemText inset
                        primary={tag}
                    />
                </ListItem>
            );
        });
        const subheader =
            <ListSubheader component="div">
                {`Selected Tags:(${this.props.selectedTags.length})`}
            </ListSubheader>;
        const selectedTagList = !this.props.displaySelectedTags ? null : 
        <List subheader={subheader}>
            {tagListItems}
        </List>;
        return (
            <div>
                <Button onClick={this.onToggleDisplaySelectedTags.bind(this)}>
                    {this.props.displaySelectedTags ? 'Hide Selected Tags' : 'Show Selected Tags'}({this.props.selectedTags.length})
                </Button>
                {selectedTagList}
                <TreeView {...TreeViewProps} />
            </div>
        );
    }
}

const mapStateToProps = ({ tagPicker }: AppState) => {
    return tagPicker;
};

const mapDispatchToProps = {
    ...actions.tagPicker
};

export default connect<Props, Actions>(mapStateToProps, mapDispatchToProps)(TreeViewDemo);
