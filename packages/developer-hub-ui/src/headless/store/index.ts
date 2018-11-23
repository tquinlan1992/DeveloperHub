import { createStore, applyMiddleware, AnyAction, Store, combineReducers } from "redux";
import { omit } from 'lodash';
import middleware from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, RouterState } from "react-router-redux";
import { TicketList } from '@components/TicketList/redux';
import addTicket, { AddTicketState } from '@components/AddTicketDialog/redux';
import loading, { LoadingState } from '@components/Loading/redux';
export { AnyAction };
import { AppStateCore, AppState } from '../store';
import ticketList from '../../components/TicketList/redux';

const coreReducer = combineReducers<AppState>({
    routing: routerReducer,
    addTicket,
    ticketList,
    loading
});

const reducer = combineReducers<AppStateCore>({
    core: coreReducer
});

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}

export interface Doc {
    edit: string;
}

export interface VoiceToCode {
    text: string;
}

export interface AddTicketState {
    storyPoint: null | number;
    description: string;
    title: string;
}

export interface AppState {
    routing: RouterState;
    ticketList: TicketList;
    addTicket: AddTicketState;
    loading: LoadingState;
}

export interface AppStateCore {
    core: AppState;
}

const stateFromLocalStorage = JSON.parse(localStorage.getItem('state') || '{}') as AppStateCore;
const coreState = omit(stateFromLocalStorage.core, 'loading');

const state = {
    ...stateFromLocalStorage,
    core: coreState
};

const reduxStore: Store<AppStateCore & void, AnyAction> & void = createStore<AppStateCore, AnyAction, void, void>(reducer, state, composeWithDevTools(applyMiddleware(...middleware)));

export default reduxStore;
