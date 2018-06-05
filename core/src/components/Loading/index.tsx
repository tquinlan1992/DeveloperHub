import * as React from 'react';
import { connect } from 'react-redux';
import AppState from "../../core/store/AppState";
import { Switch, Route, Redirect } from 'react-router';
import TicketList from '../TicketList';
import actions from '../../core/actions';
import * as request from 'superagent';
import { setupPouch } from '../../core/database/pouch';
import * as urljoin from 'url-join';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

interface StateProps {
    loading: boolean;
}

interface ComponentActions {
    setValue: typeof actions.loading.setValue;
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
        request
            .get('/static/api.json')
            .end((err, res) => {
                const apiUrl = res.body.value;
                setupPouch(urljoin(apiUrl, '/couchdb/test'));
                console.log('res', res.body.value);
                this.props.setValue({ value: false });
            });
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

const mapStateToProps = ({ core }: AppState) => {
    return {
        loading: core.loading
    };
};

const mapDispatchToProps = actions.loading;

export default connect<StateProps, ComponentActions>(mapStateToProps, mapDispatchToProps)(AddTicketDialog);
