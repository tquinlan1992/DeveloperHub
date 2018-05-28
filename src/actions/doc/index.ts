import { getRemoteDB } from '../../database/pouch';
import actionCreatorFactory from 'typescript-fsa';

export const actionTypes = {
    onDocChange: 'ON_DOC_CHANGE'
};

export interface ChangeDocValueParams {
    value: string;
}

const SimpleActionCreator = actionCreatorFactory();

const changeDocValue = SimpleActionCreator<ChangeDocValueParams>(actionTypes.onDocChange);

function onDocChange(params: { value: string }) {
    return async function (dispatch: any) {
        const db = await getRemoteDB();
        db.updateDoc({id: '62fe645a55c2ea2005e589b3dc004870', value: params.value});
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
