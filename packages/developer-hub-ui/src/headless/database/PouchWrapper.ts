import { v4 as uuid } from "uuid";
import { Omit } from "../utils";

export interface Ticket {
    title: string;
    storyPoint: null | number;
    description: string;
    deleted: boolean;
    closed?: boolean;
    sprint?: boolean;
    _id: string;
}

export type Tickets = Ticket[];

export interface TicketsDBConstructorParams {
    pouchDB: PouchDB.Database<Ticket>;
}

export interface GetTicketsParams {
    id: string;
    value: string;
}

class PouchWrapper {

    db: PouchDB.Database<Ticket>;

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

    async getTickets(): Promise<Ticket[]> {
        try {
            const ticketsResult = await this.db.find({
                selector: { Type: 0 }
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
            return this.db.put({
                ...ticketDoc,
                _deleted: true
            });
        } catch (e) {
            throw new Error('error deleting ticket');
        }
    }

    async markTicketInSprint(id: string) {
        try {
            const ticketDoc = await this.db.get(id);
            return this.db.put({
                ...ticketDoc,
                sprint: !ticketDoc.sprint
            });
        } catch (e) {
            throw new Error('error including ticket');
        }
    }

    async closeTicket(id: string) {
        try {
            const ticketDoc = await this.db.get(id);
            return this.db.put({
                ...ticketDoc,
                closed: true
            });
        } catch (e) {
            throw new Error('error deleting ticket');
        }
    }

}

export default PouchWrapper;
