export interface Doc {
    edit: string;
}

export interface VoiceToCode {
    text: string;
}

export interface TicketList {
    showAddTicketDialog: boolean;
}

export interface AppState {
    doc: Doc;
    voiceToCode: VoiceToCode;
    ticketList: TicketList;
}
