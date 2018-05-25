import { Ticket } from "../../../store/AppState";
import { getMakeStateTypeActionCreatorWithReducer } from "../";

const makeStateTypeActionCreatorWithReducer = getMakeStateTypeActionCreatorWithReducer();

export interface SetTicketsAction {
    tickets: Ticket[];
}

export default makeStateTypeActionCreatorWithReducer<SetTicketsAction>(
    'SET_TICKETS',
    (state, { tickets }: SetTicketsAction) => {
        return {
            ...state,
            tickets: tickets
        };
    }
);
