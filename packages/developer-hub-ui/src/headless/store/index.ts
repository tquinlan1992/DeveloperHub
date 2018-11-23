import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import { reducer }  from '../actions';
import { omit } from 'lodash';
import middleware from '../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RouterState } from "react-router-redux";
import { TicketList } from '@components/TicketList/redux';
import { AddTicketState } from '@components/AddTicketDialog/redux';
import { LoadingState } from '@components/Loading/redux';

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
