import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, any, void, AnyAction> {
    return dispatch => {
        history.push(`/feed/${urlToNavigateTo}`);
    };
}

export default {
    navigateToFeed
};
