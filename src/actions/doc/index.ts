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
        db.get('62fe645a55c2ea2005e589b3dc004870').then(function (doc: any) {
            console.log('doc', doc);
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
