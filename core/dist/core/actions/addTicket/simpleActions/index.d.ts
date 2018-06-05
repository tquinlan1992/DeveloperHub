declare const _default: (prefix: string) => {
    setStoryPoint: {
        actionCreator: {
            (payload: import("./setStoryPoint").SetStoryPointsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setStoryPoint").SetStoryPointsAction>;
            type: string;
            match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setStoryPoint").SetStoryPointsAction>;
        };
        reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<import("../../../store/AppState").AddTicketState, import("./setStoryPoint").SetStoryPointsAction>;
    };
    setDescription: {
        actionCreator: {
            (payload: import("./setDescription").SetDescriptionAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setDescription").SetDescriptionAction>;
            type: string;
            match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setDescription").SetDescriptionAction>;
        };
        reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<import("../../../store/AppState").AddTicketState, import("./setDescription").SetDescriptionAction>;
    };
    setTitle: {
        actionCreator: {
            (payload: import("./setTitle").SetTitleAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setTitle").SetTitleAction>;
            type: string;
            match: (action: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./setTitle").SetTitleAction>;
        };
        reducer: import("../../../../../node_modules/tquinlan1992-typescript-react-redux-utils/dist/index").StateTypeReducer<import("../../../store/AppState").AddTicketState, import("./setTitle").SetTitleAction>;
    };
};
export default _default;
