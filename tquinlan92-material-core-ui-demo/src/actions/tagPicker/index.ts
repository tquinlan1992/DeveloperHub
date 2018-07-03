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
    },
    {
        _id: 'id4',
        name: 'folder4',
        isFolder: true,
        parent: 'id1',
        ancestors: ['id1']
    },
    {
        _id: 'id5',
        name: 'folder5',
        isFolder: true,
        parent: 'id1',
        ancestors: ['id1']
    }
];

const folder5 = [
    {
        _id: 'id6',
        name: 'tag7',
        isFolder: false,
        parent: 'id5',
        ancestors: ['id5', 'id1']
    }
];

const tagsFolders = [
    ...rootLevel,
    ...folder1,
    ...folder5
];

const initialState = {
    selectedTags: [],
    tagsFolders,
    displaySelectedTags: false
};

const namedActionReducers = simpleActions('TAG-PICKER');

export default {
    reducer: createReducer<TagPicker>(initialState, namedActionReducers),
    actions: {
        ...getActions(namedActionReducers),
    }
};
