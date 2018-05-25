import { getMakeStateTypeActionCreatorWithReducer } from ".";

const makeStateTypeActionCreatorWithReducer = getMakeStateTypeActionCreatorWithReducer();

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

export default makeStateTypeActionCreatorWithReducer<SetShowAddTicketDialogParams>(
    'SET_SHOW_ADD_TICKET_DIALOG',
    (state, action: SetShowAddTicketDialogParams) => {
        return {
            ...state,
            showAddTicketDialog: action.value
        };
    }
);
