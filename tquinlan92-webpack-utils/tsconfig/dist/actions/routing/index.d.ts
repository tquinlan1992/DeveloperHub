import { AnyAction } from 'tquinlan92-typescript-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { RouterState } from 'react-router-redux';
export { RouterState };
import * as exportTypes from '../exportTypes';
import * as exportTypes2 from './exportTypes';
export { exportTypes, exportTypes2 };
declare const _default: {
    reducer: import("redux").Reducer<RouterState, AnyActionFromRedux>;
    actions: {
        navigateToFeed: typeof import("./thunkActions/navigateToFeed").default;
    };
};
export default _default;
