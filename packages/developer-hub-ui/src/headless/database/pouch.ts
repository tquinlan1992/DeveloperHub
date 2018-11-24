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

export function setupPouch({ remoteUrl, onChanges }: { remoteUrl: string; onChanges: () => void;}) {
    return new Promise((resolve, reject) => {
        if (!pouchDB) {
            const remoteDB = new PouchDB(remoteUrl);
            const localDB = new PouchDB<Ticket>('mylocaldb');
            const syncHandler = remoteDB.replicate.to(localDB);
            syncHandler.on('complete', function () {
                pouchDB = new PouchWrapper({
                    pouchDB: localDB
                });
                resolve();
                localDB.sync(remoteDB, {live: true, retry: true})
                .on('change', () => {
                    onChanges();
                    console.log('Replication complete');
                });
            });
            syncHandler.on('error', () => {
                reject('error syncing');
            });
        }
    });
}
