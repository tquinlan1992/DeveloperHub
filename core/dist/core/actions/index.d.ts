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
        setShowAddTicketDialog: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./ticketList/simpleActions/setShowAddTicketDialog").SetShowAddTicketDialogParams>;
        setTickets: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./ticketList/simpleActions/setTickets").SetTicketsAction>;
    };
    routing: {
        navigateToFeed: (history: any, urlToNavigateTo: string) => import("../../../node_modules/redux-thunk/index").ThunkAction<void, any, void, import("../../../node_modules/redux/index").AnyAction>;
    };
    addTicket: {
        setStoryPoint: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./addTicket/simpleActions/setStoryPoint").SetStoryPointsAction>;
        setDescription: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./addTicket/simpleActions/setDescription").SetDescriptionAction>;
        setTitle: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./addTicket/simpleActions/setTitle").SetTitleAction>;
    };
    loading: {
        loadApp: typeof import("./loading/thunkActions/loadApp").default;
        setValue: import("../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<import("./loading/simpleActions/setValue").SetValueAction>;
    };
};
export default _default;
