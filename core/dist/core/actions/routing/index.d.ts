import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RouterState } from 'react-router-redux';
export { RouterState };
declare function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, any, void, AnyAction>;
declare const _default: {
    reducer: import("../../../../node_modules/redux/index").Reducer<RouterState, AnyAction>;
    actions: {
        navigateToFeed: typeof navigateToFeed;
    };
};
export default _default;
