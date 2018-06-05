import { AddTicketState } from "../../../store/AppState";
export interface SetStoryPointsAction {
    value: string | number;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetStoryPointsAction, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetStoryPointsAction>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetStoryPointsAction>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<AddTicketState, SetStoryPointsAction>;
};
export default _default;
