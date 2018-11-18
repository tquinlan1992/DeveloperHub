import { AnyAction } from 'tquinlan92-typescript-redux-utils';
export { AnyAction };
import { AnyAction as AnyActionFromRedux } from 'redux';
export { AnyActionFromRedux };
import { routerReducer, RouterState } from 'react-router-redux';
export { RouterState };
import thunkActions from './thunkActions';

export default {
    reducer: routerReducer,
    actions: {
        ...thunkActions
    }
};
