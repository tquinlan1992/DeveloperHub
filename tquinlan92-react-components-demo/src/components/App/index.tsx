import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from '../Theme';

export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <h1>
                    Tom
                </h1>
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
