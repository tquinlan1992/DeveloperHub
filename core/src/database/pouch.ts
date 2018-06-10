import * as PouchDBRaw from 'pouchdb-browser';
import PouchWrapper from './PouchWrapper';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';
import { AnyAction } from 'redux';
const PouchDB: typeof PouchDBRaw = (PouchDBRaw as any).default;
const pouchdbFindRaw = require('pouchdb-find');
const pouchdbFind = pouchdbFindRaw.default as typeof pouchdbFindRaw;
PouchDB.plugin(pouchdbFind);
import actions from "../actions";

let pouchDB: null | PouchWrapper;

export async function getRemoteDB() {
    return pouchDB as PouchWrapper;
}

export function setupPouch(remoteUrl: string, dispatch: ThunkDispatch<AppState, void, AnyAction>) {
    if (!pouchDB) {
        const remoteDB = new PouchDB(remoteUrl);
        const localDB = new PouchDB('mylocaldb');
        localDB.sync(remoteDB, {
        }).on('complete', function () {
            console.log('sync complete');
            localDB.sync(remoteDB, {
                live: true,
                retry: true
            });
            pouchDB = new PouchWrapper({
                pouchDB: localDB
            });
            dispatch(actions.loading.setValue({ value: false }));
        }).on('error', () => {
            console.log('error syncing');
        }) 
    }
}
