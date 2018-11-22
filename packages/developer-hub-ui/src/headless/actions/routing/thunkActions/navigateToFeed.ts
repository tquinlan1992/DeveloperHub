import { ThunkAction } from 'redux-thunk';
import { AppStateCore } from "@headless/store";
import { AnyAction } from 'tquinlan92-typescript-redux-utils';

export default function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, AppStateCore, void, AnyAction> {
    return dispatch => {
        history.push(`/feed/${urlToNavigateTo}`);
    };
}
