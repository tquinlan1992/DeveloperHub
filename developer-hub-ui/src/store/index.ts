import { createStore, applyMiddleware, AnyAction } from "redux";
import { reducers }  from '../actions';
import { omit } from 'lodash';
import middleware from '../middleware';
import { AppState } from "./AppState";
import { composeWithDevTools } from 'redux-devtools-extension';

const stateFromLocalStorage = JSON.parse(localStorage.state || '{}') as AppState;

const state = omit(stateFromLocalStorage, 'loading');

export default createStore<AppState, AnyAction, void, void>(reducers, state, composeWithDevTools(applyMiddleware(...middleware)));
