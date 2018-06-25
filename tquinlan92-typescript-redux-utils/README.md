# tquinlan92-typescript-redux-utils

Utility methods to help write cleaner modular redux code

## Redux Helper Methods
Redux allows you to create simple actions that can be handled by multiple reducer handlers  Though some may find it useful that you can have multiple reducer handlers, I find this to be more complexity to follow and making it harder to test.  I would rather rely on thunkActions to describe the same functionality as thunkActions allow you to dispatch multiple actions (simple and other thunkActions).  With this in mind I've created methods to help me create actions and reducers together as well as allowing me to have an actions object that has the same structure as my reducers/state.

1. `makeActionCreatorWithReducerWithPrefix` is a function that returns a function taking a prefix string (labled as the reducerName in the interface) as a parameter; this last function returns a reducer and an action.  The prefix string allows rather easy re-use of the action/reducer for other states of the app.  You may want to use all the simpleActions of search results page for instance.
    - interface 
    ```typescript
    export declare function makeActionCreatorWithReducerWithPrefix<StateType, ActionParams>(actionName: string, reducer: StateTypeReducer<StateType, ActionParams>): (reducerName?: string | undefined) => {
    actionCreator: ActionCreator<ActionParams>;
    reducer: StateTypeReducer<StateType, ActionParams>;
    };
    ```

    - usage
    ```typescript
    /* ./setValueActionReducer.ts */
    import { makeActionCreatorWithReducerWithPrefix } from "tquinlan92-typescript-redux-utils";

    interface ReducerState {
        value: boolean
    }

    interface SetValueAction {
        value: boolean;
    }

    export default const setValueActionReducer = makeActionCreatorWithReducerWithPrefix<ReducerState, SetValueAction>(
        'SET_VALUE',
        (state, { value }): Loading => {
            return { value };
        }
    );
    ```
1. `createReducer, getCreators` createReducer and getCreators are both mapValue functions.  `createReducer` returns an object of the reducer property values and getCreators returns an objects of the action property values.
    - interface
    ```typescript
    function createReducer<StateType>(initialState: StateType, actions: ActionCreatorWithReducerGroup<StateType>): (state: StateType | undefined, incomingAction: Action<AnyAction>) => StateType;

    function getCreators<T extends {
    [key: string]: ActionCreatorWithReducer<any>;
    }>(creators: T): {
        [P in keyof T]: T[P]['actionCreator'];
    };
    ```

    - usage
    ```typescript
    /* ./reducerActionsReducer */
    import setValueActionReducer, { ReducerState } from './setValueActionReducer';
    import { createReducer, getCreators } from 'tquinlan92-typescript-redux-utils';
    import thunkActions from './thunkActions';

    const initialState = {
        value: true
    };

    function actionReducers(reducerName: string) {
        return {
            setValueActionReducer(reducerName)
        }
    }

    const namedActionReducers = actionReducers('reducerNameSample');

    /* Thus structure is important for the next the method described */
    export default {
        reducer: createReducer<ReducerState>(initialState, namedActionReducers),
        actions: {
            ...getCreators(loadingSimpleActions),
            ...thunkActions
        }
    };
    ```
1. `getActionsAndReducersFromCombinedActionReducer` separates the reducers and actions from the objects passed in as arguments into a root level reducer object (still need to use combineReducers with your state) and actions.  `getActionsAndReducersFromCombinedActionReducer` allows you to set up your actions object the same way your reducers are set up for your state (`actionsReducersTree` shows the actions/reducers/state structure).
    - interface 
    ```typescript 
    declare function getActionsAndReducersFromCombinedActionReducer<Creators extends ActionsAndReducerSetup>(creators: Creators): ActionsReducersFromCombinedActionReducer<Creators>;
    ```

    - usage
    ```typescript
    import { ReducerState } from './setValueActionReducer';
    import { getActionsAndReducersFromCombinedActionReducer } from 'tquinlan92-typescript-redux-utils';
    import reducerActionsReducer from './reducerActionsReducer';

    interface AppState {
        loading: ReducerState;
    }

    const actionsReducersTree = {
        loading: reducerActionsReducer
    };

    const { actions, reducers } = getActionsAndReducersFromCombinedActionReducer(actionsReducersTree);

    const rootReducer = combineReducers<AppState>(reducers);
    ```
