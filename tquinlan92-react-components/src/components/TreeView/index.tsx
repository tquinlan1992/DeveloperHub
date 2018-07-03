import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Checkbox, Button } from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import { tail, head } from 'lodash';

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

interface GetTagsFolderForParent {
    tagsFolders: TagsFolders;
    parent: string | null;
}

function getTagsFolderAtLevel({ tagsFolders, parent }: GetTagsFolderForParent) {
    return tagsFolders.filter(tagFolder => {
        return tagFolder.parent === parent;
    });
}

interface GetFolderListItem {
    folder: Folder;
    onParentClick: (params: OnFolderClick) => void;
}

function getFolderListItem({ folder, onParentClick }: GetFolderListItem) {
    return (
        <ListItem key={folder._id} onClick={() => onParentClick({ _id: folder._id })}>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText
                primary="Single-line item"
            />
        </ListItem>
    );
}

interface GetTagListItem {
    tag: Tag;
    onTagClick: (params: OnTagClick) => void;
    checked: boolean;
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
            <ListItemText primary={`Checked`} />
        </ListItem>
    );
}

interface GetListForTagsFolders {
    tagsFolders: TagsFolders;
    parent: string | null;
    onTagClick: (params: OnTagClick) => void;
    currentlySelectedTags: string[];
    onParentClick: (params: OnFolderClick) => void;
}

function getListForTagsFolders({ tagsFolders, parent, onTagClick, currentlySelectedTags, onParentClick }: GetListForTagsFolders) {
    const folders = tagsFolders.filter(tagFolder => {
        return tagFolder.isFolder;
    }) as Folder[];
    const folderListItems = folders.map(folder => {
        return getFolderListItem({ folder, onParentClick });
    });
    const tags = tagsFolders.filter(tagFolder => {
        return !tagFolder.isFolder;
    }) as Tag[];
    console.log('folders', folders);
    const tagListItems = tags.map(tag => {
        const checked = currentlySelectedTags.includes(tag._id);
        return getTagListItem({ tag, onTagClick, checked });
    });
    const subheaderText = parent ? parent : 'Root:';
    const subheader =
        <ListSubheader component="div">
            {subheaderText}
        </ListSubheader>;
    return (
        <List component="nav" subheader={subheader}>
            {folderListItems}
            {tagListItems}
        </List>
    );
}

interface TreeViewState {
    currentlySelectedTags: string[];
    currentParent: string | null;
    currentTagsFolder: TagsFolders;
    path: string[];
}

interface OnTagClick {
    _id: string;
    checked: boolean;
}

interface OnFolderClick {
    _id: string;
}
export class TreeView extends React.Component<TreeViewProps, TreeViewState> {
    currentParent: string | null;

    constructor(props: any) {
        super(props);
        this.state = {
            currentlySelectedTags: this.props.selectedTags,
            currentParent: null,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders: this.props.tagsFolders, parent: null }),
            path: []
        };
    }

    onTagClick({ _id, checked }: OnTagClick) {
        if (checked && !this.state.currentlySelectedTags.includes(_id)) {
            const newCurrentlySelectedTags = [...this.state.currentlySelectedTags, _id];
            this.setState({
                currentlySelectedTags: [...this.state.currentlySelectedTags, _id]
            });
            this.props.onTagSelectionChange(newCurrentlySelectedTags);
        } else if (!checked) {
            const newCurrentlySelectedTags = this.state.currentlySelectedTags.filter(tag => {
                return tag !== _id;
            });
            this.props.onTagSelectionChange(newCurrentlySelectedTags);
            this.setState({
                currentlySelectedTags: newCurrentlySelectedTags
            });
        }
    }

    onParentClick({ _id }: OnFolderClick) {
        this.setState({
            currentParent: _id,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders: this.props.tagsFolders, parent: _id }),
            path: [_id, ...this.state.path]
        });
    }

    onBackClick() {
        const newPath = tail(this.state.path);
        const newParent = head(newPath) || null;
        this.setState({
            currentParent: newParent,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders: this.props.tagsFolders, parent: newParent }),
            path: newPath
        });
    }

    render() {
        const backButton = !this.state.currentParent ? null :
            <Button onClick={this.onBackClick.bind(this)}>
                Back
            </Button>;
        return (
            <div>
                {backButton}
                {getListForTagsFolders({
                    tagsFolders: this.state.currentTagsFolder,
                    parent: this.state.currentParent,
                    onTagClick: this.onTagClick.bind(this),
                    onParentClick: this.onParentClick.bind(this),
                    currentlySelectedTags: this.state.currentlySelectedTags
                })}
            </div>
        );
    }
}
