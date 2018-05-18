import simpleActions from '../../actions/simpleActions';
import { isType } from 'typescript-fsa';
import { TicketList as TicketListState } from '../../store/AppState';
import { SetShowAddTicketDialogParams, SetTicketsAction } from '../../actions/ticketList';

const initialState = {
    showAddTicketDialog: false,
    tickets: []
};

interface HandleState {
    state: TicketListState;
}

function handleSetShowAddTicketDialog(state: TicketListState, action: SetShowAddTicketDialogParams) {
    return {
        ...state,
        showAddTicketDialog: action.value
    };
}

interface HandleSetTickets extends HandleState {
    action: SetTicketsAction;
}

function handleSetTickets({state, action}: HandleSetTickets) {
    return {
        ...state,
        tickets: action.tickets
    };
}

export default function ticketListReducer(state: TicketListState = initialState, action: any) {

    if (isType(action, simpleActions.setShowAddTicketDialog)) {
        return handleSetShowAddTicketDialog(state, action.payload);
    } else if (isType(action, simpleActions.setTickets)) {
        return handleSetTickets({state, action: action.payload});
    }
    else {
        return state;
    }
}
