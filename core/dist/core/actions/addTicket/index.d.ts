import { AddTicketState } from "../../store/AppState";
declare const _default: {
    reducer: (state: AddTicketState | undefined, incomingAction: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction>) => AddTicketState;
    actions: {
        setStoryPoint: {
            (payload: import("./simpleActions/setStoryPoint").SetStoryPointsAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setStoryPoint").SetStoryPointsAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setStoryPoint").SetStoryPointsAction>;
        };
        setDescription: {
            (payload: import("./simpleActions/setDescription").SetDescriptionAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setDescription").SetDescriptionAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setDescription").SetDescriptionAction>;
        };
        setTitle: {
            (payload: import("./simpleActions/setTitle").SetTitleAction, meta?: {
                [key: string]: any;
            } | null | undefined): import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTitle").SetTitleAction>;
            type: string;
            match: (action: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").AnyAction) => action is import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").Action<import("./simpleActions/setTitle").SetTitleAction>;
        };
    };
};
export default _default;
