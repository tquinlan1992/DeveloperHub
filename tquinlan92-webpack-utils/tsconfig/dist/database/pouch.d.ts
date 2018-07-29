import PouchWrapper from './PouchWrapper';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';
import { AnyAction } from 'redux';
export declare function getRemoteDB(): Promise<PouchWrapper>;
export declare function setupPouch(remoteUrl: string, dispatch: ThunkDispatch<AppState, void, AnyAction>): void;
