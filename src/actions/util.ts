import actionCreatorFactory, { ActionCreator, Action, AnyAction, isType } from 'typescript-fsa';
import * as _ from 'lodash';

export const SimpleActionCreator = actionCreatorFactory();

interface ActionCreatorWithReducer<StateType> {
    actionCreator: ActionCreator<any>;
    reducer: (state: StateType, action: any) => StateType;
}

export function createReducer<StateType>(initialState: StateType, actions: ActionCreatorWithReducer<StateType>[]) {
    return (state: StateType = initialState, incomingAction: Action<AnyAction>) => {
        const actionMatch = _.find(actions, action => {
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
