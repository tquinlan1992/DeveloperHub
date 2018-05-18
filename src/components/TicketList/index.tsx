import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState, Ticket } from "../../store/AppState";
import { pick } from "../../utils";
import { Table, RaisedButton, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, TextField } from "material-ui";
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
        this.props.addTicket();
    }

    closeAddticketDialog() {
        this.props.setShowAddTicketDialog({ value: false });
    }

    render() {
        return (
            <div>
                <RaisedButton label="Add Ticket" onClick={this.openAddticketDialog.bind(this)} />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Ticket</TableHeaderColumn>
                            <TableHeaderColumn>3/22</TableHeaderColumn>
                            <TableHeaderColumn>3/23</TableHeaderColumn>
                            <TableHeaderColumn>3/26</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>
                                <TextField
                                    defaultValue="OVC-523"
                                />
                            </TableRowColumn>
                            <TableRowColumn><TextField
                                defaultValue="5"
                            />
                            </TableRowColumn>
                            <TableRowColumn><TextField
                                defaultValue="3"
                            />
                            </TableRowColumn>
                            <TableRowColumn><TextField
                                defaultValue="0"
                            />
                            </TableRowColumn>
                        </TableRow>
                        {this.props.tickets.map(ticket => {
                            return (<TableRow key={ticket._id}>
                                <TableRowColumn>
                                    <TextField
                                        defaultValue={ticket.title}
                                    />
                                </TableRowColumn>
                                <TableRowColumn><TextField
                                    defaultValue="5"
                                />
                                </TableRowColumn>
                                <TableRowColumn><TextField
                                    defaultValue="3"
                                />
                                </TableRowColumn>
                                <TableRowColumn><TextField
                                    defaultValue="0"
                                />
                                </TableRowColumn>
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
