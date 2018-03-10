import { SimpleActionCreator } from '../util';

export const actionTypes = {
    onDocChange: 'ON_DOC_CHANGE',
    onCreateDocChange: 'ON_CREATE_DOC_CHANGE'
};

export interface ChangeDocValueParams {
    value: string;
}

const changeDocValue = SimpleActionCreator<ChangeDocValueParams>(actionTypes.onDocChange);

const changeCreateDocValue = SimpleActionCreator<ChangeDocValueParams>(actionTypes.onCreateDocChange);

function onDocChange(params: { value: string }) {
    return function (dispatch: any) {
        dispatch(changeDocValue({ value: params.value }));
    };
}

function onCreateDocChange(params: { value: string }) {
    return function (dispatch: any) {
        dispatch(changeCreateDocValue({ value: params.value }));
    };
}

export const simpleActions = {
    changeDocValue,
    changeCreateDocValue
};

export default {
    onDocChange,
    onCreateDocChange,
    ...simpleActions
};
