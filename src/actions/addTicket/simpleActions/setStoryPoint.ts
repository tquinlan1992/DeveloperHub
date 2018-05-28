import { AddTicketState } from "../../../store/AppState";
import { makeActionCreatorWithReducer } from "tquinlan1992-typescript-react-redux-utils";
export interface SetStoryPointsAction {
    value: string | number;
}

export default makeActionCreatorWithReducer<AddTicketState, SetStoryPointsAction>(
    'SET_STORY_POINTS',
    (state, { value }: SetStoryPointsAction) => {
        return {
            ...state,
            storyPoint: Number(value)
        };
    }
);
