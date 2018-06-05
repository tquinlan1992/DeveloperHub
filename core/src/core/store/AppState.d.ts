import { RouterState } from "react-router-redux";

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

export type Loading = boolean;

export interface AppState {
    routing: RouterState,
    ticketList: TicketList;
    addTicket: AddTicketState;
    loading: Loading;
}

export default interface AppStateCore {
    core: AppState
}
