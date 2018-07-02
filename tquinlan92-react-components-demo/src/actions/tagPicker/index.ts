import simpleActions from './simpleActions';
import { TagPicker } from '../../store/AppState';
import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';

const initialState = {
};

const namedActions = simpleActions('TAG-PICKER');

export default {
    reducer: createReducer<TagPicker>(initialState, namedActions),
    actions: {
        ...getCreators(namedActions),
    }
};
