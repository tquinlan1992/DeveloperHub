import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { routerReducer } from 'react-router-redux';

function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, any, void, AnyAction> {
    return dispatch => {
        history.push(`/feed/${urlToNavigateTo}`);
    };
}

export default {
    reducer: routerReducer,
    actions: {
        navigateToFeed
    }
};
