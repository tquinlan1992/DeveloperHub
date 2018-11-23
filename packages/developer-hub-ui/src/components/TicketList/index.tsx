import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "@headless/store";
import { Table, Button, TableHead, TableRow, TableBody, TableCell, TextField } from "@material-ui/core";
import AddTicketDialog from '../AddTicketDialog';
import {actions as addTicketActions} from '@components/AddTicketDialog/redux';
import { actions as ticketListActions } from './redux';
import { pick } from 'lodash';
import { Ticket } from '@database/PouchWrapper';

type Tickets = Ticket[];

interface TicketListProps {
    showAddTicketDialog: boolean;
    tickets: Tickets;
}

interface TicketTableParams {
    tickets: Tickets;
    onDelete?: (id: string) => void;
    onAddTicketToSprint?: (id: string) => void;
}

const mapStateToProps = ({ core }: AppStateCore, ownProps: any) => {
    const { showAddTicketDialog, tickets } = core.ticketList;
    return {
        showAddTicketDialog,
        tickets
    };
};

const mapActionsToProps = {
    ...pick(ticketListActions, 'fetchTickets', 'closeTicket', 'addTicketToSprint'),
    setTicketListState: ticketListActions.set,
    resetAddTicketDialog: addTicketActions.reset
};

type TicketListActions = typeof mapActionsToProps;

function TicketTable({ tickets, onDelete, onAddTicketToSprint }: TicketTableParams) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Ticket</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tickets.map(ticket => {
                    return (<TableRow key={ticket._id}>
                        <TableCell>
                            <TextField
                                defaultValue={ticket.title}
                            />
                        </TableCell>
                        <TableCell>
                            {ticket.closed ? 'Closed' : ''}
                        </TableCell>
                        <TableCell>
                            {ticket.sprint ? 'Sprint' : ''}
                        </TableCell>
                        <TableCell>
                            { onAddTicketToSprint ? <Button title='Add To Sprint' onClick={() => onAddTicketToSprint(ticket._id)}> Add To Sprint </Button> : null}
                        </TableCell>
                        <TableCell>
                            { onDelete ? <Button title='Close Ticket' onClick={() => onDelete(ticket._id)}> Close Ticket </Button> : null}
                        </TableCell>
                    </TableRow>);
                })}
            </TableBody>
        </Table>
    );
}

export class TicketList extends React.Component<TicketListProps & TicketListActions> {

    componentDidMount() {
        this.props.fetchTickets();
    }

    openAddticketDialog() {
        this.props.setTicketListState({showAddTicketDialog: true});
        this.props.resetAddTicketDialog({});
    }

    closeAddticketDialog() {
        this.props.setTicketListState({ showAddTicketDialog: false });
    }

    onClickClose(id: string) {
        this.props.closeTicket(id);
    }

    render() {
        const openTickets = this.props.tickets.filter(ticket => {
            return !ticket.closed;
        });
        const closedTickets = this.props.tickets.filter(ticket => {
            return ticket.closed;
        });
        return (
            <div>
                <Button title='Add Ticket' onClick={this.openAddticketDialog.bind(this)}> Add Ticket </Button>
                <h1>Open</h1>
                <TicketTable tickets={openTickets} onDelete={this.onClickClose.bind(this)} onAddTicketToSprint={this.props.addTicketToSprint.bind(this)} />
                <h1>Closed</h1>
                <TicketTable tickets={closedTickets} />

                <AddTicketDialog
                    open={this.props.showAddTicketDialog}
                    onRequestClose={(this.closeAddticketDialog.bind(this))}
                />
            </div>
        );
    }
}

export default connect<TicketListProps, TicketListActions>(mapStateToProps, mapActionsToProps)(TicketList);
