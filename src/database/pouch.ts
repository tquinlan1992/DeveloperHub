import * as PouchDBRaw from 'pouchdb-browser';

const PouchDB: typeof PouchDBRaw  = (PouchDBRaw as any).default;

const localDB = new PouchDB('mylocaldb');

const remoteDB = new PouchDB('http://127.0.0.1:5984/test');

localDB.replicate.to(remoteDB, {
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

export default localDB;
