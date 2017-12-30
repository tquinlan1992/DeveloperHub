import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IncrementRedux from './components/Increment';

import { createStore } from 'redux';

const reducers = (state = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('clicked to increment');
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducers);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <IncrementRedux />
                <h1>Testing</h1>
            </div>
        </Provider>
        ,document.getElementById('app')
    );
};

render();
