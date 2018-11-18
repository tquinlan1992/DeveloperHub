import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import { reducers }  from '../actions';
import { omit } from 'lodash';
import middleware from '../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RouterState } from "react-router-redux";

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}

export interface Doc {
    edit: string;
}

export interface VoiceToCode {
    text: string;
}

export interface Ticket {
    title: string;
    storyPoint: null | number;
    description: string;
    deleted: boolean;
    closed?: boolean;
    sprint?: boolean;
    _id: string;
}

export interface AddTicketState {
    storyPoint: null | number;
    description: string;
    title: string;
}

export interface TicketList {
    showAddTicketDialog: boolean;
    tickets: Ticket[];
}

export type Loading = boolean;

export interface AppState {
    routing: RouterState;
    ticketList: TicketList;
    addTicket: AddTicketState;
    loading: Loading;
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

const reduxStore: Store<AppStateCore & void, AnyAction> & void = createStore<AppStateCore, AnyAction, void, void>(reducers, state, composeWithDevTools(applyMiddleware(...middleware)));

export default reduxStore;
