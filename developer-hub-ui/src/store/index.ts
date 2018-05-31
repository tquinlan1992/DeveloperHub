import { createStore, applyMiddleware, AnyAction } from "redux";
import { reducers }  from '../actions';
const state = JSON.parse(localStorage.state || '{}');
import middleware from '../middleware';
import { AppState } from "./AppState";
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore<AppState, AnyAction, void, void>(reducers, state, composeWithDevTools(applyMiddleware(...middleware)));
