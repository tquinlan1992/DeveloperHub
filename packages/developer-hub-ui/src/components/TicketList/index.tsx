import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore, Ticket, actions } from "../../headless";
import { Table, Button, TableHead, TableRow, TableBody, TableCell, TextField, IconButton } from "@material-ui/core";
import AddTicketDialog from '../AddTicketDialog';
import DeleteIcon from '@material-ui/icons/Delete';

interface TicketListActions {
    setShowAddTicketDialog: typeof actions.ticketList.setShowAddTicketDialog;
    fetchTickets: typeof actions.ticketList.fetchTickets;
    closeTicket: typeof actions.ticketList.closeTicket;
}
interface TicketListProps {
    showAddTicketDialog: boolean;
    tickets: Ticket[];
}
export class TicketList extends React.Component<TicketListProps & TicketListActions> {

    componentDidMount() {
        console.log('got here');
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
        return (
            <div>
                <Button onClick={this.openAddticketDialog.bind(this)}> Add Ticket </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticket</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.tickets.map(ticket => {
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
                                    <IconButton onClick={() => this.onClickClose(ticket._id)} color="primary">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>);
                        })}
                    </TableBody>
                </Table>
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
