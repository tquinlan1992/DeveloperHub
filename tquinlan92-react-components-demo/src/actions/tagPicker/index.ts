import simpleActions from './simpleActions';
import { TagPicker } from '../../store/AppState';
import { createReducer, getCreators as getActions } from 'tquinlan92-typescript-redux-utils';

const tagsFolders = [{
    _id: 'id1',
    name: 'folder1',
    isFolder: true,
    parent: null,
    ancestors: []
},
    {
        _id: 'id1',
        name: 'folder1',
        isFolder: false,
        parent: null,
        ancestors: []
    }];

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
