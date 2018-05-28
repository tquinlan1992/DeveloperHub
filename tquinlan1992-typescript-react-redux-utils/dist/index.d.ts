import { Action, AnyAction, ActionCreator } from "typescript-fsa";
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
declare const _default: {};
export default _default;
