import { createStore, applyMiddleware } from "redux";
import { reducers }  from '../actions';
const state = JSON.parse(localStorage.state || '{}');
import middleware from '../middleware';
import { AppState } from "./AppState";
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore<AppState>(reducers, state, composeWithDevTools(applyMiddleware(...middleware)));
