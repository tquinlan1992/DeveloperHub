import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import Increment from './components/Increment';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers, JSON.parse(localStorage.state || '{}'), applyMiddleware(...middleware));

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <Increment />
                <h1>Testing</h1>
            </div>
        </Provider>
        ,document.getElementById('app')
    );
};

render();
