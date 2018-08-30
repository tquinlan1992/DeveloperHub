import actionsReducer from './';
import 'jest';
import { cloneDeep } from 'lodash';
import { tagsFolders1, folder1 } from '../testUtils';

const { reducer, actionCreator } = actionsReducer;

describe('when onParentClick is called with a valid id', () => {
    it('the new folder should be in the currentTagsFolder', () => {
        const state = {
            selectedTags: [],
            tags: [],
            currentlySelectedTags: [],
            currentParent: null,
            currentTagsFolder: [],
            path: []
        };
        const selectId = 'id1';
        const action = actionCreator({ tagsFolders: tagsFolders1, _id: selectId }).payload;
        const newState = reducer(cloneDeep(state), action);
        expect(newState).toMatchObject({
            ...state,
            currentParent: selectId,
            currentTagsFolder: folder1,
            path: [selectId]
        });
    });
});
