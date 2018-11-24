import { Action, AnyAction, ActionCreator } from "typescript-fsa";
import { Reducer } from 'redux';
export { Action, AnyAction, ActionCreator };
export interface ActionCreatorWithReducer<StateType> {
    actionCreator: ActionCreator<any>;
    reducer: (state: StateType, action: any) => StateType;
}
export interface ActionCreatorWithReducerGroup<StateType> {
    [key: string]: ActionCreatorWithReducer<StateType>;
}
export declare function createReducer<StateType>(initialState: StateType, actions: ActionCreatorWithReducerGroup<StateType>): (state: StateType | undefined, incomingAction: Action<AnyAction>) => StateType;
export interface StateTypeReducer<StateType, ActionParams> {
    (state: StateType, action: ActionParams): StateType;
}
export declare function makeActionCreatorWithReducer<StateType, ActionParams>(name: string, reducer: StateTypeReducer<StateType, ActionParams>): {
    actionCreator: ActionCreator<ActionParams>;
    reducer: StateTypeReducer<StateType, ActionParams>;
};
export declare function getCreators<T extends {
    [key: string]: ActionCreatorWithReducer<any>;
}>(creators: T): {
    [P in keyof T]: T[P]['actionCreator'];
};
export declare function makeActionCreatorWithReducerWithPrefix<StateType, ActionParams>(actionName: string, reducer: StateTypeReducer<StateType, ActionParams>): (reducerName?: string | undefined) => {
    actionCreator: ActionCreator<ActionParams>;
    reducer: StateTypeReducer<StateType, ActionParams>;
};
export interface SimpleAndThunkActions {
    [key: string]: any;
}
export interface ActionsAndReducer {
    actions?: SimpleAndThunkActions;
    reducer?: Reducer<any, AnyAction>;
}
export declare function getReducersFromCombinedActionReducer<T extends {
    [key: string]: ActionsAndReducer;
}>(creators: T): {
    [P in keyof T]: T[P]['reducer'];
};
export declare function getActionsFromCombinedActionReducer<T extends {
    [key: string]: ActionsAndReducer;
}>(creators: T): {
    [P in keyof T]: T[P]['actions'];
};
export interface ActionsAndReducerSetup {
    [key: string]: ActionsAndReducer;
}
export interface ActionsReducersFromCombinedActionReducer<ActionsReducersInstances extends ActionsAndReducerSetup> {
    actions: {
        [P in keyof ActionsReducersInstances]: ActionsReducersInstances[P]['actions'];
    };
    reducers: {
        [P in keyof ActionsReducersInstances]: ActionsReducersInstances[P]['reducer'];
    };
}
export declare function getActionsAndReducersFromCombinedActionReducer<Creators extends ActionsAndReducerSetup>(creators: Creators): ActionsReducersFromCombinedActionReducer<Creators>;
export declare function testRunner<ReducerState>(reducer: Reducer): (initalState: ReducerState, action: AnyAction) => any;
declare type Partial<T> = {
    [P in keyof T]?: T[P];
};
export declare function makeSimpleReducer<State extends {}>(reducerName: string, initialState: State): {
    actions: { [P in keyof ({ [P in keyof State]: {
        actionCreator: ActionCreator<State[P]>;
        reducer: StateTypeReducer<State, State[P]>;
    }; } & {
        reset: {
            actionCreator: ActionCreator<null>;
            reducer: StateTypeReducer<State, null>;
        };
        setAll: {
            actionCreator: ActionCreator<State>;
            reducer: StateTypeReducer<State, State>;
        };
        set: {
            actionCreator: ActionCreator<Partial<State>>;
            reducer: StateTypeReducer<State, Partial<State>>;
        };
    })]: ({ [P in keyof State]: {
        actionCreator: ActionCreator<State[P]>;
        reducer: StateTypeReducer<State, State[P]>;
    }; } & {
        reset: {
            actionCreator: ActionCreator<null>;
            reducer: StateTypeReducer<State, null>;
        };
        setAll: {
            actionCreator: ActionCreator<State>;
            reducer: StateTypeReducer<State, State>;
        };
        set: {
            actionCreator: ActionCreator<Partial<State>>;
            reducer: StateTypeReducer<State, Partial<State>>;
        };
    })[P]["actionCreator"]; };
    reducer: (state: State | undefined, incomingAction: Action<AnyAction>) => State;
};
//# sourceMappingURL=index.d.ts.map