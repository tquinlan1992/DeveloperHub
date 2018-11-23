import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from '../Theme';
import StreamSong from 'tquinlan92-music-components/dist/components/StreamSong';
import SongCount from '../SongCount';

export default (store: any) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <SongCount />
                <StreamSong />
            </Theme>
        </Provider>
        , document.getElementById('app')
    );
};
