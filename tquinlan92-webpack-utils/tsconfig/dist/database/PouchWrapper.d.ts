/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
import { Ticket } from "../store/AppState";
import { Omit } from "../utils";
export interface TicketsDBConstructorParams {
    pouchDB: PouchDB.Database<{}>;
}
export interface GetTicketsParams {
    id: string;
    value: string;
}
declare class PouchWrapper {
    db: PouchDB.Database<{}>;
    constructor({ pouchDB }: TicketsDBConstructorParams);
    updateDoc({ id, value }: GetTicketsParams): Promise<void>;
    getTickets(): Promise<PouchDB.Core.ExistingDocument<{}>[]>;
    addTicket(params: Omit<Ticket, '_id' | 'deleted'>): Promise<PouchDB.Core.Response>;
    deleteTicket(id: string): Promise<PouchDB.Core.Response>;
}
export default PouchWrapper;
