import simpleActions from '../actions/simpleActions';
import { isType } from 'typescript-fsa';

export default function docReducer(state: { edit: string; } = { edit: 'defaultDoc' }, action: any) {
    
    if (isType(action, simpleActions.changeDocValue)) {
        return {...state, edit: action.payload.value};
    } else {
        return state;
    }
}
