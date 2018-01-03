export const actionTypes = {
    onDocChange: 'ON_DOC_CHANGE'
};

function onDocChange(params: {value: string}) {
    return function (dispatch: any) {
        dispatch({ type: actionTypes.onDocChange, value: params.value });
    };
}

export default {
    onDocChange
};
