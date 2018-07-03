import { makeActionCreatorWithReducer } from 'tquinlan92-typescript-redux-utils';
import { TreeViewState, TagsFolders } from '../../types';
import { getTagsFolderAtLevel } from '../../utils';

interface OnParentClickAction {
    _id: string;
    tagsFolders: TagsFolders;
}

export default makeActionCreatorWithReducer<TreeViewState, OnParentClickAction>(
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
