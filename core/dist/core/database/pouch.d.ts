import PouchWrapper from './PouchWrapper';
export declare function getRemoteDB(): Promise<PouchWrapper>;
export declare function setupPouch(remoteUrl: string): void;
