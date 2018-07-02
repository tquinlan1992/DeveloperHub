export interface TagPicker {
    selectedTags: string[];
}

export default interface AppState {
    tagPicker: TagPicker;
}