import { AddTicketState, AppStateCore } from "../../store";
import * as exportTypes from './exportTypes';
export { exportTypes, AppStateCore };
declare const _default: {
    reducer: (state: AddTicketState | undefined, incomingAction: exportTypes.utilExportTypes.Action<exportTypes.utilExportTypes.AnyAction>) => AddTicketState;
    actions: {
        addTicket: typeof import("./thunkActions/addTicket").default;
        setStoryPoint: exportTypes.utilExportTypes.ActionCreator<exportTypes.SetStoryPointsAction>;
        setDescription: exportTypes.utilExportTypes.ActionCreator<exportTypes.SetDescriptionAction>;
        setTitle: exportTypes.utilExportTypes.ActionCreator<exportTypes.SetTitleAction>;
    };
};
export default _default;
