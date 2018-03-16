export interface Doc {
    edit: string;
}

export interface VoiceToCode {
    text: string;
}

export interface AppState {
    doc: Doc;
    voiceToCode: VoiceToCode;
}
