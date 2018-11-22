import { AddTicketState } from "@headless/store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

export interface SetStoryPointsAction {
    value: string | number;
}

export default makeActionCreatorWithReducerWithPrefix<AddTicketState, SetStoryPointsAction>(
    'SET_STORY_POINTS',
    (state, { value }: SetStoryPointsAction) => {
        return {
            ...state,
            storyPoint: Number(value)
        };
    }
);
