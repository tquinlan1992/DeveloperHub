import actionsReducer from './';
import 'jest';
import { cloneDeep } from 'lodash';
import { tagsFolders1, folder1 } from '../testUtils';

const { reducer, actionCreator } = actionsReducer;

describe('when onParentClick is called with a valid id', () => {
    it('the new folder should be in the currentTagsFolder', () => {
        const state = {
            currentlySelectedTags: [],
            currentParent: null,
            currentTagsFolder: [],
            path: []
        };
        const selectId = 'id2';
        const action = actionCreator({ _id: selectId, checked: true }).payload;
        const newState = reducer(cloneDeep(state), action);
        expect(newState).toMatchObject({
            ...state,
            currentlySelectedTags: [selectId]
        });
    });
});
