import { createStore, AnyAction, applyMiddleware } from "redux";
import { rootReducer } from '../actions';
import AppState from "./AppState";
import middleware from '../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}

const stateFromLocalStorage = JSON.parse(localStorage.getItem('state') || '{}') as AppState;

const reduxStore = createStore<AppState, AnyAction, void, void>(rootReducer, stateFromLocalStorage, composeWithDevTools(applyMiddleware(...middleware)));

export default reduxStore;
