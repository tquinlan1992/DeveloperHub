import actionsReducer from './';
import 'jest';
import { cloneDeep } from 'lodash';
import { folder1, tagsFolders1, rootLevel1 } from '../testUtils';

const { reducer, actionCreator } = actionsReducer;

describe('when onBackClick is called', () => {
    describe('with the path as length 0', () => {
        it('there should be no changes to the state', () => {
            const state = {
                currentlySelectedTags: [],
                currentParent: null,
                currentTagsFolder: [],
                path: []
            };
            const action = actionCreator({ tagsFolders: [] }).payload;
            const newState = reducer(cloneDeep(state), action);
            expect(newState).toMatchObject(state);
        });
    });
    describe('with the path as length 1', () => {
        it('there should be no changes to the state', () => {
            const tagsToSelect = ['tag1'];
            const state = {
                currentlySelectedTags: [],
                currentParent: 'id',
                currentTagsFolder: folder1,
                path: ['id1']
            };
            const action = actionCreator({ tagsFolders: tagsFolders1 }).payload;
            const newState = reducer(cloneDeep(state), action);
            expect(newState).toMatchObject({
                ...state,
                currentTagsFolder: rootLevel1,
                currentParent: null,
                path: []
            });
        });
    });
});
