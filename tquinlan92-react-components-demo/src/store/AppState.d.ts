export interface TagPicker {
    selectedTags: string[];
    tags: any[];
}

export default interface AppState {
    tagPicker: TagPicker;
}