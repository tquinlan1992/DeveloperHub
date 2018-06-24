import { Middleware, Action, AnyAction } from "redux";
import { ActionsAndReducer } from ".";
export interface ThunkDispatch<S, E, A extends Action> {
    <T extends A>(action: T): T;
    <R>(asyncAction: ThunkAction<R, S, E, A>): R;
}
export declare type ThunkAction<R, S, E, A extends Action> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
export declare type ThunkMiddleware<S = {}, A extends Action = AnyAction, E = undefined> = Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>>;
export declare function getActionsFromCombinedActionReducer<T extends {
    [key: string]: ActionsAndReducer;
}>(creators: T): {
    [P in keyof T]: T[P]['actions'];
};
declare const thunk: Middleware<ThunkDispatch<{}, undefined, AnyAction>, {}, ThunkDispatch<{}, undefined, AnyAction>>;
export default thunk;
