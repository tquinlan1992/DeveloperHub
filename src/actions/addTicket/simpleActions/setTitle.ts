import { getMakeStateTypeActionCreatorWithReducer } from "./util";

const makeStateTypeActionCreatorWithReducer = getMakeStateTypeActionCreatorWithReducer();

export interface SetTitleAction {
    value: string;
}

export default makeStateTypeActionCreatorWithReducer<SetTitleAction>(
    'SET_TITLE',
    (state, { value }) => {
        return {
            ...state,
            title: value
        };
    }
);
