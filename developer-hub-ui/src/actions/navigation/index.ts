import { ThunkAction } from 'redux-thunk';

function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, any, void> {
    return dispatch => {
        history.push(`/feed/${urlToNavigateTo}`);
    };
}

export default {
    navigateToFeed
};
