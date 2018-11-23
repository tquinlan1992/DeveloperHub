import { ThunkAction } from "redux-thunk";
import { AppState } from "@headless/store";
import { setupPouch } from "@database/pouch";
import { AnyAction } from "tquinlan92-typescript-redux-utils";
import * as request from 'superagent';
import * as urljoin from 'url-join';
import { actions as loadingActions } from '@components/Loading/redux'; 

interface APIConfig {
    cloudant: string;
}

export default function loadApp(): ThunkAction<void, AppState, void, AnyAction> {
    return async function (dispatch) {
        try {
            const res = await request.get('/static/api.json');
            const apiConfig = res.body as APIConfig;
            await setupPouch(urljoin(apiConfig.cloudant, '/dev'));
            dispatch(loadingActions.set({value: false}));
        } catch(e) {
            console.log('error loading app', e);
        }
    };
}
