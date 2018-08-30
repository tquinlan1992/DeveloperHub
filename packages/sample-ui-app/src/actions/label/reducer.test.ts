import actionsReducer from './';
import { testRunner } from 'tquinlan92-typescript-redux-utils';
import 'jest';
import { Label } from '../../store/AppState';

const { reducer, actions } = actionsReducer;

const tagPickerTestRunner = testRunner<Label>(reducer);

describe('when OnTagSelectionChange Action is called', () => {
    describe('with an array length of 1 containing 1 string', () => {
        it('the new state should contain the same array', ()  => {
            const tagsToSelect = ['tag1'];
            const initialState = { label: 'initialLabel' };
            const newState = tagPickerTestRunner(
                initialState, 
                actions.changeLabel({ value: 'newLabel' })
            );
            expect(newState).toMatchObject({
                label: 'newLabel'
            });
        });
    });
});
