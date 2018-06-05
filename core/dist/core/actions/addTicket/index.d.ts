import { AddTicketState } from "../../store";
import * as exports from './exportTypes';
declare const _default: {
    reducer: (state: AddTicketState | undefined, incomingAction: exports.makeActionCreatorTypes.Action<exports.makeActionCreatorTypes.AnyAction>) => AddTicketState;
    actions: {
        setStoryPoint: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetStoryPointsAction>;
        setDescription: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetDescriptionAction>;
        setTitle: import("../../../../node_modules/tquinlan1992-typescript-react-redux-utils/node_modules/typescript-fsa/lib/index").ActionCreator<exports.SetTitleAction>;
    };
};
export default _default;
