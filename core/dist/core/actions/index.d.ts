import { AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import * as exportTypes from './exportTypes';
export declare const coreReducer: import("../../../node_modules/redux/index").Reducer<AppState, AnyAction>;
export declare const reducers: import("../../../node_modules/redux/index").Reducer<AppStateCore, AnyAction>;
declare const _default: {
    ticketList: {
        setShowAddTicketDialog: exportTypes.ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        setTickets: exportTypes.ActionCreator<exportTypes.SetTicketsAction>;
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
    routing: {
        navigateToFeed: typeof import("./routing/thunkActions/navigateToFeed").default;
    };
    thunkActions: {
        database: {
            addTicket: typeof import("./thunkActions/database/addTicket").default;
            deleteTicket: typeof import("./thunkActions/database/deleteTicket").default;
            fetchTickets: typeof import("./thunkActions/database/fetchTickets").default;
        };
    };
};
export default _default;
