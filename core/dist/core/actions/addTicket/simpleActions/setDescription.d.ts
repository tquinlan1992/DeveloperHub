import { AddTicketState } from "../../../store/AppState";
export interface SetDescriptionAction {
    value: string;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetDescriptionAction, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetDescriptionAction>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetDescriptionAction>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<AddTicketState, SetDescriptionAction>;
};
export default _default;
