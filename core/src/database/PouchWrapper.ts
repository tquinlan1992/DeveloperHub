import { Ticket } from "../store/AppState";
import { v4 as uuid } from "uuid";
import { Omit } from "../utils";

export interface TicketsDBConstructorParams {
    pouchDB: PouchDB.Database<{}>;
}

export interface GetTicketsParams {
    id: string;
    value: string;
}

class PouchWrapper {

    db: PouchDB.Database<{}>;

    constructor({ pouchDB }: TicketsDBConstructorParams) {
        this.db = pouchDB;
    }

    async updateDoc({ id, value }: GetTicketsParams) {
        const ticketDoc = await this.db.get(id);
        this.db.put({
            ...ticketDoc,
            value
        });
    }

    async getTickets() {
        try {
            const ticketsResult = await this.db.find({
                selector: { Type: 0, deleted: false }
            });
            return ticketsResult.docs;
        } catch(e) {
            throw new Error('error fetching tickets');
        }
    }

    async addTicket(params: Omit<Ticket, '_id' | 'deleted'>) {
        try {
            return await this.db.put({ _id: uuid(), Type: 0, ...params, deleted: false});
        } catch (e) {
            throw new Error('error adding ticket');
        }
    }

    async deleteTicket(id: string) {
        try {
            const ticketDoc = await this.db.get(id);
            this.db.put({
                ...ticketDoc,
                deleted: true
            });
        } catch (e) {
            throw new Error('error deleting ticket');
        }
    }

}

export default PouchWrapper;
