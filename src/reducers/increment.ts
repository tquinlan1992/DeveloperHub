import actionTypes from '../actions/actionTypes';

export default function increment(state: {count: number;} = {count: 0}, action: any) {
    switch (action.type) {
        case actionTypes.increment:
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return state.count - 1;
        default:
            return state;
    }
}
