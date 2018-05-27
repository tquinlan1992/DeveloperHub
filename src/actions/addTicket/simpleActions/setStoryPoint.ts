import { getMakeStateTypeActionCreatorWithReducer } from "./util";

const makeStateTypeActionCreatorWithReducer = getMakeStateTypeActionCreatorWithReducer();

export interface SetStoryPointsAction {
    value: string | number;
}

export default makeStateTypeActionCreatorWithReducer<SetStoryPointsAction>(
    'SET_STORY_POINTS',
    (state, { value }: SetStoryPointsAction) => {
        return {
            ...state,
            storyPoint: Number(value)
        };
    }
);
