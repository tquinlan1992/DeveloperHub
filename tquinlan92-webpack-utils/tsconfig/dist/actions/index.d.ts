import { AnyAction } from 'redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import * as exportTypes from './exportTypes';
declare const coreReducer: import("redux").Reducer<AppState, AnyAction>;
declare const reducers: import("redux").Reducer<AppStateCore, AnyAction>;
export { coreReducer, reducers };
declare const _default: {
    ticketList: {
        fetchTickets: typeof import("./ticketList/thunkActions/fetchTickets").default;
        deleteTicket: typeof import("./ticketList/thunkActions/deleteTicket").default;
        setShowAddTicketDialog: exportTypes.ActionCreator<exportTypes.SetShowAddTicketDialogParams>;
        setTickets: exportTypes.ActionCreator<exportTypes.SetTicketsAction>;
    };
    addTicket: {
        addTicket: typeof import("./addTicket/thunkActions/addTicket").default;
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
