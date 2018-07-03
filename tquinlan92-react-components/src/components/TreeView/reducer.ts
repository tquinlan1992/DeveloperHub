import { makeActionCreatorWithReducer } from 'tquinlan92-typescript-redux-utils';
import { TreeViewState, TagsFolders, SelectedTags } from './types';
import { getTagsFolderAtLevel } from './utils';
import { tail, head } from 'lodash';

interface OnParentClickAction {
    _id: string;
    tagsFolders: TagsFolders;
}

export const onParentClickActionReducer = makeActionCreatorWithReducer<TreeViewState, OnParentClickAction>(
    'ON_PARENT_CLICK',
    (state, { _id, tagsFolders }): TreeViewState => {
        return {
            ...state,
            currentParent: _id,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders, parent: _id }),
            path: [_id, ...state.path]
        };
    }
);

interface OnBackClickAction {
    tagsFolders: TagsFolders;
}

export const onBackClickActionReducer = makeActionCreatorWithReducer<TreeViewState, OnBackClickAction>(
    'ON_BACK_CLICK',
    (state, { tagsFolders }): TreeViewState => {
        const newPath = tail(state.path);
        const newParent = head(newPath) || null;
        return {
            ...state,
            currentParent: newParent,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders, parent: newParent }),
            path: newPath
        };
    }
);

interface OnTagClickAction {
    _id: string;
    checked: boolean;
}

export const onTagClickActionReducer = makeActionCreatorWithReducer<TreeViewState, OnTagClickAction>(
    'ON_TAG_CLICK',
    (state, { _id, checked }): TreeViewState => {
        if (checked && !state.currentlySelectedTags.includes(_id)) {
            const newCurrentlySelectedTags = [...state.currentlySelectedTags, _id];
            return {
                ...state,
                currentlySelectedTags: newCurrentlySelectedTags
            };
        } else if (!checked) {
            const newCurrentlySelectedTags = state.currentlySelectedTags.filter(tag => {
                return tag !== _id;
            });
            return {
                ...state,
                currentlySelectedTags: newCurrentlySelectedTags
            };
        } else {
            return state;
        }
    }
);

interface SetRootStateAction {
    tagsFolders: TagsFolders;
    selectedTags: SelectedTags;
}

export const setRootStateActionReducer = makeActionCreatorWithReducer<TreeViewState | null, SetRootStateAction>(
    'SET_ROOT_STATE',
    (state, { tagsFolders, selectedTags }): TreeViewState => {
        return {
            currentlySelectedTags: selectedTags,
            currentParent: null,
            currentTagsFolder: getTagsFolderAtLevel({ tagsFolders, parent: null }),
            path: []
        };
    }
);
