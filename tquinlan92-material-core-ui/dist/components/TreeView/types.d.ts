export interface BaseFolderTag {
    _id: string;
    name: string;
    isFolder: boolean;
    parent: string;
    ancestors: string[];
}
export interface Folder extends BaseFolderTag {
    isFolder: true;
}
export interface Tag extends BaseFolderTag {
    isFolder: false;
}
export interface TagsFolders extends Array<Tag | Folder> {
}
export interface SelectedTags extends Array<string> {
}
export interface OnTagClick {
    _id: string;
    checked: boolean;
}
export interface OnFolderClick {
    _id: string;
}
export interface GetTagListItem {
    tag: Tag;
    onTagClick: (params: OnTagClick) => void;
    checked: boolean;
}
export interface GetListForTagsFolders {
    tagsFolders: TagsFolders;
    parent: string | null;
    onTagClick: (params: OnTagClick) => void;
    currentlySelectedTags: string[];
    onParentClick: (params: OnFolderClick) => void;
}
export interface TreeViewProps {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
    onTagSelectionChange: (selectedTags: SelectedTags) => void;
}
export interface GetFolderListItem {
    folder: Folder;
    onParentClick: (params: OnFolderClick) => void;
}
export interface GetTagListItems {
    tagsFolders: TagsFolders;
    currentlySelectedTags: string[];
    onTagClick: (params: OnTagClick) => void;
}
export interface GetFolderListeItems {
    tagsFolders: TagsFolders;
    onParentClick: (params: OnFolderClick) => void;
}
export interface TreeViewState {
    currentlySelectedTags: string[];
    currentParent: string | null;
    currentTagsFolder: TagsFolders;
    path: string[];
}
