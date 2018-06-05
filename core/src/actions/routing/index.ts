import { AnyAction } from 'tquinlan1992-typescript-react-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { routerReducer, RouterState } from 'react-router-redux';
export { RouterState };
import thunkActions from './thunkActions';
import * as exportTypes from '../exportTypes';
exportTypes;

export default {
    reducer: routerReducer,
    actions: {
        ...thunkActions
    }
};
