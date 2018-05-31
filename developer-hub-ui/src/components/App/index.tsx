import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from '../Theme';
import { Switch, Redirect } from 'react-router';
// import TopAppBar from '../TopAppbar';
import TicketList from '../TicketList';

function Home(params: { match: any }) {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

declare module 'redux' {
  export type GenericStoreEnhancer = any;
}

export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <Router>
                    <div>
                        {/* <TopAppBar /> */}
                        <div style={{ float: 'left'}}>
                        </div>
                        <div style={{ float: 'left' }}>
                            <Switch>
                                <Route exact path="/home" component={Home} />
                                <Route exact path={"/feed"} component={TicketList} />
                                <Redirect from='*' to='/home' />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
