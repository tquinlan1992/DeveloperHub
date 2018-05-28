import { createStore, applyMiddleware } from "redux";
import { reducers }  from '../actions';
const state = JSON.parse(localStorage.state || '{}');
import middleware from '../middleware';
import { AppState } from "./AppState";

export default createStore<AppState>(reducers, state, applyMiddleware(...middleware));
