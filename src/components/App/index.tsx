import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Increment from '../Increment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from '../Theme';
import { Switch, Redirect } from 'react-router';
import DocEditor from '../DocEditor';
import TopAppBar from '../TopAppBar';
import NestedList from '../NestedList';

function Home(params: { match: any }) {
    return (
        <div>
            <Increment />
            <h1>Home</h1>
        </div>
    );
}

function Feed() {
    return (<h1>Feed</h1>);
}

export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <Router>
                    <div>
                        <TopAppBar />
                        <div style={{ float: 'left', style: '20%' }}>
                            <NestedList />
                        </div>
                        <div style={{ float: 'left' }}>
                            <Switch>
                                <Route exact path="/home" component={Home} />
                                <Route exact path={"/feed"} component={Feed} />
                                <Route exact path={"/feed/:id"} component={DocEditor} />
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
