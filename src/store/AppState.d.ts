export interface Doc {
    edit: string;
}

export interface VoiceToCode {
    text: string;
}

export interface Ticket {
    title: string;
    _id: string;
}

export interface TicketList {
    showAddTicketDialog: boolean;
    tickets: Ticket[];
}

export interface AppState {
    doc: Doc;
    voiceToCode: VoiceToCode;
    ticketList: TicketList;
}
