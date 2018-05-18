import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from '../Theme';
import { Switch, Redirect } from 'react-router';
import DocEditor from '../DocEditor';
import TopAppBar from '../TopAppbar';
import VoiceToCode from '../VoiceToCode';

function Home(params: { match: any }) {
    return (
        <div>
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
                        <div style={{ float: 'left'}}>
                        </div>
                        <div style={{ float: 'left' }}>
                            <VoiceToCode />
                            <Switch>
                                <Route exact path="/home" component={Home} />
                                <Route exact path={"/feed"} component={Feed} />
                                <Route exact path={"/feed/:id"} component={DocEditor} />
                                <Route exact path={"/edit/:id"} component={DocEditor} />
                                <Route exact path={"/create"} component={DocEditor} />
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
