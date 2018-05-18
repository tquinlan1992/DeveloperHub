import { Ticket } from "../store/AppState";
import { v4 as uuid } from "uuid";
import { Omit } from "../utils";

interface TicketsDBConstructorParams {
    pouchDB: PouchDB.Database<{}>;
}

interface GetTicketsParams {
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
                selector: { Type: 0 }
            });
            return ticketsResult.docs;
        } catch(e) {
            throw new Error('error fetching tickets');
        }
    }

    async addTicket(params: Omit<Ticket, '_id'>) {
        try {
            return await this.db.put({ _id: uuid(), Type: 0, ...params});
        } catch (e) {
            throw new Error('error adding ticket');
        }
    }

}

export default PouchWrapper;
