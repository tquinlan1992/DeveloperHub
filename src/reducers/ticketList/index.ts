import simpleActions from '../../actions/simpleActions';
import { isType } from 'typescript-fsa';
import { TicketList as TicketListState } from '../../store/AppState';
import { SetShowAddTicketDialogParams } from '../../actions/ticketList';

const initialState = {
    showAddTicketDialog: false
};

function handleSetShowAddTicketDialog(state: TicketListState, action: SetShowAddTicketDialogParams) {
    return {
        ...state,
        showAddTicketDialog: action.value
    };
}

export default function ticketListReducer(state: TicketListState = initialState, action: any) {

    if (isType(action, simpleActions.setShowAddTicketDialog)) {
        return handleSetShowAddTicketDialog(state, action.payload);
    } else {
        return state;
    }
}
