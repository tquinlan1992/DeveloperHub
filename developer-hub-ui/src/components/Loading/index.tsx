import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateCore } from "developer-hub-core";
import { Switch, Route, Redirect } from 'react-router';
import TicketList from '../TicketList';
import actions from '../../core/actions';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

interface StateProps {
    loading: boolean;
}

interface ComponentActions {
    loadApp: typeof actions.loading.loadApp;
}

function Home(params: { match: any }) {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
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
            <div>
                <div style={{ float: 'left' }}>
                </div>
                <div style={{ float: 'left' }}>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path={"/feed"} component={TicketList} />
                        <Redirect from='*' to='/home' />
                    </Switch>
                </div>
            </div>;
        const loadingOrApp = this.props.loading ? loading : app;
        return (
            <div>
                { loadingOrApp }
            </div>
        );
    }
}

const mapStateToProps = ({ core }: AppStateCore) => {
    return {
        loading: core.loading
    };
};

const mapDispatchToProps = actions.loading;

export default connect<StateProps, ComponentActions>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
