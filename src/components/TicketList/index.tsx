import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState, Ticket } from "../../store/AppState";
import { Table, Button, TableHead, TableRow, TableBody, TableCell, TextField, IconButton } from "@material-ui/core";
import AddTicketDialog from '../AddTicketDialog';
import DeleteIcon from '@material-ui/icons/Delete';

interface TicketListActions {
    setShowAddTicketDialog: typeof actions.ticketList.setShowAddTicketDialog;
    fetchProducts: typeof actions.ticketList.fetchProducts;
    deleteTicket: typeof actions.addTicket.deleteTicket;
}interface TicketListProps {
    showAddTicketDialog: boolean;
    tickets: Ticket[];
}
export class TicketList extends React.Component<TicketListProps & TicketListActions> {

    componentDidMount() {
        console.log('got here');
        this.props.fetchProducts();
    }

    openAddticketDialog() {
        this.props.setShowAddTicketDialog({ value: true });
        //this.props.addTicket();
    }

    closeAddticketDialog() {
        this.props.setShowAddTicketDialog({ value: false });
    }

    onClickDelete(id: string) {
        this.props.deleteTicket(id);
    }

    render() {
        return (
            <div>
                <Button onClick={this.openAddticketDialog.bind(this)}> Add Ticket </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticket</TableCell>
                            <TableCell>3/22</TableCell>
                            <TableCell>3/23</TableCell>
                            <TableCell>3/26</TableCell>
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
                                <TableCell><TextField
                                    defaultValue={ticket.storyPoint || ''}
                                />
                                </TableCell>
                                <TableCell><TextField
                                    defaultValue={ticket.storyPoint || ''}
                                />
                                </TableCell>
                                <TableCell><TextField
                                    defaultValue={ticket.storyPoint || ''}
                                />
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => this.onClickDelete(ticket._id)} color="primary">
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

const mapStateToProps = (state: AppState, ownProps: any) => {
    console.log('state', state);
    const { showAddTicketDialog, tickets } = state.ticketList;
    return {
        showAddTicketDialog,
        tickets
    };
};

const mapActionsToProps = { ...actions.ticketList, deleteTicket: actions.addTicket.deleteTicket };

export default connect<TicketListProps, TicketListActions>(mapStateToProps, mapActionsToProps)(TicketList);
