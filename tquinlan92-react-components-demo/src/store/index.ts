import { createStore, AnyAction } from "redux";
import { rootReducer } from '../actions';
import AppState from "./AppState";

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}

const stateFromLocalStorage = JSON.parse(localStorage.getItem('state') || '{}') as AppState;

const reduxStore = createStore<AppState, AnyAction, void, void>(rootReducer, stateFromLocalStorage);

export default reduxStore;
