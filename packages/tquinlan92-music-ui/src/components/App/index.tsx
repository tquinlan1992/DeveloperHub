import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from '../Theme';
import { App } from 'tquinlan92-music-components/dist/components/App';

export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <App />
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
