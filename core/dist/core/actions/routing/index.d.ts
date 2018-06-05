import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
declare function navigateToFeed(history: any, urlToNavigateTo: string): ThunkAction<void, any, void, AnyAction>;
declare const _default: {
    reducer: import("../../../../node_modules/redux/index").Reducer<import("../../../../node_modules/@types/react-router-redux/index").RouterState, AnyAction>;
    actions: {
        navigateToFeed: typeof navigateToFeed;
    };
};
export default _default;
