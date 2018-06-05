import { Ticket, TicketList } from "../../../store/AppState";
export interface SetTicketsAction {
    tickets: Ticket[];
}
declare const _default: {
    actionCreator: {
        (payload: SetTicketsAction, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetTicketsAction>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetTicketsAction>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<TicketList, SetTicketsAction>;
};
export default _default;
