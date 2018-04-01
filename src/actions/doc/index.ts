import { SimpleActionCreator } from '../util';
import db from '../../database/pouch';

export const actionTypes = {
    onDocChange: 'ON_DOC_CHANGE'
};

export interface ChangeDocValueParams {
    value: string;
}

const changeDocValue = SimpleActionCreator<ChangeDocValueParams>(actionTypes.onDocChange);

function onDocChange(params: { value: string }) {
    return function (dispatch: any) {
        db.get('74352121d110fb138c491b946a000fe2').then(function (doc: any) {
            db.put({
                ...doc,
                value: params.value
            });
        });
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
