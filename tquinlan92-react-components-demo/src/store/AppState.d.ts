interface BaseFolderTag {
    _id: string;
    name: string;
    isFolder: boolean;
    parent: string | null;
    ancestors: string[];
}

interface Folder extends BaseFolderTag {
    isFolder: true;
}
interface Tag {
    isFolder: false;
}
export interface TagPicker {
    selectedTags: string[];
    tagsFolders: BaseFolderTag[];
}

export default interface AppState {
    tagPicker: TagPicker;
}