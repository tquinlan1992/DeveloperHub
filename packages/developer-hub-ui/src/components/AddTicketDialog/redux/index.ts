import { createReducer, makeActionCreatorWithReducerWithPrefix, ActionCreator, StateTypeReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
import thunkActions from './thunkActions';
import { mapValues, assign } from 'lodash';

export interface AddTicketState {
    storyPoint: null | number;
    description: string;
    title: string;
}

const initialState = {
    storyPoint: null,
    description: '',
    title: ''
};

function makeActionsFromState<State extends {}>(name: string, initialState: State) {
    const actions = mapValues(initialState, (property, key: keyof State) => {
        const creatorReducer = makeActionCreatorWithReducerWithPrefix<State, State[typeof key]>(
            `SET_${property}`,
            (state, newValue) => {
                return assign({}, state,
                    {[key]: newValue}
                );
            }
        );
        return creatorReducer(name ? name : 'random') as any;
    }) as {
        [P in keyof State]: {
            actionCreator: ActionCreator<State[P]>;
            reducer: StateTypeReducer<State, State[P]>;
        }
    };
    return {
        actions,
        reducer: createReducer<State>(initialState, actions)
    };
}

const creatorsReducers = makeActionsFromState<AddTicketState>('AddTicketDialog', initialState);

const { actions: simpleActions, reducer } = creatorsReducers;

export const actions = {
    ...getCreators(simpleActions),
    ...thunkActions
};

export default {
    reducer,
    actions
};
