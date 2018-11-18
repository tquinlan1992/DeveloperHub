import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore, Ticket, actions } from "../../headless";
import { Table, Button, TableHead, TableRow, TableBody, TableCell, TextField, IconButton } from "@material-ui/core";
import AddTicketDialog from '../AddTicketDialog';
import DeleteIcon from '@material-ui/icons/Delete';

type Tickets = Ticket[];

interface TicketListActions {
    setShowAddTicketDialog: typeof actions.ticketList.setShowAddTicketDialog;
    fetchTickets: typeof actions.ticketList.fetchTickets;
    closeTicket: typeof actions.ticketList.closeTicket;
}
interface TicketListProps {
    showAddTicketDialog: boolean;
    tickets: Tickets;
}

interface DeleteIconWithMethodParams {
    onDelete: () => void;
}

function DeleteIconWithMethod( { onDelete }: DeleteIconWithMethodParams) {
    return (
    <IconButton onClick={onDelete} color="primary">
        <DeleteIcon />
    </IconButton>
    );
}

interface TicketTableParams {
    tickets: Tickets;
    onDelete?: (id: string) => void;
}

function TicketTable({ tickets, onDelete }: TicketTableParams) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Ticket</TableCell>
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
                            { onDelete ? <DeleteIconWithMethod onDelete={() => onDelete(ticket._id)} /> : null}
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
        this.props.setShowAddTicketDialog({ value: true });
        //this.props.addTicket();
    }

    closeAddticketDialog() {
        this.props.setShowAddTicketDialog({ value: false });
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
                <TicketTable tickets={openTickets} onDelete={this.onClickClose.bind(this)} />
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

const mapStateToProps = ({ core }: AppStateCore, ownProps: any) => {
    const { showAddTicketDialog, tickets } = core.ticketList;
    return {
        showAddTicketDialog,
        tickets
    };
};

const mapActionsToProps = {
    ...actions.ticketList,
};

export default connect<TicketListProps, TicketListActions>(mapStateToProps, mapActionsToProps)(TicketList);
