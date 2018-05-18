import * as PouchDBRaw from 'pouchdb-browser';
import PouchWrapper from './PouchWrapper';
const PouchDB: typeof PouchDBRaw = (PouchDBRaw as any).default;
const pouchdbFindRaw = require('pouchdb-find');
const pouchdbFind = pouchdbFindRaw.default as typeof pouchdbFindRaw;
PouchDB.plugin(pouchdbFind);

// const localDB = new PouchDB('mylocaldb');

let remoteUrlExport: null | string = null;

let pouchDB: null | PouchWrapper;

export async function getRemoteDB() {
    if (!pouchDB) {
        const remoteDB = new PouchDB(remoteUrlExport as string);
        const localDB = new PouchDB('mylocaldb');
        pouchDB = new PouchWrapper({
            pouchDB: localDB
        });
        await localDB.sync(remoteDB).on('complete', function () {
            return pouchDB;
        }).on('error', function (err) {
            // boo, we hit an error!
        });
    }
    return pouchDB;
}

export function setupPouch(remoteUrl: string) {
    console.log('remoteurl', remoteUrl);
    remoteUrlExport = remoteUrl;
    // const remoteDB = new PouchDB(remoteUrl);

    // localDB.sync(remoteDB, {
    //     live: true,
    //     retry: true
    // }).on('change', function () {
    //     console.log('complete');
    //     localDB.allDocs({
    //         include_docs: true,
    //         attachments: true
    //     }).then(function (result: any) {
    //         console.log('result', result);
    //         // handle result
    //     }).catch(function (err: any) {
    //         console.log('err all docs', err);
    //     });
    //     // yay, we're done!
    // }).on('error', function (err: any) {
    //     console.log('err', err);
    //     // boo, something went wrong!
    // });
}
