declare const _default: (prefix: string) => {
    setValue: {
        actionCreator: {
            (payload: import("./setValue").SetValueAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setValue").SetValueAction>;
            type: string;
            match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setValue").SetValueAction>;
        };
        reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<boolean, import("./setValue").SetValueAction>;
    };
};
export default _default;
