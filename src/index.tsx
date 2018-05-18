import store from './store';
import AppStore from './components/App';
import * as request from 'superagent';
import { setupPouch } from './database/pouch';
import * as urljoin from 'url-join';

request
    .get('/static/api.json')
    .end((err, res) => {
        const apiUrl = res.body.value;
        setupPouch(urljoin(apiUrl, '/couchdb/test'));
        AppStore(store);
        console.log('res', res.body.value);
    });
