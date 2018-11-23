import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "@headless/store";
import { actions as stateActions } from './redux';

interface StateProps {
}

interface ComponentActions {
    action: typeof stateActions.action;
}

export class AddTicketDialog extends React.Component<StateProps & ComponentActions> {
    componentDidMount() {
        this.props.action();
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ core }: AppStateCore) => {
    return {
        loading: core.loading.value
    };
};

const mapDispatchToProps = loadingActions;

export default connect<StateProps, ComponentActions>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
