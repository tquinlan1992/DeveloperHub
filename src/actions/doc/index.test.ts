import docActions, {simpleActions} from './';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppState } from '../../store/AppState';
import { isType } from 'typescript-fsa';

describe('test docActions', () => {
    const state = {
        doc: {
            edit: 'editDoc',
            create: 'create'
        }
    };
    const store = configureStore<AppState>([thunk])(state);
    beforeEach(() => {
        store.clearActions();
    });
    it('onDocChange', () => {
        const newValue = {
            value: 'newValue'
        };
        store.dispatch(docActions.onDocChange(newValue));
        const [ action1 ] = store.getActions();
        expect(isType(action1, simpleActions.changeDocValue)).toBe(true);
        expect(action1.payload).toMatchObject(newValue);
    });

    it('onCreateDocChange', () => {
        const newValue = {
            value: 'newValue'
        };
        store.dispatch(docActions.changeCreateDocValue(newValue));
        const [action1, action2] = store.getActions();
        expect(isType(action1, simpleActions.changeCreateDocValue)).toBe(true);
        expect(action1.payload).toMatchObject(newValue);
    });

});
