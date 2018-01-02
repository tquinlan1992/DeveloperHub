import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers';
const state = JSON.parse(localStorage.state || '{}');
import middleware from '../middleware';

export default createStore(reducers, state, applyMiddleware(...middleware));
