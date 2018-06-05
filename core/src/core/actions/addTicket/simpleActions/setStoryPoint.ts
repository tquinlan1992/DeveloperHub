import { AddTicketState } from "../../../store";
import { makeActionCreatorWithReducerWithPrefix } from "tquinlan1992-typescript-react-redux-utils";
import * as makeActionCreatorTypes from '../../utils';
makeActionCreatorTypes;
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
