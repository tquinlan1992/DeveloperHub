import { createStore, applyMiddleware, AnyAction } from "redux";
import { reducers }  from '../actions';
import { omit } from 'lodash';
import middleware from '../middleware';
import AppState from "./AppState";
import { composeWithDevTools } from 'redux-devtools-extension';

const stateFromLocalStorage = JSON.parse(localStorage.state || '{}') as AppState;
const coreState = omit(stateFromLocalStorage.core, 'loading');

const state = {
    ...stateFromLocalStorage,
    core: coreState
};

export default createStore<AppState, AnyAction, void, void>(reducers, state, composeWithDevTools(applyMiddleware(...middleware)));
