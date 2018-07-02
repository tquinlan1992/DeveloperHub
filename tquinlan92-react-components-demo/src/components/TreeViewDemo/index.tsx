import * as React from "react";
import { TreeView } from 'tquinlan92-react-components';
import actions from '../../actions';
import AppState from "../../store/AppState";
import { connect } from "react-redux";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
interface Props {
    tagsFolders: any[];
    selectedTags: string[];
}

interface Actions {
    onTagSelectionChange: typeof actions.tagPicker.onTagSelectionChange;
}

export class TreeViewDemo extends React.Component<Props & Actions> {
    onTagSelectionChange: (selectedTags: string[]) => void;

    constructor(props: any) {
        super(props);
        this.onTagSelectionChange = (selectedTags: string[]) => {
            this.props.onTagSelectionChange({ selectedTags });
        };
    }

    render() {
        const TreeViewProps = {
            ...this.props,
            onTagSelectionChange: this.onTagSelectionChange
        };

        const tagListItems = this.props.selectedTags.map(tag => {
            return (
                <ListItem>
                    <ListItemText inset
                        primary={tag}
                    />
                </ListItem>
            );
        });
        const subheader =
            <ListSubheader component = "div">
                Selected Tags:
            </ListSubheader>;
        return (
            <div>
                <List subheader={subheader}>
                    {tagListItems}
                </List>
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
