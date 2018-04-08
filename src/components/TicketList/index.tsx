import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState } from "../../store/AppState";
import { pick } from "../../utils";
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, TextField, Dialog } from "material-ui";

class VoiceToCode extends React.Component<{}> {

    openAddTaskDialog() {

    }
    state = {
        open: false
    };

    render() {
        return (
            <div>
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
                    open={this.state.open}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any) => {
    console.log('state', state);
    return {
        voiceToCode: state.voiceToCode
    };
};

const mapActionsToProps = pick(actions,
    'createAnInterface');

export default connect<{}>(mapStateToProps, mapActionsToProps)(VoiceToCode);
