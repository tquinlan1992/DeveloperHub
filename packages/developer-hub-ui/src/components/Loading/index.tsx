import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "@headless/store";
import { Switch, Route, Redirect } from 'react-router';
import TicketList from '../TicketList';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { actions as loadingActions } from './redux';
import AppBar from '../AppBar';

interface StateProps {
    loading: boolean;
}

interface ComponentActions {
    loadApp: typeof loadingActions.loadApp;
}

export class AddTicketDialog extends React.Component<StateProps & ComponentActions> {
    componentDidMount() {
        this.props.loadApp();
    }

    render() {
        const loading =
            <div>
                <h1> Loading </h1>
                <CircularProgress size={50} />
            </div>;

        const app =
            <React.Fragment>
                <AppBar />
                <Switch>
                    <Route exact path={"/feed"} component={TicketList} />
                    <Redirect from='*' to='/feed' />
                </Switch>
            </React.Fragment>;
        const loadingOrApp = this.props.loading ? loading : app;
        return (
            <div>
                {loadingOrApp}
            </div>
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
