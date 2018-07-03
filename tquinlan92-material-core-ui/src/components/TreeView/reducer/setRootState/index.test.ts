import actionsReducer from './';
import 'jest';
import { cloneDeep } from 'lodash';
import { tagsFolders1, rootLevel1 } from '../testUtils';

const { reducer, actionCreator } = actionsReducer;

describe('when setRootState is called with selectedIds and tagsFolders', () => {
    it('the new state should have the selectedIds in currentlySelectedTags and currentTagsFolder set up', () => {
        const state = {
            currentlySelectedTags: [],
            currentParent: null,
            currentTagsFolder: [],
            path: []
        };
        const selectId = 'id2';
        const action = actionCreator({ tagsFolders: tagsFolders1, selectedTags: [selectId] }).payload;
        const newState = reducer(cloneDeep(state), action);
        expect(newState).toMatchObject({
            ...state,
            currentlySelectedTags: [selectId],
            currentTagsFolder: rootLevel1
        });
    });
});
