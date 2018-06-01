import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/AppState";
import { setupPouch } from "../../../database/pouch";
import { AnyAction } from "redux";
import * as request from 'superagent';
import * as urljoin from 'url-join';
import actions from "../..";

export default function loadApp(): ThunkAction<void, AppState, void, AnyAction> {
    return async function (dispatch) {
        request
            .get('/static/api.json')
            .end((err, res) => {
                const apiUrl = res.body.value;
                setupPouch(urljoin(apiUrl, '/couchdb/test'));
                console.log('res tommy', res.body.value);
                dispatch(actions.loading.setValue({ value: false }));
            });
    };
}
