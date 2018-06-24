import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store";
import { setupPouch } from "../../../database/pouch";
import { AnyAction } from "tquinlan1992-typescript-redux-utils";
import * as request from 'superagent';
import * as urljoin from 'url-join';

export default function loadApp(): ThunkAction<void, AppState, void, AnyAction> {
    return async function (dispatch) {
        // return request
        //     .get('/static/api.json')
        //     .end((err, res) => {
        //         const apiUrl = res.body.value;
        //         console.log('got api.json');
        //         setupPouch(urljoin(apiUrl, '/couchdb/test'));
        //         console.log('res tommy', res.body.value);
        //         dispatch(actionReducer.actions.setValue({ value: false }));
        //     });
        try {
            const res = await request.get('/static/api.json');
            const apiUrl = res.body.value;
            setupPouch(urljoin(apiUrl, '/couchdb/test'), dispatch);
        } catch(e) {
            console.log('error getting /static/api.json', e);
        }
    };
}
