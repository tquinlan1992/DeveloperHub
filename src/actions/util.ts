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
    return (state: StateType = initialState, incomingAction: Action<AnyAction>) => {
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

interface StateTypeReducer<StateType> {
    (state: StateType, action: any): StateType;
}

export function makeActionCreatorWithReducer<StateType, Params>(name: string, reducer: StateTypeReducer<StateType>) {
    return {
        actionCreator: SimpleActionCreator<Params>(name),
        reducer
    };
}

export function getGenericActionCreatorWithReducerMethod<StateType>() {
    return <Params>(name: string, reducer: StateTypeReducer<StateType>) => {
        return makeActionCreatorWithReducer<StateType, Params>(name, reducer);
    };
}
