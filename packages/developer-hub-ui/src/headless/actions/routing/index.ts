import { routerReducer } from 'react-router-redux';
import thunkActions from './thunkActions';

export default {
    reducer: routerReducer,
    actions: {
        ...thunkActions
    }
};
