import actionsReducer from './';
import { testRunner } from 'tquinlan92-typescript-redux-utils';
import 'jest';
import { TagPicker } from '../../store/AppState';
import { cloneDeep } from 'lodash';

const { reducer, actions } = actionsReducer;

const tagPickerTestRunner = testRunner<TagPicker>(reducer);

describe('when OnTagSelectionChange Action is called', () => {
    describe('with an array length of 1 containing 1 string', () => {
        it('the new state should contain the same array', ()  => {
            const tagsToSelect = ['tag1'];
            const newState = tagPickerTestRunner(
                {selectedTags: []}, 
                actions.onTagSelectionChange({selectedTags: cloneDeep(tagsToSelect) })
            );
            expect(newState).toMatchObject({
                selectedTags: tagsToSelect
            });
        });
    });
});
