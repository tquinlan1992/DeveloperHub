import simpleActions from './simpleActions';
import { TagPicker } from '../../store/AppState';
import { createReducer, getCreators as getActions } from 'tquinlan92-typescript-redux-utils';

const rootLevel = [{
    _id: 'id1',
    name: 'folder1',
    isFolder: true,
    parent: null,
    ancestors: []
},
{
    _id: 'id2',
    name: 'tag2',
    isFolder: false,
    parent: null,
    ancestors: []
}];

const folder1 = [
    {
        _id: 'id3',
        name: 'tag3',
        isFolder: false,
        parent: 'id1',
        ancestors: ['id1']
    }
];

const tagsFolders = [
    ...rootLevel,
    ...folder1
];

const initialState = {
    selectedTags: [],
    tagsFolders
};

const namedActionReducers = simpleActions('TAG-PICKER');

export default {
    reducer: createReducer<TagPicker>(initialState, namedActionReducers),
    actions: {
        ...getActions(namedActionReducers),
    }
};
