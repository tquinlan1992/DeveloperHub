import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState } from "../../store/AppState";
import { pick } from "../../utils";
import { Table, RaisedButton, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, TextField, Dialog } from "material-ui";

interface TicketListActions {
    setShowAddTicketDialog: typeof actions.setShowAddTicketDialog;
}interface TicketListProps {
    showAddTicketDialog: boolean;
}
export class TicketList extends React.Component<TicketListProps & TicketListActions> {

    openAddTaskDialog() {

    }

    openAddticketDialog() {
        this.props.setShowAddTicketDialog({value: true});
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
                    </TableBody>
                </Table>
                <Dialog
                    title="Dialog With Actions"
                    modal={false}
                    open={this.props.showAddTicketDialog}
                    onRequestClose={(this.closeAddticketDialog.bind(this))}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any) => {
    console.log('state', state);
    const { ticketList } = state;
    return {
        showAddTicketDialog: ticketList.showAddTicketDialog
    };
};

const mapActionsToProps = pick(actions,
    'setShowAddTicketDialog');

export default connect<TicketListProps, TicketListActions>(mapStateToProps, mapActionsToProps)(TicketList);
