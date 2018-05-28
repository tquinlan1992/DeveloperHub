import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState, Ticket } from "../../store/AppState";
import { pick } from "../../utils";
import { Table, Button, TableHead, TableRow, TableBody, TableCell, TextField } from "@material-ui/core";
import AddTicketDialog from '../AddTicketDialog';

interface TicketListActions {
    setShowAddTicketDialog: typeof actions.setShowAddTicketDialog;
    fetchProducts: typeof actions.fetchProducts;
    addTicket: typeof actions.addTicket;
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    defaultValue="OVC-523"
                                />
                            </TableCell>
                            <TableCell><TextField
                                defaultValue="5"
                            />
                            </TableCell>
                            <TableCell><TextField
                                defaultValue="3"
                            />
                            </TableCell>
                            <TableCell><TextField
                                defaultValue="0"
                            />
                            </TableCell>
                        </TableRow>
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

const mapActionsToProps = pick(actions,
    'setShowAddTicketDialog',
    'fetchProducts',
    'addTicket');

export default connect<TicketListProps, TicketListActions>(mapStateToProps, mapActionsToProps)(TicketList);
