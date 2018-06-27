import { AnyAction } from 'tquinlan92-typescript-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { routerReducer, RouterState } from 'react-router-redux';
export { RouterState };
import thunkActions from './thunkActions';
import * as exportTypes from '../exportTypes';

import * as exportTypes2 from './exportTypes';
export { exportTypes, exportTypes2 };

export default {
    reducer: routerReducer,
    actions: {
        ...thunkActions
    }
};
