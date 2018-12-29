import { find, mapValues, assign } from 'lodash';
import actionCreatorFactory, { isType, Action, AnyAction, ActionCreator } from "typescript-fsa";
import { Reducer } from 'redux';

export { Action, AnyAction, ActionCreator };

export interface ActionCreatorWithReducer<StateType> {
    actionCreator: ActionCreator<any>;
    reducer: (state: StateType, action: any) => StateType;
}

export interface ActionCreatorWithReducerGroup<StateType> {
    [key: string]: ActionCreatorWithReducer<StateType>;
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

export interface StateTypeReducer<StateType, ActionParams> {
    (state: StateType, action: ActionParams): StateType;
}

export function makeActionCreatorWithReducer<StateType, ActionParams>(name: string, reducer: StateTypeReducer<StateType, ActionParams>) {
    const SimpleActionCreator = actionCreatorFactory();
    return {
        actionCreator: SimpleActionCreator<ActionParams>(name),
        reducer
    };
}

export function getCreators<T extends { [key: string]: ActionCreatorWithReducer<any> }>(creators: T): { [P in keyof T]: T[P]['actionCreator'] } {
    return mapValues(creators, "actionCreator") as { [P in keyof T]: T[P]['actionCreator'] };
}

export function makeActionCreatorWithReducerWithPrefix<StateType, ActionParams>(actionName: string, reducer: StateTypeReducer<StateType, ActionParams>) {
    return (reducerName?: string) => makeActionCreatorWithReducer<StateType, ActionParams>(JSON.stringify({ reducerName, actionName }), reducer);
}

export interface SimpleAndThunkActions {
    [key: string]: any;
}

export interface ActionsAndReducer {
    actions?: SimpleAndThunkActions;
    reducer?: Reducer<any, AnyAction>;
}

export function getReducersFromCombinedActionReducer<T extends { [key: string]: ActionsAndReducer }>(creators: T): { [P in keyof T]: T[P]['reducer'] } {
    return mapValues(creators, "reducer") as { [P in keyof T]: T[P]['reducer'] };
}

export function getActionsFromCombinedActionReducer<T extends { [key: string]: ActionsAndReducer }>(creators: T): { [P in keyof T]: T[P]['actions'] } {
    return mapValues(creators, "actions") as { [P in keyof T]: T[P]['actions'] };
}

export interface ActionsAndReducerSetup {
    [key: string]: ActionsAndReducer;
}

export interface ActionsReducersFromCombinedActionReducer<ActionsReducersInstances extends ActionsAndReducerSetup> {
    actions: { [P in keyof ActionsReducersInstances]: ActionsReducersInstances[P]['actions'] };
    reducers: { [P in keyof ActionsReducersInstances]: ActionsReducersInstances[P]['reducer'] };
}

export function getActionsAndReducersFromCombinedActionReducer<Creators extends ActionsAndReducerSetup>(creators: Creators): ActionsReducersFromCombinedActionReducer<Creators> {
    return {
        actions: getActionsFromCombinedActionReducer(creators) as { [P in keyof Creators]: Creators[P]['actions'] },
        reducers: getReducersFromCombinedActionReducer(creators) as { [P in keyof Creators]: Creators[P]['reducer'] }
    };
}

export function testRunner<ReducerState>(reducer: Reducer) {
    return (initalState: ReducerState, action: AnyAction) => {
        return reducer(initalState, action);
    };
}

type Partial<T> = {
    [P in keyof T]?: T[P];
};

export function makeSimpleReducer<State extends {}>(reducerName: string, initialState: State) {
    const actions = mapValues(initialState, (propertyFromState, key: keyof State) => {
        const creatorReducer = makeActionCreatorWithReducerWithPrefix<State, State[typeof key]>(
            `UPDATE_${key.toUpperCase()}`,
            (state, newValue) => {
                return assign({}, state,
                    {[key]: newValue}
                );
            }
        );
        return creatorReducer(reducerName) as any;
    }) as {
        [P in keyof State]: {
            actionCreator: ActionCreator<State[P]>;
            reducer: StateTypeReducer<State, State[P]>;
        }
    };
    const reset = makeActionCreatorWithReducerWithPrefix<State, null>(
        `RESET`,
        () => {
            return initialState;
        }
    )(reducerName);
    const setAll = makeActionCreatorWithReducerWithPrefix<State, State>(
        `SET_ALL`,
        (state, newValue) => {
            return newValue;
        }
    )(reducerName);
    const set = makeActionCreatorWithReducerWithPrefix<State, Partial<State>>(
        `SET`,
        (state, newStateValues) => {
            return assign({}, 
                state,
                newStateValues
            );
        }
    )(reducerName);
    return {
        actions: assign({}, 
            getCreators(assign({}, actions, {reset, setAll, set})),
        ),
        reducer: createReducer<State>(initialState, assign({}, actions, {reset, setAll, set})),
    };
}
