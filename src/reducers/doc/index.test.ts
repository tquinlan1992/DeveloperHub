import { mockPouchDB } from '../../utils/testUtils';
mockPouchDB();
import docReducer from './';
import actions from '../../actions';
import { Doc as DocReducerState } from '../../store/AppState';

describe('docReducer', () => {
    it('changeDocValue', () => {
        const initialState = {
            edit: 'currentValue'
        };
        const value = 'newValue';
        const action = actions.changeDocValue({ value });
        const newState = docReducer(initialState as DocReducerState, action);
        expect(newState).toMatchObject({
            edit: value
        });
    });

});
