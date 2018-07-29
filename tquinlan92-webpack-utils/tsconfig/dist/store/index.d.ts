import { AnyAction, Store } from "redux";
import { RouterState } from "react-router-redux";
declare module 'redux' {
    type GenericStoreEnhancer = any;
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
export declare type Loading = boolean;
export interface AppState {
    routing: RouterState;
    ticketList: TicketList;
    addTicket: AddTicketState;
    loading: Loading;
}
export interface AppStateCore {
    core: AppState;
}
declare const reduxStore: Store<AppStateCore & void, AnyAction> & void;
export default reduxStore;
