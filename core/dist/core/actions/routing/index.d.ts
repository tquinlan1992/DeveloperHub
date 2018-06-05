import { AnyAction } from 'tquinlan1992-typescript-react-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { RouterState } from 'react-router-redux';
export { RouterState };
declare const _default: {
    reducer: import("../../../../node_modules/redux/index").Reducer<RouterState, AnyActionFromRedux>;
    actions: {
        navigateToFeed: typeof import("./thunkActions/navigateToFeed").default;
    };
};
export default _default;
