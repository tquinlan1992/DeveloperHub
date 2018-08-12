import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from '../Theme';
import ButtonLabel from '../ButtonLabel';



export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <div>
                <ButtonLabel />
                </div>
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
