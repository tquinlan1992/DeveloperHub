import simpleActions from './simpleActions';
import { TagPicker } from '../../store/AppState';
import { createReducer, getCreators as getActions } from 'tquinlan92-typescript-redux-utils';

const initialState = {
    selectedTags: [],
    tags: []
};

const namedActionReducers = simpleActions('TAG-PICKER');

export default {
    reducer: createReducer<TagPicker>(initialState, namedActionReducers),
    actions: {
        ...getActions(namedActionReducers),
    }
};
