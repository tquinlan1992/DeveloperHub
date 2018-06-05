import { TicketList } from '../../../store/AppState';
export interface SetShowAddTicketDialogParams {
    value: boolean;
}
declare const _default: {
    actionCreator: {
        (payload: SetShowAddTicketDialogParams, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetShowAddTicketDialogParams>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetShowAddTicketDialogParams>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<TicketList, SetShowAddTicketDialogParams>;
};
export default _default;
