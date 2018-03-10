import simpleActions from '../../actions/simpleActions';
import { isType } from 'typescript-fsa';
import { ChangeDocValueParams } from '../../actions/doc';
import { Doc as DocReducerState } from '../../store/AppState';

function handleEditDoc(state: DocReducerState, action: ChangeDocValueParams) {
    return { ...state, edit: action.value };
}

const initialState = {
    edit: 'defaultEditDoc',
    create: 'defaultCreateDoc'
};

export default function docReducer(state: DocReducerState = initialState, action: any) {

    if (isType(action, simpleActions.changeDocValue)) {
        return handleEditDoc(state, action.payload);
    } else {
        return state;
    }
}
