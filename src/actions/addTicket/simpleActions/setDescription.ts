import { getMakeStateTypeActionCreatorWithReducer } from "./util";

const makeStateTypeActionCreatorWithReducer = getMakeStateTypeActionCreatorWithReducer();

export interface SetDescriptionAction {
    value: string;
}

export default makeStateTypeActionCreatorWithReducer<SetDescriptionAction>(
    'SET_DESCRIPTION',
    (state, { value }: SetDescriptionAction) => {
        return {
            ...state,
            description: value
        };
    }
);
