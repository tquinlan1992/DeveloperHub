import * as React from "react";
import { Button, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Checkbox } from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';

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

function getFolderListItem(folder: Folder) {
    return (
        <ListItem key={folder._id}>
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText
                primary="Single-line item"
            />
        </ListItem>
    );
}

function getTagListItem(tag: Tag) {
    return (
        <ListItem
            key={tag._id}
            button
        // onClick={this.handleToggle(value)}
        >
            <Checkbox
                checked={true}
                tabIndex={-1}
                disableRipple
            />
            <ListItemText primary={`Checked`} />
        </ListItem>
    );
}

interface GetListForTagsFolders {
    tagsFolders: TagsFolders;
    parent: string | null;
}

function getListForTagsFolders({ tagsFolders, parent }: GetListForTagsFolders) {
    const folders = tagsFolders.filter(tagFolder => {
        return tagFolder.isFolder;
    }) as Folder[];
    const folderListItems = folders.map(folder => {
        return getFolderListItem(folder);
    });
    const tags = tagsFolders.filter(tagFolder => {
        return !tagFolder.isFolder;
    }) as Tag[];
    console.log('folders', folders);
    const tagListItems = tags.map(tag => {
        return getTagListItem(tag);
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

export class TreeView extends React.Component<TreeViewProps> {
    currentTagsFolder: TagsFolders;
    currentParent: string | null;

    constructor(props: any) {
        super(props);
        this.currentTagsFolder = getTagsFolderAtLevel({ tagsFolders: this.props.tagsFolders, parent: null });
        this.currentParent = null;
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.props.onTagSelectionChange(["tag1", "tag2"])}>
                    Test Button
                </Button>
                {getListForTagsFolders({ tagsFolders: this.currentTagsFolder, parent: this.currentParent })}
            </div>
        );
    }
}
