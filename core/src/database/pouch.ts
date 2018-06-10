import * as PouchDBRaw from 'pouchdb-browser';
import PouchWrapper from './PouchWrapper';
const PouchDB: typeof PouchDBRaw = (PouchDBRaw as any).default;
const pouchdbFindRaw = require('pouchdb-find');
const pouchdbFind = pouchdbFindRaw.default as typeof pouchdbFindRaw;
PouchDB.plugin(pouchdbFind);

let remoteUrlExport: null | string = null;

let pouchDB: null | PouchWrapper;

export async function getRemoteDB() {
    console.log('get remote db');
    if (!pouchDB) {
        const remoteDB = new PouchDB(remoteUrlExport as string);
        const localDB = new PouchDB('mylocaldb');
        pouchDB = new PouchWrapper({
            pouchDB: localDB
        });
        await localDB.sync(remoteDB, {
            live: true,
            retry: true
        });
        return pouchDB;
    }
    return pouchDB;
}

export function setupPouch(remoteUrl: string) {
    console.log('set up');
    remoteUrlExport = remoteUrl;
}
