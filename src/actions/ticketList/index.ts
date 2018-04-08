import { SimpleActionCreator } from '../util';

export const actionTypes = {
    setShowAddTicketDialog: 'SET_SHOW_ADD_TICKET_DIALOG'
};

export interface SetShowAddTicketDialogParams {
    value: boolean;
}

const setShowAddTicketDialog = SimpleActionCreator<SetShowAddTicketDialogParams>(actionTypes.setShowAddTicketDialog);

export const simpleActions = {
    setShowAddTicketDialog
};

export default {
    ...simpleActions
};
