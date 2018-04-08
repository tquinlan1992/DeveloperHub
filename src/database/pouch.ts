import * as PouchDBRaw from 'pouchdb-browser';

const PouchDB: typeof PouchDBRaw = (PouchDBRaw as any).default;

const localDB = new PouchDB('mylocaldb');

export function setupPouch(remoteUrl: string) {
    console.log('remoteurl', remoteUrl);
    const remoteDB = new PouchDB(remoteUrl);

    localDB.sync(remoteDB, {
        live: true,
        retry: true
    }).on('change', function () {
        console.log('complete');
        localDB.allDocs({
            include_docs: true,
            attachments: true
        }).then(function (result: any) {
            console.log('result', result);
            // handle result
        }).catch(function (err: any) {
            console.log('err all docs', err);
        });
        // yay, we're done!
    }).on('error', function (err: any) {
        console.log('err', err);
        // boo, something went wrong!
    });
}

export default localDB;
