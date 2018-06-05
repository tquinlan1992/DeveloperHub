declare const _default: {
    reducer: (state: boolean | undefined, incomingAction: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction>) => boolean;
    actions: {
        loadApp: typeof import("./thunkActions/loadApp").default;
        setValue: {
            (payload: import("./simpleActions/setValue").SetValueAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setValue").SetValueAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setValue").SetValueAction>;
        };
    };
};
export default _default;
