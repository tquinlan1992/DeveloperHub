import actions from '../actions';
import { isType } from 'typescript-fsa';

export default function increment(state: {count: number;} = {count: 0}, action: any) {

    if (isType(action, actions.increment)) {
        return { ...state, count: state.count + 1 };
    } else {
        return state;
    }
}
