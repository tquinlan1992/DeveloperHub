import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Increment from '../Increment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from '../Theme';
import { Switch, Redirect } from 'react-router';

function App() {
    return (<div>
        <Increment />
        <h1>Testing</h1>
    </div>);
}

function Home(params: { match: any }) {
    return (
        <h1>Home</h1>
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
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path="/home" component={Home} />
                            <Route path="/feed" component={Feed} />
                            <Redirect to='/home' />
                        </Switch>
                        <Switch>
                            <Route path={"/feed/:id"} component={Increment} />
                            <Route component={Feed} />
                        </Switch>
                    </div>
            </Router>
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
