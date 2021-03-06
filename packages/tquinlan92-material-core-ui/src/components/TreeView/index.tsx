import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Checkbox, Button } from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import { onParentClickActionReducer, onBackClickActionReducer, onTagClickActionReducer, setRootStateActionReducer } from './reducer';
import { 
    Folder, 
    Tag, 
    TreeViewState, 
    OnTagClick, 
    OnFolderClick, 
    GetListForTagsFolders, 
    GetTagListItem, 
    GetFolderListItem, 
    TreeViewProps,
    GetTagListItems,
    GetFolderListeItems,
    GetParentInfo
} from "./types";
import * as exportTypes from './exportTypes';
export { exportTypes };
import { find } from 'lodash';

function getFolderListItem({ folder, onParentClick }: GetFolderListItem) {
    return (
        <ListItem key={folder._id} onClick={() => onParentClick({ _id: folder._id })} button>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText
                primary={folder.name}
            />
        </ListItem>
    );
}

function getTagListItem({ tag, onTagClick, checked }: GetTagListItem) {
    return (
        <ListItem
            key={tag._id}
            button
        >
            <Checkbox
                checked={checked}
                tabIndex={-1}
                disableRipple
                onChange={(event: any, checked: boolean) => onTagClick({ _id: tag._id, checked })}
            />
            <ListItemText primary={tag.name} />
        </ListItem>
    );
}

function getTagListItems({ tagsFolders, currentlySelectedTags, onTagClick }: GetTagListItems) {
    const tags = tagsFolders.filter(tagFolder => {
        return !tagFolder.isFolder;
    }) as Tag[];
    return tags.map(tag => {
        const checked = currentlySelectedTags.includes(tag._id);
        return getTagListItem({ tag, onTagClick, checked });
    });
}

function getFolderListItems({ tagsFolders, onParentClick }: GetFolderListeItems) {
    const folders = tagsFolders.filter(tagFolder => {
        return tagFolder.isFolder;
    }) as Folder[];
    return folders.map(folder => {
        return getFolderListItem({ folder, onParentClick });
    });
}

function getParentName({ tagsFolders, parent }: GetParentInfo) {
    if (!parent) {
        return "Root:";
    }
    const parentInfo = find(tagsFolders, tagFolder => {
        return tagFolder._id === parent;
    });
    console.log('parentInfo', parentInfo);
    return parentInfo ? parentInfo.name : "no folder name";
}

function getListForTagsFolders({ tagsFolders, parent, onTagClick, currentlySelectedTags, onParentClick }: GetListForTagsFolders) {

    const folderListItems = getFolderListItems({tagsFolders, onParentClick});

    const tagListItems = getTagListItems({tagsFolders, currentlySelectedTags, onTagClick });
    const subheader =
        <ListSubheader component="div">
            {parent}
        </ListSubheader>;
    return (
        <List component="nav" subheader={subheader}>
            {folderListItems}
            {tagListItems}
        </List>
    );
}
export class TreeView extends React.Component<TreeViewProps, TreeViewState> {

    constructor(props: any) {
        super(props);
        const action = setRootStateActionReducer.actionCreator({ tagsFolders: this.props.tagsFolders, selectedTags: this.props.selectedTags }).payload;
        const newState = setRootStateActionReducer.reducer(null, action) as TreeViewState;
        this.state = newState;
    }

    onTagClick({ _id, checked }: OnTagClick) {
        const action = onTagClickActionReducer.actionCreator({ _id, checked }).payload;
        const newState = onTagClickActionReducer.reducer(this.state, action);
        this.props.onTagSelectionChange(newState.currentlySelectedTags);
        this.setState(newState);
    }

    onParentClick({ _id }: OnFolderClick) {
        const action = onParentClickActionReducer.actionCreator({ _id, tagsFolders: this.props.tagsFolders }).payload;
        const newState = onParentClickActionReducer.reducer(this.state, action);
        this.setState(newState);
    }

    onBackClick() {
        const action = onBackClickActionReducer.actionCreator({ tagsFolders: this.props.tagsFolders }).payload;
        const newState = onBackClickActionReducer.reducer(this.state, action);
        this.setState(newState);
    }

    render() {
        const backButton = !this.state.currentParent ? null :
            <Button onClick={this.onBackClick.bind(this)}>
                Back
            </Button>;
        const parent = getParentName({ tagsFolders: this.props.tagsFolders, parent: this.state.currentParent });
        return (
            <div>
                {backButton}
                {getListForTagsFolders({
                    tagsFolders: this.state.currentTagsFolder,
                    parent,
                    onTagClick: this.onTagClick.bind(this),
                    onParentClick: this.onParentClick.bind(this),
                    currentlySelectedTags: this.state.currentlySelectedTags
                })}
            </div>
        );
    }
}
