import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Increment from './components/Increment';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

const store = createStore(reducers, JSON.parse(localStorage.state || '{}'), applyMiddleware(...middleware));

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

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/home" component={Home} />
                        <Route path="/feed" component={Feed} />
                        <Redirect from='/' to='/home' />
                    </Switch>
                    <Switch>
                        <Route path={"/feed/:id"} component={Increment} />
                    </Switch>
                </div>
            </Router>
        </Provider>
        , document.getElementById('app')
    );
};

render();
