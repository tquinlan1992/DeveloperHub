import * as PouchDBRaw from 'pouchdb-browser';
import PouchWrapper, { Ticket } from './PouchWrapper';
const PouchDB: typeof PouchDBRaw = (PouchDBRaw as any).default;
const pouchdbFindRaw = require('pouchdb-find');
const pouchdbFind = pouchdbFindRaw.default as typeof pouchdbFindRaw;
PouchDB.plugin(pouchdbFind);

let pouchDB: null | PouchWrapper;

export async function getRemoteDB() {
    return pouchDB as PouchWrapper;
}

export function setupPouch(remoteUrl: string) {
    return new Promise((resolve, reject) => {
        if (!pouchDB) {
            const remoteDB = new PouchDB(remoteUrl);
            const localDB = new PouchDB<Ticket>('mylocaldb');
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
                resolve();
            }).on('error', () => {
                reject('error syncing');
            });
        }
    });
}
