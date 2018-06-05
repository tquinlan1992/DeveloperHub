import { TicketList } from '../../store/AppState';
export declare const simpleActions: {
    setShowAddTicketDialog: {
        actionCreator: {
            (payload: import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
        };
        reducer: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<TicketList, import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
    };
    setTickets: {
        actionCreator: {
            (payload: import("./simpleActions/setTickets").SetTicketsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTickets").SetTicketsAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTickets").SetTicketsAction>;
        };
        reducer: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<TicketList, import("./simpleActions/setTickets").SetTicketsAction>;
    };
};
export declare const reducer: (state: TicketList | undefined, incomingAction: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction>) => TicketList;
export declare const thunkActions: {};
declare const _default: {
    reducer: (state: TicketList | undefined, incomingAction: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction>) => TicketList;
    actions: {
        setShowAddTicketDialog: {
            (payload: import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
        };
        setTickets: {
            (payload: import("./simpleActions/setTickets").SetTicketsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTickets").SetTicketsAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTickets").SetTicketsAction>;
        };
    };
};
export default _default;
