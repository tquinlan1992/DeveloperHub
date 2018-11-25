import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "@headless/store";
import { actions as stateActions } from './redux';
import { AppBar, Toolbar, Button } from '@material-ui/core';

interface StateProps {
}

interface ComponentActions {
    openAddTicketDialog: typeof stateActions.openAddTicketDialog;
}

export class AddTicketDialog extends React.Component<StateProps & ComponentActions> {
    addTicket() {
        this.props.openAddTicketDialog();
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={this.addTicket.bind(this)}> Add Ticket </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({ core }: AppStateCore) => {
    return {
        loading: core.loading.value
    };
};

const mapDispatchToProps = stateActions;

export default connect<StateProps, ComponentActions>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
