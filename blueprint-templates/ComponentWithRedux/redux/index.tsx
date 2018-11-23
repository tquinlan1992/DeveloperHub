import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "@headless/store";
import { actions as stateActions } from './redux';

interface StateProps {
}

interface ComponentActions {
    sample: typeof stateActions.sample;
}

export class AddTicketDialog extends React.Component<StateProps & ComponentActions> {
    componentDidMount() {
        this.props.sample();
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
    };
};

const mapDispatchToProps = stateActions;

export default connect<StateProps, ComponentActions>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
