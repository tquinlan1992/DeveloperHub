import actionTypes from '../actions/actionTypes';

export default function docReducer(state: { edit: string; } = { edit: 'defaultDoc' }, action: any) {
    switch (action.type) {
        case actionTypes.onDocChange:
            return { ...state, edit: action.value };
        default:
            return state;
    }
}
