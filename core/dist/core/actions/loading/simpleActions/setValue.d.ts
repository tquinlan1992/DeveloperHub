export interface SetValueAction {
    value: boolean;
}
declare const _default: (reducerName?: string | undefined) => {
    actionCreator: {
        (payload: SetValueAction, meta?: {
            [key: string]: any;
        } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetValueAction>;
        type: string;
        match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<SetValueAction>;
    };
    reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<boolean, SetValueAction>;
};
export default _default;
