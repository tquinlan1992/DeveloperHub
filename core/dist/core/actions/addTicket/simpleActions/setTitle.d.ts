import { AddTicketState } from "../../../store/AppState";
export interface SetTitleAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetTitleAction, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetTitleAction>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetTitleAction>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<AddTicketState, SetTitleAction>;
};
export default _default;
