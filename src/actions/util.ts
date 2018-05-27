import actionCreatorFactory, { ActionCreator, Action, AnyAction, isType } from 'typescript-fsa';
import { find, mapValues} from 'lodash';

export const SimpleActionCreator = actionCreatorFactory();

interface ActionCreatorWithReducer<StateType> {
    actionCreator: ActionCreator<any>;
    reducer: (state: StateType, action: any) => StateType;
}

interface ActionCreatorWithReducerGroup<StateType> {
    [key: string]: ActionCreatorWithReducer<StateType>;
}

export function getCreators<T extends { [key: string]: ActionCreatorWithReducer<any> }>(creators: T): { [P in keyof T]: T[P]['actionCreator'] } {
    return mapValues(creators, "actionCreator") as { [P in keyof T]: T[P]['actionCreator'] };
}

export function createReducer<StateType>(initialState: StateType, actions: ActionCreatorWithReducerGroup<StateType>) {
    return (state: StateType = initialState, incomingAction: Action<AnyAction>): StateType => {
        const actionMatch = find(actions, action => {
            return isType(incomingAction, action.actionCreator);
        });
        if (actionMatch) {
            return actionMatch.reducer(state, incomingAction.payload);
        } else {
            return state;
        }
    };
}

interface StateTypeReducer<StateType, ActionParams> {
    (state: StateType, action: ActionParams): StateType;
}

export function makeActionCreatorWithReducer<StateType, ActionParams>(name: string, reducer: StateTypeReducer<StateType, ActionParams>) {
    return {
        actionCreator: SimpleActionCreator<ActionParams>(name),
        reducer
    };
}

export function getGenericActionCreatorWithReducerMethod<StateType>() {
    return <ActionParams>(name: string, reducer: StateTypeReducer<StateType, ActionParams>) => {
        return makeActionCreatorWithReducer<StateType, ActionParams>(name, reducer);
    };
}
