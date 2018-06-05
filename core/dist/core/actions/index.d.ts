import { AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import * as exportTypes from './exportTypes';
export declare const coreReducer: import("../../../node_modules/redux/index").Reducer<AppState, AnyAction>;
export declare const reducers: import("../../../node_modules/redux/index").Reducer<AppStateCore, AnyAction>;
declare const _default: {
    thunkActions: {
        database: {
            addTicket: typeof import("./thunkActions/database/addTicket").default;
            deleteTicket: typeof import("./thunkActions/database/deleteTicket").default;
            fetchTickets: typeof import("./thunkActions/database/fetchTickets").default;
        };
    };
    ticketList: {
        setShowAddTicketDialog: exportTypes.ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        setTickets: exportTypes.ActionCreator<exportTypes.SetTicketsAction>;
    };
    routing: {
        navigateToFeed: (history: any, urlToNavigateTo: string) => import("../../../node_modules/redux-thunk/index").ThunkAction<void, any, void, AnyAction>;
    };
    addTicket: {
        setStoryPoint: exportTypes.ActionCreator<exportTypes.SetStoryPointsAction>;
        setDescription: exportTypes.ActionCreator<exportTypes.SetDescriptionAction>;
        setTitle: exportTypes.ActionCreator<exportTypes.SetTitleAction>;
    };
    loading: {
        loadApp: typeof import("./loading/thunkActions/loadApp").default;
        setValue: exportTypes.ActionCreator<exportTypes.SetValueAction>;
    };
};
export default _default;
