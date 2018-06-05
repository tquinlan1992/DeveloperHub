import CoreAppState, { AppState } from '../store/AppState';
export declare const coreReducer: import("../../../node_modules/redux/index").Reducer<AppState, import("../../../node_modules/redux/index").AnyAction>;
export declare const reducers: import("../../../node_modules/redux/index").Reducer<CoreAppState, import("../../../node_modules/redux/index").AnyAction>;
declare const _default: {
    thunkActions: {
        database: {
            addTicket: typeof import("./thunkActions/database/addTicket").default;
            deleteTicket: typeof import("./thunkActions/database/deleteTicket").default;
            fetchTickets: typeof import("./thunkActions/database/fetchTickets").default;
        };
    };
    ticketList: {
        setShowAddTicketDialog: {
            (payload: import("./ticketList/simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./ticketList/simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./ticketList/simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
        };
        setTickets: {
            (payload: import("./ticketList/simpleActions/setTickets").SetTicketsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./ticketList/simpleActions/setTickets").SetTicketsAction>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./ticketList/simpleActions/setTickets").SetTicketsAction>;
        };
    };
    routing: {
        navigateToFeed: (history: any, urlToNavigateTo: string) => import("../../../node_modules/redux-thunk/index").ThunkAction<void, any, void, import("../../../node_modules/redux/index").AnyAction>;
    };
    addTicket: {
        setStoryPoint: {
            (payload: import("./addTicket/simpleActions/setStoryPoint").SetStoryPointsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setStoryPoint").SetStoryPointsAction>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setStoryPoint").SetStoryPointsAction>;
        };
        setDescription: {
            (payload: import("./addTicket/simpleActions/setDescription").SetDescriptionAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setDescription").SetDescriptionAction>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setDescription").SetDescriptionAction>;
        };
        setTitle: {
            (payload: import("./addTicket/simpleActions/setTitle").SetTitleAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setTitle").SetTitleAction>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./addTicket/simpleActions/setTitle").SetTitleAction>;
        };
    };
    loading: {
        loadApp: typeof import("./loading/thunkActions/loadApp").default;
        setValue: {
            (payload: import("./loading/simpleActions/setValue").SetValueAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./loading/simpleActions/setValue").SetValueAction>;
            type: string;
            match: (action: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./loading/simpleActions/setValue").SetValueAction>;
        };
    };
};
export default _default;
