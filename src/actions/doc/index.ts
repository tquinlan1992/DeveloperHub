import { SimpleActionCreator } from '../util';

export const actionTypes = {
    onDocChange: 'ON_DOC_CHANGE'
};

export interface ChangeDocValueParams {
    value: string;
}

const changeDocValue = SimpleActionCreator<ChangeDocValueParams>(actionTypes.onDocChange);

function onDocChange(params: { value: string }) {
    return function (dispatch: any) {
        dispatch(changeDocValue({ value: params.value }));
    };
}

export const simpleActions = {
    changeDocValue
};

export default {
    onDocChange,
    ...simpleActions
};
